// src/pages/VerifyEmail.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer';
import { useDocTitle } from '../components/CustomHook';
import { resendVerificationEmail } from '../services/authService';
import { useNotificationStore } from '../services/store/useNotificationStore';
import { useUserStore } from '../services/store/useUserStore';

export default function VerifyEmail() {
  useDocTitle('Atlantis AI – Verify Email');
  // We expect the email to be passed via navigation state

  const email = useUserStore((s) => s.user.email);
  const [loading, setLoading]   = useState(false);
  const showNotification        = useNotificationStore(s => s.showNotification);

  const handleResend = async () => {
    setLoading(true);
    try {
      await resendVerificationEmail({ email });
      showNotification("A verification email has been sent to you, please check your inbox!", 'success');
    } catch (err) {
      showNotification(err.message || 'Failed to resend email', 'error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <div className="flex-grow flex items-center justify-center bg-sky-50 px-4 py-20">
        <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg text-center space-y-6">
          <h2 className="text-2xl font-bold">Almost there!</h2>
          <p>
            We’ve sent a verification link to <strong>{email}</strong>.<br/>
            Please check your inbox (and spam folder).
          </p>

          <button
            onClick={handleResend}
            disabled={loading}
            className="w-full py-3 bg-sky-600 hover:bg-sky-700 text-white rounded-lg shadow disabled:opacity-50"
          >
            {loading ? 'Resending…' : "Didn't get it? Resend"}
          </button>

          <p className="text-gray-600">
            Once you’ve verified your email,  Then you can <Link to="/login" className="text-sky-600 hover:underline">log in</Link>.
          </p>
          
        </div>
      </div>
      <Footer />
    </div>
  );
}
