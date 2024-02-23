
import React from 'react';
import { render } from '@testing-library/react';
import PostList from './PostList';

test('renders post titles', () => {
  const posts = [{ id: 1, title: 'Post 1' }, { id: 2, title: 'Post 2' }];
  const { getByText } = render(<PostList posts={posts} />);
  const post1 = getByText('Post 1');
  const post2 = getByText('Post 2');
  expect(post1).toBeInTheDocument();
  expect(post2).toBeInTheDocument();
});
