// Contact.jsx

import React from 'react';
import Header from '../components/Header';
import ContactMap from '../components/ContactMap';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const Contact = () => {
  // Your Contact component logic
  return (
    <div className="bg-07060e">
    <Header />
    <div className="mt-20"></div>
      <ContactSection />
      <ContactMap />
      <Footer />
    </div>
  );
};

export default Contact;
