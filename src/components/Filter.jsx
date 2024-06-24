// src/components/Filter.jsx
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const FilterSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin-top: 90px;
  height: 100px;
`;

const FilterTabs = styled.div`
  display: flex;
  flex-direction: column;
`;

const FilterTab = styled.div`
  padding: 20px;
  margin-bottom: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  border-radius: 4px;
  border: 2px solid black;
  background-color: ${props => (props.active ? '#ffd700' : '#ffd700')};
  color: ${props => (props.active ? '#fff' : 'black')};

  &:hover {
    background-color: ${props => (props.active ? '#ffd700' : '#3de30a')};
  }

  &:last-child {
    margin-bottom: 10px;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

const FilterSection = ({ activeTab, setActiveTab }) => {
  const filters = [
    { id: 'all', name: 'TOUT', link: '/' },
    { id: 'mur', name: 'MUR', link: '/mur' },
    { id: 'gallery', name: 'GALLERY', link: '/gallery' },
    { id: 'video', name: 'VIDEO', link: '/video' },
    { id: 'musique', name: 'MUSIQUE', link: '/music' },
  ];

  return (
    <FilterSectionContainer>
      <FilterTabs>
        {filters.map(filter => (
          <FilterTab
            key={filter.id}
            active={activeTab === filter.id}
            onClick={() => setActiveTab(filter.id)}
          >
            <Link to={filter.link}>{filter.name}</Link>
          </FilterTab>
        ))}
      </FilterTabs>
    </FilterSectionContainer>
  );
};

FilterSection.propTypes = {
  activeTab: PropTypes.string.isRequired,
  setActiveTab: PropTypes.func.isRequired,
};

export default FilterSection;
