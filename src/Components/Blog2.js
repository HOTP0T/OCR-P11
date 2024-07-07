import React from 'react';
import posts from '../Datas/posts';
import withNotFound from './WithNotFound';

const Blog2 = ({ item }) => (
  <div>
    <h1>{item.title}</h1>
    <p>{item.content}</p>
  </div>
);

const getBlog2Id = (params) => params.postId;

export default withNotFound(Blog2, posts, getBlog2Id);