import axios from "axios";
import { useContext } from "react";

export const getToken = () => {
   try {
      const jwtToken = window.sessionStorage.getItem("user-token");
      return jwtToken;
   } catch (error) {
      console.error("Error retrieving token:", error);
      return null;
   }
};

const userGetHandler = async (query, loading) => {
   try {
      //   loading(true);
      const token = getToken();

      if (!token) {
         // Handle the case where the token is not present
         console.error("No administrator token available.");
         window.location.href = "/auth/login";
         return null;
      }

      // console.log(token);
      const response = await axios.get(`${window.api}${query}`, {
         headers: {
            "user-token": token,
            "Content-Type": "application/json",
         },
      });
      return response.data;
   } catch (error) {
      console.error("Error in userGetHandler");
      throw error; // You can choose to handle or rethrow the error as needed.
   } finally {
      //   loading(false);
   }
};

export default userGetHandler;
