import React from 'react';
import { useParams } from 'react-router-dom';
import posts from '../Datas/posts';

const Post = () => {
  const { postId } = useParams();
  const post = posts.find(p => p.id === parseInt(postId));

  if (!post) {
    return <p>Post not found</p>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.text}</p>
    </div>
  );
};

export default Post;