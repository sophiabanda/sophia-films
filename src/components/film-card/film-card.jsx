import { Card, Col } from 'react-bootstrap';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom'

export const FilmCard = ({film}) => {
    return (
        //mb-5 sets a margin botton using bootstrap utility classes
        <Col className='mb-5' sm={3}>
            <Link to={`/films/${encodeURIComponent(film._id)}`}>
                <Card className='h-100'>
                    <Card.Body>
                        <Card.Img key={film._id} src={film.image} className='poster'></Card.Img>
                    </Card.Body>
                </Card>
            </Link>
        </Col>
    )
}

// FilmCard.propTypes = {
//     film: PropTypes.shape({
//         title: PropTypes.string
//     }).isRequired,
//     onBookClick: PropTypes.func.isRequired
// }

// onClick={() => {onFilmClick(film)}}