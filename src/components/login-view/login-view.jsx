import React from 'react';
import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Navigate } from 'react-router-dom';


export const LoginView = ({onLoggedIn}) => {

    const [username, setUsername] =  useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        const data = {
            //what are access and secret referring to here? our api? passport? jwt? what gateway is this?
            //how do we go about making the proper connection here? I assumed it was:
            //'Name' because of how I set up the create object in my api, 'Password', etc
            Name: username,
            Password: password
        };

        fetch('https://sophia-films.herokuapp.com/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            //should exist in docs. "expect to include these headers". there are other foms, botincl. api's have restriction for what kind of data it expects.
            body: JSON.stringify(data)
        }).then((response) => response.json())
          .then((data) => {
            console.log(`Login response ${data}`)
            if(data.user) {
                //this will set localstorage to continue user access while logged in
                localStorage.setItem('user', JSON.stringify(data.user));
                localStorage.setItem('token', data.token);
                onLoggedIn(data.user, data.token);
            } else {
                <Navigate to='/signup' />
                alert('No such user.')
            }
        }).catch((e) => {
            alert('Something went wrong.')
        })
    }

    //To ensure accessibility, set controlId on <FormGroup>, and use <FormLabel> for the label.
    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId='formUsername'>
                <Form.Label>Username:</Form.Label>
                <Form.Control
                type='text'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required />
            </Form.Group>

            <Form.Group controlId='formPassword'>
                <Form.Label>Password:</Form.Label>
                <Form.Control
                type='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required />
            </Form.Group>
            <Button variant='primary' type='sumbmit'>Submit</Button>
        </Form>
    )
}