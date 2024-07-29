import { useNavigate } from "react-router-dom";
import { getToken, decodeToken } from "../helpers/jwtHelper";
import { useEffect } from "react";

const ProtectedRoute = ({ Component }) => {
  const isAuthenticated = () => {
    const token = getToken();
    if (!token) return false;

    const decodedToken = decodeToken(token);
    // You can add more checks like token expiration here if needed
    return decodedToken != null;
  };

  const navigate = useNavigate();

  useEffect(function () {
    if (!isAuthenticated()) navigate("/login");
  });

  return <Component />;
};

export default ProtectedRoute;
