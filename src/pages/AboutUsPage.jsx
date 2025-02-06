import React from 'react';

const AboutUsPage = () => {
  return (
    <section className="about-section">
      <h2 className="about-heading">About Us</h2>
      <div className="about-container">
        <div className="about-right">
          <img src="/Backholeloader.jpg" alt="About Us" className="about-image" />
        </div>
        <div className="about-left">
          <p className="about-description">
            Fahad Engineering is a Saudi-owned company operating from Jubail city, established in 2006, under Commercial Registration No: 2057007979.
            Fahad Engineering is a rapidly expanding organization offering a wide range of Engineering support and services in the field of Equipment rental,
            Manpower supply, Trading and material supply, Instrumentation & Control System Engineering works, and Electrical & Power Construction works.
            <br /><br />
            As a result of our continuous pursuit of recognition and devoted customer service during the past ten years, we have secured the confidence and appreciation
            of our clients. Our highly qualified and technically skilled staff in the field of Civil, Mechanical, Electrical, and Instrumentation is our company's biggest asset.
            Fahad Engineering maintains an excellent Customer Service network, guaranteeing each client fast & comprehensive service. Customers' needs are always
            given priority, understanding their requirements, coming up with immediate & effective responses, delivering the most reliable solution & optimum services.
          </p>
        </div>
      </div>

      {/* Mission and Vision Sections */}
      <section className="mission-vision-section">
        {/* Mission Section */}
        <div className="mission-section">
          <div className="mission-left">
            <h3 className="mission-heading">Our Mission</h3>
            <p className="mission-description">
              Quality, Performance, Customer Oriented Attitude and Quest for Excellence are of paramount importance to Fahad Engineering.
              <br />Our mission is to become the premier service provider contracting company in the Kingdom of Saudi Arabia, delivering and accomplishing industrial projects and services with the state of passion of art.
              <br />Through teamwork and partnership, achieving excellence while continuously striving for the highest quality and cost-effectiveness, maximizing profits for our clients.
            </p>
          </div>
        </div>

        {/* Vision Section */}
        <div className="vision-section">
          <div className="vision-right">
            <h3 className="vision-heading">Our Vision</h3>
            <p className="vision-description">
              Adhere to the highest standards of business integrity & ethics, building respect and trust with our clients, delivering the best of our services. 
              <br />
              Create a passionate and enjoyable working environment for our employees, encouraging them to work responsibly. 
              <br />
              Comply with the laws of the country in which we conduct our business.
            </p>
          </div>
        </div>
      </section>

      {/* Scope of Business Section */}
      <section className="scope-of-business-section">
        <h3 className="scope-heading">Scope of Business</h3>
        <ul className="scope-list">
          <li>• Heavy & light equipment rental</li>
          <li>• Manpower Resource</li>
          <li>• Instrumentation & Electrical pre-commissioning / commissioning work</li>
          <li>• Machinery & Vehicle rentals</li>
          <li>• Field Instrumentation & Control System Engineering Projects & Services</li>
        </ul>
      </section>
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
    </section>
    
  );
};


export default AboutUsPage;
