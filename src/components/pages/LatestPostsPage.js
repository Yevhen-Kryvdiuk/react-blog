import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from './../../actions/action-creaters';
import PostList from '../post-list/PostList';


class LatestPostsPage extends Component {
  componentDidMount() {
  this.props.fetchPosts()
  }

  render() {
    return (
      <div>
        <PostList postList={this.props.posts}/>
      </div>
    );
  };
}


const mapStateToProps = (state) => {
  return { posts: state.posts,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPosts: fetchPosts(dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LatestPostsPage);
