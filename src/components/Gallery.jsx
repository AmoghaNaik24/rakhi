import React from 'react';
import { motion } from 'framer-motion';
import './Gallery.css';

const memories = [
  {
    id: 1,
    img: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=800&auto=format&fit=crop', // Placeholder for brother/sister photo
    note: "Remember when we used to fight for the TV remote? I always won anyway. 😂",
  },
  {
    id: 2,
    img: 'https://images.unsplash.com/photo-1609220136736-443140cffec6?q=80&w=800&auto=format&fit=crop', // Placeholder 2
    note: "You're annoying, but you're still the best brother ever. Happy Rakhi!",
  },
  {
    id: 3,
    img: 'https://images.unsplash.com/photo-1493150134366-cb9c20a6f8fb?q=80&w=800&auto=format&fit=crop', // Placeholder 3
    note: "Miss bothering you every day! Wish I could be there to steal your chocolates.",
  }
];

const Gallery = () => {
  return (
    <section className="gallery-section">
      <motion.h2 
        className="gallery-title title-font"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        Our Memories
      </motion.h2>
      
      <div className="gallery-grid">
        {memories.map((memory, index) => (
          <motion.div 
            key={memory.id}
            className="memory-card glass-panel"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="img-container">
              <img src={memory.img} alt={`Memory ${memory.id}`} />
            </div>
            <p className="note">{memory.note}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
