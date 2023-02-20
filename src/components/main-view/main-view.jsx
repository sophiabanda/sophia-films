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

            const fetchedFilms = filmAPI.sort((a, b) => a.title.localeCompare(b.title))
            setFilms(fetchedFilms);

        })
    }, [token]);
    //token added to 2nd arg/dependency array to ensure fetch is called every time the token changes, ie, after login

    // films.sort((a, b) => a.title.localeCompare(b.title));
    //first sorts the returned array to return alphabetical order using localcompare to decipher sort order based on the titles returned. .map returns the new aphabeitcal array.

    return (
        <Row style={{border: 'dashed 3px chartreuse'}} >
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
                  <Button style={{cursor: 'pointer'}} onClick={() => {setUser(null); setToken(null); localStorage.clear()}}>Logout</Button>
                    {films.map((film) => (
                        <FilmCard
                        key={films._id}
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