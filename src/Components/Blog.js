import React from 'react';
import { Link } from 'react-router-dom';
import posts from '../Datas/posts';

const Blog = () => {
  return (
    <div>
      <h1>Blog</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <Link to={`post/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Blog;