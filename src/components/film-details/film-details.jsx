import { Col, Button } from 'react-bootstrap';
import { useParams, Link } from 'react-router-dom';

import './film-details.scss'

export const FilmDetails = ({ films }) => {
    const { filmId } = useParams();

    const film = films.find((f) => f.id === filmId)

    return (
        <Col md={9}>
            <Link to={`/`}>
            <Button variant='outline-light' style={{cursor: 'pointer', width: '350px'}}>Back</Button>
            </Link>
            <div>
                <img className="detail-poster" src={film.image}></img>
            </div>
            <div className="summary">
                <div>Summary: </div>
                <div>{" "}{film.summary}</div>
            </div>
            <div className="title">
                <div>Title: </div>
                <div>{film.title}</div>
            </div>
            <div className="director">
                <div>Director: </div>
                <div>{film.director}</div>
            </div>
            <div className="genres">
                <div>Genres: </div>
                <div>{film.genres.map(genre => genre.charAt(0).toUpperCase() + genre.slice(1)).join(", ")}</div>
            </div>
        </Col>

        //.slice returns string, and .join cannot be used on string. Must be called outside of the .map function.
    )
}
