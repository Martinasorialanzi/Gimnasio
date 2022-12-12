import axios from "axios";

// funcion de login con conexion a la api

export const funcionLogin = async (login) => { //le paso los datos del login por parametro
  console.log(login)
  const BASE_URL = "http://localhost:4000/user/login";

  try { //como trabajo con una api uso try y catch x si sale un error
    const response = await axios.post(BASE_URL, login)
    console.log(response)
    } catch (error) {
    console.error(error)
    }
};

export const logout = async () => {
    const BASE_URL = "http://localhost:4000/user/logout"}