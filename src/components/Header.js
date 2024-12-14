import React from 'react';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header style={styles.header}>
      <div style={styles.logo}>
        <img src="/assets/logo.png" alt="TravelWebsite" style={styles.logoImage} />
      </div>
      <div style={styles.authButtons}>
        <Link to="/login"><Button variant="outlined" color="primary">Login</Button></Link>
      </div>
    </header>
  );
};

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '20px 50px',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: 'white',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    zIndex: 1000,
  },
  logo: {
    fontSize: '24px',
    fontWeight: 'bold',
    display: 'flex',
    alignItems: 'center',
  },
  logoImage: {
    height: '40px',
  },
  authButtons: {
    display: 'flex',
    gap: '15px',
    alignItems: 'center',
  }
};

export default Header;