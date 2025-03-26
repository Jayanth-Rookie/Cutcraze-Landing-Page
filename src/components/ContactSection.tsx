

// export default ContactSection;
import { useState } from 'react';
import { Mail, Phone, Send, Check } from 'lucide-react';
import axios from 'axios';

const ContactSection = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      await axios.post('http://localhost:5000/api/contact', formState);
      setIsSubmitted(true);
      setFormState({ name: '', email: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to submit form. Please try again.');
      console.error('Form submission error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Let's Work Together</h2>
          <div className="h-1 w-20 bg-cutcraze-teal mx-auto mb-6"></div>
          <p className="text-gray-300 text-lg">Have a project in mind? We'd love to hear about it.</p>
        </div>
        <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-5">
            <div className="md:col-span-2 bg-black/20 p-8">
              <h3 className="text-2xl font-bold mb-6">Contact Info</h3>
              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded-full">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-300 mb-1">Email Us</p>
                    <a href="mailto:hello@cutcraze.com" className="text-white hover:text-gray-200">mediacutcraze@gmail.com</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  {/* <div className="bg-white/10 p-3 rounded-full">
                    <Phone className="w-5 h-5" />
                  </div> */}
                  {/* <div>
                    <p className="text-sm text-gray-300 mb-1">Call Us</p>
                    <span className="text-white">+91 7022969900</span>
                  </div> */}
                </div>
              </div>
            </div>
            <div className="md:col-span-3 p-8">
              {isSubmitted ? (
                <div className="h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500/20 mb-6">
                      <Check className="w-8 h-8 text-green-500" />
                    </div>
                    <h4 className="text-2xl font-bold mb-3">Message Sent!</h4>
                    <p className="text-gray-300">Thank you for reaching out. We'll get back to you shortly.</p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block mb-2 text-sm font-medium text-gray-300">Your Name</label>
                      <input type="text" name="name" value={formState.name} onChange={handleChange} className="bg-white/5 border border-white/10 text-white rounded-lg w-full p-3" placeholder="John Doe" required />
                    </div>
                    <div>
                      <label className="block mb-2 text-sm font-medium text-gray-300">Your Email</label>
                      <input type="email" name="email" value={formState.email} onChange={handleChange} className="bg-white/5 border border-white/10 text-white rounded-lg w-full p-3" placeholder="john@example.com" required />
                    </div>
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-300">Your Message</label>
                    <textarea name="message" value={formState.message} onChange={handleChange} rows={5} className="bg-white/5 border border-white/10 text-white rounded-lg w-full p-3" placeholder="Tell us about your project..." required></textarea>
                  </div>
                  {error && <div className="text-red-500 text-sm bg-red-500/10 p-3 rounded-md">{error}</div>}
                  <button type="submit" disabled={isSubmitting} className="bg-cutcraze-teal text-white py-3 px-6 rounded-lg w-full flex items-center justify-center">
                    {isSubmitting ? 'Sending...' : <><Send className="w-5 h-5 mr-2" /> Send Message</>}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
