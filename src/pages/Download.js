import React from 'react';
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer';
import { useDocTitle } from '../components/CustomHook';

const Download = () => {
  useDocTitle("Atlantis AI - Download");

  return (
    <>
      <NavBar />
      <div className="mt-28 bg-white py-16 px-4 sm:px-6 lg:px-20 min-h-screen flex items-center justify-center">
        <div className="max-w-3xl w-full text-center">
          <h1 className="text-4xl font-bold text-sky-600 mb-6 mt-4">
            Download Atlantis AI
          </h1>
          <div className="mb-10">
            <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-xl shadow-lg">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/your-video-id" // Replace with your tutorial video link
                title="Tutorial Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <p className="text-gray-700 text-lg mb-6">
            Enhance your credit card rewards using our AI-powered Chrome extension.
            Atlantis AI leverages advanced algorithms to help you maximize your points,
            offering tailored insights based on your spending habits.
          </p>
          <p className="text-gray-700 text-lg mb-8">
            Ready to get started? Click the button below to download the extension.
            Not sure how to use it? Be sure to check out our 
            <a
              href="/tutorial"
              className="text-sky-600 hover:underline font-semibold mx-1"
            >
              Tutorial
            </a>
            page for a step-by-step guide on installation and usage.
          </p>
          <a
            href="https://chrome.google.com/webstore/your-extension-url" // Replace with your actual extension URL
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-sky-600 hover:bg-sky-700 text-white font-bold py-4 px-8 rounded-lg shadow-lg transition duration-300 mb-4"
          >
            Download Atlantis AI for Chrome
          </a>
          <div className="mt-6">
            <p className="text-gray-600 text-sm">
              Please note: After installing the extension, follow the on-screen instructions
              to set up your profile and link your credit card details securely for personalized insights.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Download;
