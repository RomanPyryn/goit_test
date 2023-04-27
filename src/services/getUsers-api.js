import axios from "axios";

const BASE_URL = "https://643968a64660f26eb1b24094.mockapi.io/api/v1/users/";

export const getUsers = async (limit) => {
  const response = axios(`${BASE_URL}?completed=false&page=1&limit=${limit}`);
  return response;
};

export const getUserById = async (user_id) => {
  const response = await axios(`${BASE_URL}${user_id}`);
  return response.data;
};

export const addFollower = async (user, user_id) => {
  const response = await axios.patch(`${BASE_URL}${user_id}`, user);
  // console.log(response)
  return response.data;
};
