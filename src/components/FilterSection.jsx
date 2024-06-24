const filters = [
    { id: 'all', name: 'TOUT', link: '/' },
    { id: 'mur', name: 'MUR', link: '/mur' },
    { id: 'gallery', name: 'GALLERY', link: '/gallery' },
    { id: 'video', name: 'VIDEO', link: '/video' },
    { id: 'musique', name: 'MUSIQUE', link: '/music' },
  ];
  
  const FilterSection = ({ activeTab, setActiveTab }) => {
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
  