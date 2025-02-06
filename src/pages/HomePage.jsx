import React from 'react';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <h1 className="hero-title">From Concept to Creation</h1>
        <p className="hero-description">
          Explore our services and discover the perfect solution for your needs.
        </p>
        <a href="/services">
  <button className="explore-btn">Explore</button>
</a>

      </div>
    </div>
  );
};


// Category Section
const CategorySection = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    // Navigate to the CategoryPage with the category as a URL parameter
    navigate(`/category/${category}`);
  };

  return (
    <section className="category-section">
      <div className="category-header">
        <h2>Explore Categories</h2>
      </div>
      <div className="underline"></div>
      <div className="category-grid">
        <div className="category-card" onClick={() => handleCategoryClick('equipment-rentals')}>
          <img src="/Backholeloader.jpg" alt="Category 1" />
          <p>Equipment Rentals</p>
        </div>
        <div className="category-card" onClick={() => handleCategoryClick('machinery-vehicle-rentals')}>
          <img src="/Backholeloader.jpg" alt="Category 2" />
          <p>Vehicle Rentals</p>
        </div>
        <div className="category-card" onClick={() => handleCategoryClick('machinery')}>
          <img src="/Backholeloader.jpg" alt="Category 3" />
          <p>Machinaries</p>
        </div>
        {/* <div className="category-card" onClick={() => handleCategoryClick('services')}>
          <img src="/Backholeloader.jpg" alt="Category 4" />
          <p>Material Supply</p>
        </div> */}
      </div>
    </section>
  );
};

// About Section
const AboutSection = () => {
  const navigate = useNavigate();

  return (
    <section className="about-section">
      <h2 className="about-heading">About Us</h2>
      <div className="about-container">
        <div className="about-right">
          <img src="/Backholeloader.jpg" alt="About Us" className="about-image" />
        </div>
        <div className="about-left">
          <p className="about-description">
            Fahad Engineering is a Saudi-owned company operating from Jubail city, established over 2006, under Commercial Registration No: 2057007979.
            Fahad Engineering is a rapidly expanding organization offering a wide range of Engineering support and services in the field of Equipment rental,
            Manpower supply, Trading and material supply, Instrumentation & Control System Engineering works, and Electrical & Power Construction works.
            <br /><br />
            As a result of our continuous pursuit of recognition and devoted customer service during the past ten years, we have secured the confidence and appreciation
            of our clients. Our highly qualified and technically skilled staff in the field of Civil, Mechanical, Electrical, and Instrumentation is our company's biggest asset.
            Fahad Engineering maintains an excellent Customer Service network, guaranteeing each client fast & comprehensive service.
          </p>
          <button className="explore-btn" onClick={() => navigate('/about')}>Explore More</button>
        </div>
      </div>
    </section>
  );
};

// Our Clients Section
const ClientsSection = () => {
  return (
    <section className="clients-section">
      <h2 className="clients-heading">Our Clients</h2>
      <div className="clients-container">
        <div className="client-logo">
          <img src="/anabeeblogo.jpg" alt="Client 1" />
        </div>
        <div className="client-logo">
          <img src="/yokogamalogo.jpg" alt="Client 1" />
        </div>
        <div className="client-logo">
          <img src="/aytblogo.jpg" alt="Client 1" />
        </div>
        <div className="client-logo">
          <img src="/cc-7logo.jpg" alt="Client 1" />
        </div>
        <div className="client-logo">
          <img src="/cnceclogo.jpg" alt="Client 1" />
        </div>
        <div className="client-logo">
          <img src="/gs&eclogo.jpg" alt="Client 1" />
        </div>
        <div className="client-logo">
          <img src="/honeywelllogo.jpg" alt="Client 1" />
        </div>
        <div className="client-logo">
          <img src="/kbrlogo.jpg" alt="Client 1" />
        </div>
        <div className="client-logo">
          <img src="/mcclogo.jpg" alt="Client 2" />
        </div>
        <div className="client-logo">
          <img src="/nesmalogo.jpg" alt="Client 2" />
        </div>
        <div className="client-logo">
          <img src="/sabiclogo.jpg" alt="Client 2" />
        </div>
        <div className="client-logo">
          <img src="/sinopeclogo.jpg" alt="Client 2" />
        </div>
      </div>
    </section>
  );
};

// // Featured Equipments Section
// const FeaturedEquipmentsSection = () => {
//   return (
//     <section className="featured-equipments-section">
//       <h2 className="featured-equipments-heading">Featured Equipments</h2>
//       <div className="featured-equipments-container">
//         <div className="equipment-card">
//           <img src="/Backholeloader.jpg" alt="Equipment 1" className="equipment-image" />
//           <button className="view-details-btn">View Details</button>
//         </div>
//         <div className="equipment-card">
//           <img src="equipment2.jpg" alt="Equipment 2" className="equipment-image" />
//           <button className="view-details-btn">View Details</button>
//         </div>
//       </div>
//     </section>
//   );
// };

// Main Homepage Component
const HomePage = () => {
  return (
    <div className="homepage">
      <HeroSection />
      <CategorySection />
      <AboutSection />
      <ClientsSection />
      {/* <FeaturedEquipmentsSection /> */}
    </div>
  );
};

export default HomePage;
