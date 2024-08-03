import { useSelector, useDispatch } from "react-redux";
import { request } from "../helpers/requestHelper";
import { useEffect } from "react";

function useRefreshUser() {
  const userId = useSelector((state) => state.user.user.Id);

  useEffect(function () {
    async function getUserData() {
      const res = await request(
        `https://api.quickvalide.com/api/Auth/${userId}`
      );
      console.log(res);
    }

    getUserData();
  }, []);
}

export default useRefreshUser;
