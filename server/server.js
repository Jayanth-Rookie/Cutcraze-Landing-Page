import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import nodemailer from 'nodemailer';
import path from 'path';
import { fileURLToPath } from 'url';

import authRoutes from './routes/auth.js';
import { protect } from './middleware/auth.js';
import { Contact } from './models/Contact.js';

dotenv.config(); // Load environment variables

const app = express();
const PORT = process.env.PORT || 5000;

// Configure the email transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER, // Your email address
    pass: process.env.EMAIL_PASS, // App password
  },
});

// Debugging: Ensure MongoDB URI is loaded
if (!process.env.MONGODB_URI) {
  console.error('❌ MONGODB_URI is missing in .env file!');
  process.exit(1);
}

// Middleware
app.use(express.json());
app.use(cookieParser());

// ✅ Allow multiple frontend origins dynamically
const allowedOrigins = [
  'http://localhost:5173',
  'http://localhost:5000',
  'http://localhost:8080',
  'https://your-production-url.com' // Add your deployed frontend URL here
];

app.use(
  cors({
    origin: (origin, callback) => {
      console.log('Request from origin:', origin); // Debugging line
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        console.error(`❌ CORS blocked request from: ${origin}`);
        callback(new Error('Not allowed by CORS'));
      }
    },
    credentials: true, // Allow cookies and authorization headers
  })
);


// ✅ Connect to MongoDB with debugging
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log('✅ MongoDB Connected'))
  .catch((err) => {
    console.error('❌ MongoDB Connection Error:', err);
    process.exit(1);
  });

// Auth Routes
app.use('/api/auth', authRoutes);

// ✅ Contact Form Submission
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ success: false, message: 'All fields are required' });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ success: false, message: 'Invalid email format' });
    }

    // Save to MongoDB
    const newContact = new Contact({ name, email, message });
    await newContact.save();

    // Check if ADMIN_EMAIL is set
    if (!process.env.ADMIN_EMAIL) {
      console.error('❌ ADMIN_EMAIL is not set in .env file!');
      return res.status(500).json({ success: false, message: 'Email configuration error' });
    }

    // Send Email Notification
    await transporter
      .sendMail({
        from: process.env.EMAIL_USER,
        to: process.env.ADMIN_EMAIL,
        subject: 'New Contact Form Submission',
        html: `<h2>New Contact Message</h2>
               <p><strong>Name:</strong> ${name}</p>
               <p><strong>Email:</strong> ${email}</p>
               <p><strong>Message:</strong> ${message}</p>`,
      })
      .catch((err) => console.error('❌ Email Sending Error:', err));

    res.status(200).json({ success: true, message: 'Message sent successfully' });
  } catch (error) {
    console.error('❌ Error in Contact Form Submission:', error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
});

// ✅ Get All Contacts (Protected)
app.get('/api/contacts', protect, async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    console.log('📄 Retrieved Contacts:', contacts);
    res.json({ success: true, contacts });
  } catch (error) {
    console.error('❌ Error Fetching Contacts:', error);
    res.status(500).json({ success: false, message: 'Error fetching contacts' });
  }
});

// ✅ Serve static files from React
const __dirname = path.dirname(fileURLToPath(import.meta.url));
app.use(express.static(path.join(__dirname, 'dist')));

// Catch-All Route for React Frontend
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// ✅ Start Server
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
