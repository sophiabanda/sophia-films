import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const FilmCard = ({film}) => {
    return (
        //mb-5 sets a margin botton using bootstrap utility classes
        <Col className='mb-5' sm={3}>
            <Card className='h-100'>
                <Card.Body>
                    <Link to={`/films/${encodeURIComponent(film.id)}`}>
                        <Card.Img variant='top' src={film.image} className='poster'></Card.Img>
                    </Link>
                </Card.Body>
            </Card>
        </Col>
    )
}



