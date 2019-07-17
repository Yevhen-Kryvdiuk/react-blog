import {
	FETCH_POSTS_REQUEST,
	FETCH_POSTS_SUCCESS,
	POSTS_REQUEST_ERROR,
	FETCH_POST_SUCCESS,
	WRITE_COMMENT,
	CREATE_COMMENT,
} from '../actions/action-types';

const initialState = {
	posts: [],
	post: {},
	comments: [],
	commentInputValue: '',
	postsLoading: false,
	postsLoaded: false,
	postsError: null,
};

const actionHandlers = {
	[FETCH_POSTS_REQUEST]: state => {
		return {
			...state,
			postsLoading: true,
			postsLoaded: false,
		};
	},
	[FETCH_POSTS_SUCCESS]: (state, action) => {
		return {
			...state,
			posts: action.payload,
			postsLoading: false,
			postsLoaded: true,
		};
	},
	[POSTS_REQUEST_ERROR]: (state, action) => {
		return {
			...state,
			postsError: action.payload,
		};
	},
	[FETCH_POST_SUCCESS]: (state, action) => {
		return {
			...state,
			post: action.payload.post,
			comments: action.payload.comments,
			postsLoading: false,
			postsLoaded: true,
		};
	},
	[WRITE_COMMENT]: (state, action) => {
		return {
			...state,
			commentInputValue: action.payload,
		};
	},
	[CREATE_COMMENT]: (state, action) => {
		const comments = [...state.comments];
		comments.push(action.payload);
		return {
			...state,
			comments: comments,
			commentInputValue: '',
		};
	},
};
const reducer = (state = initialState, action) => {
	const handler = actionHandlers[action.type];

	return handler ? handler(state, action) : state;
};

export default reducer;
