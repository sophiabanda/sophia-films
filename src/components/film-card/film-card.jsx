

export const FilmCard = ({film, onFilmClick}) => {
    return (
        <div>
            <div
            className='grid-item'
            onClick={() => {
                onFilmClick(film)
                }}
                >
                <img src={film.image} className="poster"></img>
            </div>
        </div>
    )
}

