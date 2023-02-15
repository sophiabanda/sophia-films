import PropTypes from 'prop-types';

export const FilmCard = ({film, onFilmClick}) => {
    return (
        <div
        className="grid-item"
        onClick={() => {
            onFilmClick(film)
            }}
            >
            <img src={film.image} className="poster"></img>
        </div>
    )
}

FilmCard.propTypes = {
    book: PropTypes.shape = ({
        title: PropTypes.string
    }).isRequired,
    onFilmClick: PropTypes.func.isRequired
};