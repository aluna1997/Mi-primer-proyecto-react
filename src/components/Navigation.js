import React, { Component } from 'react';

class Navigation extends Component{
    render(){
        return(
        <nav className="navbar navbar-dark dg-dark">
            <a href="" className="text-white"> <p>{this.props.title} &#x23F0;</p> </a>
            <span className="badge badge-pill badge-light ml-2">{this.props.ntareas}</span>
        </nav>
      );
    }
}

export default Navigation;