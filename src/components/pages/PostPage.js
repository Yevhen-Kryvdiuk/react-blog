import React, { Component } from 'react';
import Post from '../post';
import Spinner from './../spiner';
import ErrorIndicator from './../error-indicator';
import './Page.css';

class PostPage extends Component {
	render() {
		const { loading, error, match } = this.props;
		if (loading) {
			return <Spinner />;
		}
		if (error) {
			return <ErrorIndicator />;
		}
		return (
			<div className="container">
				<Post postId={match.params.id} />
			</div>
		);
	}
}

export default PostPage;
