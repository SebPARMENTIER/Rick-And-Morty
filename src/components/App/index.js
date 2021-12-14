// == Import npm
import React from 'react';
import { Routes, Route } from 'react-router';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// == Import
import './app.scss';
import Header from 'src/components/Header';
import Home from 'src/components/Home';
import Character from 'src/components/Character';
import Episode from 'src/components/Episode';
import Location from 'src/components/Location';

// == Composant
const App = () => (
  <div className="app">
    <Container fluid="true" className="h-100">
      <Row>
        <Col className="col-sm-auto col-md-auto col-lg-auto">
          <Header />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/character" element={<Character />} />
            {/* <Route exact path="/episode" element={<Episode />} />
            <Route exact path="/location" element={<Location />} /> */}
          </Routes>
        </Col>
      </Row>
    </Container>
  </div>
);

// == Export
export default App;
