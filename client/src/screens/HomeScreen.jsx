import { useEffect, useState } from "react";
import axios from "axios";

const HomeScreen = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = (await axios.get("/api/rooms/getallrooms")).data;

        setData(data.rooms);
      } catch (error) {
        console.error(`Error in HomeScreen: ${error.message}`);
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      <h1>Home Screen</h1>
      {data.map((room) => (
        <div key={room._id} className="col-md-9">
          <h2>{room.name}</h2>
          <p>{room.description}</p>
          <p>Price: ${room.rentperday}</p>
        </div>
      ))}
    </div>
  );
};

export default HomeScreen;
