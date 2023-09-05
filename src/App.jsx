import { BrowserRouter } from "react-router-dom";
import {Navbar, Hero, HeroFooter,WhyUs, Footer} from "./components";
const App =()  =>{

  return (
  <BrowserRouter>
  <div className="relative z-0">
    <div>
      <Navbar />
      <Hero />
    </div>

   <div>
    <HeroFooter />
   </div>

   <div className="bg-about bg-cover bg-center bg-no-repeat pb-10 flex items-center text-center">
    <WhyUs />
   </div>

   {/* footer */}
   <div className="p-10 bg-footer -ml-10">
    <Footer />
   </div>
  </div>
  </BrowserRouter>
  )
}

export default App
