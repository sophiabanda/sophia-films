import { React, useState, useEffect } from 'react';
import { FilmCard } from '../film-card/film-card';
import { FilmDetails } from '../film-details/film-details';
import { LoginView } from '../login-view/login-view';

export const MainView = () => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    const storedToken = localStorage.getItem('token');
    const [films, setFilms] = useState([]);
    const [selectedFilm, setSelectedFilm] = useState(null);
    const [user, setUser] = useState(storedUser ? storedUser : null);
    const [token, setToken] = useState(storedToken ? storedToken : null);

    useEffect(() => {
        if(!token) {
            return;
        }

        fetch(`https://sophia-films.herokuapp.com/films`, {
            headers: { Authorization: `Bearer ${token}` }
        })
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
    }, [token])

    if(!user) {
        return (
            <LoginView
            onLoggedIn={(user, token) => {
                setUser(user);
                setToken(token);
            }} />
        )
    }

    if(selectedFilm) {
        return (
            <FilmDetails film={selectedFilm} backButtonClick={() => setSelectedFilm(null)}/>
        )
    }

    if(films.length === 0) {
        return <div>Sorry, no films to display!</div>
    }

    return (
        <div>
            <button onClick={() => { setUser(null); setToken(null); localStorage.clear() }}>Logout</button>
            <div className='grid-container'>
            {films.map((film) => (
            <FilmCard
                key={films._id}
                film={film}
                onFilmClick={(newSelectedFilm) => {
                    setSelectedFilm(newSelectedFilm);
                }}/>))}
            </div>
        </div>
    )
}