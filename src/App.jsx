import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
// import Home from "./pages/Home";
import LandingPage from "./pages/LandingPage/index";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" exact element={<Home />} /> */}
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/register" exact element={<Register />} />
        <Route path="/dashboard" exact element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
