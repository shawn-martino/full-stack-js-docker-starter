import React from 'react';

const Posts = props => {
  return (
    <ul>
      {props.posts.map((post, i) => (
        <li key={i}>{post.title}</li>
      ))}
    </ul>
  );
};

export default Posts;
