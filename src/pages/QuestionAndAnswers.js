import React from 'react';
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer';
import { useDocTitle } from '../components/CustomHook';

const QnA = () => {
  useDocTitle("Atlantis AI - FAQs / Q&A");

  return (
    <>
      <NavBar />
      <div className="mt-28 bg-white py-16 px-4 sm:px-6 lg:px-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-sky-600 mb-12 text-center">
            Frequently Asked Questions
          </h1>

          <div className="space-y-8">
            {/* FAQ Item: What is Atlantis AI? */}
            <div className="p-6 bg-gray-50 rounded-xl shadow">
              <h2 className="text-2xl font-bold text-sky-700 mb-4">
                What is Atlantis AI?
              </h2>
              <p className="text-gray-700">
                Atlantis AI is an innovative AI-powered platform designed to help you maximize your credit card points. It leverages advanced algorithms to analyze your spending patterns, credit card offers, and reward structures in order to provide personalized strategies for optimizing your points.
              </p>
            </div>

            {/* FAQ Item: How can I download Atlantis AI? */}
            <div className="p-6 bg-gray-50 rounded-xl shadow">
              <h2 className="text-2xl font-bold text-sky-700 mb-4">
                How can I download Atlantis AI?
              </h2>
              <p className="text-gray-700">
                Atlantis AI can be downloaded directly from our website. Simply navigate to the <a href="/download" className="text-sky-700 underline">Download</a> page and follow the step-by-step instructions provided. The process is designed to be quick and user-friendly.
              </p>
            </div>

            {/* FAQ Item: How does Atlantis AI maximize my credit card points? */}
            <div className="p-6 bg-gray-50 rounded-xl shadow">
              <h2 className="text-2xl font-bold text-sky-700 mb-4">
                How does Atlantis AI maximize my credit card points?
              </h2>
              <p className="text-gray-700">
                By analyzing various credit card reward programs alongside your personal spending habits, Atlantis AI identifies the best strategies and offers tailored recommendations. This enables you to make the most of your credit card benefits.
              </p>
            </div>

            {/* FAQ Item: Are there any costs associated with Atlantis AI? */}
            <div className="p-6 bg-gray-50 rounded-xl shadow">
              <h2 className="text-2xl font-bold text-sky-700 mb-4">
                Are there any costs associated with Atlantis AI?
              </h2>
              <p className="text-gray-700">
                We offer a free trial so you can experience all that Atlantis AI has to offer without any commitment. After the trial period, you can choose from a variety of subscription plans designed to meet your needs. Visit our pricing section for further details.
              </p>
            </div>

            {/* FAQ Item: Do I need any technical expertise to use Atlantis AI? */}
            <div className="p-6 bg-gray-50 rounded-xl shadow">
              <h2 className="text-2xl font-bold text-sky-700 mb-4">
                Do I need any technical expertise to use Atlantis AI?
              </h2>
              <p className="text-gray-700">
                Not at all. Atlantis AI is designed with an intuitive, user-friendly interface that makes it accessible to everyone, regardless of your technical background.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default QnA;
