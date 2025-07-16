import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import CampusNews from '../components/CampusNews';
import WhyUneza from '../components/WhyIees';
import WhyIees from '../components/WhyIees';
import Events from '../components/Events';
import Scholarships from '../components/Scholarships';
import CampusHero from '../components/CampusHero';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <CampusNews/>
      <WhyIees/>
      <Events/>
      <Scholarships/>
      <CampusHero/>
      <Footer/>
    </div>
  );
};

export default Home;
