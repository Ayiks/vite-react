import { BrowserRouter } from "react-router-dom";
import {Navbar, Hero} from "./components";
const App =()  =>{

  return (
  <BrowserRouter>
  <div className="relative z-10">
    <div>
      <Navbar />
      <Hero />
    </div>
  </div>
  </BrowserRouter>
  )
}

export default App
