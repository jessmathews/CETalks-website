import React from 'react';
import emailjs from '@emailjs/browser';
import '../styles/ContactSection.css';
import facebookIcon from '../assets/img/social-icons/facebook@2x.png';
import instagramIcon from '../assets/img/social-icons/instagram@2x.png';
import { useState } from 'react';

const ContactSection = () => {

  //Added the constants
  const[name,setName] = useState('');
  const[email,setEmail] = useState('');
  const[phoneNumber,setPhNo] = useState('');
  const[message,setMsg] = useState('');

  // created the handleSubmit function
  const handleSubmit = (e) => {
    e.preventDefault();
    // Correctly access environment variables
    const serviceID = import.meta.env.VITE_SERVICEID;
    const templateID = import.meta.env.VITE_TEMPLATEID;
    const publicKey = import.meta.env.VITE_PUBLICKEY;
   
    // create an object that has dynamic template parameters
    const template_params = {
       from_name: name,
       email_ID: email,
       Mob_no: phoneNumber,
       message: message,
       to_name: "CETalks",
    }
   
    emailjs.send(serviceID, templateID, template_params, publicKey)
    .then((response) =>{
       console.log("Email Sent Successfully",response);
       setName('');
       setEmail('');
       setPhNo('');
       setMsg('');
    })
    .catch((error) => {
       console.error("Error sending Email:",error)
    });
   }
   

  return (
    <section className="contact-section py-5 bg-dust bg-07060e">
      <div className="contact-top py-lg-5 py-md-4 py-2 ">
        <div className="container mx-auto">
          <div className="title-container text-center mx-auto mb-md-5 mb-4" style={{ maxWidth: '500px' }}>
            <h5 className="subtitle text-[1.5rem] text-yellow-200 outfit-font">
              <span className="underline-space">Get In</span>  Touch
            </h5>
            <h3 className="main-title text-[3.2rem] text-white outfit-font font-[500]">Contact Us</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 lg:gap-6">
            <div className="col-md-8 contact-form bg-07060e bg-dust">
              <form onSubmit={handleSubmit} className="main-input">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 lg:gap-6">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      name="fullName"
                      id="fullName"
                      required=""
                      className="input-field ml-4"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      id="email"
                      required=""
                      className="input-field ml-4"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
                <input
                  type="text"
                  placeholder="Your Phone Number"
                  name="phoneNumber"
                  id="phoneNumber"
                  required=""
                  className="input-field mt-1 lg:mt-2 mb-5 lg:mb-6 ml-4"
                  value={phoneNumber}
                  onChange={(e) => setPhNo(e.target.value)}
                />
                <textarea
                  placeholder="Your Message"
                  name="message"
                  id="message"
                  required=""
                  className="input-field ml-4"
                  value={message}
                  onChange={(e) => setMsg(e.target.value)}
                ></textarea>
                <div className="flex justify-center md:justify-end mt-4">
                  <button type="submit" className="btn btn-primary px-6 py-3 bg-07060e">
                    Send Now
                  </button>
                </div>
              </form>
            </div>
            <div className="col-md-4 contact-info ps-lg-5 mt-md-0 mt-4 ml-6">
              <div className="title-style mb-4 text-[2.3rem] font-[500] text-yellow-200">Contact Info</div>
              <div className="contact-details">
                <a href="mailto:hello@example.com" className="contact-link text-primary">
                  <p className="contact-text text-white text-[1.3rem] p-3 hover:text-yellow-100">hello@example.com</p>
                </a>
                <a href="tel:+7-800-999-800" className="contact-link text-primary">
                  <p className="contact-text text-white text-[1.3rem] p-3 hover:text-yellow-100">+7-800-999-800</p>
                </a>
                <p className="contact-text text-white text-[1.3rem] p-3 hover:text-yellow-100">College Of Engineering Trivandrum, Sreekaryam, <br />Trivandrum.</p>
                <div className="social-buttons mt-4 flex">
                  <a href="https://www.facebook.com/CETalks/" className="social-link text-primary hover:text-red-500">
                    <img src={facebookIcon} alt="Facebook" className="icon h-8" />
                  </a>
                  <a href="https://www.instagram.com/cetalks/" className="social-link text-primary hover:text-red-500">
                    <img src={instagramIcon} alt="Instagram" className="icon h-8" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;