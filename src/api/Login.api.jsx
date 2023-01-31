import axios from "axios";

// funcion de login con conexion a la api
const baseUrl = "http://localhost:8080/v1";

export const funcionLogin = async (login) => { //le paso los datos del login por parametro
  console.log(login)
  
  try { //como trabajo con una api uso try y catch x si sale un error
    const response = await axios({
        url: `${baseUrl}/user/login`,
        method: "POST",
        data: login, 
    })
    console.log(response)
    } catch (error) {
    console.error(error.response.data)
    }
};

export const logout = async () => {
    const BASE_URL = "http://localhost:4000/user/logout"}