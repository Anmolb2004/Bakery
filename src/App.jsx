import React, { useState } from 'react'; // 1. Import useState
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import MenuPage from './pages/MenuPage';
import './App.css';

function App() {
  // 2. Create the search state here
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <BrowserRouter>
      <Routes>
        {/* 3. Pass state and setter to the Layout */}
        <Route path="/" element={<Layout searchQuery={searchQuery} setSearchQuery={setSearchQuery} />}>
          <Route index element={<HomePage />} />
          <Route path="menu" element={<MenuPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;