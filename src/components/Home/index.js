// == Import npm
import React from 'react';
import { Row, Col } from 'react-bootstrap';

// == Import local
import './home.scss';

// == Component
const Home = () => (
  <div className="home">
    <Row>
      <Col className="col-sm-auto col-md-auto col-lg-auto">
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
      </Col>
    </Row>
  </div>
);

// == Export
export default Home;
