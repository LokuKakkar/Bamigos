import Aos from 'aos'
import React, {useEffect} from 'react'
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Navbar from './components/Navbar/Navbar';
// import Home from './components/Home/Home';
import Hero from './components/Hero/Hero';
import VirtualReality from './components/VirtualReality/VirtualReality';
import Arcades from './components/Arcades/Arcades';
import Arenas from './components/Arenas/Arenas';
import Footer from './components/Footer/Footer';



const App = () => {

  useEffect(() => {

    Aos.init({
      offset: 100,
      duration: 700,
      easing: "ease-in",
      delay: 100,
    });


  });





  return (
    <div className='overflow-x-hidden overflow-y-hidden'  >
    
      <Navbar />
      <Hero />
      <VirtualReality />
      <Arenas />
      <Arcades />
      <Footer />
      

    </div>
  )
}

export default App