import React from 'react';
import './Products.css';

// Data from the images
const cakes = [
  { name: 'Black forest cake', price: 1000 },
  { name: 'Vanilla blueberry', price: 800 },
  { name: 'Chocolate ganache', price: 1200 },
  { name: 'Butter scotch cake', price: 800 },
  { name: 'Red Velvet Cake', price: 950 },
  { name: 'Fruit cake', price: 800 },
  { name: 'Blueberry Cheese cake', price: 800 },
  { name: 'Biscoff cheese cake', price: 950 },
  { name: 'Nutella Cheesecake', price: 950 },
  { name: 'Chocolate blueberry/stawberry', price: 1000 },
];

const dryCakes = [
  { name: 'Dates and walnut', price: 450 },
  { name: 'Triple chocolate', price: 450 },
  { name: 'Wheat jaggery', price: 300 },
  { name: 'Marble cake', price: 300 },
  { name: 'Banana cake', price: 450 },
  { name: 'Vegan cake', price: 400 },
  { name: 'Gluten free cake', price: 400 },
];

const sweetDelights = [
    { name: 'Vanilla cupcake box (4 piece)', price: 200 },
    { name: 'Chocolate cupcake box (4 piece)', price: 220 },
    { name: 'Red velvet cupcakes box (4 piece)', price: 240 },
    { name: 'Tart box (4 piece)', price: 200 },
    { name: 'Donut box (4 piece)', price: 200 },
    { name: 'Cookies', price: 180 },
    { name: 'Rich brownie', price: 200 },
    { name: 'Cocoa brownie', price: 150 },
    { name: 'White chocolate cranberrie brownie', price: 180 },
    { name: 'Cheese cake in box', price: 250 },
];

const breads = [
    { name: 'Breakfast milk bread (maida bread)', price: 120 },
    { name: 'Whole wheat multigrain bread', price: 150 },
];


const MenuSection = ({ title, items, note }) => (
    <div className="menu-category">
        <h2 className="menu-category-title">{title}</h2>
        <ul className="menu-list">
            {items.map((item) => (
                <li key={item.name} className="menu-item">
                    <span className="item-name">{item.name}</span>
                    <span className="item-dots"></span>
                    <span className="item-price">₹{item.price}</span>
                </li>
            ))}
        </ul>
        {note && <p className="menu-note">{note}</p>}
    </div>
);


const Products = ({ searchQuery }) => {
  
  // 2. A function to filter any array of items
  const filterItems = (items, query) => {
    if (!query) {
      return items; // If no query, return all items
    }
    return items.filter((item) =>
      item.name.toLowerCase().includes(query.toLowerCase())
    );
  };

  // 3. Filter each category
  const filteredCakes = filterItems(cakes, searchQuery);
  const filteredDryCakes = filterItems(dryCakes, searchQuery);
  const filteredSweetDelights = filterItems(sweetDelights, searchQuery);
  const filteredBreads = filterItems(breads, searchQuery);

  return (
    <section id="menu" className="menu-section">
      <div className="menu-container">
        <h1 className="menu-title">Our Menu</h1>
        
        {/* 4. Render the filtered results */}
        {filteredCakes.length > 0 && <MenuSection title="Cakes" items={filteredCakes} note="Extra charges for decoration" />}
        {filteredDryCakes.length > 0 && <MenuSection title="Dry Cakes" items={filteredDryCakes} />}
        {filteredSweetDelights.length > 0 && <MenuSection title="Sweet Delights" items={filteredSweetDelights} />}
        {filteredBreads.length > 0 && <MenuSection title="Bread" items={filteredBreads} />}
        
        {/* Optional: Show a message if no results are found */}
        {filteredCakes.length === 0 && filteredDryCakes.length === 0 && filteredSweetDelights.length === 0 && filteredBreads.length === 0 && (
          <p className="no-results">No items match your search.</p>
        )}
      </div>
    </section>
  );
};

export default Products;