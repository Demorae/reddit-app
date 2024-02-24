import React from 'react';
import { useSelector } from 'react-redux';
import './PostList.css'; // Import the CSS file
import CommentList from './CommentList';

const PostList = () => {
  const posts = useSelector((state) => state.posts);

  return (
    <div>
      <h2 className="post-list-header">Posts</h2>
      <ul className="post-list">
        {posts.map((post) => (
          <li className="post-list-item" key={post.id}>
            <div className="author-info">
              <img className="author-image" src={post.authorImage} alt="Author" />
              <span className="author-name">{post.author}</span>
            </div>
            <div className="post-details">{post.postedTime} • {post.likes} Likes</div>
            <p className="post-title">{post.title}</p>
            <img className="post-image" src={post.imageUrl} alt="Post" />
            <CommentList comments={post.comments} />
            <div className="like-dislike-container">
              <button className="like-button">Like</button>
              <button className="dislike-button">Dislike</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
