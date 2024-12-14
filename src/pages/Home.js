import React from 'react';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';

const Home = () => {
  return (
    <div>
      <Header />
      <img src="assets/travel-ibk7fgrvtvhs7qzg.jpg" alt="Travel" style={styles.image} />
      <SearchBar />
    </div>
  );
};

const styles = {
  page: {
    position: 'absolute',
    height: '100vh', // Full viewport height
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  image: {
    position: 'relative',
    left: '50px',
    top: '100px',
    right: '50px',
    width: '1180px',
    height: '300px',
    objectFit: 'cover',
    marginBottom: '50px',
  },
};

export default Home;