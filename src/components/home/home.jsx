import React from 'react';
import Navbar from './navbar/navbar.jsx';
import Caroussel from './caroussel/caroussel.jsx';
// import Button from 'react-bootstrap/Button';
import './home.css';

export default function home() {
  return (
    <>
      <Navbar />
      <Caroussel />
    </>
  );
}
