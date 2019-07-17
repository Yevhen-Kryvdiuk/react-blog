import React from 'react';
import PostItem from './../post-item';
import './PostList.css';

function PostList({ postList }) {
	return (
		<ul>
			{postList.map(post => {
				return (
					<li key={post.id}>
						<PostItem post={post} />
					</li>
				);
			})}
		</ul>
	);
}

export default PostList;
