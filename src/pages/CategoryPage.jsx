import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const getAllProducts = () => {
  return [
    { id: 1, name: 'Bull,Skid Loader', category:'equipment-rentals', description: 'High-quality cement', image: '/bull,skidloader.jpg' },
    { id: 2, name: 'Backhoe Loader', category:'equipment-rentals', description: 'High-quality cement', image: '/Backhoeloader.jpg' },
    { id: 3, name: 'Dyna Truck', category:'equipment-rentals', description: 'High-quality cement', image: '/dynatruck.jpg' },
    { id: 4, name: 'Diesel Tanker', category:'vehicle-rentals', description: 'High-quality cement', image: '/dieseltanker.jpg' },
    { id: 5, name: 'Wheel Loader', category:'equipment-rentals', description: 'High-quality cement', image: '/Wheelloader.jpg' },
    { id: 6, name: 'Roller Compacter', category:'equipment-rentals', description: 'High-quality cement', image: '/Rollercompacter.jpg' },
    { id: 7, name: '7 Ton Forklift', category:'equipment-rentals', description: 'High-quality cement', image: '/7tonforklift.jpg' },
    { id: 8, name: 'GMC', category:'equipment-rentals', description: 'High-quality cement', image: '/gmc.jpg' },
    { id: 9, name: 'Generator', category:'machinery', description: 'High-quality cement', image: '/compressor.jpg' },
    { id: 10, name: 'Welding Machine', category:'machinery', description: 'High-quality cement', image: '/welding machine.jpg' },
    { id: 11, name: 'Container With Ac Units', category:'machinery', description: 'High-quality cement', image: '/aircontainer.jpg' },
    // { id: 12, name: 'Container With Ac Units', category:'machinery', description: 'High-quality cement', image: '/cement.jpg' },
    { id: 12, name: 'Bus', category:'vehicle-rentals', description: 'High-quality cement', image: '/ashokleylandbus.jpg' },
    { id: 13, name: 'Pickup', category:'vehicle-rentals', description: 'High-quality cement', image: '/pickup.jpg' },
   

    // { id: 2, name: 'Steel', category: 'material-supply', description: 'Durable steel bars', image: '/steel.jpg' },
    // { id: 3, name: 'Backhole Loader', category: 'equipment-rentals', description: 'Powerful backhole loader', image: '/Backholeloader.jpg' },
    // { id: 4, name: 'Excavator', category: 'equipment-rentals', description: 'Heavy-duty excavator', image: '/excavator.jpg' },
    // { id: 5, name: 'Crane', category: 'machinery', description: 'Efficient crane for heavy lifting', image: '/crane.jpg' },
    // { id: 6, name: 'Forklift', category: 'machinery', description: 'Reliable forklift for material handling', image: '/forklift.jpg' },
    // { id: 1, name: 'Cement', category: 'material-supply', description: 'High-quality cement', image: '/cement.jpg' },
    // { id: 1, name: 'Cement', category: 'material-supply', description: 'High-quality cement', image: '/cement.jpg' },
    // { id: 1, name: 'Cement', category: 'material-supply', description: 'High-quality cement', image: '/cement.jpg' },
    // { id: 1, name: 'Cement', category: 'material-supply', description: 'High-quality cement', image: '/cement.jpg' },
    // { id: 1, name: 'Cement', category: 'material-supply', description: 'High-quality cement', image: '/cement.jpg' },
    // { id: 1, name: 'Cement', category: 'material-supply', description: 'High-quality cement', image: '/cement.jpg' },
    // { id: 1, name: 'Cement', category: 'material-supply', description: 'High-quality cement', image: '/cement.jpg' },
    // { id: 1, name: 'Cement', category: 'material-supply', description: 'High-quality cement', image: '/cement.jpg' },
    // { id: 1, name: 'Cement', category: 'material-supply', description: 'High-quality cement', image: '/cement.jpg' },
  ];
};

const CategoryPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortingOption, setSortingOption] = useState('all');
  const navigate = useNavigate(); // To navigate to the ProductDetailsPage

  let products = getAllProducts();

  // Apply filtering based on the sorting option
  if (sortingOption !== 'all') {rental-app/src/pages/CategoryPage.jsx
    products = products.filter(product => product.category === sortingOption);
  }

  // Apply filtering based on search query
  if (searchQuery) {
    products = products.filter(product =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  // Function to handle the navigation to product details page
  const handleViewDetails = (productId) => {
    navigate(`/product-details/${productId}`); // Redirect to product details page with productId
  };

  return (
    <div className="category-page">
      <div className="top-section">
        <p className="showing-results">Showing All Results</p>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="sorting">
          <select value={sortingOption} onChange={(e) => setSortingOption(e.target.value)}>
            <option value="all">Sort by: All</option>
            <option value="vehicle-rentals">Sort by: Machinery</option>
            <option value="equipment-rentals">Sort by: Equipment</option>
            <option value="material-supply">Sort by: Material</option>
          </select>
        </div>
      </div>

      {/* <h2>Products</h2> */}
      <div className="products-container">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <p>{product.name}</p>
            <button onClick={() => handleViewDetails(product.id)}>View Details</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
