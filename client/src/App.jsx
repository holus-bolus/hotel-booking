// client/src/App.jsx
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen.jsx";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Outlet />}>
          <Route index element={<HomeScreen />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
