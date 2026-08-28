import React, { useState, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import Hero from './components/Hero';
import Scrapbook from './components/Scrapbook';
import VirtualRakhi from './components/VirtualRakhi';
import SurpriseLock from './components/SurpriseLock';

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const toggleMusic = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      {/* Cinematic dark background with subtle faded overlay */}
      <div className="bg-photo-overlay"></div>
      
      {/* Floating Hearts */}
      <div className="hearts-container">
        {[...Array(15)].map((_, i) => (
          <div 
            key={i} 
            className="floating-heart"
            style={{
              left: `${Math.random() * 100}vw`,
              animationDuration: `${Math.random() * 10 + 10}s`,
              animationDelay: `${Math.random() * 5}s`,
              fontSize: `${Math.random() * 1.5 + 0.5}rem`
            }}
          >
            ❤
          </div>
        ))}
      </div>

      <div className="ambient-light"></div>

      {/* Background Music (Placeholder for emotional piano track) */}
      <audio 
        ref={audioRef} 
        loop 
        src="/public/WhatsApp Audio 2026-08-28 at 9.11.46 AM.mpeg.mp3
" 
      />
      
      <button className="music-toggle" onClick={toggleMusic}>
        {isPlaying ? <Volume2 size={24} /> : <VolumeX size={24} />}
      </button>
      
      <main className="app-container">
        <Hero />
        <Scrapbook />
        <VirtualRakhi />
        <SurpriseLock />
      </main>
    </>
  );
}

export default App;
