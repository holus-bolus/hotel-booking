import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const BookingScreen = () => {
  const { roomId } = useParams();
  const [room, setRoom] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRoom = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(`/api/rooms/getroombyid/${roomId}`);
        setRoom(data.room);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching room:", error.message);
        setError(error.message);
        setLoading(false);
      }
    };

    fetchRoom();
  }, [roomId]);

  return (
    <div className="container">
      {loading ? (
        <h2>Loading</h2>
      ) : error ? (
        <h2>{error}</h2>
      ) : room ? ( // Check if room is not null
        <div className="row">
          <div className="col-md-5">
            <h2>{room.name}</h2>
            {room.imageUrls && room.imageUrls.length > 0 ? (
              <img
                src={room.imageUrls[0]}
                alt={room.name}
                className="img-fluid"
              />
            ) : (
              <p>No image available</p>
            )}
          </div>
          <div className="col-md-7">
            <h2>Booking details:</h2>
            <p>Name: {room.name}</p>
            <p>From date: </p>
            <p>To date: </p>
            <p>Max Count: {room.maxcount}</p>
          </div>
        </div>
      ) : (
        <h2>No room data available</h2>
      )}
    </div>
  );
};

export default BookingScreen;
