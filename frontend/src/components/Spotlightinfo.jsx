import React from "react";
import AbhishekNirmal from '../assets/img/spotlight/sl1.png';
import Narpath from '../assets/img/spotlight/sl2.png';
import Rahul from '../assets/img/spotlight/sl3.png';
import Chris from '../assets/img/spotlight/sl4.png';
import Sorabh from '../assets/img/spotlight/sl5.png';
import Suhani from '../assets/img/spotlight/sl6.png';


const SpotlightInfo = () => {
  return (
    <div className="w-full relative bg-07060e overflow-hidden flex flex-col items-center justify-start pt-[10rem] pb-[1.688rem] pr-[1.25rem] pl-[1.25rem] box-border gap-[10.5rem_0rem] tracking-[normal] text-center text-[3.125rem] text-white outfit-font lg:gap-[10.5rem_0rem] lg:pl-[2.5rem] lg:box-border mq750:gap-[10.5rem_0rem] mq450:gap-[10.5rem_0rem]">
      <section className="flex flex-col items-center h-screen">
        <div className="flex ">
          <div className="flex flex-col">
            <div className="relative">
              CETALKS
            </div>
            <div className="relative text-[3.5rem] leading-[3.5rem] font-medium bg-gradient-to-b from-[#E8E034] to-[#CA3035] bg-clip-text text-transparent inline-block " >
              SPOTLIGHT
            </div>
          </div>
        </div>

        <div className="w-full flex justify-center items-center mt-[3.125rem]">
          <span className="text-[2.5rem] text-center text-white font-open-sans whitespace-nowrap inline-block" style={{ borderBottom: "2px solid gold", paddingBottom: "0.5rem" }}>Over the Years</span>
        </div>
      </section>


      <section className="w-screen flex flex-row flex-wrap pt-[0rem] px-[0rem] pb-[0.313rem] box-border max-w-full text-center text-4xl text-gold  justify-center" >
        <div className="flex justify-center w-1/3 min-w-[290px]"><img
          className=" w-1/3 min-w-[290px]"
          loading="lazy"
          alt="Abhishek & Nirmal" src={AbhishekNirmal} />
        </div>
        <div className="flex flex-col items-center justify-center w-[33rem] mr-2 min-width-[350px]">
          <div className=" relative tracking-[0.05em] font-medium inline-block text-3xl">
            <span>ABHISHEK</span>
            <span className="text-white">{` and `}</span>
            <span>NIRMAL</span>
          </div>
          <div className=" relative  text-white text-justify inline-block text-xl leading-9">
            This dynamic duo from India, known for their charisma and charm, has carved a prominent niche for themselves in the world of reels, live shows, feature films, and web series. Notably, they were listed on Instagram's official roster of 25 under 25 influencers for the year 2021, further solidifying their impact in the digital sphere.
          </div>
        </div>

      </section>
      <section className="w-screen flex flex-row flex-wrap pt-[0rem] px-[0rem] pb-[0.313rem] box-border max-w-full text-center text-4xl text-gold  justify-center" >
            <div className="flex flex-col items-center justify-center w-[33rem] mr-2 min-width-[350px]">
            <div className=" relative tracking-[0.05em] font-medium inline-block text-3xl ">
              <span>NARPATH RAMAN</span>
            </div>
            <div className=" relative  text-white text-justify inline-block text-xl leading-9">
              An Indian mentalist named as one of the top 20 inspiring men in
              2017 . He is simply an expert in altering thoughts and amusing
              people. Known for delving into celebrities' minds, he
              effortlessly sparked curiosity among the audience.
            </div>
            </div>

          <div className="flex justify-center w-1/3 min-w-[290px]">
            <img
              className=" w-1/3 min-w-[290px]"
              loading="lazy"
              alt="Narpath Raman" src={Narpath} />
          </div>


      </section>

      <section className="w-screen flex flex-row flex-wrap pt-[0rem] px-[0rem] pb-[0.313rem] box-border max-w-full text-center text-4xl text-gold  justify-center" >
        <div className="flex justify-center w-1/3">
          <img
            className=" w-1/3 min-w-[290px]"
            loading="lazy"
            alt="Rahul Subramanian" src={Rahul} />
        </div>
        <div className="flex flex-col items-center justify-center w-[33rem] mr-2 min-width-[350px]">
          <div className=" relative tracking-[0.05em] font-medium inline-block text-3xl">
            <span>RAHUL SUBRAMANIAN</span>
          </div>
          <div className=" relative  text-white text-justify inline-block text-xl leading-9">
            Rahul Subramanian is a brand-manager-turned-comedian who realized a little too
            late in life that he was too redundant for the corporate world. Since this realization,
            he has been a regular at all the leading comedy venues in the country, and
            Spotlight was the first venue to introduce him to the Keralite audience.
          </div>
        </div>

      </section>


      <section className="w-screen flex flex-row flex-wrap pt-[0rem] px-[0rem] pb-[0.313rem] box-border max-w-full text-center text-4xl text-gold  justify-center" >
          <div className="flex flex-col items-center justify-center w-[33rem] mr-2 min-width-[350px]">
            <div className=" relative tracking-[0.05em] font-medium inline-block text-3xl">
              <span>              CHRIS CHEONG
              </span>
            </div>
            <div className=" relative  text-white text-justify inline-block text-xl leading-9">
              Chris Cheong is an international mentalist and illusionist. He was
              previously credited to be one of Malaysia's youngest professional
              mentalist and magician later publicly voted as one of Malaysia's top
              ten magicians. To bring such a luminary to our audience still
              remains one of Spotlight's feat of strength.
            </div>
          </div>
          <div className="flex justify-center w-1/3 min-w-[290px]">
          <img
            className="max-w-full  w-1/2  flex justify-center items-center "
            loading="lazy"
            alt="Chris Cheong" src={Chris} />
            </div>


      </section>

      <section className="w-screen flex flex-row flex-wrap pt-[0rem] px-[0rem] pb-[0.313rem] box-border max-w-full text-center text-4xl text-gold  justify-center" >
        <div className="flex justify-center w-1/3">
          <img
            className=" w-1/3 min-w-[290px]"
            loading="lazy"
            alt="Sorabh Pant" src={Sorabh} />
        </div>
        <div className="flex flex-col items-center justify-center w-[33rem] mr-2 min-width-[350px]">
          <div className=" relative tracking-[0.05em] font-medium inline-block text-3xl">
            <span>SORABH PANT</span>
          </div>
          <div className=" relative  text-white text-justify inline-block text-xl leading-9">
            Sorabh Pant, described as "the second brilliant Indian comedian I've
            seen, after Russell Peters" by Wayne Brady, Sorabh Pant is one of
            the leading comedians who can expand the last drop of energy to make
            you laugh.
          </div>
        </div>

      </section>



      <section className="w-screen flex flex-row flex-wrap pt-[0rem] px-[0rem] pb-[0.313rem] box-border max-w-full text-center text-4xl text-gold  justify-center" >
          <div className="flex flex-col items-center justify-center w-[33rem] mr-2 min-width-[350px]">
            <div className=" relative tracking-[0.05em] font-medium inline-block text-3xl ">
              <span>SUHANI SHAH</span>
            </div>
            <div className=" relative  text-white text-justify inline-block text-xl leading-9">
              Suhani Shah is one among the
              few female magicians in India. With
              wonderful skills in sleight of hand,
              mind reading & situational comedy,
              she brings audiences to their feet
              and her performance at Spotlight
              remains one of her best.
            </div>
          </div>
          <div className="flex justify-center w-1/3 min-w-[290px] content-center flex-wrap ">
          <img
            className="max-w-full   h-1/2 flex justify-center items-center"
            loading="lazy"
            alt="Suhani Shah" src={Suhani} />
        </div>

      </section>

    </div>
  );
};

export default SpotlightInfo;

