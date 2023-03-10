import { React, useState, useEffect } from 'react';
import { FilmCard } from '../film-card/film-card';
import { FilmDetails } from '../film-details/film-details';
import { LoginView } from '../login-view/login-view';
import { SignUp } from '../signup-view/signup-view';
import { Button, Row } from 'react-bootstrap';

export const MainView = () => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    const storedToken = localStorage.getItem('token');
    //stores user token locally to keep user logged in after sign-in
    const [films, setFilms] = useState([]);
    const [selectedFilm, setSelectedFilm] = useState(null);
    const [user, setUser] = useState(storedUser ? storedUser : null);
    const [token, setToken] = useState(storedToken ? storedToken : null);
    //checks for user and token

    useEffect(() => {
        if(!token) {
            return;
        }

        fetch(`https://sophia-films.herokuapp.com/films`, {
            //where do we learn to set this properly? I see we can add them in postman
            headers: { Authorization: `Bearer ${token}` }
        })
        .then((res) => res.json())
        .then((data) => {
            //initial returned array
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

            const fetchedFilms = filmAPI.sort((a, b) => a.title.localeCompare(b.title))
            setFilms(fetchedFilms);
            //With fetchedFilms we're requesting the the initially returned array be sorted alphabetically with sort & localCompare
            //Doing this before they're set as state ensures faster performance by ensuring we do not sort with every re-render in return.
            //fetchedFilms is the alphabetical array
        })
    }, [token]);
    //token added to 2nd arg/dependency array to ensure fetch is called every time the token changes, ie, after login


    return (
        <Row>
            {!user ? (
                <>
                  <LoginView onLoggedIn={(user) => setUser(user)} /> or <SignUp />
                </>
                    ) : selectedFilm ? (
                        <FilmDetails film={selectedFilm} backButtonClick={() => setSelectedFilm(null)}/>
                    ) : films.length === 0 ? (
                        <div>Sorry, no films to display!</div>
                    ) : (
                <>
                  <Button className='logout-button' style={{cursor: 'pointer'}} onClick={() => {setUser(null); setToken(null); localStorage.clear()}}>Logout</Button>
                    {films.map((film) => (
                        <FilmCard
                        key={films.id}
                        film={film}
                        onFilmClick={(newSelectedFilm) => {setSelectedFilm(newSelectedFilm)}}
                        ></FilmCard>
                        ))}
                </>
            )
        }
        </Row>
    )
}
