import axios from "axios";

// funcion de registro con conexion a la api
export const funcionRegistro = async (registro) => {
  const baseUrl = "http://localhost:8080/v1";  //la ruta la saco de rutas del back, el local host 4000 es xq el puerto de nuestro back es el 4000

  try {
    const response = await axios.post({
        url: `${baseUrl}/user/register`,
        method: "POST",
        data: registro,
    }); //lo guardamos en una variable para ver con mas detenimiento lo q estamos trayendo
    
    return response;
    
  } catch (error) {
    console.log(error);
  }
};