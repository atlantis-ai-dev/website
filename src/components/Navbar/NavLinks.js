import React from 'react';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import { useUserStore } from '../../services/store/useUserStore';
import { useNotificationStore } from '../../services/store/useNotificationStore';

/**
 * @param {{ vertical?: boolean }} props
 *   vertical = true → stack links; else horizontal
 */
const NavLinks = ({ vertical = false }) => {
  const user      = useUserStore(s => s.user);
  const clearUser = useUserStore(s => s.clearUser);
  const initial   = user.username?.charAt(0).toUpperCase() || 'U';
  const isLoggedIn = Boolean(user.id);
  const notify    = useNotificationStore(s => s.showNotification);

  // common link styles
  const baseLink =
    'font-semibold text-gray-600 hover:text-sky-800 ' +
    (vertical
      ? 'py-2 px-3 text-sm'              // mobile dropdown
      : 'py-1 px-2 sm:py-2 sm:px-4 text-xs sm:text-lg'); // inline nav

  const containerClass = vertical
    ? 'flex flex-col items-start space-y-2'
    : 'flex items-center flex-nowrap space-x-1 sm:space-x-2 md:space-x-4';

  return (
    <div className={containerClass}>
      <HashLink to="/#about" smooth className={baseLink}>
        About
      </HashLink>
      <HashLink to="/product" className={baseLink}>
        Products
      </HashLink>
      <HashLink to="/blog" className={baseLink}>
        Blog
      </HashLink>
      <HashLink to="/contact#contact" className={baseLink}>
        Contact
      </HashLink>

      <HashLink
        to="/download"
        smooth
        className={
          (vertical ? 'w-full text-center ' : '') +
          'bg-sky-600 hover:bg-sky-500 text-white rounded-lg ' +
          (vertical
            ? 'py-2 px-4 text-sm'
            : 'py-1 px-3 sm:py-2 sm:px-6 text-xs sm:text-lg')
        }
      >
        Download
      </HashLink>

      {isLoggedIn ? (
        <>
          <button
            onClick={() => {
              clearUser();
              notify('Logged out', 'success');
              localStorage.removeItem('user-storage');
            }}
            className={baseLink + (vertical ? ' mt-2' : '') + ' text-red-600'}
          >
            Logout
          </button>
          {vertical ? (
            // in dropdown: avatar + “Settings”
            <Link
              to="/settings"
              className="flex items-center space-x-2 py-2 px-3 text-sm font-semibold text-gray-600 hover:text-sky-800"
            >
              <div className="w-8 h-8 rounded-lg bg-gray-200 flex items-center justify-center text-gray-700">
                {initial}
              </div>              <span>Settings</span>
            </Link>
          ) : ( 
            <Link to="/settings" title="Account settings">
            <div
              className={
                (vertical ? '' : '') +
                'bg-gray-200 text-gray-700 font-semibold flex items-center justify-center ' +
                (vertical
                  ? 'w-8 h-8 rounded-lg mt-2 text-sm'
                  : 'w-8 h-8 rounded-full hover:bg-gray-300 sm:w-10 sm:h-10 sm:text-base')
              }
            >
              {initial}
            </div>
          </Link>
          )}
        </>
      ) : (
        <HashLink
          to="/login"
          smooth
          className={
            (vertical ? 'w-full text-center mb-2 ' : '') +
            'bg-sky-600 hover:bg-sky-500 text-white rounded-lg ' +
            (vertical
              ? 'py-2 px-4 text-sm'
              : 'py-1 px-3 sm:py-2 sm:px-6 text-xs sm:text-lg')
          }
        >
          Login
        </HashLink>
      )}
    </div>
  );
};

export default NavLinks;
