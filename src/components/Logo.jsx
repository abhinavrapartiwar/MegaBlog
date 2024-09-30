import React from 'react';
import logo from '../assets/logo.webp'; // Import the image

function Logo({ width = '100px' }) {
  return (
    <div>
      <img src={logo} alt="Logo" style={{ width }} /> {/* Set the width dynamically */}
    </div>
  );
}

export default Logo;
