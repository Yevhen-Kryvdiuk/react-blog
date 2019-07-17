import {
	FETCH_POSTS_REQUEST,
	FETCH_POSTS_SUCCESS,
	POSTS_REQUEST_ERROR,
	FETCH_POST_SUCCESS,
	WRITE_COMMENT,
	CREATE_COMMENT,
} from '../action-types';
import BlogService from './../../blog-service';

const blogService = new BlogService();

const postsRequested = () => {
	return {
		type: FETCH_POSTS_REQUEST,
	};
};

const postsLoaded = newPosts => {
	return {
		type: FETCH_POSTS_SUCCESS,
		payload: newPosts,
	};
};
const postLoaded = newPost => {
	return {
		type: FETCH_POST_SUCCESS,
		payload: {
			post: newPost,
			comments: newPost.comments,
		},
	};
};

const postsError = error => {
	return {
		type: POSTS_REQUEST_ERROR,
		payload: error,
	};
};
const writeComment = value => {
	return {
		type: WRITE_COMMENT,
		payload: value,
	};
};
const createComment = value => {
	return {
		type: CREATE_COMMENT,
		payload: value,
	};
};

const fetchPosts = dispatch => () => {
	dispatch(postsRequested());
	blogService
		.getPosts()
		.then(data => dispatch(postsLoaded(data)))
		.catch(err => dispatch(postsError(err)));
};

const fetchPostById = dispatch => id => {
	dispatch(postsRequested());
	blogService
		.getPostById(id)
		.then(data => dispatch(postLoaded(data)))
		.catch(err => dispatch(postsError(err)));
};
const postComment = dispatch => (id, comment) => {
	dispatch(postsRequested());
	blogService
		.createCommentForPost(id, comment)
		.then(data => dispatch(createComment(data)))
		.catch(err => dispatch(postsError(err)));
};

export { fetchPosts, fetchPostById, writeComment, postComment };
