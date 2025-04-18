import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { useDocTitle } from '../components/CustomHook';
import { login } from '../services/authService';
import { useUserStore } from '../services/store/useUserStore';


const Login = () => {
    useDocTitle('Atlantis AI – Login');
    
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const res = await login({ email, password });
          // backend returns res.status (200) and res.data
          if (res.status === 200) {
            useUserStore.getState().setUser(res.data);
            navigate('/'); 
          }
        } catch (err) {
          console.log(err);
        }
      };
  
    return (
      <div className="flex flex-col min-h-screen">
        {/* top nav (optional) */}
        <NavBar />
  
        {/* center form */}
        <div className="mt-36 flex-grow flex items-center justify-center bg-sky-50 px-4 py-20">
          <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Sign in
            </h2>
  
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="email" className="block text-gray-700 mb-1">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400"
                />
              </div>
  
              <div>
                <label htmlFor="password" className="block text-gray-700 mb-1">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400"
                />
              </div>
  
              <div className="flex items-center justify-between">
                <Link
                  to="/forgot-password"
                  className="text-sm text-sky-600 hover:underline"
                >
                  Forgot password?
                </Link>
              </div>
  
              <button
                type="submit"
                className="w-full py-3 bg-sky-600 hover:bg-sky-700 text-white font-semibold rounded-lg shadow"
              >
                Log in
              </button>
            </form>
  
            <p className="mt-6 text-center text-gray-600">
              Don’t have an account?{' '}
              <Link to="/sign-up" className="text-sky-600 hover:underline">
                Sign up
              </Link>
            </p>
          </div>
        </div>
  
        {/* footer */}
        <Footer />
      </div>
    );
  };
  
  export default Login;