import React, { Component } from 'react'
import './ProductCard.scss'

export default class ProductCard extends Component {
  render() {
    const { products } = this.props
    return(
      products && products.carouselData.map(product => (
      <div key={ product.code } className="productCarouselItem">
        <a className="productCarouselCard" href={ product.url } target="_blank">
          <div className="imageContainer">
            <img className="img" src={ product.productImageUrl } alt={ product.productImageAltText}/>
          </div>
          <h4 className="productCardName">{ product.name }</h4>
          <p className="productCardPrice">{ product.price.currency } { product.price.formattedValue }</p>
          <a href={ product.url } target="_blank" className="buttonBuyNow">Buy Now</a>
        </a>
      </div> ))
    )
  }
}