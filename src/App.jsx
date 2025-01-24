import React,{useEffect} from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from './component/Navbar/Navbar';
import Home from './component/Navbar/Home';
import About from './component/Navbar/About';
import  Banner  from './component/Navbar/Banner';
import AppStore from './component/Navbar/AppStore';
import Testimonials from './component/Navbar/Testimonials';
import Footer from './component/Navbar/Footer';


const App = () => {
  useEffect(()=>{
    AOS.init({
      offset: 100,
      duration: 700,
      easing: "ease-in",
      delay: 100,
    });
  })
  return (
    <div className='overflow-x-hidden'>
       <Navbar />
       <Home/>
      <About/>
      <Banner/>
      <AppStore/>
      <Testimonials/>
      <Footer/>
    </div>
  )
}

export default App






