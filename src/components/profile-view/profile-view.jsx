import { Button, Modal } from 'react-bootstrap';
import { useState } from 'react'
import { format } from 'date-fns';

import { UpdateView } from '../update-view/update-view';

// create state for modal



export const ProfileView = ( {loggedInUser} ) => {

  const { Name, Birthday } = loggedInUser

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    return (
      <>
        <img></img>
        <h1>{`Name: ${Name}`}</h1>
        <h3>{`Birthday: ${Birthday}`}</h3>
        <Button variant="primary" onClick={handleShow}>
          Update User Information
        </Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Update Your Info:</Modal.Title>
          </Modal.Header>
          <Modal.Body><UpdateView/></Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  // TODO: Create onClick that will open update-view MODAL
}