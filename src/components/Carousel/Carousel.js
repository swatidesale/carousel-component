import React, { Component } from 'react'

import LeftArrowIconSrc from '../../assets/icons/arrow-left.svg'
import RightArrowIconSrc from '../../assets/icons/arrow-right.svg'
import ProductCard from '../ProductCard'

import './Carousel.scss'

export default class Carousel extends Component {
  constructor(props) {
    super(props) 

    this.state = {
      currentPage: 0
    }

    this.handlePreviousArrowClick = this.handlePreviousArrowClick.bind(this)
    this.handleNextArrowClick = this.handleNextArrowClick.bind(this)
  }

  componentDidUpdate() {
    const { currentPage } = this.state
    this.carouselInner.style.transform = `translateX(-${currentPage * 100}%)`
  }

  showSlides(amount) {
    const { currentPage } = this.state
    const { products } = this.props

    const carouselItemCount = products.numberOfItems
    const windowSize = 4

    if (
      (currentPage + amount) >= 0 &&
      (currentPage + amount) < carouselItemCount / windowSize
    ) {
      this.setState({ currentPage: currentPage + amount })
    }
  }

  handlePreviousArrowClick() {
    this.showSlides(-1)
  }

  handleNextArrowClick() {
    this.showSlides(1)
  }

  render() {
    const { products } = this.props
    return(
      <section className="carousel">
        <button className="carouselLeftArrow"
          onClick={() => this.handlePreviousArrowClick() }
        >
          <span
            className="leftIcon"
            dangerouslySetInnerHTML={ { __html: LeftArrowIconSrc } }
            aria-hidden="true"
          />
        </button>
        <div className="carouselContent">
          <div className="carouselInner"
            ref={ (ci) => { this.carouselInner = ci } }
          >
            <ProductCard products={ products } />
          </div>
        </div>
        <button className="carouselRightArrow"
          onClick={() => this.handleNextArrowClick() }
        >
          <span
            className="rightIcon"
            dangerouslySetInnerHTML={ { __html: RightArrowIconSrc } }
            aria-hidden="true"
          />
        </button>
      </section>
    )
  }
}

