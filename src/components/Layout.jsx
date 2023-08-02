import React from 'react';

import 'normalize.css'; // npm package
import '../assets/css/main.css';
import Navbar from './Navbar';
import Footer from './Footer';

function Layout({ children }) {
  return (
    <div className="layout">
      <Navbar />
      <div className="layout__children">{children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
