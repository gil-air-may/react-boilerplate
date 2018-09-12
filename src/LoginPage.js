import React from 'react';
import { connect } from 'react-redux';

import * as actions from './Actions'

const mapStateToProps = state => {
    return {
        isAuthenticated: state.isAuthenticated,
    };
};

class Login extends React.Component {
  state = { 
    email: "",
    password: "",
  }
  
  handleFormSubmit = async (event) => {
    
    // try {
    //   await
      this.props.signinUser(this.state.email, this.state.password);
      console.log('execution is here')
      if (this.props.isAuthenticated) 
      {this.props.history.push("/private")}
    
    // } catch (error) {
    //   alert(error.message)
    // }
  }

  render() {

    return (
      <form>
        <div className="field">
          <label className="label">Email</label>
          <div className="control">
            <input
            className="input"
            type="email"
            placeholder="Your email address"
            value={this.state.email}
            autoFocus={true}
            onChange={(e) => this.setState({...this.state, email: e.target.value})}
            />
          </div>
      </div>
      <div className="field">
        <label className="label">Password</label>
        <div className="control">
          <input
          className="input"
          type="password"
          placeholder="Your password"
          value={this.state.password}
          onChange={(e) => this.setState({...this.state, password: e.target.value})}
          />
        </div>
      </div>
      <button
      className="button is-primary"
      onClick={this.handleFormSubmit}
      >Sign in</button>
      </form>
      );
    }
}
export default connect(mapStateToProps,actions)(Login);