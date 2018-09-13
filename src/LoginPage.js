import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

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
  
 handleFormSubmit(e) {

    e.preventDefault();
    axios.defaults.baseURL = 'http://jsonplaceholder.typicode.com';
    axios.post('/posts', {
      title: 'yoo',
      body: 'oyoo',
      userId: '1'
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  
  }

  render() {

    return (
      <div className="container" style={{ marginTop: '50px', width: '700px'}}>
            <h2 style={{marginBottom: '40px'}}>Login</h2>
            <form onSubmit={ (e) => this.handleFormSubmit(e)}>
                <div className="form-group">
                    <input
                    type="email"
                    placeholder="Email"
                    //className={classnames('form-control form-control-lg', {
                    //    'is-invalid': errors.email
                   // })}
                    name="email"
                    onChange={ (e) => this.setState({...this.state, email: e.target.value}) }
                    value={ this.state.email }
                    />
                </div>
                <div className="form-group">
                    <input
                    type="password"
                    placeholder="Password"
                  //  className={classnames('form-control form-control-lg', {
                   //     'is-invalid': errors.password
                    //})} 
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
      
      // <div>
      //   <div className="field">
      //     <label className="label">Email</label>
      //     <div className="control">
      //       <input
      //       className="input"
      //       type="email"
      //       placeholder="Your email address"
      //       value={this.state.email}
      //       autoFocus={true}
      //       onChange={(e) => this.setState({...this.state, email: e.target.value})}
      //       />
      //     </div>
      // </div>
      // <div className="field">
      //   <label className="label">Password</label>
      //   <div className="control">
      //     <input
      //     className="input"
      //     type="password"
      //     placeholder="Your password"
      //     value={this.state.password}
      //     onChange={(e) => this.setState({...this.state, password: e.target.value})}
      //     />
      //   </div>
      // </div>
      // <button
      // type="submit"
      // className="button is-primary"
      // onSubmit={this.handleFormSubmit}
      // onClick={this.handleFormSubmit}
      // >Sign in</button>
      // </div>
        
      );
    }
}
export default connect(mapStateToProps,actions)(Login);