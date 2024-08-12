import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Carousel } from "react-bootstrap";

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
            <Link to={`/room/${room._id}`} className="btn btn-primary">
              More Info
            </Link>
          </div>
        </div>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{room.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Carousel>
            {room.imageUrls.map((imageUrl, index) => (
              <Carousel.Item key={index}>
                <img className="d-block w-100" src={imageUrl} alt={room.name} />
              </Carousel.Item>
            ))}
          </Carousel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Room;
