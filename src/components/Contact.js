import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

function Contact() {
  return (
    <div className="contact-section">
        
      <h2>Contactez-nous</h2>
      <div className="contact-info">
        <div className="contact-item">
          <FontAwesomeIcon icon={faPhone} />
          <p>+212 630030180</p>
        </div>
        <div className="contact-item">
          <FontAwesomeIcon icon={faEnvelope} />
          <p>contact@highfly.com</p>
        </div>
        <div className="contact-item">
          <FontAwesomeIcon icon={faMapMarkerAlt} />
          <p>123 Rue de Mghila, 75001 beni melal</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;