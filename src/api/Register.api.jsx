import axios from "axios";
import Swal from "sweetalert2";
// funcion de registro con conexion a la api
export const funcionRegistro = async (formData) => {
  const baseUrl = "http://localhost:8080/v1";  //la ruta la saco de rutas del back, el local host 4000 es xq el puerto de nuestro back es el 4000
console.log(formData)
  try {
    const response = await axios({
        url: `${baseUrl}/users`,
        method: "POST",
        data: formData,
    }); //lo guardamos en una variable para ver con mas detenimiento lo q estamos trayendo
    
   console.log(response)
   if (response.status === 201){
    Swal.fire({
      icon: "success",
      title: "Registrado",
      text: "Registro exitoso",
    });


   }else {

    Swal.fire({
      icon: "error",
      title: "Error",
      text: "hay algun error en tu registro",
    });
   }
     
      
    return response;
    
  } catch (error) {
    console.log(error.response.data);
  }
};