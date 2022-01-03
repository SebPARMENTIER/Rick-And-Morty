// == Import npm
import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
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
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);
  const [charactersTotal, setCharactersTotal] = useState();
  const [pages, setPages] = useState();

  useEffect(() => {
    setLoading(true);
    const getPages = async () => {
      const res = await fetch("https://rickandmortyapi.com/api/character");
      const data = await res.json();
      setPages(data.info.pages);
      setCharactersTotal(data.info.count);
      setCharacters(data.results);
      setLoading(false);
    };
    getPages();
  },[]);
  
  if (loading) {
    return "Loading..."
  };

  const getDatas = async (currentPage) => {
    const res = await fetch(`https://rickandmortyapi.com/api/character?page=${currentPage}`);
    const data = await res.json();
    return data;
  };

  const handlePageClick = async (data) => {
    let currentPage = data.selected + 1;
    const datasFormAPI = await getDatas(currentPage);
    setCharacters(datasFormAPI.results);
    window.scrollTo(0, 0);
  };

return (
  <div id="characters" className="characters">
    <Row>
      <div className="characters-intro">
        Voici les {charactersTotal} personnages de Rick et Morty.
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
      <div className="paginations">
        <ReactPaginate
          previousLabel="<"
          nextLabel=">"
          breakLabel="..."          
          pageCount={pages}
          marginPagesDisplayed={2}
          pageRangeDisplayed={3}
          onPageChange={handlePageClick}
          containerClassName="pagination justify-content-center"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          breakClassName="page-item"
          breakLinkClassName="page-link"
          activeClassName="active"
        />
      </div>
    </Row>
  </div>
);
}

// == Export
export default Character;
