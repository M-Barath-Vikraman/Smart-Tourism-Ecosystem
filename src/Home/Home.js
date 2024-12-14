import React from 'react';
import './Home.css';
import HeroImage from '../Home/main.jpeg';  // Make sure the image is correctly placed in the assets folder

const Home = () => {
  return (
    <div className="home">
      <img src={HeroImage} alt="Hero" className="hero-image" />
      <div className="content">
        <h2>Cheers to your Achievements</h2>
        <p>We went, we reviewed, we reached milestones. See the big things we did together in 2024.</p>
        <button className="plan-button">Check it out</button>
      </div>
    </div>
  );
};

export default Home;
