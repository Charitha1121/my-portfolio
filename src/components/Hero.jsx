import React from 'react';
import { Link } from 'react-scroll';
import charithaImage from '../assets/charitha.jpeg';

const Hero = () => {
  return (
    <section id="hero" className="h-screen bg-cover bg-center relative" style={{ backgroundImage: `url(${charithaImage})` }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex items-center justify-center h-full text-center text-white">
        <div>
          <h1 className="text-5xl font-bold">Hello, I'm Charitha</h1>
          <p className="mt-4 text-xl">A passionate web developer</p>
          <Link to="about" smooth={true} duration={500} className="mt-6 inline-block px-6 py-3 bg-indigo-600 text-white rounded-full">Learn More</Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
