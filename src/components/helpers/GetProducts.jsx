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
    console.log(error.response.data);
  }
};

export const AddProducts = async (productData) => {
   try {
     console.log(productData)

     const formData=new FormData()
     formData.append("nombre",productData.nombre)
     formData.append("categoria",productData.categoria)
     formData.append("precio",productData.precio)
     formData.append("descripcion",productData.descripcion)
     formData.append("urlImagen",productData.imagen)
     formData.append("portada",productData.portada)
     formData.append("talle",productData.talle)
     formData.append("color",productData.color)
     formData.append("stock",productData.stock)

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

export const deleteProduct= async(_id)=>{
  console.log(_id)
   try {
    await axios ({
         url:`${baseUrl}/product/${_id}`,
         method:"DELETE"
      })
    

   }catch (error) {
    console.log(error.response.data);
  }
}
