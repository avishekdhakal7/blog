import React, { useState, useRef } from "react";
import emailjs from '@emailjs/browser';

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    const templateParams = {
      email: email,
      message: message,
      sender_email: email,
      subject: subject, // Added subject to templateParams
    };

    emailjs
      .send('service_uz5omil', 'template_50d5r4w', templateParams, 'HQRA70SIZ_0eu-MLn')
      .then(
        () => {
          console.log('SUCCESS!');
          setLoading(false);
        },
        (error) => {
          console.log('FAILED...', error.text);
          setLoading(false);
        },
      );
  };

  return (
    <div className="flex flex-col items-center p-4">
      <h4 className="text-xl font-bold mb-2">You Can Contact Us</h4>
      <p className="mb-4">We are open to solve your Queries</p>
      <form
        ref={form}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-lg"
        onSubmit={sendEmail}
        style={{
          border: '5px solid',
          borderImage: 'linear-gradient(to right, red, green, blue)',
          borderImageSlice: 1,
        }}
      >
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="name">Name <span className="text-red-500">*</span></label>
          <input
            type="text"
            id="name"
            className="border border-gray-300 rounded-lg p-2 w-full"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="email">Email <span className="text-red-500">*</span></label>
          <input
            type="email"
            id="email"
            className="border border-gray-300 rounded-lg p-2 w-full"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="subject">Subject <span className="text-red-500">*</span></label>
          <input
            type="text"
            id="subject"
            className="border border-gray-300 rounded-lg p-2 w-full"
            placeholder="Subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="message">Message <span className="text-red-500">*</span></label>
          <textarea
            id="message"
            className="border border-gray-300 rounded-lg p-2 w-full"
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-400 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300"
            disabled={loading}
          >
            {loading ? (
              <span className="flex items-center">
                <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
              </span>
            ) : (
              "Send Message"
            )}
          </button>
        </div>
      </form>
      <div className="mt-6 text-center bg-gray-300 p-4 rounded shadow-md hover:bg-blue-200 transition duration-300 ease-in-out">
  <h5 className="text-lg font-semibold mb-2">Contact Details</h5>
  <p className="hover:text-red-500 cursor-pointer">Phone: +977 9845937335</p>
  <p className="hover:text-red-500 cursor-pointer">Email: avishekdhakal7@gmail.com</p>
  <p className="hover:text-red-500 cursor-pointer">Address: Bharatpur-22, Nepal (44200)</p>
</div>
    </div>
  );
}