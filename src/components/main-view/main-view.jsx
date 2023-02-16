import { React, useState, useEffect } from 'react';
import { FilmCard } from '../film-card/film-card';
import { FilmDetails } from '../film-details/film-details';

export const MainView = () => {
    const [films, setFilms] = useState([]);

    useEffect(() => {
        fetch(`https://sophia-films.herokuapp.com/films`)
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            const filmAPI = data.map((item) => {
                const genres = item.Genres.map(genre => genre.Type);
                const director = item.Director ? item.Director.Name : null;
                return {
                    id: item._id,
                    title: item.Title,
                    summary: item.Summary,
                    image: item.filmPosterImg,
                    director: director,
                    genres: genres
                }
            })

            setFilms(filmAPI)
        })
    }, [])

    const [selectedFilm, setSelectedFilm] = useState(null);

    if(selectedFilm) {
        return (
            <FilmDetails film={selectedFilm} backButtonClick={() => setSelectedFilm(null)}/>
        )
    }

    if(films.length === 0) {
        return <div>Sorry, no films to display!</div>
    }

    return (
        <div className='grid-container'>
          {films.map((film) => (
          <FilmCard
            key={films.id}
            film={film}
            onFilmClick={(newSelectedFilm) => {
                setSelectedFilm(newSelectedFilm);
            }}/>))}
        </div>
    )
}