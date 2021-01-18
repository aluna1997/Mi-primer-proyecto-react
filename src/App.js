import { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';
import { todos } from './todos.json'

class App extends Component {
  constructor(){
    super();
    this.state={
      title:"To Do",
      ntareas:10,
      todos 
    }
  }

  removeTodo(index) {
    console.log(index);
    //if(window.confirm('¿Seguro de que quieres eliminar la tarea?')){
      this.setState({
        todos:this.state.todos.filter((todo,i) => {
          return i != index
        })
      })
    //}
  }


  render(){
    const todos = this.state.todos.map((todo,i) => {
      return(
        <div className="col-md-4">
          <div className="card mt-4">
              <div className="card-header">
                  <h3 className="text-dark">{todo.title}</h3>
                  <span className="badge badge-pill badge-danger ml-2 text-dark">{todo.priority}</span>
              </div>
              <div className="card-body">
                <p><mark>{todo.description}</mark></p>
                <p><mark>{todo.responsable}</mark></p>
              </div>
              <div className="card-footer">
                <a onClick={this.removeTodo.bind(this,i)} href="#" role="button"> {this.props.title} &#x23F0;</a>
              </div>
          </div>
        </div>
      )
    })
 


    return (
      <div className="App">
        <header className="App-header">
          <Navigation title={this.state.title} ntareas={todos.length}/>
          <div className="container">
              <div className="row mt-4">
                  {todos}
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
