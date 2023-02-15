export const FilmDetails = ({film, backButtonClick}) => {
    return (
        <div>
            <div>
                <span>Title: </span>
                <span>{film.title}</span>
            </div>
            <div>
                <span>Director: </span>
                <span>{film.Director}</span>
            </div>
            <div>
                <span>Genres: </span>
                <span>{film.Genres}</span>
            </div>
            <div>
                <span>Summary: </span>
                <span>{" "}{film.summary}</span>
            </div>
            <button onClick={backButtonClick}>Back</button>
        </div>
    )
}
