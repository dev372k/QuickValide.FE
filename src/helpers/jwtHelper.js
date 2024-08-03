import { jwtDecode } from "jwt-decode";
import { useSelector, useDispatch } from "react-redux";
import { request } from "./requestHelper";

export const getToken = () => localStorage.getItem("token");

export const setToken = (token) => {
  localStorage.setItem("token", token);
};

export const removeToken = () => {
  localStorage.removeItem("token");
};

export const decodeToken = (token) => {
  try {
    return jwtDecode(token);
  } catch (e) {
    return null;
  }
};
