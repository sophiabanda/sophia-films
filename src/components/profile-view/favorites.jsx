import React from "react";
import { FilmCard } from "../film-card/film-card";

export const Favorites = ({ loggedInUser,film }) => {
    let favoriteFilms = film.filter((films) => {
        return loggedInUser.favoriteFilms.includes(film._id);
    })

fetch(`https://sophia-films.herokuapp.com/user/id/${loggedInUser._id}`, {
    body: JSON.stringify(),
    headers: {
        Authorization: `Bearer ${storedToken}`,
        'Content-Type': 'application/json'
    }
}).then((res) => res.json())

return (
    <h1>Hello</h1>
)

}
