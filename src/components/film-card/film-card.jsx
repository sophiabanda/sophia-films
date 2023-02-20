import { Card, Col } from 'react-bootstrap';

export const FilmCard = ({film, onFilmClick}) => {
    return (
        //mb-5 sets a margin botton using bootstrap utility classes
        <Col className='mb-5' sm={3}>
            <Card className='h-100' onClick={() => {onFilmClick(film)}}>
                <Card.Body>
                    <Card.Img key={film._id} src={film.image} className='poster'></Card.Img>
                </Card.Body>
            </Card>
        </Col>
    )
}



