import React from 'react';
import { Link } from 'react-router-dom';

function PostItem({ post }) {
	const { id, title, body } = post;
	return (
		<div className="card">
			<div className="meta">
				<div>Date</div>
				<div>Author</div>
			</div>
			<h3>{title}</h3>
			<div>{body}</div>
			{/*<CommentCreator postId={id}/>*/}
			<Link to={`/posts/${id}`}>View post</Link>
		</div>
	);
}

export default PostItem;
