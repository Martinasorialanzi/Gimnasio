import axios from "axios";

const baseUrl = "http://localhost:8080/v1";

export const GetUsers = async () => {
  try {
    const response = await axios({
      url: `${baseUrl}/users`,
      method: "GET",
    });


    return response;
  } catch (error) {
    console.log(error.response.data);
  }
};