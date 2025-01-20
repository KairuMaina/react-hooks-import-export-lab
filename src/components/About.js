import React from 'react';
import { image } from '../data/user';  // Import image from user.js

function About() {
  return (
    <div id="about">
      <h2>About</h2>
      <img src={image} alt="Profile" />
    </div>
  );
}

export default About;  // Use default export
