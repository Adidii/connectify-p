// src/App.jsx
import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './AppRouter';
import addTestData from './addTestData'; // Importez le script

const App = () => {
  useEffect(() => {
    addTestData(); // Exécutez le script pour ajouter des données de test
  }, []);

  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
