import React, { Component } from 'react';
import './Validator.css';

class Validator extends Component {
  constructor() {
    super()

    this.state = {
      email: "",
      password: "",
      passworfConfirm: "",
      valid: true
    }
  }
  passwordOne=(event)=> {
    this.setState({
      password: event.target.value
    })
  }
  passwordTwo=(event)=> {
    this.setState({
      passwordConfirm: event.target.value
    })
  }
  passwordCheck=()=> {
    if (this.state.password === this.state.passwordConfirm) {
      alert('Passwords match')
      this.setState = ({
        valid: true
      })
    }
    else {
      alert('Not a match')
      this.setState = ({
        valid: false
      })
    }
  }

  render() {
    console.log('hello ',this.state.valid)
    return (
      <div className="form">
        <h1>Sign Up</h1>
        <input type="email" placeholder="email" />
        <input type="password" placeholder="password" onChange={this.passwordOne}/>
        <input type="password" placeholder="password confirm" onChange={this.passwordTwo}/>
        <button onClick={this.passwordCheck}>Submit</button>
      </div>
    );
  }
}

export default Validator;
