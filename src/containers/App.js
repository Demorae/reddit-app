// src/containers/App.js
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPostsRequest, fetchPostsSuccess, fetchPostsFailure } from '../actions/redditActions';
import PostList from '../components/PostList';
import SearchBar from '../components/SearchBar';

const App = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);
  const loading = useSelector((state) => state.loading);

  const fetchPosts = async (searchTerm) => {
    dispatch(fetchPostsRequest());

    try {
      // Replace this with your actual API call using fetch or axios
      // const response = await fetch(`your-api-endpoint?search=${searchTerm}`);
      // const data = await response.json();
      // dispatch(fetchPostsSuccess(data));
      // For now, simulate API response with a delay
      setTimeout(() => {
        const data = [
            {
              id: 1,
              title: 'Amazing Landscape',
              author: 'John Doe',
              authorImage: 'url-to-author-image',
              postedTime: '7 hours ago',
              imageUrl: 'https://a.cdn-hotels.com/gdcs/production67/d1685/7c7a65d5-9792-4168-9464-a64870154c9e.jpg',
              likes: 15,
              comments: [
                { id: 1, text: 'Beautiful!' },
                { id: 2, text: 'I love it.' },
              ],
            },
            {
                id: 2,
                title: 'Sunset on the Beach',
                author: 'Jane Smith',
                authorImage: 'url-to-author-image-2',
                postedTime: '2 days ago',
                imageUrl: 'https://images.unsplash.com/photo-1616036740257-9449ea1f6605?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3Vuc2V0JTIwYmVhY2h8ZW58MHx8MHx8fDA%3D',
                likes: 22,
                comments: [
                  { id: 3, text: 'Breathtaking view!' },
                  { id: 4, text: 'Wish I was there.' },
                ],
              },
              // Add more posts...
            ];
        dispatch(fetchPostsSuccess(data));
      }, 1000);
    } catch (error) {
      dispatch(fetchPostsFailure(error.message));
    }
  };

  useEffect(() => {
    fetchPosts('');
  }, []);

  return (
    <div>
      <h1>Reddit App</h1>
      <SearchBar onSearch={fetchPosts} />
      {loading ? <p>Loading...</p> : <PostList posts={posts} />}
    </div>
  );
};

export default App;
