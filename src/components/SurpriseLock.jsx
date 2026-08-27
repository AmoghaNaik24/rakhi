import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, Unlock, Mail, X } from 'lucide-react';
import './SurpriseLock.css';
import './Envelopes.css';

const SurpriseLock = () => {
  const [password, setPassword] = useState('');
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [error, setError] = useState(false);
  const [qrVisible, setQrVisible] = useState(false);
  const [showEnvelope, setShowEnvelope] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === '010406') {
      setIsUnlocked(true);
      setError(false);
    } else {
      setError(true);
      setTimeout(() => setError(false), 2000);
    }
  };

  return (
    <section className="surprise-cinematic">
      <div className="surprise-container">
        {!isUnlocked ? (
          <motion.div 
            className="lock-screen"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            <Lock size={32} className="lock-icon" />
            <h2 className="handwritten lock-title">One last thing...</h2>
            <p className="lock-hint">Enter my birthday (DDMMYY) to open.</p>
            
            <form onSubmit={handleSubmit} className="password-form-cinematic">
              <input
                type="password"
                placeholder="DDMMYY"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                maxLength={6}
                className={error ? 'error-shake' : ''}
              />
              <button type="submit">Unlock</button>
            </form>
            {error && <p className="error-text">Oops! Wrong date.</p>}
          </motion.div>
        ) : (
          <motion.div 
            className="reveal-screen-cinematic"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
          >
            <Unlock size={32} className="unlock-icon" />
            <h2 className="handwritten reveal-title">A final surprise.</h2>
            
            <div className="media-container-cinematic">
              <div className="video-wrapper">
                <video 
                  controls 
                  src="./final video.mp4" 
                  className="polaroid-media"
                  onTimeUpdate={(e) => {
                    const video = e.target;
                    if (video.duration && video.currentTime >= video.duration / 1.5) {
                      if (!qrVisible) setQrVisible(true);
                    }
                  }}
                ></video>
                <p className="handwritten caption">😉</p>
              </div>
              
              <div className="qr-wrapper">
                <img 
                  src="./image copy 3.png" 
                  alt="PhonePe QR" 
                  className={`qr-image ${qrVisible ? 'unblurred' : 'blurred'}`}
                  style={{ transition: 'all 1s ease', filter: qrVisible ? 'blur(0px)' : 'blur(15px)', opacity: qrVisible ? 1 : 0.3 }}
                />
                <p className="handwritten caption">wait.... 😂</p>
              </div>
            </div>

            {/* Single Envelope Section */}
            <motion.div 
              className="single-envelope-container"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 1 }}
              style={{ marginTop: '5rem', marginBottom: '3rem' }}
            >
              <div 
                className="envelope-paper"
                onClick={() => setShowEnvelope(true)}
                style={{ margin: '0 auto' }}
              >
                <div className="wax-seal"></div>
                <h3 className="handwritten" style={{ color: '#333' }}>Open Me</h3>
                <p className="click-hint handwritten">tap to open</p>
              </div>
            </motion.div>

            <AnimatePresence>
              {showEnvelope && (
                <motion.div 
                  className="modal-overlay"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setShowEnvelope(false)}
                >
                  <motion.div 
                    className="letter-paper"
                    initial={{ scale: 0.8, y: 50, opacity: 0 }}
                    animate={{ scale: 1, y: 0, opacity: 1 }}
                    exit={{ scale: 0.8, y: 50, opacity: 0 }}
                    transition={{ type: "spring", damping: 20 }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <button className="close-btn" onClick={() => setShowEnvelope(false)}>
                      <X size={24} />
                    </button>
                    <div className="letter-content">
                      <p className="handwritten letter-text" style={{ fontSize: '2rem', lineHeight: '1.6' }}>
                        veskodaniki ni paatha battalichav...<br/>
                        pusukodaniki ni scent ni ichav..<br/>
                        todugukodaniki ni socks ni ichav..<br/>
                        kani phonepay cheyyadam marchipoyav ... :) 
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>

            <motion.div 
              className="final-emotional-outro"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 2, duration: 2 }}
            >
              <p className="handwritten emotional-text">
                on a serious note...<br/><br/>
                Happy Rakshabandhan Annaaaa....<br></br> Thank you for always protecting me, guiding me, and being my biggest supporter. <br/><br/>
                I love you so much, Anna❤️
              </p>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default SurpriseLock;
