import React from 'react';
import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';


export const LoginView = ({onLoggedIn}) => {

    const [username, setUsername] =  useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        const data = {
            Name: username,
            Password: password
        };

        fetch('https://sophia-films.herokuapp.com/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
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
                placeholder='Username here'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required />
            </Form.Group>

            <Form.Group controlId='formPassword'>
                <Form.Label>Password:</Form.Label>
                <Form.Control
                type='password'
                placeholder='Password here'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required />
            </Form.Group>
            <Button variant='primary' type='sumbmit'>Submit</Button>
        </Form>
    )
}