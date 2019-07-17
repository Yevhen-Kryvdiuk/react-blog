import React, {Component} from 'react';
import Post from '../post';

class PostPage extends Component {
  render() {
    const { id } = this.props.match.params
    return(
      <>
        <Post postId={id}/>
      </>
    )
  }
}

export default PostPage;
