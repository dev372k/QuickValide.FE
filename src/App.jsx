import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import { useEffect } from "react";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import LandingPage from "./pages/LandingPage/index";
import Dashboard from "./pages/Dashboard";
import PrivacyPolicy from "./pages/Privacy Policy";
import TermsAndConditions from "./pages/Terms and Conditions";
import { decodeToken, getToken } from "./helpers/jwtHelper";

import { useDispatch } from "react-redux";
import { saveUser } from "./services/userSlice";

function App() {
  const dispatch = useDispatch();
  useEffect(function () {
    const token = getToken();
    if (token) {
      dispatch(
        saveUser(
          JSON.parse(
            decodeToken(token)[
              "http://schemas.microsoft.com/ws/2008/06/identity/claims/userdata"
            ]
          )
        )
      );
    }
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/register" exact element={<Register />} />
        <Route
          path="/dashboard"
          element={<ProtectedRoute Component={Dashboard} />}
        />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
