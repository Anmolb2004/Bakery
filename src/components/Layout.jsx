import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

// 1. Receive props from App.jsx
const Layout = ({ searchQuery, setSearchQuery }) => {
  return (
    <>
      {/* 2. Pass the setter function to the Navbar */}
      <Navbar setSearchQuery={setSearchQuery} />
      <main>
        {/* 3. Pass the search query down to the page components (e.g., MenuPage) */}
        <Outlet context={{ searchQuery }} />
      </main>
      <Footer />
    </>
  );
};

export default Layout;