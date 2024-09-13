import React from "react";
import ContactForm from "../_components/ContactForm";

const ContactPage = () => {
  return (
    <div className="p-4 min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className=" shadow-lg rounded-lg overflow-hidden w-full max-w-3xl">
        <div className="px-6 py-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-lg text-gray-600 mb-6">
            We’d love to hear from you! Please fill out the form below, and
            we’ll get in touch with you shortly.
          </p>

          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
