import { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';
import Cards from './components/Cards';
import { todos } from './todos.json'

class App extends Component {
  constructor(){
    super();
    this.state={
      title:"To Do",
      ntareas:0,
      todos
    }
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <Navigation title={this.state.title} ntareas={this.state.todos.length}/>
          <div className="container">
              <div className="row mt-4">
                <Cards/>
              </div>
          </div>
          <img src={logo} className="App-logo" alt="logo" />
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
        </header>
      </div>
    );
  }
}

export default App;
