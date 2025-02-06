import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import HomePage from "./pages/HomePage.jsx";
import AboutUsPage from "./pages/AboutUsPage.jsx";
import CategoryPage from "./pages/CategoryPage.jsx";
import ProductDetailsPage from "./pages/ProductDetailsPage.jsx"; // Import the ProductDetailsPage
import Services from "./pages/Services.jsx";


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/services" element={<Services/>} />
          <Route path="/category/:category" element={<CategoryPage />} /> {/* Dynamic Category Route */}
          <Route path="/product-details/:productId" element={<ProductDetailsPage />} /> {/* Dynamic Product Details Route */}
          
        </Routes>
    
      </div>
    </Router>
  );
}

export default App;
