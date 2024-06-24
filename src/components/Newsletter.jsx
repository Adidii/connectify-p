// src/components/Newsletter.jsx
import React, { useState } from 'react';
import { db } from '../firebase'; // Assurez-vous que ce chemin est correct
import './Newsletter.css';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
    if (email.trim() !== '') {
      db.collection('newsletter').add({
        email: email
      })
        .then(() => {
          console.log('Adresse e-mail envoyée avec succès à Firebase');
        })
        .catch((error) => {
          console.error('Erreur lors de l\'envoi de l\'adresse e-mail à Firebase :', error);
        });
    } else {
      console.warn('Veuillez saisir une adresse e-mail valide');
    }
  };

  return (
    <div className="newsletter-container">
      <video className="video-background" autoPlay loop muted>
        <source src="/7334673-hd_1920_1080_24fps.mp4" type="video/mp4" />
      </video>
      <div className="newsletter-frame">
        <h2>Newsletter</h2>
        <h3>Inscrivez-vous à notre newsletter pour rester informé(e) et connecté(e) avec Connectify!</h3>
        <div className="newsletter-form">
          <input
            type="email"
            placeholder="Entrez votre adresse e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button className="newsletter-button" onClick={handleSubscribe}>S'inscrire</button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
