import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {
  
  state = {
    data:{
      name: 'Nícolas',
      cont: 0
    },

    posts:[
      {
        id: 1,
        title: 'Title 1',
        content: 'Content 1'
      },
      {
        id: 2,
        title: 'Title 2',
        content: 'Content 2'
      },
      {
        id: 3,
        title: 'Title 3',
        content: 'Content 3'
      }
    ]
  }
  
  changeName = ()=>{
    const {name} = this.state;
    (name === 'Nícolas' ? this.setState({name: 'Kurz', cont: 0}) : this.setState({name: 'Nícolas', cont: 0}));
  }

  increment = ()=>{
    const {cont} = this.state;
    this.setState({cont: cont+1});
  }

  decrement = ()=>{
    const {cont} = this.state;
    this.setState({cont: cont-1});
  }

  render() {
    const {name, cont} = this.state;
    const {posts} = this.state;

    return (
      <div className="MyApp">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hello world!
          </p>
          <p onClick={this.changeName}>
            {name} {cont}
          </p>
          <button type="button" className="btn btn-outline-info btn_met" onClick={this.increment}>
            Value Up
          </button>
          <button type="button" className="btn btn-outline-info btn_met" onClick={this.decrement}>
            Value Down
          </button>
        </header>
        <div className="container">
          { posts.map(post => (
            <div key={post.id}>
              <h1> {post.title} </h1>
              <p> {post.content} </p>
            </div>
          ))}

        </div>
      </div>
    );  
  }
}

export default App;