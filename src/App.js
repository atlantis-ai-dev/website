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

import {useDocTitle} from './components/CustomHook';
import ScrollToTop from './components/ScrollToTop';

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
          </Routes>
        </ScrollToTop>
      </Router>
    </>
  );
}


export default App;
