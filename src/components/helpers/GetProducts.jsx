import axios from "axios";

const baseUrl = "http://localhost:8080/v1";

export const GetProducts = async () => {
  try {
    const response = await axios({
      url: `${baseUrl}/products`,
      method: "GET",
    });

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const AddProducts = async (productData) => {
   try {
     console.log(productData)

     const formData=new FormData()
     formData.append("id",productData.id)
     formData.append("nombre",productData.nombre)
     formData.append("categoria",productData.categoria)
     formData.append("precio",productData.precio)
     formData.append("descripcion",productData.descripcion)
     formData.append("urlImagen",productData.imagen)
     formData.append("portada",productData.portada)
     formData.append("talle",productData.talle)
     formData.append("color",productData.color)

    const response = await axios({
      url: `${baseUrl}/products`,
      method: "POST",
      data: formData
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};

// export const DeleteProducts= async()=>{
//    try {
//       const response=await axios ({
//          url:`${baseUrl}/products:id`,
//          method:"DELETE"
//       })
//        return

//    }
// }
