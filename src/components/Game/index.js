// == Import npm
import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';

// == Import local
import './game.scss';
import rick from 'src/assets/Rick_and_Morty_logo.png';

// == Component
const Game = () => {
  const [charactersQuantity, setCharactersQuantity] = useState();
  const url = "https://rickandmortyapi.com/api/character";

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(url);
      const data = await res.json();
      setCharactersQuantity(data.info.count)
    }
    fetchData();
  },[]);

  const generateRandomNumber = (minlocal, maxlocal) => {
    return Math.round(Math.random() * (maxlocal - minlocal) + minlocal);
  };

  const randomCharacter = generateRandomNumber(1, charactersQuantity);

  console.log(randomCharacter);

  const [characterImage, setCharacterImage] = useState();
  const [characterName, setCharacterName] = useState();
  const [characterStatus, setCharacterStatus] = useState();

  useEffect(() => {
    const characterRandomUrl = `https://rickandmortyapi.com/api/character/${randomCharacter}`;
    const fetchData = async () => {
      const res = await fetch(characterRandomUrl);
      const data = await res.json();
      setCharacterImage(data.image);
      setCharacterName(data.name);
      setCharacterStatus(data.status);
    }
    fetchData();
  },[]);

  return (
    <div className="game">
      <Row>
      <div className="game-intro">
        Dead or Alive ?
      </div>
      <div className="game-desc">
        Les règles du jeu sont simples. Il faut avoir vu tous les épisodes de Rick et Morty. Pour chaque personnage, il suffit de répondre "Dead" ou "Alive". Tu as 5 vies et tu marques 100 points par bonne réponse.
      </div>
      <div className="game-area">
        <Col className="col-sm-auto col-md-auto col-lg-auto">
          <div className="game-counter">
            <div className="game-lives">
              1 2 3 4 5
            </div>
            <div className="game-score">
              100 points
            </div>
          </div>
          {/* <div className="game-number">{charactersQuantity}{characterImage}{characterName}{characterStatus}</div> */}
            
            <div className="game-card">
              <div className="game-card-img">
                <img src={rick} alt="Rcik" />
              </div>
              <div className="game-card-name">
                Rick
              </div>
            </div>
            <div className="game-button">
              <button className="game-button-dead">
                Dead
              </button>
              <button className="game-button-alive">
                Alive
              </button>
            </div>
          
        </Col>
        </div>
      </Row>
    </div>
  );
}

// == Export
export default Game;
