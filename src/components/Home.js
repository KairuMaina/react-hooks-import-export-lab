import React from 'react';
import { username, city } from '../data/user';  // Import variables from user.js

function Home() {
  return (
    <div id="home">
      <h1>Welcome to {username}'s Portfolio</h1>
      <p>Location: {city}</p>
    </div>
  );
}

export default Home;  // Use default export
