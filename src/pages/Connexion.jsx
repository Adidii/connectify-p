// src/pages/Signup.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import ConnexionForm from '../components/ConnexionForm'; // Ensure this import is correct
import photo3 from '../Assets/fd_qsn.jpg'; // Import the third photo

const SignupPage = styled.div`
  margin-top: 60px;
  position: relative;
  height: calc(100vh - 60px);
`;

const SignupContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: calc(100% - 60px);
  padding-top: 60px;

  @media (max-width: 932px) {
    flex-direction: column;
    height: 1200px;
    margin-top: -510px;
  }
`;

const PhotoSide = styled.div`
  flex: 1;
  height: 100%;
  margin-top: -280px;

  img {
    width: 100%;
    height: 700px;
    margin-top: 18px;
  }
`;

const FormSide = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: -198px;
  background-color: #4ad609;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  height: 700px;
  
  @media (max-width: 932px) {
    width: 100%;
    background-image: url(${photo3});
    background-size: cover;
    background-position: center;
  }
`;

const FormSection = styled.section`
  background-color: #188422;
  border-radius: 8px;
  padding: 20px;
  max-width: 400px;
  width: 78%;
  margin-top: 80px;
  height: 500px;
  margin-left: 20px;
`;

const Title = styled.h2`
  color: #e7f60d;
  margin-top: 80px;
  font-family: 'Gravitas One', cursive;
  font-size: 16px;
  margin-bottom: -60px;
  margin-left: 150px;
`;

const Footer = styled.footer`
  background-color: green;
  color: white;
  margin-top: -119px;
  height: 200px;
  
  p {
    margin-left: 20px;
    font-size: 25px;
    margin-top: 40px;
  }

  @media (max-width: 932px) {
    margin-top: 380px;
    p {
      font-size: 20px;
      margin-top: 20px;
    }
  }
`;

const Signup = () => {
  return (
    <>
      <Navbar /> {/* Use the Navbar component here */}
      <SignupPage>
        <SignupContainer>
          <PhotoSide>
            <img className="photo3" src={photo3} alt="Signup" />
          </PhotoSide>
          <FormSide>
            <FormSection>
              <Title>Connexion</Title> {/* Add this code for the title */}
              <ConnexionForm /> {/* Use the form component here */}
              <p>Vous n'avez pas de compte? <Link to="/Inscription">Inscrivez-vous maintenant</Link></p> {/* Correct the login link */}
            </FormSection>
          </FormSide>
        </SignupContainer>
      </SignupPage>
      <Footer>
        <p>© 2024 Connectify. Tous droits réservés.</p>
      </Footer>
    </>
  );
};

export default Signup;
