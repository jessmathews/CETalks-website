// Teammember.jsx
import React from 'react';
import MemberCard from './MemberCard'; // Import your MemberCard component here
import teamMemberImage1 from '../assets/img/team/team-1.jpg';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../styles/styles.css';

const Teammember = () => {
  return (
    <section id="team" className="team py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4 text-white">Core Team</h2>
        <p className="text-white">Discover the heartbeat behind CETALKS - where passion meets airwaves</p>
      </div>
      <div className="container mx-auto mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Team Member 1 */}
          <MemberCard
            name="Harry Potter"
            position="General Secretary"
            image={teamMemberImage1}
            instagram="#"
            linkedin="#"
          />

          {/* Team Member 2 */}
          <MemberCard
            name="Another Member"
            position="Position"
            image={teamMemberImage1}
            instagram="#"
            linkedin="#"
          />

          {/* Team Member 3 */}
          <MemberCard
            name="Yet Another Member"
            position="Another Position"
            image={teamMemberImage1}
            instagram="#"
            linkedin="#"
          />

          {/* Team Member 4 */}
          <MemberCard
            name="Yet Another Member"
            position="Another Position"
            image={teamMemberImage1}
            instagram="#"
            linkedin="#"
          />

          {/* Team Member 5 */}
          <MemberCard
            name="Harry Potter"
            position="General Secretary"
            image={teamMemberImage1}
            instagram="#"
            linkedin="#"
          />

          {/* Team Member 6 */}
          <MemberCard
            name="Another Member"
            position="Position"
            image={teamMemberImage1}
            instagram="#"
            linkedin="#"
          />

          {/* Team Member 7 */}
          <MemberCard
            name="Yet Another Member"
            position="Another Position"
            image={teamMemberImage1}
            instagram="#"
            linkedin="#"
          />

          {/* Team Member 8 */}
          <MemberCard
            name="Yet Another Member"
            position="Another Position"
            image={teamMemberImage1}
            instagram="#"
            linkedin="#"
          />

          {/* Add more Team Members as needed */}
        </div>
      </div>





      <div className="container mx-auto text-center mt-20">
        <h2 className="text-3xl font-bold mb-4 text-white">Team A</h2>
      </div>
      <div className="container mx-auto mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Team Member 1 */}
          <MemberCard
            name="Harry Potter"
            position="General Secretary"
            image={teamMemberImage1}
            instagram="#"
            linkedin="#"
          />

          {/* Team Member 2 */}
          <MemberCard
            name="Another Member"
            position="Position"
            image={teamMemberImage1}
            instagram="#"
            linkedin="#"
          />

          {/* Team Member 3 */}
          <MemberCard
            name="Yet Another Member"
            position="Another Position"
            image={teamMemberImage1}
            instagram="#"
            linkedin="#"
          />

          {/* Team Member 4 */}
          <MemberCard
            name="Yet Another Member"
            position="Another Position"
            image={teamMemberImage1}
            instagram="#"
            linkedin="#"
          />

          {/* Team Member 5 */}
          <MemberCard
            name="Harry Potter"
            position="General Secretary"
            image={teamMemberImage1}
            instagram="#"
            linkedin="#"
          />

          {/* Team Member 6 */}
          <MemberCard
            name="Another Member"
            position="Position"
            image={teamMemberImage1}
            instagram="#"
            linkedin="#"
          />

          {/* Add more Team Members as needed */}
        </div>
      </div>






      <div className="container mx-auto text-center mt-20">
        <h2 className="text-3xl font-bold mb-4 text-white">Team B</h2>
      </div>
      <div className="container mx-auto mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Team Member 1 */}
          <MemberCard
            name="Harry Potter"
            position="General Secretary"
            image={teamMemberImage1}
            instagram="#"
            linkedin="#"
          />

          {/* Team Member 2 */}
          <MemberCard
            name="Another Member"
            position="Position"
            image={teamMemberImage1}
            instagram="#"
            linkedin="#"
          />

          {/* Team Member 3 */}
          <MemberCard
            name="Yet Another Member"
            position="Another Position"
            image={teamMemberImage1}
            instagram="#"
            linkedin="#"
          />

          {/* Team Member 4 */}
          <MemberCard
            name="Yet Another Member"
            position="Another Position"
            image={teamMemberImage1}
            instagram="#"
            linkedin="#"
          />

          {/* Team Member 5 */}
          <MemberCard
            name="Harry Potter"
            position="General Secretary"
            image={teamMemberImage1}
            instagram="#"
            linkedin="#"
          />

          {/* Team Member 6 */}
          <MemberCard
            name="Another Member"
            position="Position"
            image={teamMemberImage1}
            instagram="#"
            linkedin="#"
          />

          {/* Add more Team Members as needed */}
        </div>
      </div>
    </section>
  );
};

export default Teammember;