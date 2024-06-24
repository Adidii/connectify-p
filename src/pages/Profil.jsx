// src/pages/Profil.jsx
import React, { useState } from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import FilterSection from '../components/Filter';
import photoSrc from '../Assets/banner_profil.png';
import MurContent from '../components/MurContent';
import GalleryContent from '../components/GalleryContent';
import VideoContent from '../components/VideoContent';
import MusicContent from '../components/MusicContent';

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const PhotoSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f0f0f0;
  padding: 20px;

  img {
    border-radius: 50%;
    width: 150px;
    height: 150px;
  }
`;

const MainSection = styled.div`
  display: flex;
  flex: 1;
  padding: 20px;
`;

const FilterSectionContainer = styled.div`
  flex: 1;
  margin-right: 20px;
`;

const ResultsSection = styled.div`
  flex: 3;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Footer = styled.footer`
  background-color: green;
  color: white;
  text-align: center;
  padding: 20px;
  position: fixed;
  width: 100%;
  bottom: 0;
`;

const Profile = () => {
  const [activeTab, setActiveTab] = useState('all');

  const renderContent = () => {
    switch (activeTab) {
      case 'mur':
        return <MurContent />;
      case 'gallery':
        return <GalleryContent />;
      case 'video':
        return <VideoContent />;
      case 'musique':
        return <MusicContent />;
      default:
        return <p>Sélectionnez un onglet pour afficher le contenu.</p>;
    }
  };

  return (
    <ProfileContainer>
      <Navbar />
      <PhotoSection>
        <img src={photoSrc} alt="Profile" />
      </PhotoSection>
      <MainSection>
        <FilterSectionContainer>
          <FilterSection activeTab={activeTab} setActiveTab={setActiveTab} />
        </FilterSectionContainer>
        <ResultsSection>
          {renderContent()}
        </ResultsSection>
      </MainSection>
      <Footer>
        <p>© 2024 Connectify. Tous droits réservés.</p>
      </Footer>
    </ProfileContainer>
  );
};

export default Profile;
