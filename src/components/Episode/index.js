// == Import npm
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import {
  Card,
  Row,
  Col,
  CardGroup,
} from 'react-bootstrap';

// == Import local
import './episode.scss';
import Loading from 'src/components/Loading';

// == Component
const Episode = () => {
  const { id } = useParams();

  const urlImage = "https://image.tmdb.org/t/p/original";
  
  const [dataEpisode, setDataEpisode] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchDataEpisode = async () => {
      const res = await fetch(`https://api.themoviedb.org/3/tv/60625/season/${id}?${process.env.API_KEY}&language=fr-FR`);
      const data = await res.json();
      setDataEpisode(data.episodes);
      setLoading(false);
    };
    fetchDataEpisode();
  },[]);
    
  return (
    <div id="episodes" className="episodes">
      { loading && (<Loading />) }
      { !loading && (
        <Row>
          <div className="episodes-intro">
            Saison {id}
          </div>
          <div className="episodes-back">
            <Link to="/season">
              Retour à la liste des saisons
            </Link>
          </div>
          <Col className="col-sm-auto col-md-auto col-lg-auto">
            <CardGroup>
              <div className="episodes-cards">
                {dataEpisode.map((episode) => (
                  <div className="episodes-cards-single">
                    <Card
                      key={episode.id}
                      style={{ width: '18rem', margin: '1em' }}
                    >
                      <Card.Img
                        className="episodes-cards-img"
                        variant="top"
                        src={urlImage + episode.still_path}
                        alt={episode.name}
                      />
                      <Card.Body className="episodes-cards-body">
                        <Card.Title className="episodes-cards-title">
                          {episode.episode_number}. {episode.name}
                        </Card.Title>
                        <Card.Text className="episodes-cards-text">
                          {episode.overview}
                        </Card.Text>
                      </Card.Body>
                    </Card>
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
export default Episode;
