import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import { PropTypes } from 'prop-types';

export const FilmCard = ({film}) => {
    return (
        //mb-5 sets a margin botton using bootstrap utility classes
        <Col className='mb-5' sm={3}>
            <Card className='h-100' onClick={() => {onFilmClick(film)}}>
                <Card.Body>
                    <Card.Img key={film._id} src={film.image} className='poster'></Card.Img>
                    <Link to={`/films/${encodeURIComponent(film._id)}`}></Link>
                </Card.Body>
            </Card>
        </Col>
    )
}

FilmCard.propTypes = {
    film: PropTypes.shape({
        title: PropTypes.string
    }).isRequired,
    onBookClick: PropTypes.func.isRequired
}

