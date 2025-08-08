import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import nodemailer from 'nodemailer';

import authRoutes from './routes/auth.js';
import { protect } from './middleware/auth.js';
import { Contact } from './models/Contact.js';

dotenv.config(); // Load environment variables

const app = express();

// Configure the email transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

if (!process.env.MONGODB_URI) {
  console.error('❌ MONGODB_URI is missing in .env file!');
  process.exit(1);
}

// Middleware
app.use(express.json());
app.use(cookieParser());

// ✅ CORRECT: Configure CORS to allow your frontend URL
// This allows your frontend at 'https://cutcraze-landing-page.vercel.app' to make requests
app.use(
  cors({
    origin: 'https://cutcraze-landing-page.vercel.app', // Your exact frontend URL
    credentials: true,
  })
);

// ✅ Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log('✅ MongoDB Connected'))
  .catch((err) => {
    console.error('❌ MongoDB Connection Error:', err);
    process.exit(1);
  });

// API Routes
app.use('/api/auth', authRoutes);

app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ success: false, message: 'All fields are required' });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ success: false, message: 'Invalid email format' });
    }

    const newContact = new Contact({ name, email, message });
    await newContact.save();

    if (!process.env.ADMIN_EMAIL) {
      console.error('❌ ADMIN_EMAIL is not set in .env file!');
      return res.status(500).json({ success: false, message: 'Email configuration error' });
    }

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.ADMIN_EMAIL,
      subject: 'New Contact Form Submission',
      html: `<h2>New Contact Message</h2><p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong> ${message}</p>`,
    }).catch((err) => console.error('❌ Email Sending Error:', err));

    res.status(200).json({ success: true, message: 'Message sent successfully' });
  } catch (error) {
    console.error('❌ Error in Contact Form Submission:', error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
});

app.get('/api/contacts', protect, async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json({ success: true, contacts });
  } catch (error) {
    console.error('❌ Error Fetching Contacts:', error);
    res.status(500).json({ success: false, message: 'Error fetching contacts' });
  }
});

// ❌ REMOVED: Static file serving and app.listen()
// Vercel handles serving the frontend and running the server automatically.
// These lines are not needed and cause conflicts in a serverless environment.

// ✅ CORRECT: Export the app for Vercel
export default app;