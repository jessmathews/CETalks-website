import React from "react";
import AbhishekNirmal from '../assets/img/spotlight/sl1.png';
import Narpath from '../assets/img/spotlight/sl2.png';
import Rahul from '../assets/img/spotlight/sl3.png';
import Chris from '../assets/img/spotlight/sl4.png';
import Sorabh from '../assets/img/spotlight/sl5.png';
import Suhani from '../assets/img/spotlight/sl6.png';



const SpotlightInfo = () => {
  return (
    <div className="w-full relative bg-07060e overflow-hidden flex flex-col items-center justify-start pt-[10rem] pb-[1.688rem] pr-[1.25rem] pl-[5.063rem] box-border gap-[10.5rem_0rem] tracking-[normal] text-center text-[3.125rem] text-white font-open-sans lg:gap-[10.5rem_0rem] lg:pl-[2.5rem] lg:box-border mq750:gap-[10.5rem_0rem] mq450:gap-[10.5rem_0rem]">
    <section className="w-[90%] flex flex-col items-center justify-start max-w-full">
    <div className="flex flex-col items-center justify-start">
        <div className="flex flex-col items-center justify-start gap-[1.063rem_0rem]">
        <div className="relative tracking-[0.05em] leading-[3.014rem] font-medium inline-block">
            CETALKS
        </div>
        <div className="relative text-[5.969rem] tracking-[0.05em] leading-[5.969rem] font-medium text-transparent !bg-clip-text [background:linear-gradient(180deg,_#e8e034,_#ca3035)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block">
            SPOTLIGHT
        </div>
        </div>
    </div>

    <div className="w-full flex justify-center items-center mt-[3.125rem]">
        <span className="text-[3.125rem] text-center text-white font-open-sans whitespace-nowrap inline-block" style={{ borderBottom: "2px solid gold", paddingBottom: "0.5rem" }}>Over the Past Years</span>
    </div>
    </section>


    <section className="w-[69.188rem] flex flex-row items-start justify-end pt-[0rem] px-[0rem] pb-[0.313rem] box-border max-w-full text-center text-[3.125rem] text-gold font-open-sans">
      <div className="flex flex-row items-start justify-start gap-[10.063rem_0rem] max-w-full lg:gap-[0rem_10.063rem] mq750:gap-[0rem_10.063rem] mq450:gap-[0rem_10.063rem] mq1050:flex-wrap">
        <img
          className="h-[30.75rem] w-[25.938rem] relative object-cover max-w-full"
          loading="lazy"
          alt="Abhishek & Nirmal"  src={AbhishekNirmal}  />
        <div className="flex flex-col items-start justify-start gap-[1.625rem_0rem] max-w-full">
          <div className="w-[35.813rem] relative tracking-[0.05em] leading-[3.014rem] font-medium inline-block">
          <span>ABHISHEK</span>
          <span className="text-white">{` and `}</span>
          <span>NIRMAL</span>
          </div>
          <div className="w-[36.5rem] h-[24.125rem] relative text-[1.875rem] leading-[3.014rem] font-medium text-white text-left inline-block">
          This dynamic duo from India, known for their charisma and charm, has
            carved a prominent niche for themselves in the world of reels,
            live shows, feature films, and web series. Notably, they were listed
            on Instagram's official roster of 25 under 25 influencers for the
            year 2021, further solidifying their impact in the digital sphere.
          </div>
        </div>
      </div>
    </section>

    <section className="w-[74.063rem] flex flex-row items-start justify-start pt-[0rem] pb-[4.063rem] pr-[1.813rem] pl-[0rem] box-border max-w-full text-center text-[3.125rem] text-gold font-open-sans mq750:pb-[2.625rem] mq750:box-border">
        <div className="flex-1 flex flex-row items-start justify-start gap-[0rem_10.063rem] max-w-full lg:gap-[0rem_10.063rem] mq750:gap-[0rem_10.063rem] mq450:gap-[0rem_10.063rem] mq1050:flex-wrap">
          <div className="flex-1 flex flex-col items-start justify-start pt-[2.5rem] px-[0rem] pb-[0rem] box-border min-w-[23.563rem] max-w-full mq750:min-w-full">
            <div className="self-stretch flex flex-col items-start justify-start gap-[1.625rem_0rem] max-w-full">
              <div className="w-[27.625rem] relative tracking-[0.05em] leading-[3.014rem] font-medium inline-block">
                NARPATH RAMAN
              </div>
              <div className="w-[36.25rem] relative text-[1.875rem] leading-[3.014rem] font-medium text-white text-left inline-block">
                An Indian mentalist named as one of the top 20 inspiring men in
                2017 . He is simply an expert in altering thoughts and amusing
                people. Known for delving into celebrities' minds, he
                effortlessly sparked curiosity among the audience.
              </div>
            </div>
          </div>
          <img
            className="h-[30.75rem] w-[25.938rem] relative object-cover max-w-full"
            loading="lazy"
            alt=""
            src={Narpath} 
          />
        </div>
      </section>

      <section className="w-[69.188rem] flex flex-row items-start justify-end pt-[0rem] px-[0rem] pb-[0.313rem] box-border max-w-full text-center text-[3.125rem] text-gold font-open-sans">
      <div className="flex flex-row items-start justify-start gap-[10.063rem_0rem] max-w-full lg:gap-[0rem_10.063rem] mq750:gap-[0rem_10.063rem] mq450:gap-[0rem_10.063rem] mq1050:flex-wrap">
        <img
          className="h-[30.75rem] w-[25.938rem] relative object-cover max-w-full"
          loading="lazy"
          alt="Rahul Subramanian"  src={Rahul}  />
        <div className="flex flex-col items-start justify-start gap-[1.625rem_0rem] max-w-full">
          <div className="w-[35.813rem] relative tracking-[0.05em] leading-[3.014rem] font-medium inline-block">
            RAHUL SUBRAMANIAN
          </div>
          <div className="w-[36.5rem] h-[24.125rem] relative text-[1.875rem] leading-[3.014rem] font-medium text-white text-left inline-block">
            Rahul Subramanian is a brand-manager-turned-comedian who realized a little too 
            late in life that he was too redundant for the corporate world. Since this realization, 
            he has been a regular at all the leading comedy venues in the country, and 
            Spotlight was the first venue to introduce him to the Keralite audience.
          </div>
        </div>
      </div>
    </section>

      <section className="flex flex-row items-end justify-start pt-[0rem] px-[0rem] pb-[0.5rem] box-border gap-[0rem_5.688rem] max-w-full text-center text-[3.125rem] text-gold font-open-sans lg:flex-wrap lg:gap-[0rem_5.688rem] mq750:gap-[0rem_5.688rem]">
        <div className="flex flex-col items-start justify-start min-w-[36.25rem] min-h-[34.438rem] max-w-full lg:flex-1 lg:min-h-[auto] mq750:min-w-full">
          <div className="flex flex-col items-start justify-start gap-[1.625rem_0rem] max-w-full">
            <div className="relative tracking-[0.05em] leading-[3.014rem] font-medium inline-block">
              CHRIS CHEONG
            </div>
            <div className="w-[36.188rem] h-[27.125rem] relative text-[1.875rem] leading-[3.014rem] font-medium text-white text-left inline-block">
              Chris Cheong is an international mentalist and illusionist. He was
              previously credited to be one of Malaysia's youngest professional
              mentalist and magician later publicly voted as one of Malaysia's top
              ten magicians. To bring such a luminary to our audience still
              remains one Of Spotlight's feat of strength.
            </div>
          </div>
        </div>
        <img
          className="h-[40.75rem] w-[32.125rem] relative object-cover max-w-full lg:flex-1"
          loading="lazy"
          alt=""
          src={Chris}
        />
      </section>
      

    <section className="w-[69.188rem] flex flex-row items-start justify-end pt-[0rem] px-[0rem] pb-[0.313rem] box-border max-w-full text-center text-[3.125rem] text-gold font-open-sans">
    <div className="flex flex-row items-start justify-start gap-[10.063rem_0rem] max-w-full lg:gap-[0rem_10.063rem] mq750:gap-[0rem_10.063rem] mq450:gap-[0rem_10.063rem] mq1050:flex-wrap">
      <img
        className="h-[30.75rem] w-[25.938rem] relative object-cover max-w-full"
        loading="lazy"
        alt="Sorabh Pant"  src={Sorabh}  />
      <div className="flex flex-col items-start justify-start gap-[1.625rem_0rem] max-w-full">
        <div className="w-[35.813rem] relative tracking-[0.05em] leading-[3.014rem] font-medium inline-block">
          SORABH PANT
        </div>
        <div className="w-[36.5rem] h-[24.125rem] relative text-[1.875rem] leading-[3.014rem] font-medium text-white text-left inline-block">
        Sorabh Pant, described as "the second brilliant Indian comedian I've
        seen, after Russell Peters" by Wayne Brady, Sorabh Pant is one Of
        the leading comedians who can expand the last drop of energy to make
        you laugh.
        </div>
      </div>
    </div>
  </section>
    
     
      <section className="w-[73.688rem] flex flex-row items-start justify-start max-w-full text-center text-[3.125rem] text-gold font-open-sans">
        <div className="flex flex-row items-end justify-start gap-[0rem_9.25rem] max-w-full lg:flex-wrap lg:gap-[0rem_9.25rem] mq750:gap-[0rem_9.25rem] mq450:gap-[0rem_9.25rem]">
          <div className="flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[1.625rem] box-border min-w-[35.313rem] max-w-full lg:flex-1 mq750:min-w-full">
            <div className="flex flex-col items-start justify-start gap-[1.625rem_0rem] max-w-full">
              <div className="relative tracking-[0.05em] leading-[3.014rem] font-medium inline-block">
                SUHANI SHAH
              </div>
              <div className="w-[35.313rem] h-[21.125rem] relative text-[1.875rem] leading-[3.014rem] font-medium text-white text-left flex items-center">
                Suhani Shah is one among the
                few female magicians in India. With
                wonderful skills in sleight of hand,
                mind reading & situational comedy,
                she brings audiences to their feet
                and her performance at Spotlight
                remains one Of her best.
              </div>
            </div>
          </div>
          <img
            className="h-[32.688rem] w-[23.575rem] relative object-cover max-w-full lg:flex-1"
            loading="lazy"
            alt=""
            src={Suhani}
          />
        </div>
      </section>
      
    </div>
  );
};

export default SpotlightInfo;

