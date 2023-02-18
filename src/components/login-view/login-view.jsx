import React from 'react';
import {useState} from 'react';

export const LoginView = ({ onLoggedIn }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const handleSubmit = (event) => {
        event.preventDefault();
        //this prevents the form from relaoding the entire page

    const data = {
        Name: username,
        Password: password
    }

    fetch('https://sophia-films.herokuapp.com/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
        }).then((response) => response.json())
        //turns the input into usable json format
            .then((data) => {
                console.log('Login response: ', data);
                if(data.user) {
                    localStorage.setItem('user', JSON.stringify(data.user));
                    localStorage.setItem('token', data.token);
                    //keeps the user logged in with refresh and app not running
                    onLoggedIn(data.user, data.token);
                    //returns the login info to the mainview
                } else {
                alert('No such user.')
            }
        })
        .catch((e) => {
            alert('Something went wrong.')
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Username:
                <input
                    type='text'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required/>
            </label>
            <label>
                Password:
                <input
                    type='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required/>
            </label>
            <button>Submit</button>
        </form>
    )
}