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

