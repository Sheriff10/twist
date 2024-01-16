import axios from "axios";
import { useContext } from "react";

const getToken = () => {
   try {
      const jwtToken = window.sessionStorage.getItem("user-token");
      return jwtToken;
   } catch (error) {
      console.error("Error retrieving token:", error);
      return null;
   }
};

const userPostHandler = async (query, data, loading) => {
   try {
      //   loading(true);
      const token = getToken();

      if (!token) {
         // Handle the case where the token is not present
         console.error("No administrator token available.");
        return window.location.href = "/member/auth/signin";
      }

      // console.log(token);
      const response = await axios.post(`${window.api}${query}`, data, {
         headers: {
            "user-token": token,
            "Content-Type": "application/json",
         },
      });
      return response.data;
   } catch (error) {
      console.error("Error in userPostHandler");
      throw error; // You can choose to handle or rethrow the error as needed.
   } finally {
      //   loading(false);
   }
};

export default userPostHandler;
