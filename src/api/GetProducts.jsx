import axios from "axios";

const baseUrl = "https://gimansio-backend.vercel.app/v1";

export const GetProducts = async () => {
  try {
    const response = await axios({
      url: `${baseUrl}/products`,
      method: "GET",
    });

    return response.data;
  } catch (error) {
    console.log(error.response);
  }
};

export const AddProducts = async (formData) => {
  try {
    console.log(formData);

    const response = await axios({
      url: `${baseUrl}/products`,
      method: "POST",
      data: formData,
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const deleteProduct = async (_id) => {
  console.log(_id);
  try {
    await axios({
      url: `${baseUrl}/product/${_id}`,
      method: "DELETE",
    });
  } catch (error) {
    console.log(error.response.data);
  }
};

export const GetProduct = async (_id) => {
  console.log(_id);
  try {
    const response = await axios({
      url: `${baseUrl}/product/${_id}`,
      method: "GET",
    });

    console.log(response.data.product);
    return response.data.product;
  } catch (error) {
    console.log(error.response.data);
  }
};

export const UpdateProduct = async (_id, formData) => {
  console.log(_id);
  console.log(formData);
  try {
    await axios({
      url: `${baseUrl}/product/${_id}`,
      method: "PUT",
      data: formData,
    });
  } catch (error) {
    console.log(error.response);
  }
};
