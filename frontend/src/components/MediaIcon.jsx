import { Link } from 'react-router-dom'; 
import React from 'react';  
import PropTypes from 'prop-types';

    
const ButtonLink = ({ to, children, className }) => (
    <Link to={to} className={`cursor-pointer ${className}`}>
        {children}
    </Link>
    );
const MediaIcon = () =>{
    return(
        <section className="w-[100rem] flex flex-col items-center justify-center gap-[5.88rem] max-w-full text-center text-[1rem] text-white outfit-font flex-wrap mt-10">
        <div className="flex flex-row items-center justify-center gap-[0.94rem] max-w-full mq450:flex-wrap">
            <ButtonLink
            to="/spotlight"
            className="bg-firebrick-100 rounded-xl hover:bg-salmon-100 flex items-center justify-center pt-[0.5rem] pb-[0.5rem] pr-[2rem] pl-[2rem] md:pt-[0.81rem] md:pb-[0.88rem] md:pr-[3.75rem] md:pl-[3.63rem]"
            >
            <div className="h-[2.63rem] w-[10.31rem] relative rounded-xl bg-firebrick-100 hidden" />
            <div className="relative text-[0.75rem] font-outfit text-white text-left z-[1]">
                Spotlight
            </div>
            </ButtonLink>
            <ButtonLink
            to="/events"
            className="bg-firebrick-100 rounded-xl border-[1px] border-solid border-firebrick-100 hover:bg-salmon-200 hover:border-salmon-100 flex items-center justify-center pt-[0.5rem] pb-[0.5rem] pr-[2.5rem] pl-[2.5rem] md:pt-[0.81rem] md:pb-[0.88rem] md:pr-[4.19rem] md:pl-[3.94rem]"
            >
            <div className="h-[2.63rem] w-[10.31rem] relative rounded-xl box-border hidden border-[1px] border-solid border-firebrick-100" />
            <div className="relative text-[0.75rem] font-outfit text-white text-left z-[1]">
                Events
            </div>
            </ButtonLink>
        </div>
        </section>
    );
};
ButtonLink.propTypes = {
    children: PropTypes.node,
    className: PropTypes.node,
    to: PropTypes.node,
  };

export default MediaIcon;