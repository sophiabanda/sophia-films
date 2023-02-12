export const FilmCard = ({film, onFilmClick}) => {
    return (
        <div
        onClick={() => {
            onFilmClick(film)
            }}
            >
            <img src={film.Image}></img>
        </div>
    )
}