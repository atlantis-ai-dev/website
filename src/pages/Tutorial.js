import React from 'react';
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer';
import { useDocTitle } from '../components/CustomHook';

const Tutorial = () => {
  useDocTitle("Atlantis AI - Tutorial");

  return (
    <>
      <NavBar />
      <div className="mt-28 bg-white py-16 px-4 sm:px-6 lg:px-20">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <h1 className="text-4xl font-bold text-sky-600 text-center mb-8">
            Atlantis AI Tutorial
          </h1>

          {/* Video Embed Area */}
          <div className="mb-12">
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

          {/* Tutorial Content */}
          <div className="text-gray-700 text-lg">
            <h2 className="text-2xl font-bold text-sky-600 mb-4">
              How to Use Atlantis AI
            </h2>
            <p className="mb-4">
              Atlantis AI is designed to help you maximize your credit card points by analyzing your spending habits and reward opportunities using AI technology. Follow the steps below to get started.
            </p>

            <h3 className="text-xl font-semibold text-sky-600 mb-2">
              Step 1: Download and Install the Chrome Extension
            </h3>
            <p className="mb-4">
              To enhance your experience, download our free Chrome Extension from the Chrome Web Store. Once installed, the extension will help you quickly access deals and optimize your credit card usage while browsing.
            </p>
            <div className="p-6 bg-gray-50 rounded-xl shadow mb-4">
                <ol className="list-decimal list-inside mb-4">
                <li className="mb-2">
                    Click this <a href="google.com" className="text-sky-700 underline">link</a> or Visit the Chrome Web Store and search for <strong>"Atlantis AI"</strong>.
                </li>
                <li className="mb-2">
                    Click the <strong>"Add to Chrome"</strong> button, then confirm by clicking <strong>"Add Extension"</strong>.
                </li>
                <li className="mb-2">
                    After installation, you will see the Atlantis AI icon on your browser toolbar.
                </li>
                </ol>
            </div>

            <h3 className="text-xl font-semibold text-sky-600 mb-2">
              Step 2: Set Up Your Account
            </h3>
            <p className="mb-4">
              Open Atlantis AI by clicking on the browser extension icon or by visiting our website. Follow the on-screen instructions to create your profile and, if needed, securely link your credit card details.
            </p>

            <h3 className="text-xl font-semibold text-sky-600 mb-2">
              Step 3: Maximize Your Rewards
            </h3>
            <p className="mb-4">
              Atlantis AI analyzes your spending patterns and offers tailored recommendations to help you maximize your rewards. Explore the dashboard, check out our personalized tips, and stay updated with the latest promotions.
            </p>
            <ul className="list-disc list-inside mb-4">
              <li className="mb-2">
                <strong>Dashboard:</strong> View your rewards summary and track your credit card points.
              </li>
              <li className="mb-2">
                <strong>Recommendations:</strong> Get personalized tips on how to optimize your credit card benefits.
              </li>
              <li className="mb-2">
                <strong>Insights:</strong> Learn more about deals and promotions available in real-time.
              </li>
            </ul>
            <p className="mb-4">
              If you need further assistance, be sure to check out our <a href="/qna" className="text-sky-700 underline">Q&A</a> page or get in touch with our support team.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Tutorial;
