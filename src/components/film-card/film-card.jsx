export const FilmCard = ({film}) => {
    return (
        <div>
            <div>Title: {film.Title}</div>
            <div>Summary: {film.Summary}</div>
            <div>
                <img src={film.Image}></img>
            </div>
        </div>
    )
}