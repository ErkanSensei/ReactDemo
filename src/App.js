import React, {Component} from 'react'
import Post from './Post'
const posts = [
    {
        id: 0,
        title: 'My First Post!',
        content: 'Hello World!'
    }
];

class App extends Component {
  constructor() {
    super()
    this.state = {
      posts: [],
      counter: 0
    }
  }

  componentDidMount() {
    this.setState({ posts: posts, counter: posts.length });
  }

  addPost = () => {
    const { posts, counter } = this.state
    posts.push({
      id: counter,
      title: 'Post ' + counter,
      content: 'Hey World!'
    })

    this.setState({ posts: posts, counter: counter+1 })
  }

  deletePost = (id) => {
    let posts = this.state.posts

    posts = posts.slice(0, id).concat(posts.slice(id + 1, posts.length))

    this.setState({ posts: posts })
  }

  render() {
    console.log(this.state.posts)
    return (
      <div>
        {this.state.posts.map((post, index) => (
          <Post
            title={post.title}
            content={post.content}
            id={post.id}
            addPost={this.addPost}
            deletePost={this.deletePost}
            key={index}
          />
        ))}
      </div>
    )
  }
}

export default App;
