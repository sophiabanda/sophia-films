import React from 'react';
import { useState } from 'react';

export const LoginView = ({onLoggedIn}) => {

    const [username, setUsername] =  useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        const data = {
            //what are access and secret referring to here? our api? passport? jwt? what gateway is this?
            access: username,
            secret: password
        };

        fetch('https://sophia-films.herokuapp.com/login', {
            method: 'POST',
            body: JSON.stringify(data)
        }).then((response) => response.json())
          .then((data) => {
            console.log(`Login response ${data}`)
            if(data.user) {
                //this will set localstorage to continue user access while logged in
                localStorage.setItem('user', JSON.stringify(data.user));
                localStorage.setItem('password', data.token);
                onLoggedIn(data.user, data.token);
            } else {
                alert('No such user.')
            }
        }).catch((e) => {
            alert('Something went wrong.')
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Username:
                <input
                type='text'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                />
            </label>
            <label>Password:
                <input
                type='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                />
            </label>
            <button
            type='submit'>
                Submit
            </button>
        </form>
    )
}