import React from 'react';
import { connect } from 'react-redux';
//import axios from 'axios';

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
  
  handleFormSubmit = (e) => {

    e.preventDefault();
    
    this.props.signinUser();
      
    console.log(this.props.isAuthenticated)
    if (this.props.isAuthenticated) {
      this.props.history.push('/feature')
    }

  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps.isAuthenticated)
    if (nextProps.isAuthenticated){
      this.props.history.push('/private')
    }
    
  }
  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log(nextProps)
  // }

  render() {

    return (
      <div className="container" style={{ marginTop: '50px', width: '700px'}}>
        <h2 style={{marginBottom: '40px'}}>Login</h2>
        <form onSubmit={ (e) => this.handleFormSubmit(e)}>
          <div className="form-group">
            <input
              type="email"
              placeholder="Email"
              onChange={ (e) => this.setState({...this.state, email: e.target.value}) }
              value={ this.state.email }
              />
          </div>
          <div className="form-group">
            <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={ (e) => this.setState({...this.state, password: e.target.value}) }
            value={ this.state.password }
            />
          </div>
          <div className="form-group">
            <button>
            Login User
            </button>
          </div>
        </form>
      </div>  
      );
    }
}
export default connect(mapStateToProps,actions)(Login);