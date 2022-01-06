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
import Loading from 'src/components/Loading';

// == Component
const Season = () => {
  const [loading, setLoading] = useState(false);
  const [seasonsData, setSeasonsData] = useState([]);
  const [synopsis, setSynopsis] = useState();
  const urlData = `https://api.themoviedb.org/3/tv/60625?${process.env.API_KEY}&language=fr-FR`;
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

  return (
    <div id="seasons" className="seasons">
      { loading && (<Loading />) }
      { !loading && (
        <Row>
          <div className="seasons-intro">
            {synopsis}
          </div>
          <Col className="col-sm-auto col-md-auto col-lg-auto">
            <CardGroup>
              <div className="seasons-cards">
                {seasonsData.filter(season => season.season_number > 0).map((season) => (
                  <div className="seasons-cards-single">
                    <Link
                      key={season.id}
                      to={`/season/${season.season_number}`}
                      style={{ textDecoration: 'none'}}
                    >
                      <Card
                        style={{ width: '18rem' }}
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
                  </div>
                ))}
              </div>
            </CardGroup>
          </Col>
        </Row>
      )}
    </div>
  );
}

// == Export
export default Season;
