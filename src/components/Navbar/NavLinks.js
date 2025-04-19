import React from 'react';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import { useUserStore } from '../../services/store/useUserStore';
import { useNotificationStore } from '../../services/store/useNotificationStore';

const NavLinks = () => {
  const user      = useUserStore(state => state.user);
  const clearUser = useUserStore(state => state.clearUser);
  const initial   = user.username ? user.username.charAt(0).toUpperCase() : 'U';
  const isLoggedIn = Boolean(user.id);
  const showNotification = useNotificationStore((state) => state.showNotification);

  return (
    <div className="flex items-center space-x-4 flex-nowrap overflow-x-auto">
      <HashLink
        smooth
        to="/#about"
        className="px-4 font-extrabold text-gray-500 hover:text-blue-900 text-lg"
      >
        About
      </HashLink>

      <HashLink
        smooth
        to="/product"
        className="px-4 font-extrabold text-gray-500 hover:text-blue-900 text-lg"
      >
        Products
      </HashLink>

      <HashLink
        to="/blog"
        className="px-4 font-extrabold text-gray-500 hover:text-blue-900 text-lg"
      >
        Blog
      </HashLink>

      <HashLink
        to="/contact#contact"
        className="px-4 font-extrabold text-gray-500 hover:text-blue-900 text-lg"
      >
        Contact Us
      </HashLink>

      <HashLink
        smooth
        to="/download"
        className="inline-flex items-center justify-center px-6 py-3 text-lg text-white bg-sky-600 hover:bg-sky-500 rounded-xl shadow"
      >
        Download
      </HashLink>

      {isLoggedIn ? (
        <>
          <button
            onClick={() => {
              clearUser();
              showNotification("You have logged out", "success");
              localStorage.removeItem('user-storage');
            }}
            className="text-red-600 hover:underline font-semibold text-lg"
          >
            Logout
          </button>

          <Link to="/settings" title="Account settings">
            <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-700 font-semibold hover:bg-gray-300 transition">
              {initial}
            </div>
          </Link>
        </>
      ) : (
        <HashLink
          smooth
          to="/login"
          className="inline-flex items-center justify-center px-6 py-3 text-lg text-white bg-sky-600 hover:bg-sky-500 rounded-xl shadow"
        >
          Login
        </HashLink>
      )}
    </div>
  );
};

export default NavLinks;
