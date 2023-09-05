import React from "react";
import { styles } from "../style";
import { eth } from "../assets";

const Footer = () => {
return (
    <div className="w-screen sm:flex flex-row justify-evenly text-center">
        <div>
           <img 
           className=" h-[8vh]"
           src={eth} 
           alt="ETH" 
           /> 
      
        </div>
        <div>
       
        <p className={`${styles.sectionSubTextLight}`}>Useful Links</p>
        </div>
        <div>
        
        <p className={`${styles.sectionSubText}`}>
            Have any questions or enquiries?
        </p>
        </div>
    </div>
)
}

export default Footer;