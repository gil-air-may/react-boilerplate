import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Product from '../../components/Product/Product'
import FullProduct from '../FullProduct/FullProduct'

class Products extends Component {
  state = {
    products: [
      {
        name: 'Hamburger',
        id: '1',
      },
      {
        name: 'Hotdog',
        id: '2'      
      }
    ]
  }

  postSelectedHandler = (id) => {
    this.props.history.push('/products/' + id);
  }

  render() {
    let products = null;
    products = this.state.products.map( product => {
      return (
          <Product
            key={product.id}
            name={product.name}
            clicked={() => this.productSelectedHandler(product.id)}
          />
      );  
    });

    return(
      <div>
        {products}
        <Route path={this.props.match.url + '/:id'} exact component={FullProduct} />
      </div>
    )
    
  }
}

export default Products;