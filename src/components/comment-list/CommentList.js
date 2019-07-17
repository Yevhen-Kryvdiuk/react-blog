import React from 'react';
import CommentItem from './../comment-item';

function CommentList({comments}) {
  return (
    <ul>
      {
        comments.map(comment => {
          return (
            <li key={comment.id}>
              <CommentItem comment={comment}/>
            </li>
          )
        })
      }
    </ul>
  );
}

export default CommentList;
