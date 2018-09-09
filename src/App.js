import React, { Component } from 'react';
import './App.css';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { reduxStateReducer } from './Reducer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import PrivateRoute from './PrivateRoute'
import PrivateComponent from './PrivateComponent'
import LoginPage from './LoginPage';
import reduxThunk from 'redux-thunk'

const createStoreWithMiddleware = applyMiddleware (reduxThunk)(createStore)
const store = createStoreWithMiddleware(reduxStateReducer, {});

class App extends Component {
  render() {
    return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <PrivateRoute path='/private' component={PrivateComponent}/>
          <Route path='/' component={LoginPage}/>
        </Switch>
      </BrowserRouter>
    </Provider>  
    );
  }
}

export default App;
