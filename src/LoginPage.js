import React from 'react';
import { connect } from 'react-redux';

import * as actions from './Actions'

const mapStateToProps = state => {
    return {
        isAuthenticated: state.isAuthenticated,
    };
};

class Login extends React.Component {
  handleFormSubmit = async (event) => {
    // event.preventDefault();
    // console.log(this.props)
    // this.props.signinUser()
    //   .then((response) => {
    //     console.log(this.props)
    //     if (this.state.isAuthenticated){
    //       this.props.history.push("/private");
    //     }
    //   }, (error) => {
    //     alert(error.message)
    //   });
    
    try {
      console.log(this.props)
      await this.props.signinUser();
      console.log(this.props)
      if (this.props.isAuthenticated) 
      { this.props.history.push("/private")}
    
    } catch (error) {
      alert(error.message)
    }


  }


  render() {

    console.log(this.props)
    return (

      <button
        className="button is-primary"
        onClick={this.handleFormSubmit}
        >Sign in</button>
      );
    }
}
export default connect(
    mapStateToProps,
    actions
)(Login);