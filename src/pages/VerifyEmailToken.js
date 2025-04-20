import React, { useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer';
import { useUserStore } from '../services/store/useUserStore';
import { useDocTitle } from '../components/CustomHook';
import { confirmEmail } from '../services/authService';
import { useNotificationStore } from '../services/store/useNotificationStore';

export default function VerifyEmailToken() {
  useDocTitle('Atlantis AI – Verifying…');
  const [searchParams] = useSearchParams();
  const token = searchParams.get('token');
  const navigate = useNavigate();
  const notify   = useNotificationStore((s) => s.showNotification);
  const clearUser = useUserStore(state => state.clearUser);

  useEffect(() => {
    if (!token) {
      notify('No token provided', 'error');
      return navigate('/login', { replace: true });
    }

    confirmEmail(token)
      .then((res) => {
        if (res.status === 200 || res.success) {
          notify("You've successfully verified your email, please login!", 'success');
          clearUser();
        } else {
          notify('Verification failed', 'error');
        }
      })
      .catch((err) => {
        console.error(err);
        notify(err.message || 'Verification error', 'error');
      })
      .finally(() => {
        // Redirect back to login after a short pause
        setTimeout(() => navigate('/login', { replace: true }), 1500);
      });
  }, [token, navigate, notify, clearUser]);

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <div className="flex-grow flex items-center justify-center bg-sky-50 px-4 py-20">
        {/* You can show a spinner here if you like */}
        <p className="text-lg text-gray-700">Verifying your email, please wait…</p>
      </div>
      <Footer />
    </div>
  );
}
