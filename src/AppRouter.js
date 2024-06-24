// src/AppRouter.jsx
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Accueil from './pages/Accueil';
import Inscription from './pages/Inscription';
import Profil from './pages/Profil';
import Connexion from './pages/Connexion';
import MurContent from './components/MurContent';
import GalleryContent from './components/GalleryContent';
import VideoContent from './components/VideoContent';
import MusicContent from './components/MusicContent';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Accueil />} />
      <Route path="/connexion" element={<Connexion />} />
      <Route path="/inscription" element={<Inscription />} />
      <Route path="/profil" element={<Profil />} />
      <Route path="/mur" element={<MurContent />} />
      <Route path="/gallery" element={<GalleryContent />} />
      <Route path="/video" element={<VideoContent />} />
      <Route path="/music" element={<MusicContent />} />
    </Routes>
  );
}

export default AppRouter;
