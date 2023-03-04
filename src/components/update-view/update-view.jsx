import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

export const UpdateView = ({ }) => {

    const { id } = useParams();

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [birthday, setBirthday] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();

        const userInfo = {
            Name: username,
            Email: email,
            Birthday: birthday
        };

        fetch('https://sophia-films.herokuapp.com/users/id/:id', {
            method: 'PUT',
            body: JSON.stringify(userInfo),
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            }
        }).then((res) => res.json())
          console.log(res)
    };

  return (
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId='formUsername'>
        <Form.Label>Update Username: </Form.Label>
        <Form.Control
          type='text'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          minLength='3'
        ></Form.Control>
        </Form.Group>
        <Form.Group controlId='formEmail'>
          <Form.Label>Update Email: </Form.Label>
          <Form.Control
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId='formBirthday'>
          <Form.Label>Update Birthday: </Form.Label>
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





