import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const [city, setCity] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    if (city) {
      navigate(`/places/${city}`);
    }
  };

  return (
    <div style={styles.searchContainer}>
      <TextField
        label="Where to ?"
        variant="outlined"
        size="large"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
        style={styles.searchInput}
      />
      <Button
        variant="contained"
        color="primary"
        size="large"
        onClick={handleSearch}
        style={styles.searchButton}
      >
        Search
      </Button>
    </div>
  );
};

const styles = {
  searchContainer: {
    marginTop: '100px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
  },
  searchInput: {
    maxWidth: '700px',
    width: '100%',
  },
  searchButton: {
    height: '56px',
  },
};

export default SearchBar;