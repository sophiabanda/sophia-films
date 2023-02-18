export const FilmCard = ({film, onFilmClick}) => {
    return (
        <div>
            <div
            className='grid-item'
            onClick={() => {
                onFilmClick(film)
                }}
                >
                <img key={film._id} src={film.image} className="poster"></img>
            </div>
        </div>
    )
}

// export const FilmCard = ({film, onFilmClick}) => {
//     return (
//         <Card>
//             <Card.Img variant='top' src={film.image}></Card.Img>
//         </Card>
//     )
// }

//use "off canvas" here?