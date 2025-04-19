import React, { useEffect } from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";
import './index.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
// All pages
import Home from './pages/Home';
import Contact from './pages/Contact';
import DemoProduct from './pages/DemoProduct';
import Product from './pages/Product';
import Blog from './pages/Blog';
import Blog1 from './pages/blogs/blog1/blog1';
import Download from './pages/Download';
import Help from './pages/Help';
import Tutorial from './pages/Tutorial';
import Qna from './pages/QuestionAndAnswers';
import SignUp from './pages/SignUp';
import Settings from './pages/Settings';
import Notification from './components/Notification';
import Login from './pages/Login';
import VerifyEmailToken from './pages/VerifyEmailToken';

import {useDocTitle} from './components/CustomHook';
import ScrollToTop from './components/ScrollToTop';
import VerifyEmail from './pages/VerifyEmail';

function App() {
  useEffect(() => {
    const aos_init = () => {
      AOS.init({
        once: true,
        duration: 1000,
        easing: 'ease-out-cubic',
      });
    }

    window.addEventListener('load', () => {
      aos_init();
    });
  }, []);

  useDocTitle("Atlantis AI");

  return (
    <>
      <Router>
        <Notification />
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product" element={<Product />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/get-demo" element={<DemoProduct />} />
            <Route path="/blogs/blog1" element={<Blog1 />} />
            <Route path="/download" element={<Download />} />
            <Route path="/help" element={<Help />} />
            <Route path="/tutorial" element={<Tutorial />} />
            <Route path="/qna" element={<Qna />} />
            <Route path="/login" element={<Login />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/verify-email" element={<VerifyEmail />} /> 
            <Route path="/settings" element={<Settings />} />
            <Route path="/verifyemailtoken" element={<VerifyEmailToken />} />
          </Routes>
        </ScrollToTop>
      </Router>
    </>
  );
}


export default App;
