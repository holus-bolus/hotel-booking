const Room = ({ room }) => {
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
            <button className="btn btn-primary">More Info</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Room;
