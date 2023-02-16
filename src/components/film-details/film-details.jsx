export const FilmDetails = ({film, backButtonClick}) => {
    return (
        <div>
            <button className="back-button" onClick={backButtonClick}>Back</button>
            <div>
                <img className="detail-poster" src={film.image}></img>
            </div>
            <div className="summary">
                <div>Summary: </div>
                <div>{" "}{film.summary}</div>
            </div>
            <div className="title">
                <div>Title: </div>
                <div>{film.title}</div>
            </div>
            <div className="director">
                <div>Director: </div>
                <div>{film.director}</div>
            </div>
            <div className="genres">
                <div>Genres: </div>
                <div>{film.genres.map(genre => genre.charAt(0).toUpperCase() + genre.slice(1)).join(", ")}</div>
            </div>
        </div>

        //.slice returns string, and .join cannot be used on string. Must be called outside of the .map function.
    )
}
