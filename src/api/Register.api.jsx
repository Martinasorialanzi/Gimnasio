import axios from "axios";

// funcion de registro con conexion a la api
export const funcionRegistro = async (registro) => {
  const URL_REGISTRO = "http://localhost:4000/user/register";  //la ruta la saco de rutas del back, el local host 4000 es xq el puerto de nuestro back es el 4000

  try {
    const response = await axios.post(URL_REGISTRO, registro); //lo guardamos en una variable para ver con mas detenimiento lo q estamos trayendo
    console.log(response); //console log para ver lo q estamos trayendo
    return response.data;
    
  } catch (error) {
    console.log(error);
  }
};