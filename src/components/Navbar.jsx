import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';


// Styles
const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  background-color: grey;
  color: white;
  font-family: 'Chicle', cursive;

  @media (max-width: 932px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Title = styled.h1`
  margin: 0;
`;

const Menu = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 932px) {
    flex-direction: column;
    width: 100%;
  }
`;

const MenuItem = styled(NavLink)`
  text-decoration: none;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 5px;

  &.active {
    background-color: yellow;
    color: black;
  }

  &:hover {
    background-color: yellow;
    color: black;
  }
`;

const Navbar = () => {
  return (
    <NavContainer>
      <Title></Title>
      <Menu>
        <MenuItem exact to="/" activeClassName="active">
          Accueil
        </MenuItem>
        <MenuItem to="/inscription" activeClassName="active">
          Inscription
        </MenuItem>
        <MenuItem to="/connexion" activeClassName="active">
          Connexion
        </MenuItem>
      </Menu>
    </NavContainer>
  );
};

export default Navbar;
