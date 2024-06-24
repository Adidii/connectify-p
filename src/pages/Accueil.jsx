// src/pages/Accueil.jsx
import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import ContactForm from '../components/ContactForm';
import videoSource from '../Assets/fd_accueil.mp4';
import '../pages/style/Accueil.css';
import photo1 from '../Assets/pexels-budgeron-bach-5158233.jpg';
import photo2 from '../Assets/pexels-kampus-production-5935232.jpg';
import photo3 from '../Assets/pexels-matthias-groeneveld-4200745.jpg';
import Newsletter from '../components/Newsletter';

const Accueil = () => {
  const [languageIndex, setLanguageIndex] = useState(0);
  const languages = ['fr', 'en', 'es', 'de'];

  const translations = {
    fr: "Bienvenue",
    en: "Welcome",
    es: "Bienvenido",
    de: "Willkommen",
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setLanguageIndex((prevIndex) => (prevIndex + 1) % languages.length);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [languages.length]);

  return (
    <div className="accueil-container">
      <header className="header-container">
        <video autoPlay loop muted className="video-background">
          <source src={videoSource} type="video/mp4" />
        </video>
        <div className="navbar-container">
          <Navbar />
        </div>
        <div className="overlay">
          <h1 className="main-title">Connectify</h1>
        </div>
      </header>

      <section className="body-container">
        <div className="video-overlay">
          <video autoPlay loop muted className="video-background yellow-video-background">
            <source src={videoSource} type="video/mp4" />
          </video>
          <div className="yellow-overlay">
            <div id="welcome">
              <span id="welcome-text" style={{ fontFamily: 'Gravitas One, sans-serif', color: 'green' }}>
                {translations[languages[languageIndex]]}
              </span>
            </div>
            <p className="subtitle">Harmoniser vos passions, partager vos ambitions avec Connectify!</p>
          </div>
        </div>
      </section>

      <section className="photo-section">
        <div className="photo-container">
          <img src={photo1} alt="" />
        </div>
        <div className="text-container">
          <h2 className="titleactu" style={{ color: 'yellow', fontFamily: 'Gravitas One, sans-serif' }}>Actualité</h2>
          <p className="text">
            Le lieu où vous pouvez vous connecter avec vos amis, partager des moments spéciaux et explorer de nouvelles rencontres.
            Exprimez-vous à travers des photos, des vidéos et des messages, et découvrez le monde passionnant de la communauté Connectify.
            Rejoignez-nous dès maintenant et commencez à créer des liens, à inspirer et à être inspiré.
            Connectify est là pour vous aider à rester connecté et à célébrer les moments de la vie, ensemble.
          </p>
        </div>
      </section>

      <section className="photo-section">
        <div className="text-container">
          <h2 className="titleactu" style={{ color: 'yellow', fontFamily: 'Gravitas One, sans-serif' }}>Qui sommes nous ?</h2>
          <p className="text">Chez Connectify, nous sommes une plateforme sociale dynamique et inclusive, dédiée à connecter les individus du monde entier. Notre objectif est de créer un espace numérique où chacun peut se sentir libre d'exprimer sa véritable identité, de partager ses passions et de tisser des liens authentiques.</p>
        </div>
        <div className="photo-container">
          <img src={photo2} alt="" />
        </div>
      </section>
      <section className="photo-section">
        <div className="photo-container">
          <img className="photo3" src={photo3} alt="" />
        </div>
        <div className="contact-form-container">
          <ContactForm />
        </div>
      </section>

      <section className="newsletter-section">
        <div className="video-overlay2">
          <video autoPlay loop muted className="video-background2">
            <source src={videoSource} type="video/mp4" />
          </video>
          <div className="overlay2">
            <Newsletter />
          </div>
        </div>
      </section>
      <footer className="footer">
        <p>© 2024 Connectify. Tous droits réservés.</p>
      </footer>
    </div>
  );
};

export default Accueil;
