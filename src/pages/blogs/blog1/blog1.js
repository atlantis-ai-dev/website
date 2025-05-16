import React from 'react';
import NavBar from '../../../components/Navbar/NavBar';
import Footer from '../../../components/Footer';
import blogImg from '../../../images/logo.png'; 

const Blog1 = () => {
  return (
    <>
      <NavBar />
      <div className="mt-28 px-4 lg:px-24 py-16 bg-white text-gray-800">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-sky-700 mb-4">The Future of AI-Driven Business Tools</h1>
          <p className="text-gray-500 font-medium mb-4">By Atlantis AI Team — April 7, 2025</p>
          <img src={blogImg} alt="AI blog cover" className="w-72 rounded-lg shadow-lg mb-6" />

          <p className="text-lg leading-relaxed mb-4">
            As artificial intelligence continues to evolve, businesses are increasingly relying on AI-powered platforms to streamline operations and enhance decision-making. From automating mundane tasks to generating predictive insights, AI is revolutionizing how companies operate.
          </p>

          <p className="text-lg leading-relaxed mb-4">
            At Atlantis AI, we focus on delivering intelligent software tailored for growing businesses. Our custom dashboards, role-based analytics, and real-time performance monitoring tools are empowering teams to work smarter, not harder. In this article, we’ll explore how companies across industries are already benefiting from AI adoption—and what the future holds.
          </p>

          <p className="text-lg leading-relaxed mb-4">
            Whether you’re a startup trying to understand customer behavior or a large enterprise streamlining supply chains, AI is no longer a “nice-to-have.” It’s becoming essential. Let’s dive into some of the biggest ways AI is making an impact across verticals.
          </p>

          <p className="text-lg leading-relaxed">
            Stay tuned as we continue to explore industry-specific case studies and offer expert insight on leveraging AI to its fullest potential.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Blog1;
