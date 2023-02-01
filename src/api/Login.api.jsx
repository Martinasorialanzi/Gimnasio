import axios from "axios";
import Swal from 'sweetalert2'

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
    if (response.status === 200) {  //auth es un atributo del objeto response q es un booleano.
        Swal.fire({
          icon: "success",
          title: "Bienvenido",
          text: "Ingreso exitoso",
        }, setTimeout(() => {
          window.location.href = "/home"; //una vez q se logue lo redirecciono al home
          }, 2000));;
      } else {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Usuario o contraseña incorrectos",
        });
      }
    } catch (error) {
    console.error(error.response.data)
    }
};


export const logout = async () => {
    const BASE_URL = "http://localhost:4000/user/logout"}