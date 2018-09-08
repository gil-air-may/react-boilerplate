import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux'

const mapStateToProps = state => {
  return {
    isAuthenticated: state.isAuthenticated,
  };
}

class PrivateRoute extends Component {
  render() {
    if (!this.props.isAuthenticated) {
      return (
        <Redirect
          to={{
            pathname: "/login",
            state: { from: this.props.location.state}
          }}
        />
      );
    }

    return (
      <Route component={this.props.Component} {...this.props}/>
    );
  }
}

export default connect(mapStateToProps)(PrivateRoute);