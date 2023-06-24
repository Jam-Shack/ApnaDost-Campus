import { Routes, Route, BrowserRouter } from "react-router-dom";
import './App.css';
import Home from "./pages/Homepage"
import Navbar from "./components/Navbar";
import Login from "./pages/Login"
import Signup from "./pages/Signup"

function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/signup" element={<Signup />} />
    </Routes>
    </>
  );
}

export default App;
