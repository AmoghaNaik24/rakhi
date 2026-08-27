import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './Hero.css';

const Hero = () => {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  
  return (
    <motion.section 
      className="hero-cinematic"
      style={{ opacity }}
    >
      <motion.div 
        className="intro-text-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 4, ease: "easeInOut" }}
      >
        <p className="handwritten intro-text">
          for my anna ❤️...
        </p>
      </motion.div>
      
      <motion.div 
        className="scroll-hint"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 5, duration: 2 }}
      >
        <span>scroll slowly</span>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
