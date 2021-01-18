import React, { Component } from 'react';
import { todos } from '../todos.json'

class Cards extends Component{
    constructor(){
        super();
        this.state={
          todos
        }
    }
    
    removeTodo(index) {
        this.setState({
            todos:this.state.todos.filter((todo,i) => {
                return i != index
            })
        })
    }

    addTodo(){
        const title = document.getElementById("nombreInput").value;
        const description = document.getElementById("descInput").value;
        const responsable = document.getElementById("respInput").value;
        const priority = document.getElementById("prioriInput").value;
        const newTodo = {title,description,responsable,priority}
        console.log(newTodo)
        this.setState({
            todos:this.state.todos.concat([newTodo])
        })
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
                    <p className="text-dark">{todo.responsable}</p>
                  </div>
                  <div className="card-footer">
                  <a onClick={this.removeTodo.bind(this,i)} href="#" role="button"> {this.props.title} &#10004;</a>
                  </div>
              </div>
            </div>
        )
      })

      todos.push(
        <div className="col-md-4">
          <div className="card mt-4">
              <div className="card-header">
                  <h3 className="text-dark">Nueva tarea</h3>
              </div>
              
              <div className="card-body">  
                <form>
                    <div className="form-group">
                        <input type="text" className="form-control" id="nombreInput" placeholder="Nombre"></input>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" id="descInput" placeholder="Descripción"></input>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" id="respInput" placeholder="Responsable"></input>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" id="prioriInput" placeholder="Prioridad"></input>
                    </div>
                    <div className="form-group">
                        <a href="#" onClick={this.addTodo.bind(this)} role="button"> &#10133;</a>
                    </div>
                        
                </form>
              </div>
          </div>
        </div>
      )

      return todos


     
    
    }

}

export default Cards;