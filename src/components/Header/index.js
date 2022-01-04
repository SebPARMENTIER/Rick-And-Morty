// == Import npm
import React from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';

// == Import local
import './header.scss';
import logo from 'src/assets/Rick_and_Morty_logo.png';

// == Component
const Header = () => (
  <Navbar fixed="top" collapseOnSelect expand="lg">
    <Container>
      <Navbar.Brand className="header-home" href="/">
        <img className="header-logo" src={logo} alt="Logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link
            className="header-home-link"
            style={{ color: '#62a4ab' }}
            href="/game"
          >
            Jeu
          </Nav.Link>
          <Nav.Link
            className="header-home-link"
            style={{ color: '#62a4ab' }}
            href="/character"
          >
            Personages
          </Nav.Link>
          <Nav.Link
            className="header-home-link"
            style={{ color: '#62a4ab' }}
            href="/season"
          >
            Saisons
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

// == Export
export default Header;
