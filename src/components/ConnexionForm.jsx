import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import firebase from '../firebase';

const ConnexionForm = () => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const submit = async (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      alert("Adresse e-mail invalide");
      return;
    }
    if (pass.length < 8) {
      alert("Le mot de passe doit contenir au moins 8 caractères");
      return;
    }
    try {
      const userCredential = await firebase.auth().signInWithEmailAndPassword(email, pass);
      const user = userCredential.user;

      // Récupérer les données de l'utilisateur depuis Firestore
      const userDoc = await firebase.firestore().collection('users').doc(user.uid).get();
      const userData = userDoc.data();

      // Naviguer vers la page de profil avec les données de l'utilisateur
      navigate('/profil', { state: { userData } });
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <form onSubmit={submit}>
      <div className='box-renamed'>
        <input
          type='email'
          value={email}
          placeholder='E-mail'
          onChange={(e) => setEmail(e.target.value)}
          className="input-field-renamed"
          required
        />
      </div>
      <div className='box-renamed'>
        <input
          type='password'
          value={pass}
          placeholder='Mot de passe'
          onChange={(e) => setPass(e.target.value)}
          className="input-field-renamed"
          required
        />
      </div>
      <button type='submit'>Se connecter</button>
    </form>
  );
};

ConnexionForm.propTypes = {
  email: PropTypes.string.isRequired,
  pass: PropTypes.string.isRequired,
};

export default ConnexionForm;
