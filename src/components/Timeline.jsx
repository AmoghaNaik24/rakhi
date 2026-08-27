import React from 'react';
import { motion } from 'framer-motion';
import './Timeline.css';

const timelineData = [
  {
    id: 1,
    type: 'video',
    src: 'https://www.w3schools.com/html/mov_bbb.mp4', // Placeholder baby video
    note: "Where it all started... Look at us! 👶 (And yes, here is a virtual Rakhi for you!)",
    showRakhi: true
  },
  {
    id: 2,
    type: 'image',
    src: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=800&auto=format&fit=crop', // Baby pic 1
    note: "Always getting into trouble together.",
  },
  {
    id: 3,
    type: 'image',
    src: 'https://images.unsplash.com/photo-1542037104857-ffcb0b969c5e?q=80&w=800&auto=format&fit=crop', // Baby pic 2
    note: "I think you were trying to steal my toys here.",
  },
  {
    id: 4,
    type: 'image',
    src: 'https://images.unsplash.com/photo-1522858742468-b7c4b4a3c61f?q=80&w=800&auto=format&fit=crop', // Mid pic 1
    note: "Our awkward teenager phase... yikes.",
  },
  {
    id: 5,
    type: 'image',
    src: 'https://images.unsplash.com/photo-1533227260828-53142750e7a2?q=80&w=800&auto=format&fit=crop', // Mid pic 2
    note: "School days! We fought every single morning.",
  },
  {
    id: 6,
    type: 'image',
    src: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=800&auto=format&fit=crop', // Grown up pic
    note: "And look at us now! Still annoying, but I love you.",
  }
];

const Timeline = () => {
  return (
    <section className="timeline-section">
      <motion.h2 
        className="timeline-title title-font"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        Our Journey
      </motion.h2>
      
      <div className="timeline-container">
        {timelineData.map((item, index) => (
          <motion.div 
            key={item.id}
            className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="timeline-content glass-panel">
              <div className="media-container">
                {item.type === 'video' ? (
                  <video src={item.src} controls className="timeline-media" />
                ) : (
                  <img src={item.src} alt="Memory" className="timeline-media" />
                )}
              </div>
              <p className="timeline-note">{item.note}</p>
              
              {item.showRakhi && (
                <motion.div 
                  className="inline-rakhi"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                >
                  <img src="https://cdn-icons-png.flaticon.com/512/3596/3596096.png" alt="Rakhi" />
                </motion.div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Timeline;
