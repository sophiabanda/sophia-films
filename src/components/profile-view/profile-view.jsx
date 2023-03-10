import { Button, Modal } from 'react-bootstrap';
import { useState } from 'react'

import { UpdateView } from '../update-view/update-view';
import { Favorites } from './favorites';

export const ProfileView = ( {loggedInUser, storedToken, handleUserUpdate} ) => {

  const { Name, Birthday } = loggedInUser
  const birthDay = new Date(Birthday).toLocaleDateString();

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //TODO: Update local storage/ clear local


    return (
      <>
        <img></img>
        <h1>{`Name: ${Name}`}</h1>
        <h3>{`Birthday: ${birthDay}`}</h3>
        <Favorites storedToken={storedToken} loggedInUser={loggedInUser}/>
        <Button variant="primary" onClick={handleShow}>
          Update User Information
        </Button>
        <UpdateView
              handleUserUpdate={handleUserUpdate}
              handleClose={handleClose}
              show={show}
              loggedInUser={loggedInUser}
              storedToken={storedToken} />
      </>
    );
}