import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './VirtualRakhi.css';

const VirtualRakhi = () => {
  const [isTied, setIsTied] = useState(false);

  const handleTieRakhi = () => {
    if (!isTied) {
      setIsTied(true);
    }
  };

  return (
    <section className="virtual-rakhi-cinematic">
      <div className="rakhi-scene">
        <motion.h2 
          className="handwritten rakhi-title"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Time to tie the Rakhi...
        </motion.h2>
        
        {!isTied ? (
          <p className="rakhi-hint">tap the rakhi</p>
        ) : (
          <motion.p 
            className="rakhi-success handwritten"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            Tied with love. 💖
          </motion.p>
        )}

        <div className="cinematic-wrist-container">
          {/* Subtle glow for the wrist */}
          <div className="wrist-glow"></div>
          
          <AnimatePresence>
            {!isTied && (
              <motion.div 
                className="floating-rakhi-cinematic"
                onClick={handleTieRakhi}
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                exit={{ opacity: 0, scale: 0.8 }}
              >
                <img src="./image.png" alt="Rakhi" />
              </motion.div>
            )}
          </AnimatePresence>

          {isTied && (
            <motion.div 
              className="tied-rakhi-cinematic"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            >
              <img src="./image.png" alt="Rakhi" />
              <div className="rakhi-aura"></div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default VirtualRakhi;
