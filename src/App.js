import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {
  
  state = {
    name: 'Nícolas',
    count:0,
    
    cont: 0,
    
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
    (name === 'Nícolas' ? this.setState({name: 'Kurz', count: 0}) : this.setState({name: 'Nícolas', count: 0}));
  }

  increment = ()=>{
    const {count} = this.state;
    this.setState({count: count+1});
  }

  decrement = ()=>{
    const {count} = this.state;
    this.setState({count: count-1});
  }

  timeoutUpdate = null;

  componentDidMount() {
    this.changeTimeout();
  }
  
  componentDidUpdate() {
    this.changeTimeout();
  }

  componentWillUnmount () { 
    clearTimeout(this.timeoutUpdate);
  }

  changeTimeout = ()=>{
    const {posts, cont} = this.state;
    posts[0].title = 'This title changed';
  
    this.timeoutUpdate = setTimeout(()=>{
      this.setState({posts, cont: cont+1});
    }, 2000);
  };

  render() {
    const {name, count} = this.state;
    const {posts, cont} = this.state;

    return (
      <div className="MyApp">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hello world!
          </p>
          <p onClick={this.changeName}>
            {name} {count}
          </p>
          <button type="button" className="btn btn-outline-info btn_met" onClick={this.increment}>
            Value Up
          </button>
          <button type="button" className="btn btn-outline-info btn_met" onClick={this.decrement}>
            Value Down
          </button>
        
          <div className="App">
            <h1> {cont} </h1>
            { posts.map(post => (
              <div key={post.id}>
                <h1> {post.title} </h1>
                <p> {post.content} </p>
              </div>
            ))}
          </div>
          
        </header>
      </div>
    );  
  }
}

export default App;