import React, { Component } from 'react'

export class Form extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       username: '',
       selected: 'Fiammetta',
    }
  }

  handleUsernameChange = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  handleSelectChange = (event) => {
    this.setState({
      selected: event.target.value
    })
  }

  handleSubmit = (event) => {
    alert(`${this.state.username} ${this.state.selected}`)

    event.preventDefault()
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Username</label>
        <input 
          type="text"
          value={this.state.username}
          onChange={this.handleUsernameChange}
        />

        <h1>username: {this.state.username}</h1>

        <select value={this.state.selected} onChange={this.handleSelectChange}>
          <option value="Fiammetta">Fiammetta</option>
          <option value="Texas">Texas</option>
          <option value="Hua">Hua</option>
        </select>

        <h1>Selected Waifu: {this.state.selected}</h1>
        
        <button type='submit'>Submit</button>
      </form>
    )
  }
}

export default Form