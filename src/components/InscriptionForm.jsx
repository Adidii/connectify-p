// src/components/InscriptionFormRenamed.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import firebase from '../firebase'; // Import Firebase

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const InputField = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
`;

const RadioContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin: 10px 0;
`;

const Label = styled.label`
  margin-left: 5px;
  font-size: 16px;
`;

const Button = styled.button`
  padding: 10px 20px;
  margin-top: 20px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`;

const InscriptionFormRenamed = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [confirmPass, setConfirmPass] = useState('');
  const [gender, setGender] = useState('');
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 8;
  };

  const submit = async (e) => {
    e.preventDefault();
    if (pass !== confirmPass) {
      alert("Les mots de passe ne correspondent pas");
      return;
    }
    if (!validateEmail(email)) {
      alert("Adresse e-mail invalide");
      return;
    }
    if (!validatePassword(pass)) {
      alert("Le mot de passe doit contenir au moins 8 caractères");
      return;
    }
    try {
      const userCredential = await firebase.auth().createUserWithEmailAndPassword(email, pass);
      const user = userCredential.user;
      if (user) {
        await firebase.firestore().collection('users').doc(user.uid).set({
          firstName,
          lastName,
          gender,
          email,
        });

        alert("Bravo, le compte est bien créé");
        navigate('/connexion');
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <FormContainer onSubmit={submit}>
      <InputField
        type='text'
        value={firstName}
        placeholder='Prénom'
        onChange={(e) => setFirstName(e.target.value)}
        required
      />
      <InputField
        type='text'
        value={lastName}
        placeholder='Nom'
        onChange={(e) => setLastName(e.target.value)}
        required
      />
      <InputField
        type='email'
        value={email}
        placeholder='E-mail'
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <RadioContainer>
        <div>
          <InputField
            type='radio'
            value='homme'
            checked={gender === 'homme'}
            onChange={(e) => setGender(e.target.value)}
            required
          />
          <Label>Homme</Label>
        </div>
        <div>
          <InputField
            type='radio'
            value='femme'
            checked={gender === 'femme'}
            onChange={(e) => setGender(e.target.value)}
            required
          />
          <Label>Femme</Label>
        </div>
      </RadioContainer>
      <InputField
        type='password'
        value={pass}
        placeholder='Mot de passe'
        onChange={(e) => setPass(e.target.value)}
        required
      />
      <InputField
        type='password'
        value={confirmPass}
        placeholder='Confirmer le mot de passe'
        onChange={(e) => setConfirmPass(e.target.value)}
        required
      />
      <Button type='submit'>S'enregistrer</Button>
    </FormContainer>
  );
};

export default InscriptionFormRenamed;
