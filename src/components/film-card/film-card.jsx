import { Card, Col } from 'react-bootstrap';

export const FilmCard = ({film, onFilmClick}) => {
    return (
        <Col styel={{border: '1px solid black'}} md={2}>
            <Card onClick={() => {onFilmClick(film)}}>
                <Card.Body>
                    <Card.Img key={film._id} src={film.image} variant='top' className='poster'></Card.Img>
                </Card.Body>
            </Card>
        </Col>
    )
}



