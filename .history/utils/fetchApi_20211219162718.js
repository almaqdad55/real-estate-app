import axios from 'axios';

const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const response = await axios.get(url, {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
      'x-rapidapi-key': 'd18577c333msh4dbb37d714d4786p103599jsnbe081dda934a',
    },
  });
};
