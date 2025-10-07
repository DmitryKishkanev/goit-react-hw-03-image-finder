import axios from 'axios';

export const getImages = async () => {
  const response = await axios.get();
  return response.data;
};
