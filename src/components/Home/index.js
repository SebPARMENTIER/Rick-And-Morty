// == Import npm
import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';

// == Import local
import './home.scss';
import morty from 'src/assets/morty.png';
import rick from 'src/assets/rick.png';

// == Component
const Home = () => (
  <div className="home">
    <Row>
      <Col className="col-sm-auto col-md-auto col-lg-auto">
        <div className="home-container">
        <div className="home-img-r">
          <img className="home-img-rick" src={rick} alt="Rick" />
        </div>
        <Link to="/character" className="game">
        <div className="portal">
          <div className="swish">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="swirl">
            <span></span>
            <span></span>
            <span></span>
            <div className="swirl">
            <span></span>
              <div className="swirl">
            <span></span>
                <div className="swirl"> 
            <span></span>
                  <div className="swirl"> 
            <span></span>
                    <div className="swirl">
            <span></span>
                    <div className="swirl">
            <span></span>
                      <div className="swirl">
            <span></span></div>
                    </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </Link>
        <div className="home-img-m">
          <img className="home-img-morty" src={morty} alt="Morty" />
        </div>
        </div>
        
      </Col>
    </Row>
  </div>
);

// == Export
export default Home;
