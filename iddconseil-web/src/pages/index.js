import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import {
  homeObjZero,
  homeObjOne,
  homeObjTwo,
  
} from '../components/InfoSection/Data';
import InfoSectionNoButton from '../components/InfoSectionNoButton';
import {
  homeObjNoButtonOne,
} from '../components/InfoSectionNoButton/Data';
import Services from '../components/Services';

function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      
      <InfoSection {...homeObjOne} />
      <InfoSectionNoButton {...homeObjNoButtonOne} />
      <InfoSection {...homeObjZero} />
      <Services />
      
      
      
      <Footer />
    </>
  );
}

export default Home;
