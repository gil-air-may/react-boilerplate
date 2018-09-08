import React from 'react';
import { connect } from 'react-redux';

import { signIn } from '../Actions/Actions';

const mapStateToProps = state => {
  return {
    isAuthenticated: state.isAuthenticated,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSignIn: (email, password) => dispatch(signIn(email, password))
  };
};

class Login extends React.Component {
  state = {
    email: "",
    password: "",
  }

  render () {
    return (
      <div className="container">
        <h1 className="title">Login</h1>
        {this.props.isAuthenticated ? alreadyAuthenticated() : form()}
      </div>
    );
  
  }
}

const alreadyAuthenticated = () => {
  return ("You're already authenticated.");
};

const onSignIn = () => {
  this.props.onSignIn(this.state.email, this.state.password);
}


const form = () => {
  return (
    <form>
      <div className="field">
        <label className="label">Email</label>
        <div className="control">
        <input
          className="input"
          type="email"
          placegolder="Your email address"
          value={this.state.email}
          autoFocus={true}
          onChange={(e) => this.setState({...this.state, email: e.target.value})}/>
        </div>
      </div>

      <div className="field">
        <label className="label">Password</label>
        <div className="control">
        <input
          className="input"
          type="password"
          placegolder="Your password"
          //value={this.state.password}
          autoFocus={true}
          onChange={(e) => this.setState({...this.state, password: e.target.value})}/>
        </div>
      </div>

      <button
        className="button is-primary"
        onClick={onSignIn}
        >Sign In</button>
    </form>
  )
};



export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
