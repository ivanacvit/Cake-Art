/** @jsx jsx */
import { jsx } from "theme-ui"
import React from 'react';
import Pusher from 'pusher-js';
import CommentForm from './form';
import Comment from './Comment';
import '../../../styles/comment.css';

class Comments extends React.Component {
  constructor() {
    super();
    this.state = {
      comments: [],
    };
    this.pusher = new Pusher('f848aff7e12a3bd424b1', {
      cluster: 'eu',
      forceTLS: true
    });
  }
  componentDidMount() {
    const channel = this.pusher.subscribe('post-comment');
    channel.bind('new-comment', (data) => {
      this.setState((prevState) => ({
        comments: [...prevState.comments, data],
      }));
    });
  }

  render() {
    const { comments } = this.state;
    return (
      <div>
        <CommentForm />
        <form onSubmit={this.handleSubmit} className="comment-form">
        <div sx={{
              paddingTop: "20px"
            }}>
          {comments.length ? (
            comments.map((comment) => (
              <Comment comment={comment} key={comment.id} />
            ))
          ) : (
            <p className="text" sx={{letterSpacing:"tight"}}>
              No comments on this post yet. Be the first.
            </p>
          )}
        </div>
        </form>
      </div>
    );
  }
}
export default Comments;