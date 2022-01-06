// == Import npm
import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';

// == Import local
import './game.scss';
import Heart from 'src/components/Heart';
import Loading from 'src/components/Loading';

// == Component
const Game = () => {
  const [charactersQuantity, setCharactersQuantity] = useState();
  const [randomCharacter, setRandomCharacter] = useState();
  const [characterImage, setCharacterImage] = useState();
  const [characterName, setCharacterName] = useState();
  const [characterStatus, setCharacterStatus] = useState();

  const url = "https://rickandmortyapi.com/api/character";

  // Ask Rick and Morty API to find how many characters exists
  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const res = await fetch(url);
      const data = await res.json();
      setCharactersQuantity(data.info.count)
      setLoading(false);
    }
    fetchData();
  },[]);

  const generateRandomNumber = (minlocal, maxlocal) => {
    return Math.round(Math.random() * (maxlocal - minlocal) + minlocal);
  };

  // Find a random character
  const handlePlay = () => {
    setRandomCharacter(generateRandomNumber(1, charactersQuantity));
    setPlay(true);
  };

  const [loading, setLoading] = useState(false);

  // Ask Rick and Morty API to find infos about random character
  // If its status is unknown, ignore it and find another character with daed or alive status
  useEffect(() => {
    setLoading(true);
    const characterRandomUrl = `https://rickandmortyapi.com/api/character/${randomCharacter}`;
    const fetchData = async () => {
      const res = await fetch(characterRandomUrl);
      const data = await res.json();
      if (data.status === 'unknown') {
        handlePlay();
        setLoading(false);
      } else {
        setCharacterImage(data.image);
        setCharacterName(data.name);
        setCharacterStatus(data.status);
        setLoading(false);
      }
    }
    if (randomCharacter) {
      fetchData();
      setLoading(false);
    };
  },[randomCharacter]);

  // Initial state before playing
  const [play, setPlay] = useState(false);
  const [lifes, setLifes] = useState(5);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  // Reset state if play again
  const playAgain = () => {
    setLifes(5);
    setScore(0);
    setGameOver(false);
    setCharacterImage();
    setCharacterName();
    setCharacterStatus();
    handlePlay();
  };

  // Code to execute if answer is dead
  const handleDead = () => {
    if (lifes === 1) {
      setGameOver(true);
      setPlay(false);
    } else if (characterStatus === "Dead") {
        setScore(score+100);
        handlePlay();
      } else {
          setLifes(lifes-1);
          handlePlay();
        }
  };

  // Code to execute if answer is alive
  const handleAlive = () => {
    if (lifes === 1) {
      setGameOver(true);
      setPlay(false);
    } else if (characterStatus === "Alive") {
        setScore(score+100);
        handlePlay();
      } else {
          setLifes(lifes-1);
          handlePlay();
        }
  };

  return (
    <div className="game">
      { loading && (<Loading />) }
      { !loading && (
        <Row>
          <div className="game-intro">
            Dead or Alive ?
          </div>
          <div className="game-area">
            <Col className="col-sm-auto col-md-auto col-lg-auto">
              {play && (
                <div className="game-play">
                  <div className="game-play-counter">
                    <div className="game-play-lifes">
                      <div className="game-play-title">
                        Vies:
                      </div>
                      <div className="game-play-heart">
                        <Heart
                          key={lifes}
                          rating={lifes}
                        />
                      </div>
                    </div>
                    <div className="game-play-score">
                      Score: {score} points
                    </div>
                  </div>
                  <div className="game-play-character">
                    <div className="game-play-character-img">
                      <img
                        className="game-play-character-img-resp"
                        src={characterImage}
                        alt={characterName}
                      />
                    </div>
                    <div className="game-play-name">
                      {characterName}
                    </div>
                  </div>
                </div>
              )}
              {!play && (
                <div className={gameOver ? "game-rule-off" : "game-rule"}>
                  <div className="game-rule-desc">
                    Les règles du jeu sont simples. Il faut avoir vu tous les épisodes de Rick et Morty. Pour chaque personnage, il suffit de répondre "Dead" ou "Alive". Tu as 5 vies et tu marques 100 points par bonne réponse.
                  </div>
                  <div className="game-button">
                    <button
                      className="game-button-play"
                      onClick={handlePlay}
                    >
                      Jouer
                    </button>
                  </div>
                </div>
              )}
              {play && (
                <div className="game-button">
                  <button
                    className="game-button-dead"
                    onClick={handleDead}
                  >
                    Dead
                  </button>
                  <button
                    className="game-button-alive"
                    onClick={handleAlive}
                  >
                    Alive
                  </button>
                </div>
              )}
              {gameOver && (
                <div className="game-final">
                  <div className="game-final-score">
                    Bravo, tu as gagné {score} points !!!
                  </div>
                  <div className="game-button">
                    <button
                      className="game-button-replay"
                      onClick={playAgain}
                      >
                        Rejouer
                    </button>
                  </div>
                </div>
              )}
            </Col>
          </div>
        </Row>
      )}
    </div>
  );
}

// == Export
export default Game;
