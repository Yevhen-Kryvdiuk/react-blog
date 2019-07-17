import React from 'react';
import { Link } from 'react-router-dom';


function PostItem({post}) {
  const {id, title, body} = post;
  return (
    <div>
      <div>
        <div>Date</div>
        <div>Author</div>
      </div>
      <div>{title}</div>
      <div>{body}</div>
      {/*<CommentCreator postId={id}/>*/}
      <Link to={`/posts/${id}`}>View post</Link>
    </div>
  );
}

export default PostItem;
