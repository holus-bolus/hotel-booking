// client/src/App.jsx
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen.jsx";
import RoomDetails from "./components/RoomDetails.jsx";
import BookingScreen from "./screens/BookingScreen.jsx";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Outlet />}>
          <Route index element={<HomeScreen />} />
          <Route path="room/:roomId" element={<RoomDetails />} />
          <Route path="booking/:roomId" element={<BookingScreen />} />
        </Route>
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
