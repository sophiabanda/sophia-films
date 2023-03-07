import { useEffect, useState } from 'react';
import { Form, Button } from 'react-bootstrap';

export const SignUp = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [birthday, setBirthday] = useState('');
    //input will be a string, so state starts as empty string

    useEffect(() => {


      const handleSubmit = (e) => {
          e.preventDefault();
          //prevents default behavior of page reloading every time a field is submitted. default form behavior it to reload the entire page with submit.

          const data = {
              Name: username,
              Password: password,
              Email: email,
              Birthday: birthday
          };

          fetch('https://sophia-films.herokuapp.com/users', {
              method: 'POST',
              body: JSON.stringify(data),
              headers: {
                  'Content-Type': 'application/json'
              }
              //tells the server that the data being sent in the request is json so that the server can properly parse the data
          }).then((response) => {
              if(response.ok) {
                  alert('Signup successful!');
                  window.location.reload();
              } else {
                  alert('Signup failed.')
              }
          })
      };

    })


  return (
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId='formUsername'>
        <Form.Label>Username: </Form.Label>
        <Form.Control
          type='text'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          minLength='3'
        ></Form.Control>
        </Form.Group>
        <Form.Group controlId='formPassword'>
          <Form.Label>Password: </Form.Label>
          <Form.Control
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          minLength='8'
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId='formEmail'>
          <Form.Label>Email: </Form.Label>
          <Form.Control
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          requireds
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId='formBirthday'>
          <Form.Label>Birthday: </Form.Label>
          <Form.Control
          type='date'
          value={birthday}
          onChange={(e) => setBirthday(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Button variant='primary' type='submit'>Submit</Button>
      </Form>
  );
};

//How can I set the password field to 'show password' during creation and input?


