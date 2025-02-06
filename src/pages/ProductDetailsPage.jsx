import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetailsPage = () => {
  const { productId } = useParams(); // Get the productId from the URL
  const [product, setProduct] = useState(null); // To hold the product data
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [quantity, setQuantity] = useState(1);

  // Simulated fetch function (replace this with an actual API call)
  const fetchProductData = () => {
    const allProducts = [
      { id: 1, name: 'Bull skid Loader', imageUrl: '/bull,skidloader.jpg', rentPrice: '$50/day', location: 'Doha, Qatar', description: 'This is a detailed description of the product.', category: 'Equipment' },
      { id: 2, name: 'Backhoe Loader', imageUrl: '/Backhoeloader.jpg', rentPrice: '$100/day', location: 'Doha, Qatar', description: 'A heavy-duty excavator for large construction projects.', category: 'Equipment' },
      { id: 3, name: 'Dyna Truck', imageUrl: '/dynatruck.jpg', rentPrice: '$150/day', location: 'Doha, Qatar', description: 'A powerful loader for large scale operations.', category: 'Equipment' },
      { id: 4, name: 'Diesel Tanker', imageUrl: '/dieseltanker.jpg', rentPrice: '$150/day', location: 'Doha, Qatar', description: 'A powerful loader for large scale operations.', category: 'Equipment' },
      { id: 5, name: 'Wheel loader', imageUrl: '/Wheelloader.jpg', rentPrice: '$150/day', location: 'Doha, Qatar', description: 'A powerful loader for large scale operations.', category: 'Equipment' },
      { id: 6, name: 'Roller Compactor', imageUrl: '/Rollercompacter.jpg', rentPrice: '$150/day', location: 'Doha, Qatar', description: 'A powerful loader for large scale operations.', category: 'Equipment' },
      { id: 7, name: '7 Ton Forklift', imageUrl:'/7tonforklift.jpg', rentPrice: '$150/day', location: 'Doha, Qatar', description: 'A powerful loader for large scale operations.', category: 'Equipment' },
      { id: 8, name: 'GMC', imageUrl: '/gmc.jpg', rentPrice: '$150/day', location: 'Doha, Qatar', description: 'A powerful loader for large scale operations.', category: 'Equipment' },
      { id: 9, name: 'Generator', imageUrl: '/compressor.jpg', rentPrice: '$150/day', location: 'Doha, Qatar', description: 'A powerful loader for large scale operations.', category: 'Equipment' },
      { id: 10, name: 'Welding Machine', imageUrl: '/welding machine.jpg', rentPrice: '$150/day', location: 'Doha, Qatar', description: 'A powerful loader for large scale operations.', category: 'Equipment' },
      { id: 11, name: 'Air Container', imageUrl: '/aircontainer.jpg', rentPrice: '$150/day', location: 'Doha, Qatar', description: 'A powerful loader for large scale operations.', category: 'Equipment' },
      { id: 12, name: 'Bus', imageUrl:  '/ashokleylandbus.jpg', rentPrice: '$150/day', location: 'Doha, Qatar', description: 'A powerful loader for large scale operations.', category: 'Equipment' },
      { id: 13, name: 'Pickup', imageUrl:'/pickup.jpg', rentPrice: '$150/day', location: 'Doha, Qatar', description: 'A powerful loader for large scale operations.', category: 'Equipment' },
      // { id: 3, name: 'Dyna Truck', imageUrl: '/dynatruck.jpg', rentPrice: '$150/day', location: 'Doha, Qatar', description: 'A powerful loader for large scale operations.', category: 'Equipment' },
      // { id: 3, name: 'Dyna Truck', imageUrl: '/dynatruck.jpg', rentPrice: '$150/day', location: 'Doha, Qatar', description: 'A powerful loader for large scale operations.', category: 'Equipment' },
      // { id: 3, name: 'Dyna Truck', imageUrl: '/dynatruck.jpg', rentPrice: '$150/day', location: 'Doha, Qatar', description: 'A powerful loader for large scale operations.', category: 'Equipment' },
      // { id: 3, name: 'Dyna Truck', imageUrl: '/dynatruck.jpg', rentPrice: '$150/day', location: 'Doha, Qatar', description: 'A powerful loader for large scale operations.', category: 'Equipment' },
     
      // Add more products here (up to 15 products)
    ];

    return allProducts;
  };

  // Fetch product data based on productId from the URL
  useEffect(() => {
    const allProducts = fetchProductData();
    const selectedProduct = allProducts.find(product => product.id === parseInt(productId));
    setProduct(selectedProduct);
  }, [productId]);

  // Handle change in dates and quantity
  const handleDateChange = (e) => {
    const { name, value } = e.target;
    if (name === 'startDate') {
      setStartDate(value);
    } else if (name === 'endDate') {
      setEndDate(value);
    }
  };

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  // Handle Rent Now button click
  const handleRentNow = () => {
    const message = `Hi, I'm interested in renting ${product.name}. Here are the details:
    
    Product: ${product.name}
    Rent Price: ${product.rentPrice}
    Quantity: ${quantity}
    From: ${startDate}
    To: ${endDate}
    Duration: ${Math.floor((new Date(endDate) - new Date(startDate)) / (1000 * 60 * 60 * 24))} days
    
    Please let me know how we can proceed.`;

    const whatsappURL = `https://wa.me/9741475831?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
  };

  if (!product) {
    return <p>Loading product details...</p>;
  }

  return (
    <div className="product-details-page">
      <div className="product-details-container">
        {/* Left Side: Product Image */}
        <div className="product-image">
          <img src={product.imageUrl} alt={product.name} className="product-image-img" />
        </div>

        {/* Right Side: Product Details */}
        <div className="product-info">
          <h2 className="product-name">{product.name}</h2>
          <div className="rent-location">
            {/* <p className="rent-price">{product.rentPrice}</p> */}
          </div>

          <p className="product-description">{product.description}</p>

          <div className="category-info">
            <p><strong>Category:</strong> {product.category}</p>
          </div>

          {/* Date Picker and Duration */}
          <div className="date-duration">
            <label htmlFor="startDate">From: </label>
            <input
              type="date"
              id="startDate"
              name="startDate"
              value={startDate}
              onChange={handleDateChange}
              className="date-input"
            />
            <label htmlFor="endDate">To: </label>
            <input
              type="date"
              id="endDate"
              name="endDate"
              value={endDate}
              onChange={handleDateChange}
              className="date-input"
            />
          </div>

          <p className="duration">
            {startDate && endDate ? `Duration: ${Math.floor((new Date(endDate) - new Date(startDate)) / (1000 * 60 * 60 * 24))} days` : ''}
          </p>

          {/* Quantity and Rent Now Button */}
          <div className="quantity-rent">
            <label htmlFor="quantity">Quantity: 
              <input
                type="number"
                id="quantity"
                name="quantity"
                value={quantity}
                onChange={handleQuantityChange}
                min="1"
                className="quantity-input"
              />
            </label>
            <button onClick={handleRentNow} className="rent-now-btn">Rent Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
