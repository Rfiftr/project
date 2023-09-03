import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"

import Contant from "./components/Contant"
import Carousel from './components/Carousel'
import BsAccordion from "./components/BsAccordion"



export default function App() {
  return(
    <div>
      <Navbar/>
      <Hero/>
      <Carousel/>
      <BsAccordion/>
      <Contant/>
    </div>
  )
}