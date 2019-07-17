import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from './../../actions/action-creaters';
import PostList from '../post-list/PostList';
import Spinner from './../spiner';
import ErrorIndicator from './../error-indicator';
import './Page.css';

class LatestPostsPage extends Component {
	componentDidMount() {
		this.props.fetchPosts();
	}

	render() {
		const { loading, error, posts } = this.props;
		if (loading) {
			return <Spinner />;
		}
		if (error) {
			return <ErrorIndicator />;
		}
		return (
			<div className="container">
				<PostList postList={posts} />
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		posts: state.posts,
		loading: state.postsLoading,
		error: state.postsError,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		fetchPosts: fetchPosts(dispatch),
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(LatestPostsPage);
