import React from 'react';
import { useHistory } from 'react-router-dom';
import { Link, Route } from "gatsby"

import "../../../styles/comment.css"
import { getUser, isLoggedIn, logout } from "../../../services/authentication"

class CommentForm extends React.Component {
  constructor() {
    
    super();
    const content = { message: "", login: true }
    if (isLoggedIn()) {
      content.message = `${getUser().name}`
    } 
    this.state = {
      name: content.message,
      comment: '',
    };
    

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  async handleSubmit(e) {
    e.preventDefault();
    const body = JSON.stringify({ ...this.state });
    const response = await fetch('http://localhost:4000/comment', {
      method: 'post',
      body,
      headers: {
        'content-type': 'application/json',
      },
    });
    const data = await response.json();
    this.setState({ comment: '', name: '' });
  }
  
  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });

  }
  render() {
    const content = { message: "", login: true }
    

    const { name, comment } = this.state;
    return (
      <form onSubmit={this.handleSubmit} className="comment-form">
        <input
          placeholder="Your name"
          value={name}
          name="name"
          autoComplete="off"
          onChange={this.handleChange}
        />
        <textarea
          placeholder="Enter your comment"
          maxLength="500"
          rows="4"
          name="comment"
          value={comment}
          onChange={this.handleChange}
        />
        
          <button className="button submit-button">Send</button>
        
      </form>
    );
  }
}
export default CommentForm;