import React, { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('Sending...');

    // Simulate form submission (you can integrate with an API)
    setTimeout(() => {
      setIsSubmitting(false);
      setStatus('Message Sent!');
      setFormData({ name: '', email: '', message: '' });
    }, 2000);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg mb-8">
  <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Contact Us</h2>
  <form onSubmit={handleSubmit}>
    <div className="mb-4">
      <label className="block text-gray-700 text-lg mb-2" htmlFor="name">
        Your Name
      </label>
      <input
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Enter your name"
        required
      />
    </div>

    <div className="mb-4">
      <label className="block text-gray-700 text-lg mb-2" htmlFor="email">
        Your Email
      </label>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Enter your email"
        required
      />
    </div>

    <div className="mb-4">
      <label className="block text-gray-700 text-lg mb-2" htmlFor="message">
        Your Message
      </label>
      <textarea
        id="message"
        name="message"
        value={formData.message}
        onChange={handleChange}
        rows="4"
        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Write your message"
        required
      ></textarea>
    </div>

    <div className="text-center">
      <button
        type="submit"
        disabled={isSubmitting}
        className={`${
          isSubmitting ? 'bg-gray-400' : 'bg-[#40513B]'
        } text-white py-2 px-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
      >
        {isSubmitting ? 'Sending...' : 'Submit'}
      </button>
    </div>
  </form>

  {status && (
    <div className="mt-4 text-center text-gray-800">
      <p>{status}</p>
    </div>
  )}
</div>

  );
}

// import React from 'react'

// export default function Contact() {
//   return (
//     <div>Contact</div>
//   )
// }
