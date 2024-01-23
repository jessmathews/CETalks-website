// Teammember.jsx
import React from 'react';
import teamMemberImage1 from '../assets/img/team/team-1.jpg';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../styles/styles.css';

const Teammember = () => {
  return (
    <section id="team" className="team py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Core Team</h2>
        <p className="text-gray-600">Discover the heartbeat behind CETALKS - where passion meets airwaves</p>
      </div>
      <div className="container mx-auto mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Team Member 1 */}
          <div className="member" data-aos="fade-up" data-aos-delay="100">
          <div className="member-img flex flex-col items-center relative group">
            <img 
              src={teamMemberImage1}
              className="h-64 object-cover rounded-full border-white border-4 mb-4"
              alt="Harry Potter's Profile"
            />
            <div className="overlay opacity-0 group-hover:opacity-100 absolute top-0 left-0 w-full h-full flex justify-center items-center">
              <div className="social-icons mt-20">
                <a href="#" className="text-red-600 mx-2"><i className="bi bi-instagram"></i></a>
                <a href="#" className="text-red-600 mx-2"><i className="bi bi-linkedin"></i></a>
              </div>
            </div>
          </div>
          <div className="member-info text-center mt-4">
            <h4 className="text-xl font-semibold mb-2">Harry Potter</h4>
            <span className="text-gray-500">General Secretary</span>
          </div>
        </div>

        {/* Team Member 2 */}
        <div className="member" data-aos="fade-up" data-aos-delay="200">
        <div className="member-img flex flex-col items-center relative group">
          <img 
            src={teamMemberImage1}
            className="h-64 object-cover rounded-full border-white border-4 mb-4"
            alt="Harry Potter's Profile"
          />
          <div className="overlay opacity-0 group-hover:opacity-100 absolute top-0 left-0 w-full h-full flex justify-center items-center">
            <div className="social-icons mt-20">
              <a href="#" className="text-red-600 mx-2"><i className="bi bi-instagram"></i></a>
              <a href="#" className="text-red-600 mx-2"><i className="bi bi-linkedin"></i></a>
            </div>
          </div>
        </div>
        <div className="member-info text-center mt-4">
          <h4 className="text-xl font-semibold mb-2">Harry Potter</h4>
          <span className="text-gray-500">General Secretary</span>
        </div>
      </div>

      {/* Team Member 3 */}
      <div className="member" data-aos="fade-up" data-aos-delay="300">
      <div className="member-img flex flex-col items-center relative group">
        <img 
          src={teamMemberImage1}
          className="h-64 object-cover rounded-full border-white border-4 mb-4"
          alt="Harry Potter's Profile"
        />
        <div className="overlay opacity-0 group-hover:opacity-100 absolute top-0 left-0 w-full h-full flex justify-center items-center">
          <div className="social-icons mt-20">
            <a href="#" className="text-red-600 mx-2"><i className="bi bi-instagram"></i></a>
            <a href="#" className="text-red-600 mx-2"><i className="bi bi-linkedin"></i></a>
          </div>
        </div>
      </div>
      <div className="member-info text-center mt-4">
        <h4 className="text-xl font-semibold mb-2">Harry Potter</h4>
        <span className="text-gray-500">General Secretary</span>
      </div>
    </div>

    {/* Team Member 4 */}
    <div className="member" data-aos="fade-up" data-aos-delay="400">
    <div className="member-img flex flex-col items-center relative group">
      <img 
        src={teamMemberImage1}
        className="h-64 object-cover rounded-full border-white border-4 mb-4"
        alt="Harry Potter's Profile"
      />
      <div className="overlay opacity-0 group-hover:opacity-100 absolute top-0 left-0 w-full h-full flex justify-center items-center">
        <div className="social-icons mt-20">
          <a href="#" className="text-red-600 mx-2"><i className="bi bi-instagram"></i></a>
          <a href="#" className="text-red-600 mx-2"><i className="bi bi-linkedin"></i></a>
        </div>
      </div>
    </div>
    <div className="member-info text-center mt-4">
      <h4 className="text-xl font-semibold mb-2">Harry Potter</h4>
      <span className="text-gray-500">General Secretary</span>
    </div>
    </div>

    {/* Team Member 5 */}
    <div className="member" data-aos="fade-up" data-aos-delay="500">
    <div className="member-img flex flex-col items-center relative group">
        <img 
        src={teamMemberImage1}
        className="h-64 object-cover rounded-full border-white border-4 mb-4"
        alt="Harry Potter's Profile"
        />
        <div className="overlay opacity-0 group-hover:opacity-100 absolute top-0 left-0 w-full h-full flex justify-center items-center">
        <div className="social-icons mt-20">
            <a href="#" className="text-red-600 mx-2"><i className="bi bi-instagram"></i></a>
            <a href="#" className="text-red-600 mx-2"><i className="bi bi-linkedin"></i></a>
        </div>
        </div>
    </div>
    <div className="member-info text-center mt-4">
        <h4 className="text-xl font-semibold mb-2">Harry Potter</h4>
        <span className="text-gray-500">General Secretary</span>
    </div>
    </div>

        {/* Team Member 6 */}
        <div className="member" data-aos="fade-up" data-aos-delay="600">
        <div className="member-img flex flex-col items-center relative group">
        <img 
            src={teamMemberImage1}
            className="h-64 object-cover rounded-full border-white border-4 mb-4"
            alt="Harry Potter's Profile"
        />
        <div className="overlay opacity-0 group-hover:opacity-100 absolute top-0 left-0 w-full h-full flex justify-center items-center">
            <div className="social-icons mt-20">
            <a href="#" className="text-red-600 mx-2"><i className="bi bi-instagram"></i></a>
            <a href="#" className="text-red-600 mx-2"><i className="bi bi-linkedin"></i></a>
            </div>
        </div>
        </div>
        <div className="member-info text-center mt-4">
        <h4 className="text-xl font-semibold mb-2">Harry Potter</h4>
        <span className="text-gray-500">General Secretary</span>
        </div>
        </div>

        </div>
      </div>
    </section>
  );
};

export default Teammember;
