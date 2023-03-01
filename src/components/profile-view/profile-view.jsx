import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';


export const ProfileView = ( {} ) => {

    const data = {
        Name: username,
        Password: password,
        Email: email,
        Birthday: birthday
    };

    fetch('https://sophia-films.herokuapp.com/users', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => response.json())
    .then((response) => {

    })
};

