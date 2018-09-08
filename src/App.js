import React, { Component } from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom'
import PrivateRoute from './PrivateRoute/PrivateRoute'
import Login from './Login/Login'
import PrivateComponent from './PrivateComponent/PrivateComponent'

import { createStore } from 'redux'
import reducer from './Reducer/MainReducer'
import { Provider } from 'react-redux'

const store = createStore(reducer, {email:  "", password: ""})

class App extends Component {
  render() {
    return (
      <Provider store = {store}>
        <BrowserRouter>
          <Switch>
            <Route path ='/login' component={Login} />
            <PrivateRoute path='/private' component={PrivateComponent}/>
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
