// Teammember.jsx
import React from 'react';
import MemberCard from './MemberCard'; // Import your MemberCard component here
import Niha from '../assets/img/team/niha_fathima.png';
import Basil from '../assets/img/team/basil_sabu.png';
import meera from '../assets/img/team/meera_sreekumar.png';
import agrima from '../assets/img/team/agrima.png';
import anufrancis from '../assets/img/team/anu_francis_alapatt.png';
import fayas from '../assets/img/team/fayas_abdul_rahim.png';
import irfan from '../assets/img/team/mohammed_irfan.png';
import rohan from '../assets/img/team/rohan_vijayakumar.png';
import sherin from '../assets/img/team/sherin_mary_rajee.png';
import sreelakshmy from '../assets/img/team/sreelakshmy_ajit.png'
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../styles/styles.css';

const Teammember = () => {
  return (
    <section id="team" className="team py-8 lg:py-16">
      <div className="container mx-auto text-center">
        <span className="text-[2.5rem] text-center outfit-font whitespace-nowrap inline-block bg-gradient-to-b from-[#E8E034] to-[#CA3035] bg-clip-text text-transparent gradient-border font-normal text-6xl leading-[6rem]" style={{ paddingBottom: "0.5rem" }}>Our Team</span>

      </div>
      <section className='py-8 lg:py-16'>
        <div className='flex flex-row outfit-font flex-wrap justify-center h-2/3'>
          <div className='flex flex-col items-center justify-center w-[185px]'>
            <div className="text-[2rem] md:text-[2.5rem] lg:text-[3rem] bg-gradient-to-b from-[#E8E034] to-[#C83134] bg-clip-text text-transparent inline-block leading">RJ</div>
            <div className="text-[1.3rem] md:text-[1.7rem] lg:text-[2rem] leading-5 text-white uppercase">Team</div>
          </div>
          <div className='flex flex-row items-center justify-around flex-wrap m-4 max-w-[850px] gap-4'>
            <MemberCard
              name='Niha Fathima'
              image={Niha}
            >
            </MemberCard>
            <MemberCard
              name='Basil Sabu'
              image={Basil}
            >
            </MemberCard>
            <MemberCard
              name='Meera Sreekumar'
              image={meera}>

            </MemberCard>
            <MemberCard
              name="Agrima V"
              image={agrima}>
            </MemberCard>
            <MemberCard name='Anu Francis Alapatt'
              image={anufrancis}>
            </MemberCard>

          </div>
        </div>
      </section>
      <section className='py-8 lg:py-16'>
        <div className='flex flex-row outfit-font flex-wrap justify-center h-2/3'>
          <div className='flex flex-col items-center justify-center w-[185px]'>
            <div className="text-[2rem] md:text-[2.5rem] lg:text-[3rem] bg-gradient-to-b from-[#E8E034] to-[#C83134] bg-clip-text text-transparent inline-block leading uppercase">Design</div>
            <div className="text-[1.3rem] md:text-[1.7rem] lg:text-[2rem] leading-5 text-white uppercase">Team</div>
          </div>
          <div className='flex flex-row items-center justify-around flex-wrap m-8 max-w-[850px] gap-4'>
            <MemberCard
              name='Rohan Vijayakumar'
              image={rohan}
              github=''>
            </MemberCard>
            <MemberCard name='Fayas Abdul Rahim'
              image={fayas}
            >
            </MemberCard>
          </div>
        </div>
      </section>
      <section className='py-8 lg:py-16'>
        <div className='flex flex-row outfit-font flex-wrap justify-center h-2/3'>
          <div className='flex flex-col items-center justify-center w-[185px]'>
            <div className="text-[2rem] md:text-[2.5rem] lg:text-[3rem] bg-gradient-to-b from-[#E8E034] to-[#C83134] bg-clip-text text-transparent inline-block leading uppercase">Program</div>
            <div className="text-[1.3rem] md:text-[1.7rem] lg:text-[2rem] leading-5 text-white uppercase">Team</div>
          </div>
          <div className='flex flex-row items-center justify-around flex-wrap m-8 max-w-[850px] gap-4'>
            <MemberCard
              name='Sherin Mary Rajee'
              image={sherin}>
            </MemberCard>
            <MemberCard name='Sreelakshmy Ajit'
              image={sreelakshmy}
            >
            </MemberCard>
          </div>
        </div>
      </section>
      <section className='py-8 lg:py-16'>
        <div className='flex flex-row outfit-font flex-wrap justify-center h-2/3'>
          <div className='flex flex-col items-center justify-center w-[185px]'>
            <div className="text-[2rem] md:text-[2.5rem] lg:text-[3rem] bg-gradient-to-b from-[#E8E034] to-[#C83134] bg-clip-text text-transparent inline-block leading uppercase">Tech</div>
            <div className="text-[1.3rem] md:text-[1.7rem] lg:text-[2rem] leading-5 text-white uppercase">Team</div>
          </div>
          <div className='flex flex-row items-center justify-around flex-wrap m-8 max-w-[850px] gap-4'>
            <MemberCard
              name='Mohammed Irfan'
              image={irfan}
              github=''>
            </MemberCard>
          </div>
        </div>
      </section>

    </section>
  );
};

export default Teammember;
