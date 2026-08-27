import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, X } from 'lucide-react';
import './Envelopes.css';

const envelopesData = [
  {
    id: 1,
    title: "To Anna",
    content: "I love you more than I love annoying you! (Okay, maybe equally). ❤️",
    isCertificate: false,
    rotation: -5
  },
  {
    id: 2,
    title: "Top Secret",
    content: "Best Anna Appreciation Certificate\n\nAwarded to my brother.\nReason: You're the best because I'm your sister lol 🏆",
    isCertificate: true,
    rotation: 3
  },
  {
    id: 3,
    title: "Read Me",
    content: "Thanks for always being there for me, even when I steal your food. 🍕",
    isCertificate: false,
    rotation: -2
  }
];

const Envelopes = () => {
  const [selectedEnvelope, setSelectedEnvelope] = useState(null);

  return (
    <section className="envelopes-section">
      <div className="envelopes-container">
        {envelopesData.map((env, index) => (
          <motion.div 
            key={env.id}
            className="envelope-paper"
            style={{ rotate: env.rotation }}
            whileHover={{ scale: 1.05, y: -10, rotate: 0 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedEnvelope(env)}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
          >
            <div className="wax-seal"></div>
            <h3 className="handwritten">{env.title}</h3>
            <p className="click-hint handwritten">tap to open</p>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedEnvelope && (
          <motion.div 
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedEnvelope(null)}
          >
            <motion.div 
              className={`letter-paper ${selectedEnvelope.isCertificate ? 'certificate' : ''}`}
              initial={{ scale: 0.8, y: 50, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.8, y: 50, opacity: 0 }}
              transition={{ type: "spring", damping: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="close-btn" onClick={() => setSelectedEnvelope(null)}>
                <X size={24} />
              </button>
              
              {selectedEnvelope.isCertificate ? (
                <div className="certificate-content">
                  <h1 className="cert-title">Certificate of Appreciation</h1>
                  <h2 className="cert-subtitle">Best Anna Award</h2>
                  <div className="cert-body">
                    <p>This is proudly presented to my dearest brother.</p>
                    <p className="highlight handwritten">Reason: You're the best because I'm your sister, lol. 💅</p>
                  </div>
                  <div className="seal-large">🏆</div>
                </div>
              ) : (
                <div className="letter-content">
                  <p className="handwritten letter-text">{selectedEnvelope.content}</p>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Envelopes;
