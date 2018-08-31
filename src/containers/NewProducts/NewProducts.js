import React, { Component } from 'react';


class NewProducts extends Component {
  componentDidMount(){
    console.log(this.props)
  }
  
  render () {
    return (
      <h1>Register a new product page</h1>
    );
  }
}


export default NewProducts;