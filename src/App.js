import React, { Component } from "react"
import "./App.css"

class App extends Component{
  
  state = {
    numero: 0
  }

  add = () => {
    this.setState({
      numero: this.state.numero < 10 ? this.state.numero + 1 : this.state.numero,
    })
  }

  diminuir = () => {
    this.setState({
      numero: this.state.numero > 0 ? this.state.numero - 1 : this.state.numero,
    })
  }


  render(){
    return(
      <div className="container">
        <h1>Contador</h1>
        <h2>{this.state.numero}</h2>
        <button onClick={this.add}>+</button>
        <button onClick={this.diminuir}>-</button>
       
      </div>
    )
  }

}

export default App