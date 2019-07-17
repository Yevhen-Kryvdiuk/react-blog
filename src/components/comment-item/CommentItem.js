import React from 'react';
import './CommentItem.css';

function CommentItem({ comment }) {
	const { body } = comment;
	return (
		<div className="comment">
			<div className="meta">
				<div>Date</div>
				<div>Author</div>
			</div>
			<div>{body}</div>
		</div>
	);
}

export default CommentItem;
