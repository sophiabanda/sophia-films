import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

export const UpdateView = ({ storedToken, loggedInUser }) => {

    const { id } = useParams();

    const [username, setUsername] = useState(loggedInUser.Name);
    const [email, setEmail] = useState(loggedInUser.Email);
    const [birthday, setBirthday] = useState(loggedInUser.Birthday);
    const [password, setPassword] = useState(loggedInUser.Password);


    const handleSubmit = () => {
      console.log('this ran')

        const userInfo = {
            Name: username,
            Password: password,
            Email: email,
            Birthday: birthday
        };

        fetch(`https://sophia-films.herokuapp.com/user/id/${loggedInUser._id}`, {
            method: 'PUT',
            body: JSON.stringify(userInfo),
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${storedToken}`
            }
        }).then((res) => console.log(res))
    };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId='formPassword'>
          <Form.Label>Enter or Update Password: </Form.Label>
          <Form.Control
          type='password'
          defaultValue={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          minLength='8'
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId='formUsername'>
        <Form.Label>Update Username: </Form.Label>
        <Form.Control
          type='text'
          defaultValue={username}
          onChange={(e) => setUsername(e.target.value)}
          minLength='3'
        ></Form.Control>
        </Form.Group>
        <Form.Group controlId='formEmail'>
          <Form.Label>Update Email: </Form.Label>
          <Form.Control
          type='email'
          defaultValue={email}
          onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId='formBirthday'>
          <Form.Label>Update Birthday: </Form.Label>
          <Form.Control
          type='date'
          defaultValue={''}
          onChange={(e) => setBirthday(e.target.value)}
          ></Form.Control>
        </Form.Group>
      </Form>
</>
  );
};





