// Teammember.jsx
import React from 'react';
import MemberCard from './MemberCard'; // Import your MemberCard component here
import teamMemberImage1 from '../assets/img/team/team-1.jpg';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../styles/styles.css';

const Teammember = () => {
  return (
    <section id="team" className="team py-8 lg:py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl xl:text-[3rem] font-normal mb-7 lg:mb-12 text-white outfit-font">EXECOM 2023-24</h2>
        <p className="text-white"></p>
      </div>
      <div className="container mx-auto mt-8">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-8">
          {/* Team Member 1 */}
          <MemberCard
            name="Harry Potter"
            position="Chairperson"
            image={teamMemberImage1}
            instagram="#"
            linkedin="#"
          />

          {/* Team Member 2 */}
          <MemberCard
            name="Another Member"
            position="Vice Chairperson"
            image={teamMemberImage1}
            instagram="#"
            linkedin="#"
          />

          {/* Team Member 3 */}
          <MemberCard
            name="Yet Another Member"
            position="Chief RJ"
            image={teamMemberImage1}
            instagram="#"
            linkedin="#"
          />

          {/* Team Member 4 */}
          <MemberCard
            name="Yet Another Member"
            position="General Secretary"
            image={teamMemberImage1}
            instagram="#"
            linkedin="#"
          />

          {/* Team Member 5 */}
          <MemberCard
            name="Harry Potter"
            position="Program Head"
            image={teamMemberImage1}
            instagram="#"
            linkedin="#"
          />

          {/* Team Member 6 */}
          <MemberCard
            name="Another Member"
            position="Program coordinator"
            image={teamMemberImage1}
            instagram="#"
            linkedin="#"
          />

          {/* Team Member 7 */}
          <MemberCard
            name="Yet Another Member"
            position="Design Head"
            image={teamMemberImage1}
            instagram="#"
            linkedin="#"
          />

          {/* Team Member 8 */}
          <MemberCard
            name="Yet Another Member"
            position="Design Head"
            image={teamMemberImage1}
            instagram="#"
            linkedin="#"
          />

          {/* Team Member 9 */}
          <MemberCard
            name="Harry Potter"
            position="Media Head"
            image={teamMemberImage1}
            instagram="#"
            linkedin="#"
          />

          {/* Team Member 10 */}
          <MemberCard
            name="Another Member"
            position="Media Head"
            image={teamMemberImage1}
            instagram="#"
            linkedin="#"
          />

          {/* Team Member 11 */}
          <MemberCard
            name="Yet Another Member"
            position="Technical Head"
            image={teamMemberImage1}
            instagram="#"
            linkedin="#"
          />

          {/* Team Member 12 */}
          <MemberCard
            name="Yet Another Member"
            position="Technical Head"
            image={teamMemberImage1}
            instagram="#"
            linkedin="#"
          />
          {/* Add more Team Members as needed */}
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 mt-7 lg:mt-10 lg:ml-10 lg:mr-10 xl:ml-40 xl:mr-40">
        
          {/* Team Member 13 */}
          <MemberCard
            name="Harry Potter"
            position="Public Relations"
            image={teamMemberImage1}
            instagram="#"
            linkedin="#"
          />

          {/* Team Member 14 */}
          <MemberCard
            name="Another Member"
            position="Public Relations"
            image={teamMemberImage1}
            instagram="#"
            linkedin="#"
          />
          <div className="col-span-2 lg:col-span-1 mx-auto">
          {/* Team Member 15 */}
          <MemberCard
            name="Yet Another Member"
            position="Social Media Manager"
            image={teamMemberImage1}
            instagram="#"
            linkedin="#"
          />
        </div>
        </div>

      </div>


    </section>
  );
};

export default Teammember;
