import React, { Component } from 'react';
import { connect } from 'react-redux';
import CommentList from './../comment-list';
import CommentCreator from '../comment-creator/CommentCreator';
import {fetchPostById} from '../../actions/action-creaters';


class Post extends Component {
  componentDidMount() {
    this.props.fetchPostById(this.props.postId)
  }

  render() {
    const {post, comments} =this.props;
    const {id, title, body} = post;
    return (
      <div>
        <div>
          <div>Date</div><div>Author</div>
        </div>
        <div>{title}</div>
        <div>{body}</div>
        <CommentList comments={comments}/>
        <CommentCreator postId={id}/>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    post: state.post,
    comments: state.comments,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPostById: fetchPostById(dispatch),
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Post);

