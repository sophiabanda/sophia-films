import { Col } from 'react-bootstrap';

import './film-details.scss'

export const FilmDetails = ({film, backButtonClick}) => {
    return (
        <Col md={9} style={{border: '2px solid red'}}>
            <button className="back-button" style={{cursor: 'pointer'}} onClick={backButtonClick}>Back</button>
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
