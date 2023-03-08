import { Button, Modal } from 'react-bootstrap';
import { useState } from 'react'
import { Favorites } from './favorites';
import { UpdateView } from '../update-view/update-view';

export const ProfileView = ( {loggedInUser, storedToken} ) => {

  console.log(loggedInUser)

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

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Update Your Info:</Modal.Title>
          </Modal.Header>
          <Modal.Body><UpdateView loggedInUser={loggedInUser} storedToken={storedToken}/></Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" type='submit' onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
}