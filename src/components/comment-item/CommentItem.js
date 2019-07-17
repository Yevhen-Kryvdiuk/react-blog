import React from 'react';

function CommentItem({comment}) {
  const {id, postId, body} = comment;
  return (
    <div>
      <div>Date</div>
      <div>Author</div>
      <div>{body}</div>
    </div>
  );
}

export default CommentItem;
