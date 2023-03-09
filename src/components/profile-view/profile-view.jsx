import { Button, Modal } from 'react-bootstrap';
import { useState } from 'react'

import { UpdateView } from '../update-view/update-view';

export const ProfileView = ( {loggedInUser, storedToken} ) => {

  const { Name, Birthday } = loggedInUser
  const birthDay = new Date(Birthday).toLocaleDateString();

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


    return (
      <>
        <img></img>
        <h1>{`Name: ${Name}`}</h1>
        <h3>{`Birthday: ${birthDay}`}</h3>
        <Button variant="primary" onClick={handleShow}>
          Update User Information
        </Button>
        <UpdateView
              handleClose={handleClose}
              show={show}
              loggedInUser={loggedInUser}
              storedToken={storedToken} />
      </>
    );
}