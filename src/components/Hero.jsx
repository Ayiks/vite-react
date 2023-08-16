import { motion } from "framer-motion";
import { styles } from "../style";
import { carouselHero } from "../constants";
import { hero1 } from "../assets";
import { useState, useEffect } from "react";


const Hero = () => {
  const [backgroundImage, setBackgroundImage] = useState(carouselHero[0]);

  useEffect(()=>{
    let currentIndex = 0;
    const changeBackgroundImage = () => {
        // ensure the constant flow of the images
        currentIndex = (currentIndex + 1) % carouselHero.length;
        setBackgroundImage(carouselHero[currentIndex]);
    }

    const interval = setInterval(changeBackgroundImage, 3000);

    return () => {
        clearInterval(interval);
    }
  })
    return (
        <>
        <div className="absolute top-0 left-0 z-0 h-[100vh] w-screen transition-transform ease-in-out duration-300"  >
          <img
            src={backgroundImage.url} 
            alt="hero"
            className="w-full h-full sm:block hidden object-cover transform"
           
          />
          
        </div>
        <div className="absolute top-0 left-0 z-0 h-[100vh] w-screen transition-transform ease-in-out duration-300"  >
          <img
            src={backgroundImage.url} 
            alt="hero"
            className="w-full h-full sm:hidden block object-cover transform"
           
          />
          
        </div>
       <section 
        className="relative flex sm:flex-row flex-col w-full h-screen mx-auto overflow-hidden"
       >
        <div className={`absolute inset-0 sm:top-[250px] top-[150px]
             lg:top-[150px] xl:top-[250px] ${styles.paddingX}`}>
            <div>
            <h1 className={`${styles.heroSubText} text-white font-poppins uppercase`}>Let's work together to</h1>
            <h1 className={`${styles.heroHeadText} text-white font-poppins uppercase`}>Make great things</h1>
            <h1 className={`${styles.heroHeadText} text-white font-poppins uppercase`}>possible</h1>
            </div>
            <p>We are an innovative space that helps entreprenuership</p> <br />
            <button type="submit" className="button bg-titaniumYellow p-2 xs:p-3 font-bold uppercase">Learn about us</button>
        </div>

        
       </section>
        </>
    )
}

export default Hero;