import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const Room = ({ room }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="row">
      <div className="col-md-4">
        <div className="card">
          <img
            className="card-img-top"
            src={room.imageUrls[0]}
            alt={room.name}
          />
          <div className="card-body">
            <h5 className="card-title">{room.name}</h5>
            <p className="card-text">{room.maxcount}</p>
            <p className="card-text">{room.phonenumber}</p>
            <p className="card-text">{room.description}</p>
            <p className="card-text">${room.pricePerNight} / night</p>
            <button className="btn btn-primary" onClick={handleShow}>
              More Info
            </button>
          </div>
        </div>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Room;
