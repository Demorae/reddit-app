import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPostsRequest, fetchPostsSuccess, fetchPostsFailure } from '../actions/redditActions';
import { setPosts, setLoading, setError } from '../actions/redditActions'; 
import PostList from '../components/PostList';
import SearchBar from '../components/SearchBar';
import { fetchPosts } from '../api/api';
import "../App.css"
import Home from '../pages/Home';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch(fetchPostsRequest());
        const {data} = await fetchPosts();

        dispatch(fetchPostsSuccess(data?.children));
      } catch (error) {
        console.error('Error fetching posts:', error);
        dispatch(fetchPostsFailure());
      }
    };
  
    fetchData();
  }, [dispatch]); 

  return (
    <div>
      {/* <h1>Reddit App</h1>
      <SearchBar onSearch={handleSearch} />
      <PostList /> */}
      <Home />
    </div>
  );
};

export default App;
