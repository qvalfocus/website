import React from "react";

export default function ContactPage() {
  return (
    <section className="w-full min-h-screen bg-[#f9fafb] flex flex-col">
      {/* Banner */}
      <div className="bg-[#0c2d3c] text-center" style={{paddingTop: '12rem', paddingBottom: '6rem'}}>
        <p className="uppercase tracking-widest text-sm text-gray-200">Contact</p>
        <h1 className="text-white text-4xl md:text-5xl font-bold mt-4">We’re Here For You</h1>
      </div>

      {/* Form Section */}
      <div className="max-w-5xl w-full mx-auto bg-white shadow-xl rounded-3xl px-8 py-12 mt-10 mb-20">
        <form className="grid md:grid-cols-2 gap-6">
          {/* First Name */}
          <div>
            <label className="block mb-2 text-sm font-medium">First Name</label>
            <input
              type="text"
              placeholder="First Name"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Last Name */}
          <div>
            <label className="block mb-2 text-sm font-medium">Last Name</label>
            <input
              type="text"
              placeholder="Last Name"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-2 text-sm font-medium">Email</label>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block mb-2 text-sm font-medium">Phone</label>
            <input
              type="tel"
              placeholder="Your Phone"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Company */}
          <div>
            <label className="block mb-2 text-sm font-medium">Company</label>
            <input
              type="text"
              placeholder="Your Company"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Role */}
          <div>
            <label className="block mb-2 text-sm font-medium">Role</label>
            <input
              type="text"
              placeholder="Your Role"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Full Width - Message */}
          <div className="md:col-span-2">
            <label className="block mb-2 text-sm font-medium">What can we help you with?</label>
            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          {/* Button */}
          <div className="md:col-span-2">
            <button
              type="submit"
              className="w-full bg-[#0c2d3c] text-white py-3 rounded-lg font-semibold hover:bg-[#164055] transition"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}


{
    /*
    
    
import React, { useState } from "react";
import emailjs from "emailjs-com";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    role: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.firstName || !formData.email || !formData.message) {
      setStatus("Please fill in required fields.");
      return;
    }

    emailjs
      .send(
        "YOUR_SERVICE_ID", // Replace
        "YOUR_TEMPLATE_ID", // Replace
        formData,
        "YOUR_USER_ID" // Replace
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus("Message sent successfully!");
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            company: "",
            role: "",
            message: "",
          });
        },
        (error) => {
          console.log(error.text);
          setStatus("Something went wrong. Please try again.");
        }
      );
  };

  return (
    <section className="w-full min-h-screen bg-[#f9fafb] flex flex-col">
      <div
        className="bg-[#0c2d3c] text-center"
        style={{ paddingTop: "12rem", paddingBottom: "6rem" }}
      >
        <p className="uppercase tracking-widest text-sm text-gray-200">
          Contact
        </p>
        <h1 className="text-white text-4xl md:text-5xl font-bold mt-4">
          We’re Here For You
        </h1>
      </div>

      <div className="max-w-5xl w-full mx-auto bg-white shadow-2xl rounded-3xl px-8 py-12 mt-10 mb-20 transition-transform duration-300 hover:scale-[1.02]">
        <form className="grid md:grid-cols-2 gap-6" onSubmit={handleSubmit}>
          <div>
            <label className="block mb-2 text-sm font-medium">First Name *</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              placeholder="First Name"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Last Name"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium">Email *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Your Email"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium">Phone</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Your Phone"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium">Company</label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Your Company"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium">Role</label>
            <input
              type="text"
              name="role"
              value={formData.role}
              onChange={handleChange}
              placeholder="Your Role"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>
          <div className="md:col-span-2">
            <label className="block mb-2 text-sm font-medium">
              What can we help you with? *
            </label>
            <textarea
              rows="4"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Your Message"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            ></textarea>
          </div>
          <div className="md:col-span-2">
            <button
              type="submit"
              className="w-full bg-[#0c2d3c] text-white py-3 rounded-lg font-semibold hover:bg-[#164055] transition-all duration-300"
            >
              Send Message
            </button>
            {status && (
              <p className="text-center text-sm text-green-600 mt-3">{status}</p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}


    */
}
