import React from 'react';
import { postComment, writeComment } from '../../actions/action-creaters';
import { connect } from 'react-redux';

function CommentCreator({
	commentInputValue,
	postComment,
	writeComment,
	postId,
}) {
	const comment = {
		postId: postId,
		body: commentInputValue,
	};
	return (
		<div>
			<input
				type="text"
				onChange={event => writeComment(event.target.value)}
				value={commentInputValue}
			/>
			<button onClick={() => postComment(postId, comment)}>Add comment</button>
		</div>
	);
}

const mapStateToProps = state => {
	return {
		commentInputValue: state.commentInputValue,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		postComment: postComment(dispatch),
		writeComment: value => dispatch(writeComment(value)),
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(CommentCreator);
