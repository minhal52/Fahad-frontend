import React from "react";

const Services = () => {
  return (
    <div className="services-page">
      {/* Manpower Supply Section */}
      <section className="manpower-supply-section">
        <h2 className="manpower-heading">Manpower Supply</h2>
        <div className="manpower-container">
          {/* Image Section */}
          <div className="manpower-right">
            <img src="/manpower-supply.jpg" alt="Manpower Supply" className="manpower-image" />
          </div>

          {/* Description Section */}
          <div className="manpower-left">
            <p className="manpower-description">
              Engineering rapidly expanding organization offering a wide range of engineering and technical support in the field of construction maintenance and manpower supply services. As a result of our continuous pursuit for recognition and devoted customer service over the past ten years, we have highly qualified and technically skilled staff in various categories such as Civil, Mechanical, Electrical, and Instrumentation.
              <br /><br />
              Before we provide the required manpower or labor to our customers, we check the candidates on the following basis:
              <ul>
                <li>Exact Documentation</li>
                <li>Behavioral Interviews</li>
                <li>Training</li>
                <li>Reference Checking</li>
                <li>Police Verification</li>
              </ul>
            </p>
          </div>
        </div>
      </section>

      {/* Instrumentation Section */}
      <section className="instrumentation-section">
        <h2 className="instrumentation-heading">Instrumentation</h2>
        <div className="instrumentation-container">
          {/* Content Section */}
          <div className="instrumentation-left">
            <p className="instrumentation-description">
              Fahad Instrumentations specializes in instrumentation and control system projects with the latest technology. We handle integration and assembly of various types of cabinets, site installation, cable distribution, commissioning, and control systems, ensuring seamless operation. Our expertise covers process automation systems, technical support, pre-commissioning, and troubleshooting.
              <br /><br />
              We have extensive experience working with advanced process automation systems such as SCADA/DCS/ESD, RTU (Yokogawa, Emerson, ABB, Siemens, etc.), Turbine Control Systems (CCS/Woodward), Vibration Monitoring Systems (VMS/GE), and Temperature Monitoring Systems. Our knowledge extends to protocols like OPC, MODBUS, PROFIBUS, ensuring seamless system communication and integration.
              <br /><br />
             
            </p>
          </div>

          {/* Image Section */}
          <div className="instrumentation-right">
            <img src="/instrumentation erection.png" alt="Instrumentation" className="instrumentation-image" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
