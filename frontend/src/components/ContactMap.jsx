import React from 'react';

const ContactMap = () => {
  return (
    <section className="w3l-contacts-1">
      <div className="contacts">
        <div className="contacts-content relative">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3945.5204101451295!2d76.90376577477467!3d8.545851291497476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05bec79541c519%3A0x98324eb5aafb3778!2sCollege%20of%20Engineering%20Trivandrum%20(CET)!5e0!3m2!1sen!2sin!4v1707408434158!5m2!1sen!2sin"
            className="w-full h-120 md:h-96"
            frameBorder="0"
            style={{ border: '0'}}
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ContactMap;
