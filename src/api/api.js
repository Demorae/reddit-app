// src/api/api.js
import axios from 'axios';

const redditApi = axios.create({
  baseURL: 'https://www.reddit.com/r/',
  // Add your client ID as a query parameter for requests that require authentication
  params: {
    client_id: 'wi1J6Nc8qK2_PISUboOphw',
    // Other parameters if needed
  },
});

export const fetchPosts = async (subreddit) => {
  try {
    const response = await redditApi.get(`${subreddit}.json`);
    return response.data.data.children.map((child) => child.data);
  } catch (error) {
    throw error; // Handle errors appropriately in your components
  }
};
