import { getToken, decodeToken } from "../helpers/jwtHelper";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const token = getToken();
  const user = token ? decodeToken(token) : null;

  const name = useSelector((state) => state.user.user.Name);

  useEffect(function () {
    document.title = "Dashboard";
  }, []);

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="flex flex-col gap-1 text-center">
        {user ? (
          <h1 className="text-3xl font-bold text-accent-1">Welcome, {name}</h1>
        ) : (
          <h1>Please log in</h1>
        )}
        <p className="text-md text-text-secondary">How's it going?</p>
      </div>
    </div>
  );
};

export default Dashboard;
