import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactPage = () => {
  return (
    <div className="max-w-6xl mx-auto p-6 min-h-screen">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-primary mb-2">Contact Us</h1>
        <p className="text-gray-500">Have questions? We'd love to hear from you.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Contact Info */}
        <div className="space-y-8 bg-primary text-primary-content p-10 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-semibold">Get In Touch</h2>
          
          <div className="flex items-center gap-4">
            <div className="bg-white/20 p-3 rounded-full"><FaPhoneAlt /></div>
            <div>
              <p className="font-bold">Phone</p>
              <p>+880 1234 567890</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="bg-white/20 p-3 rounded-full"><FaEnvelope /></div>
            <div>
              <p className="font-bold">Email</p>
              <p>support@toyshop.com</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="bg-white/20 p-3 rounded-full"><FaMapMarkerAlt /></div>
            <div>
              <p className="font-bold">Location</p>
              <p>123 Play Street, Dhaka, Bangladesh</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="card bg-base-100 shadow-xl p-8 border border-base-200">
          <form className="space-y-4">
            <div className="form-control">
              <label className="label"><span className="label-text">Full Name</span></label>
              <input type="text" placeholder="John Doe" className="input input-bordered focus:input-primary" />
            </div>

            <div className="form-control">
              <label className="label"><span className="label-text">Email Address</span></label>
              <input type="email" placeholder="john@example.com" className="input input-bordered focus:input-primary" />
            </div>

            <div className="form-control">
              <label className="label"><span className="label-text">Message</span></label>
              <textarea 
                className="textarea textarea-bordered h-32 focus:textarea-primary" 
                placeholder="How can we help you?"
              ></textarea>
            </div>

            <button className="btn btn-primary w-full mt-4">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;