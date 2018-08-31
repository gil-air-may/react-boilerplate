import React, { Component } from 'react';
import { Route, Link, NavLink, Switch } from 'react-router-dom';

import NewProducts from '../NewProducts/NewProducts'
import Products from '../Products/Products'


class Home extends Component {
  render() {
    return (
      <div>
        <header>The components below this header are rendered according to route path</header>
        <Switch>
          <Route path="/new-products" component={NewProducts}/>
          <Route path="/:id" exact component={Products}/>
        </Switch>
        
        {/* A route with dynamic behavior variable route parameter */}
        <div>
          <Link to="/">Home</Link>
        </div>

        <nav>
          <ul>
            <li>
              <NavLink
              activeStyle={{color: '#fa923f'}}
              exact //this is important for styling
              to={{
              //pathname: this.props.match.url + '/new-products',
                //this will generate a relative path
                //NavLink allows to style an active link

              pathname: '/new-products',
              hash: '#submit',
              search: '?quick-submit=true',
              }}>New Products Navlink</NavLink>
            </li>
          </ul>
        </nav>


          
          
        
        <a href="/new-products">New product</a>
      </div>
    );
  }
}

export default Home;
