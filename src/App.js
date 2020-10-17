import React, { Component } from 'react'
import Data from './api/productData.js'

import Carousel from './components/Carousel'

import './App.scss'

class App extends Component {
  constructor(props) {
		super(props)
  }
  
  render() {   
    return(
      <div className="relatedProductsContainer">
        <h2>Related Products</h2>
        <Carousel products={ Data }/>
      </div>
    )
  }
}

export default App
