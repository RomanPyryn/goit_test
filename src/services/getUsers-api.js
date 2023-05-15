import axios from 'axios';
import { toast } from 'react-toastify';

const BASE_URL = 'https://643968a64660f26eb1b24094.mockapi.io/api/v1/users/';

export const getUsers = async limit => {
  const response = axios(`${BASE_URL}?completed=false&page=1&limit=${limit}`);
  try {
    return response;
  } catch (error) {
    toast.error('Sorry! Something went wrong.');
    console.log(error.message);
  }
};

export const getUserById = async user_id => {
  const response = await axios(`${BASE_URL}${user_id}`);
  try {
    return response.data;
  } catch (error) {
    toast.error('Sorry! Something went wrong.');
    console.log(error.message);
  }
};

export const addFollower = async (user_id, user_data) => {
  const { data } = await axios.put(`${BASE_URL}${user_id}`, user_data);
  try {
    return data;
  } catch (error) {
    toast.error('Sorry! Something went wrong.');
    console.log(error.message);
  }
};
