import Link from 'next/link'
import React from 'react'

function Product1() {
  return (
    <div className="h2-product-area pt-120 pb-120">
  <div className="swiper h2-product-slider">
    <div className="swiper-wrapper">
      <div className="swiper-slide">
        <div className="product-wrap">
          <div className="product-img">
            <img className="img-fluid" src="assets/images/bg/h2-product-1.png" alt="h2-product-1" />
          </div>
          <div className="product-content">
            <h4><Link legacyBehavior href="/category"><a>Sea Food</a></Link></h4>
            <p>Lorem ipsum dolor sit amet consectet.</p>
          </div>
        </div>
      </div>
      <div className="swiper-slide">
        <div className="product-wrap">
          <div className="product-img">
            <img className="img-fluid" src="assets/images/bg/h2-product-2.png" alt="h2-product-2" />
          </div>
          <div className="product-content">
            <h4><Link legacyBehavior href="/category"><a>Meat Masala</a></Link></h4>
            <p>Lorem ipsum dolor sit amet consectet.</p>
          </div>
        </div>
      </div>
      <div className="swiper-slide">
        <div className="product-wrap">
          <div className="product-img">
            <img className="img-fluid" src="assets/images/bg/h2-product-3.png" alt="h2-product-3" />
          </div>
          <div className="product-content">
            <h4><Link legacyBehavior href="/category"><a>Vegetarian</a></Link></h4>
            <p>Lorem ipsum dolor sit amet consectet.</p>
          </div>
        </div>
      </div>
      <div className="swiper-slide">
        <div className="product-wrap">
          <div className="product-img">
            <img className="img-fluid" src="assets/images/bg/h2-product-4.png" alt="h2-product-4" />
          </div>
          <div className="product-content">
            <h4><Link legacyBehavior href="/category"><a>Thai Soup</a></Link></h4>
            <p>Lorem ipsum dolor sit amet consectet.</p>
          </div>
        </div>
      </div>
      <div className="swiper-slide">
        <div className="product-wrap">
          <div className="product-img">
            <img className="img-fluid" src="assets/images/bg/h2-product-1.png" alt="h2-product-1" />
          </div>
          <div className="product-content">
            <h4><Link legacyBehavior href="/category"><a>Sea Food</a></Link></h4>
            <p>Lorem ipsum dolor sit amet consectet.</p>
          </div>
        </div>
      </div>
      <div className="swiper-slide">
        <div className="product-wrap">
          <div className="product-img">
            <img className="img-fluid" src="assets/images/bg/h2-product-2.png" alt="h2-product-2" />
          </div>
          <div className="product-content">
            <h4><Link legacyBehavior href="/category"><a>Meat Masala</a></Link></h4>
            <p>Lorem ipsum dolor sit amet consectet.</p>
          </div>
        </div>
      </div>
      <div className="swiper-slide">
        <div className="product-wrap">
          <div className="product-img">
            <img className="img-fluid" src="assets/images/bg/h2-product-3.png" alt="h2-product-3" />
          </div>
          <div className="product-content">
            <h4><Link legacyBehavior href="/category"><a>Vegetarian</a></Link></h4>
            <p>Lorem ipsum dolor sit amet consectet.</p>
          </div>
        </div>
      </div>
      <div className="swiper-slide">
        <div className="product-wrap">
          <div className="product-img">
            <img className="img-fluid" src="assets/images/bg/h2-product-4.png" alt="h2-product-4" />
          </div>
          <div className="product-content">
            <h4><Link legacyBehavior href="/category"><a>Thai Soup</a></Link></h4>
            <p>Lorem ipsum dolor sit amet consectet.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default Product1