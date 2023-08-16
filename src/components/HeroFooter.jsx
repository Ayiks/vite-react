import React from "react";
import {motion} from "framer-motion";
import {textVariant} from '../utils/motion';
import { SectionWrapper } from "../hoc";
import { styles } from "../style";

const HeroFooter = () =>{
    return (
      
    <>
    <div className="-mt-[6rem]">
        <motion.div
        variants={textVariant()}>
            <div className="bg-orangePeel flex items-center text-center  content-center p-10 mt-6 sm:mt-20">
           <div>
           <h3
                 className={`uppercase text-[12px] sm:text-[30px] text-night font-bold`}
                >Already have an excellent idea?</h3>
                 <h3
                 className={`uppercase text-[12px] sm:text-[30px] text-night font-bold`}
                >Already have an excellent idea?</h3>
           </div>
           <div className="h-full w-[200px] bg-black">
            <p>sfhsjfhj</p>
           </div>
            </div>
        </motion.div>
    </div>
    </>
    );
}

export default SectionWrapper(HeroFooter, 'heroFooter');