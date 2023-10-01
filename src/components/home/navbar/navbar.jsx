import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../../utils/img/logo.png';
import Button from 'react-bootstrap/Button';
import './navbar.css';

export default function navbar() {
  return (
    <Navbar expand="lg" bg="dark" className="bg-body navbar">
      <Container>
        <Navbar.Brand href="#home">
          {' '}
          <img
            alt=""
            src={logo}
            width="70"
            height="70"
            className="d-inline-block "
          />{' '}
          Sante&Lys
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Acceuil</Nav.Link>
            <Nav.Link href="#link">Qui somme nous</Nav.Link>
            <NavDropdown title="Nos prestations" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                Aide à l'autonomie
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.2">
                Aide à domicile{' '}
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.3">
                Aide et loisir
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <div className="container-tel d-flex justify-content-around align-items-center ">
            <p className="num">01.06.05.04.05</p>
            <Button variant="success">Obtenir un devis</Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
