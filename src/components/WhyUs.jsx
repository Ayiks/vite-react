import React from "react";
import {motion} from "framer-motion";
import { styles } from "../style";
import { whyUs } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";


const ServiceCard = ({ index, title, icon, description }) => {
    return (
      <motion.div
        variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
        className="xs:w-[250px] w-full card-gradient p-[1px] rounded-[20px] shadow-card">
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-taupe text-[18px] font-bold text-center">
            {title}
          </h3>
          <p className="text-eerieBlack ">
            {description}
          </p>
        </div>
      </motion.div>
    );
  };

const WhyUs = () => {
 return (
    <div className="">
        <motion.div variants={textVariant()}>
            <h2 className={`text-night font-extrabold sm:text-[35px] `}>Why Us?</h2>
        </motion.div>
        <motion.p
         variants={fadeIn('','', 0.1, 1)}
         className="-mt-2 text-taupe text-[18px] max-w-3xl leading-[30px]">
           Eastern Tech Hub is a space for:
        </motion.p>
        <div className="mt-20 ml-20 mb flex flex-wrap justify-between">
          {whyUs.map((whyUs, index) => (
            <div key={whyUs.title} className="w-full sm:w-1/3 mb-10">
               <ServiceCard {...whyUs} index={index}/>
            </div>
           ))}
        </div>

    </div>
 );
}

export default SectionWrapper(WhyUs, 'whyUs');