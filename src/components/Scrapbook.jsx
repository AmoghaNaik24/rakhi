import React from 'react';
import { motion } from 'framer-motion';
import './Scrapbook.css';

const memories = [
  {
    id: 1,
    type: 'video',
    src: './WhatsApp Video 2026-08-27 at 11.53.40 PM.mp4',
    note: "Where it all started...",
    rotation: -5,
    align: 'left'
  },
  {
    id: 2,
    type: 'image',
    src: './WhatsApp Image 2026-08-27 at 11.52.11 PM copy.jpeg',
    note: "OUR FIRST RAKHI ♡",
    rotation: 3,
    align: 'right'
  },
  {
    id: 4,
    type: 'image',
    src: './WhatsApp Image 2026-08-27 at 11.51.28 PM.jpeg',
    note: "And look at us now! annoying, but loving ...",
    rotation: 2,
    align: 'left'
  },
  {
    id: 5,
    type: 'image',
    src: './WhatsApp Image 2026-08-27 at 11.52.12 PM.jpeg',
    note: "˚ʚ♡ɞ˚",
    rotation: -2,
    align: 'right'
  },
  {
    id: 6,
    type: 'image',
    src: './image copy.png',
    note: "Hoping to carry your blessings with me throughout my life",
    rotation: 4,
    align: 'left'
  },
   {
    id: 3,
    type: 'image',
    src: './image copy 2.png',
    note: "MY FOREVER BODYGUARD",
    rotation: -4,
    align: 'center'
  },
];

const Scrapbook = () => {
  return (
    <section className="scrapbook-section">
      <div className="scrapbook-container">
        {memories.map((item, index) => (
          <motion.div 
            key={item.id}
            className={`polaroid-wrapper ${item.align}`}
            initial={{ opacity: 0, y: 100, rotate: 0 }}
            whileInView={{ opacity: 1, y: 0, rotate: item.rotation }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 1.0, ease: "easeOut" }}
          >
            <div className="polaroid">
              <div className="tape"></div>
              {item.type === 'video' ? (
                <video src={item.src} controls className="polaroid-media" />
              ) : (
                <img src={item.src} alt="Memory" className="polaroid-media" />
              )}
              <p className="handwritten polaroid-note">{item.note}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Scrapbook;
