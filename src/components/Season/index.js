// == Import npm
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Card,
  Row,
  Col,
  CardGroup,
} from 'react-bootstrap';

// == Import local
import './season.scss';

// == Component
const Season = () => {
  const [loading, setLoading] = useState(false);
  const [seasonsData, setSeasonsData] = useState([]);
  const [synopsis, setSynopsis] = useState();
  const urlData = "https://api.themoviedb.org/3/tv/60625?api_key=9b3189df2a7c7327d4392c7a38f225e9&language=fr-FR";
  const urlImage = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const res = await fetch(urlData);
      const data = await res.json();
      setSeasonsData(data.seasons);
      setSynopsis(data.overview);
      setLoading(false);
    };
    fetchData();
  },[]);

  console.log(seasonsData);

  if (loading) {
    return "Loading..."
  };

return (
  <div id="seasons" className="seasons">
    <Row>
      <div className="seasons-intro">
        {synopsis}
      </div>
      <Col className="col-sm-auto col-md-auto col-lg-auto">
        <CardGroup>
          <div className="seasons-cards">
            {seasonsData.filter(season => season.season_number > 0).map((season) => (
              <Link
                key={season.id}
                to={`/season/${season.season_number}`}
              >
                <Card
                  style={{ width: '18rem', margin: '1em' }}
                >
                  <Card.Img
                    className="seasons-cards-img"
                    variant="top"
                    src={urlImage + season.poster_path}
                    alt={season.name}
                  />
                  <Card.Body className="seasons-cards-body">
                    <Card.Title className="seasons-cards-title">
                      {season.name}
                    </Card.Title>
                    <Card.Text className="seasons-cards-text">
                      Nombre d'épisodes: {season.episode_count}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Link>
              
             ))}
          </div>
        </CardGroup>
      </Col>
    </Row>
  </div>
);
}

// == Export
export default Season;
