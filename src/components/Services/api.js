import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '50268892-929648ae4af930c873d247de9';

export const getImages = async searchQuery => {
  const response = await axios.get(BASE_URL, {
    params: {
      key: API_KEY,
      q: searchQuery,
      per_page: 12,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    },
  });
  return response.data.hits;
};
