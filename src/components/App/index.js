// == Import npm
import React from 'react';
import { Routes, Route } from 'react-router';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// == Import
import './app.scss';
import Header from 'src/components/Header';
import Home from 'src/components/Home';
import Game from 'src/components/Game';
import Character from 'src/components/Character';
import Season from 'src/components/Season';

// == Composant
const App = () => (
  <div className="app">
    <Container fluid="true" className="h-100">
      <Row>
        <Col className="col-sm-auto col-md-auto col-lg-auto">
          <Header />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/game" element={<Game />} />
            <Route exact path="/character" element={<Character />} />
            <Route exact path="/season" element={<Season />} />
          </Routes>
        </Col>
      </Row>
    </Container>
  </div>
);

// == Export
export default App;
