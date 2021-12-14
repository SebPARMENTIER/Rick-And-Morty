// == Import npm
import axios from 'axios';
import React, { useState } from 'react';
import {
  Card,
  Row,
  Col,
  CardGroup,
} from 'react-bootstrap';

// == Import local
import './character.scss';

// == Component
const Character = () => {
  // let datas = [];
  // let finalData = [];
  const [persoData, setPersoData] = useState([]);
  const findCharacters = () => {
    axios.get('https://rickandmortyapi.com/api/character')
    .then((response) => {
      //results.push(response.data);
      //console.log(response.data.results);
      setPersoData(response.data.results);
      //console.log(datas[0].results[0].image)
      
      // finalData.push(datas[0].results);
      // finalData.map((f) => (ultimeData.push(f)));
      
      console.log(persoData);
    })
  };

  findCharacters();

return (
  <div id="characters" className="characters">
    <Row>
      <div className="characters-banner">
        LES PERSONNAGES
      </div>
      <div className="characters-intro">
        Voici quelques personnages de Rick et Morty.
      </div>
      <Col className="col-sm-auto col-md-auto col-lg-auto">
        <CardGroup>
          <div className="characters-cards">
            {persoData.map((result) => (

           
            <Card style={{ width: '18rem', margin: '1em' }}>
              <Card.Img
                className="characters-cards-img"
                variant="top"
                src={result.image}
                alt="Sport Finder"
              />
              <Card.Body className="characters-cards-body">
                <Card.Title className="characters-cards-title">
                  Sport Finder
                </Card.Title>
                <Card.Text className="characters-cards-text">
                  Projet de fin de formation.
                  Recherchez un sport à pratiquer près de chez vous ou partout en France.
                </Card.Text>
                <div className="characters-cards-links">
                  <Card.Link
                    className="characters-cards-link"
                    href="https://sport-finder.netlify.app/"
                    target="_blank"
                  >
                    Go to Sport Finder
                  </Card.Link>
                  <Card.Link
                    className="characters-cards-link"
                    href="https://github.com/SebPARMENTIER/Sport-Finder"
                    target="_blank"
                  >
                    GitHub Page
                  </Card.Link>
                </div>
              </Card.Body>
            </Card>
             ))}
          </div>
        </CardGroup>
      </Col>
    </Row>
  </div>
);
}

// == Export
export default Character;
