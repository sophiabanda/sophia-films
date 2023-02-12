export const FilmDetails = ({film, backButtonClick}) => {
    return (
        <div>
                <span>Title: </span>
                <span>{film.Title}</span>
            <div>
                <span>Summary:</span>
                <span>{film.Summary}</span>
            </div>
            <button onClick={backButtonClick}>Back</button>
        </div>
    )
}
