// == Import npm
import React, { useState, useEffect } from 'react';
import {
  Card,
  Row,
  Col,
  CardGroup,
} from 'react-bootstrap';
//import Pagination from 'react-bootstrap/Pagination';

// == Import local
import './character.scss';

// == Component
const Character = () => {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);
  const [currentPageUrl, setCurrentPageUrl] = useState("https://rickandmortyapi.com/api/character");
  const [nextPageUrl, setNextPageUrl] = useState();
  const [prevPageUrl, setPrevPageUrl] = useState();
  const [pages, setPages] = useState();

  useEffect(() => {
    const url = currentPageUrl;
    setLoading(true);
    const fetchData = async () => {
      const res = await fetch(url);
      const data = await res.json();
      setCharacters(data.results);
      setLoading(false);
      setNextPageUrl(data.info.next);
      setPrevPageUrl(data.info.prev);
      setPages(data.info.pages)
    }
    fetchData();
  },[currentPageUrl]);

  const nextPage = () => {
    setCurrentPageUrl(nextPageUrl);
  };

  const prevPage = () => {
    setCurrentPageUrl(prevPageUrl);
  };

  const goToPage = (num) => {
    setCurrentPageUrl(`https://rickandmortyapi.com/api/character?page=${num}`);
  };

  if (loading) {
    return "Loading..."
  };
  
  let pageButtons = [];

  for (let index = 1; index <= pages; index++) {
    pageButtons.push(
      <button
        key={index}
        onClick={() => goToPage(index)}>
          {index}
        </button>
    );
  };

return (
  <div id="characters" className="characters">
    <Row>
      <div className="characters-intro">
        Voici les personnages de Rick et Morty.
      </div>
      <Col className="col-sm-auto col-md-auto col-lg-auto">
        <CardGroup>
          <div className="characters-cards">
            {characters.map((character) => (
              <Card
                key={character.id}
                style={{ width: '18rem', margin: '1em' }}
              >
                <Card.Img
                  className="characters-cards-img"
                  variant="top"
                  src={character.image}
                  alt={character.name}
                />
                <Card.Body className="characters-cards-body">
                  <Card.Title className="characters-cards-title">
                    {character.name}
                  </Card.Title>
                  <Card.Text className="characters-cards-text">
                    Statut: {character.status}
                  </Card.Text>
                  <Card.Text className="characters-cards-text">
                    Espèce: {character.species}
                  </Card.Text>
                  <Card.Text className="characters-cards-text">
                    Genre: {character.gender}
                  </Card.Text>
                  <Card.Text className="characters-cards-text">
                    Origine: {character.origin.name}
                  </Card.Text>
                </Card.Body>
              </Card>
             ))}
          </div>
        </CardGroup>
      </Col>
      <div className="pagination">
        {prevPage && (
          <button
            onClick={prevPage}
          >
            Précédent
          </button>
        )}
        {pageButtons}
        {nextPage && (
          <button
            onClick={nextPage}
          >
            Suivant
          </button>
        )}
      </div>
    </Row>
  </div>
);
}

// == Export
export default Character;
