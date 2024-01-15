import axios from "axios";

const logToken = (token) => {
   window.sessionStorage.setItem("user-token", token);
};

const authHandler = async (query, data, type) => {
   try {
      const response = await axios.post(`${window.api}${query}`, data);

      if (type === "login") {
         const token = response.headers["user-token"];
         console.log(token)
         logToken(token);
      }
      return response.data;
   } catch (error) {
      console.error("error in authHhandler");
      throw error;
   }
};

export default authHandler