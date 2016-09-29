import React, { Component } from 'react'

export default class Post extends Component {
  render() {
    const { id, title, content, addPost, deletePost } = this.props;
      return (
        <div>
          <p>{title}</p>
          <p>{content}</p>
          <button onClick={addPost}>
            Add Post
          </button>
          <button onClick={() => {deletePost(id)}}>
            Delete
          </button>
        </div>
      )
  }
}
