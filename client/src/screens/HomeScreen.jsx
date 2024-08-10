import { useEffect, useState } from "react";
import axios from "axios";
import Room from "../components/Room.jsx";

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
      {data.map((room) => (
        <Room key={room._id} room={room} />
      ))}
    </div>
  );
};

export default HomeScreen;
