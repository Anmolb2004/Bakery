import React from 'react';
import { useOutletContext } from 'react-router-dom'; // 1. Import hook
import Products from '../components/Products';

const MenuPage = () => {
  const { searchQuery } = useOutletContext(); // 2. Get the search query

  return (
    <div className="menu-page-container">
      {/* 3. Pass it as a prop to the Products component */}
      <Products searchQuery={searchQuery} />
    </div>
  );
};

export default MenuPage;