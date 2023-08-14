import { motion } from "framer-motion";
import { styles } from "../style";
import { carouselHero } from "../constants";
import { useState } from "react";


const Hero = () => {
    const [activeSlide, setActiveSlide] = useState(0)
    return (
        <>
        <div className="absolute top-0 left-0 z-0 h-[100vh] w-screen">
           {carouselHero.map((img, index)=> (
            <div 
                key={index}
                className="mt-0 carousel-slide "
                >
                    <img src={img.url} alt="Image" />
                </div>
           ))} 

           <button onClick={()=> setActiveSlide(index -1)}>
                Previous
           </button>
           <button onClick={()=> setActiveSlide(index +1)}>
                Next
           </button>
        </div>
        </>
    )
}

export default Hero;