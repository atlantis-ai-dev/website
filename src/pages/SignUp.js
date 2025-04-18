import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer';
import { useDocTitle } from '../components/CustomHook';

const SignUp = () => {
  useDocTitle('Atlantis AI – Sign Up');

  const [fullName, setFullName]     = useState('');
  const [email, setEmail]           = useState('');
  const [password, setPassword]     = useState('');
  const [confirm, setConfirm]       = useState('');
  const [agree, setAgree]           = useState(false);
  const [error, setError]           = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!agree) {
      setError('You must agree to the terms and conditions.');
      return;
    }
    if (password !== confirm) {
      setError('Passwords do not match.');
      return;
    }
    setError('');
    // TODO: call your sign‑up API, then redirect or set store
    console.log({ fullName, email, password });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />

      {/* form container */}
      <div className="mt-36 flex-grow flex items-center justify-center bg-sky-50 px-4 pt-20">
        <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg mb-20">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Create Account
          </h2>

          {error && (
            <div className="mb-4 text-red-600 text-sm text-center">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Full Name */}
            <div>
              <label className="block text-gray-700 mb-1">Full Name</label>
              <input
                type="text"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-700 mb-1">Email</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-gray-700 mb-1">Password</label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400"
              />
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-gray-700 mb-1">Confirm Password</label>
              <input
                type="password"
                required
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400"
              />
            </div>

            {/* Terms */}
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={agree}
                onChange={() => setAgree((a) => !a)}
                className="form-checkbox h-4 w-4 text-sky-600"
              />
              <label className="ml-2 text-gray-700">
                I agree to the{' '}
                <Link to="/terms" className="text-sky-600 hover:underline">
                  Terms & Conditions
                </Link>
              </label>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-sky-600 hover:bg-sky-700 text-white font-semibold rounded-lg shadow"
            >
              Sign Up
            </button>
          </form>

          <p className="mt-6 text-center text-gray-600">
            Already have an account?{' '}
            <Link to="/login" className="text-sky-600 hover:underline">
              Log in
            </Link>
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SignUp;
