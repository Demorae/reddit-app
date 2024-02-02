// src/components/PostList.js
import React from 'react';
import styled from 'styled-components';
import CommentList from './CommentList';

const PostListItem = styled.li`
  padding: 10px;
  margin: 5px 0;
  border: 1px solid #ddd;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
`;

const PostHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const AuthorInfo = styled.div`
  display: flex;
  align-items: center;
`;

const AuthorImage = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 10px;
`;

const PostDetails = styled.div`
  display: flex;
  align-items: center;
`;

const LikeDislikeContainer = styled.div`
  display: flex;
  align-items: center;
`;

const LikeButton = styled.button`
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 5px 10px;
  margin-right: 5px;
`;

const DislikeButton = styled.button`
  background-color: #f44336;
  color: white;
  border: none;
  padding: 5px 10px;
`;

const PostList = ({ posts }) => {
  return (
    <div>
      <h2>Posts</h2>
      <ul>
        {posts.map((post) => (
          <PostListItem key={post.id}>
            <PostHeader>
              <AuthorInfo>
                <AuthorImage src={post.authorImage} alt="Author" />
                <span>{post.author}</span>
              </AuthorInfo>
              <PostDetails>{post.postedTime} • {post.likes} Likes</PostDetails>
            </PostHeader>
            <p>{post.title}</p>
            <img src={post.imageUrl} alt="Post" style={{ maxWidth: '100%' }} />
            <CommentList comments={post.comments} />
            <LikeDislikeContainer>
              <LikeButton>Like</LikeButton>
              <DislikeButton>Dislike</DislikeButton>
            </LikeDislikeContainer>
          </PostListItem>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
