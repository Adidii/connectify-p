// src/components/ContactForm.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { db } from '../firebase';
import firebase from '../firebase'

const ContactForm = () => {
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const submitForm = async (e) => {
    e.preventDefault();

    try {
      if (!email.trim() || !subject.trim() || !message.trim()) {
        alert('Veuillez remplir tous les champs');
        return;
      }

      await db.collection('contacts').add({
        email,
        subject,
        message,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      });

      setEmail('');
      setSubject('');
      setMessage('');

      alert('Votre message a été envoyé avec succès');
      navigate('/');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <form onSubmit={submitForm}>
      <div className="form-group">
        <label htmlFor="email">E-mail</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="form-control"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="subject">Sujet</label>
        <input
          type="text"
          id="subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className="form-control"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="form-control"
          rows="4"
          required
        ></textarea>
      </div>
      <button type="submit" className="btn btn-primary">Envoyer</button>
    </form>
  );
};

export default ContactForm;
