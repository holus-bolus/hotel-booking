// client/src/components/RoomDetails.jsx
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const RoomDetails = () => {
  const { roomId } = useParams();
  const [room, setRoom] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRoom = async () => {
      try {
        const { data } = await axios.get(`/api/rooms/getroombyid/${roomId}`);
        setRoom(data.room);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRoom();
  }, [roomId]);

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>{error}</h2>;

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img src={room.imageUrls[0]} alt={room.name} className="img-fluid" />
        </div>
        <div className="col-md-6">
          <h2>{room.name}</h2>
          <p>{room.description}</p>
          <p>Max Count: {room.maxcount}</p>
          <p>Phone Number: {room.phonenumber}</p>
          <p>Price Per Night: ${room.rentperday}</p>
        </div>
      </div>
    </div>
  );
};

export default RoomDetails;
