import { React, useState, useEffect } from 'react';
import { FilmCard } from '../film-card/film-card';
import { FilmDetails } from '../film-details/film-details';
import { LoginView } from '../login-view/login-view';
import { SignUp } from '../signup-view/signup-view';
import { Row } from 'react-bootstrap';
import { Routes, Route, Navigate, BrowserRouter } from 'react-router-dom';
import { NavBar } from '../nav-bar/nav-bar';
import { ProfileView } from '../profile-view/profile-view';

export const MainView = () => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    const storedToken = localStorage.getItem('token');
    //stores user token locally to keep user logged in after sign-in
    const [films, setFilms] = useState([]);
    const [user, setUser] = useState(storedUser ? storedUser : null);
    const [token, setToken] = useState(storedToken ? storedToken : null);
    //checks for user and token

    useEffect(() => {
        if(!token) {
            return;
        }

        fetch(`https://sophia-films.herokuapp.com/films`, {
            //this should be added to the films api docs:
            // method: 'GET',
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
        <BrowserRouter>
        <NavBar user={user} token={token} />
            <Row>
                <Routes>
                    <Route
                    path='/signup'
                    element={
                        <>
                            {user ? (
                                <Navigate to='/' />
                            ) : (
                                <SignUp />
                            )}
                        </>
                    }
                    ></Route>
                    <Route
                    path='/login'
                    element={
                        <>
                            {user ? (
                                <Navigate to='/' />
                            ) : (
                                <LoginView onLoggedIn={(user, token) => {
                                    setUser(user);
                                    setToken(token);
                                }}/>
                            )}
                        </>
                    }
                    ></Route>
                    <Route
                    path='films/:filmId'
                    element={
                        <>
                            {!user ? (
                                <Navigate to='/login' replace />
                            ) : films.length === 0 ? (
                                <div>Sorry! We may have no films to display.</div>
                            ) : (
                                <FilmDetails films={films}></FilmDetails>
                            )}
                        </>
                    }
                    ></Route>
                    <Route
                    path='/'
                    element={
                        <>
                            {user ? (
                                films.map((film) => {
                                    return <FilmCard
                                            film={film}
                                            key={film.id}>
                                         </FilmCard>
                                })
                            ) : (
                                <LoginView />
                            )}
                        </>
                    }
                    ></Route>
                    <Route
                    path='/user/id/:id'
                    element={
                        <ProfileView loggedInUser={user} storedToken={token}></ProfileView>
                    }
                    ></Route>
                </Routes>
            </Row>
        </BrowserRouter>
    )
}


