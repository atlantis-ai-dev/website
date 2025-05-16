// src/pages/Settings.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer';
import { useDocTitle } from '../components/CustomHook';
import { updateUser, updatePassword } from '../services/userService';
import { useUserStore } from '../services/store/useUserStore';
import { useNotificationStore } from '../services/store/useNotificationStore';

export default function Settings() {
  useDocTitle('Atlantis AI – Account Settings');

  const navigate          = useNavigate();
  const user              = useUserStore((s) => s.user);
  const setUser           = useUserStore((s) => s.setUser);
  const showNotification  = useNotificationStore((s) => s.showNotification);

  // If not logged in, bounce to home
  useEffect(() => {
    if (!user.id) navigate('/', { replace: true });
  }, [user.id, navigate]);

  // For avatar initial
  const initial = user.username?.charAt(0).toUpperCase() || 'U';

  // Username form state
  const [username, setUsername]           = useState(user.username || '');
  const [savingUsername, setSavingUsername] = useState(false);

  // Password form state
  const [oldPassword, setOldPassword]       = useState('');
  const [newPassword, setNewPassword]       = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [changingPassword, setChangingPassword] = useState(false);

  // Handle username update
  const handleUsernameSubmit = async (e) => {
    e.preventDefault();
    if (!username.trim()) {
      showNotification('Username cannot be empty', 'error');
      return;
    }
    setSavingUsername(true);
    try {
      const res = await updateUser({
        id:       user.id,
        email:    user.email,
        username: username.trim(),
      });
      if (res.status === 'success') {
        setUser({ ...user, username: username.trim() });
        showNotification('Username updated!', 'success');
      } else {
        throw new Error(res.message || 'Failed to update username');
      }
    } catch (err) {
      showNotification(err.message, 'error');
    } finally {
      setSavingUsername(false);
    }
  };

  // Handle password change
  const handlePasswordSubmit = async (e) => {
    e.preventDefault();
    if (!oldPassword || !newPassword) {
      showNotification('Please fill both password fields', 'error');
      return;
    }
    if (newPassword !== confirmPassword) {
      showNotification('New passwords do not match', 'error');
      return;
    }
    setChangingPassword(true);
    try {
      const res = await updatePassword({
        id: user.id,
        oldPassword,
        newPassword,
      });
      if (res.status === 'success') {
        showNotification('Password changed successfully!', 'success');
        // clear fields
        setOldPassword('');
        setNewPassword('');
        setConfirmPassword('');
      } else {
        throw new Error(res.message || 'Failed to change password');
      }
    } catch (err) {
      showNotification(err.message, 'error');
    } finally {
      setChangingPassword(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />

      <div className="mt-28 flex-grow bg-white py-12 px-4 sm:px-6 lg:px-20">
        <div className="max-w-3xl mx-auto space-y-12">
          {/* Header with Avatar */}
          <div className="flex justify-center">
            <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center text-gray-700 font-semibold text-2xl">
              {initial}
            </div>
          </div>

          <h1 className="text-3xl font-bold text-sky-600 text-center">
            Account Settings
          </h1>

          {/* Profile Section */}
          <section className="bg-gray-50 p-8 rounded-lg shadow">
            <h2 className="text-2xl font-semibold mb-6">Profile</h2>

            {/* Display Email */}
            <p className="mb-4">
              <strong>Email:</strong> {user.email}
            </p>

            {/* Update Username Form */}
            <form onSubmit={handleUsernameSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-1">
                  Username
                </label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400"
                />
              </div>
              <button
                type="submit"
                disabled={savingUsername}
                className="bg-sky-600 hover:bg-sky-700 text-white px-6 py-2 rounded-lg shadow disabled:opacity-50"
              >
                {savingUsername ? 'Saving...' : 'Update Username'}
              </button>
            </form>
          </section>

          {/* Security Section */}
          <section className="bg-gray-50 p-8 rounded-lg shadow">
            <h2 className="text-2xl font-semibold mb-6">Security</h2>

            <form onSubmit={handlePasswordSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-1">
                  Current Password
                </label>
                <input
                  type="password"
                  value={oldPassword}
                  onChange={(e) => setOldPassword(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-1">
                  New Password
                </label>
                <input
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-1">
                  Confirm New Password
                </label>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400"
                />
              </div>
              <button
                type="submit"
                disabled={changingPassword}
                className="bg-sky-600 hover:bg-sky-700 text-white px-6 py-2 rounded-lg shadow disabled:opacity-50"
              >
                {changingPassword ? 'Updating...' : 'Change Password'}
              </button>
            </form>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
}
