import axios from 'axios';

const redditApi = axios.create({
  baseURL: 'https://www.reddit.com/',
  params: {
    client_id: 'wi1J6Nc8qK2_PISUboOphw',
    client_secret: '9z1ousW_NlooVjRbGpNe9xKW3S2fIA',
    redirect_uri: 'http://localhost:3000/',
  },
});

export const fetchPosts = async () => {
    try {
      const response = await redditApi.get('/r/announcements.json');
      return response.data; 
    } catch (error) {
      throw error;
    }
  };
  