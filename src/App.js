import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {
  
  state = {
    name: 'Nícolas',
    cont: 0
  }
  
  mudarNome = ()=>{
    this.setState({name: 'Kurz', cont: 0});
  }

  // voltarNome = ()=>{
  //   const voltarNome = document.getElementById('#voltarNome');
  //   voltarNome.addEventListener('click', ()=>{
  //     this.setState({name: 'Nícolas', cont: 0});
  //   });
  // }

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

    return (
      <div className="MyApp">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hello world!
          </p>
          <p  onClick={this.mudarNome}>
            {name} {cont}
          </p>
          {/* <button id='voltarNome' type="button" class="btn btn-outline-info btn_met" onClick={this.voltarNome}>
            Reset name
          </button> */}
          <button type="button" class="btn btn-outline-info btn_met" onClick={this.increment}>
            Value Up
          </button>
          <button type="button" class="btn btn-outline-info btn_met" onClick={this.decrement}>
            Value Down
          </button>
        </header>
      </div>
    );  
  }
}


export default App;
