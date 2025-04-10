import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer';
import { useDocTitle } from '../components/CustomHook';

const Help = () => {
  useDocTitle("Atlantis AI - Help & Support");

  return (
    <>
      <NavBar />
      <div className="mt-28 bg-white py-16 px-4 sm:px-6 lg:px-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-sky-600 mb-12">
            Help & Support
          </h1>
          <p className="text-gray-700 text-lg mb-6">
            If you have any questions about Atlantis AI, please check out our{" "}
            <Link to="/qna" className="text-sky-600 hover:underline font-semibold">
              Q&A page
            </Link>{" "}
            for more information.
          </p>
          <p className="text-gray-700 text-lg mb-6">
            If you still need help or have any specific inquiries, please visit our{" "}
            <Link to="/contact" className="text-sky-600 hover:underline font-semibold">
              Contact
            </Link>{" "}
            page.
          </p>
          <p className="text-gray-700 text-lg mb-6">
            You can also email us directly at{" "}
            <a
              href="mailto:atlantisai04@gmail.com"
              className="text-sky-600 hover:underline font-semibold"
            >
              atlantisai04@gmail.com
            </a>
            .
          </p>

          {/* Additional Content to Push Footer Down */}
          <div className="mt-10">
            <h2 className="text-3xl font-bold text-sky-600 mb-6">
              Additional Resources
            </h2>
            <p className="text-gray-700 text-lg mb-4">
              Our team is dedicated to ensuring you have a seamless experience with Atlantis AI. We offer comprehensive resources to help you understand and utilize every feature of our platform effectively.
            </p>
            <p className="text-gray-700 text-lg mb-4">
              <strong>Getting Started:</strong> Our step-by-step guides and interactive tutorials are designed to help you master the platform quickly. Whether you're a new user or just need a refresher, our resources will walk you through each important feature.
            </p>
            <p className="text-gray-700 text-lg mb-4">
              <strong>User Community & Feedback:</strong> We believe in continuous improvement. Join our community forums or follow us on social media to share your feedback and connect with other Atlantis AI users for tips and support.
            </p>
            <p className="text-gray-700 text-lg mb-4">
              <strong>System Updates & Announcements:</strong> Stay informed with our update logs. We regularly roll out new features and improvements, keeping you in the loop about what’s new and how to benefit from these upgrades.
            </p>
            <p className="text-gray-700 text-lg">
              Our goal is to ensure that you have all the help you need, no matter when you visit our site. Explore these resources, and feel free to reach out for additional support whenever necessary.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Help;
