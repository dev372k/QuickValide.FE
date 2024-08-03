import { getToken, decodeToken } from "../helpers/jwtHelper";
import { useEffect } from "react";

function useGetUser() {
    useEffect(function() {
        const token = getToken();
        if (token) {
            const userId = JSON.parse(
              decodeToken(token)[
                "http://schemas.microsoft.com/ws/2008/06/identity/claims/userdata"
              ]
            )["Id"]
      
            async function getUserAndSetUser() {
              const res = await request(`https://api.quickvalide.com/api/Auth/${userId}`)
              return res.data
            } 
      
            getUserAndSetUser()
      
          }
    }, [])


}

export default useGetUser