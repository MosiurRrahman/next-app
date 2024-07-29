import Breadcrumb2 from '@/components/common/Breadcrumb2'
import Footer2 from '@/components/footer/Footer2'
import Header2 from '@/components/header/Header2'
import Link from 'next/link'
import React from 'react'

const CategoryPage = () => {
  return (
<>
  <Header2/>
  <Breadcrumb2 pagetitle={"Category"} currentPage={"Category"}/>
  <div className="category-grid-section pt-110 mb-110">
    <div className="container">
      <div className="row gy-5 row-cols-xxl-6 row-cols-xl-5 row-cols-md-4 row-cols-sm-3 row-cols-2">
        <div className="col wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
          <div className="category-card">
            <Link href="/car-auction/auction-sidebar" className="category-img">
              <img src="/assets/img/home1/category-img1.jpg" alt="" />
            </Link>
            <div className="category-content">
              <h5><Link href="/car-auction/auction-sidebar">Automotive</Link></h5>
              <span>45,533 Item</span>
            </div>
          </div>
        </div>
        <div className="col wow animate fadeInDown" data-wow-delay="300ms" data-wow-duration="1500ms">
          <div className="category-card">
            <Link href="/car-auction/auction-sidebar" className="category-img">
              <img src="/assets/img/home1/category-img2.jpg" alt="" />
            </Link>
            <div className="category-content">
              <h5><Link href="/car-auction/auction-sidebar">Antiques</Link></h5>
              <span>45,680 Item</span>
            </div>
          </div>
        </div>
        <div className="col wow animate fadeInDown" data-wow-delay="400ms" data-wow-duration="1500ms">
          <div className="category-card">
            <Link href="/car-auction/auction-sidebar" className="category-img">
              <img src="/assets/img/home1/category-img3.jpg" alt="" />
            </Link>
            <div className="category-content">
              <h5><Link href="/car-auction/auction-sidebar">Digital Art</Link></h5>
              <span>41,250 Item</span>
            </div>
          </div>
        </div>
        <div className="col wow animate fadeInDown" data-wow-delay="500ms" data-wow-duration="1500ms">
          <div className="category-card">
            <Link href="/car-auction/auction-sidebar" className="category-img">
              <img src="/assets/img/home1/category-img4.jpg" alt="" />
            </Link>
            <div className="category-content">
              <h5><Link href="/car-auction/auction-sidebar">Books &amp; Comic</Link></h5>
              <span>48,450 Item</span>
            </div>
          </div>
        </div>
        <div className="col wow animate fadeInDown" data-wow-delay="600ms" data-wow-duration="1500ms">
          <div className="category-card">
            <Link href="/car-auction/auction-sidebar" className="category-img">
              <img src="/assets/img/home1/category-img5.jpg" alt="" />
            </Link>
            <div className="category-content">
              <h5><Link href="/car-auction/auction-sidebar">Old Coin</Link></h5>
              <span>46,200 Item</span>
            </div>
          </div>
        </div>
        <div className="col wow animate fadeInDown" data-wow-delay="700ms" data-wow-duration="1500ms">
          <div className="category-card">
            <Link href="/car-auction/auction-sidebar" className="category-img">
              <img src="/assets/img/home1/category-img6.jpg" alt="" />
            </Link>
            <div className="category-content">
              <h5><Link href="/car-auction/auction-sidebar">Gadget</Link></h5>
              <span>50,250 Item</span>
            </div>
          </div>
        </div>
        <div className="col wow animate fadeInDown" data-wow-delay="800ms" data-wow-duration="1500ms">
          <div className="category-card">
            <Link href="/car-auction/auction-sidebar" className="category-img">
              <img src="/assets/img/home1/category-img7.jpg" alt="" />
            </Link>
            <div className="category-content">
              <h5><Link href="/car-auction/auction-sidebar">Jewelry</Link></h5>
              <span>48,202 Item</span>
            </div>
          </div>
        </div>
        <div className="col wow animate fadeInDown" data-wow-delay="800ms" data-wow-duration="1500ms">
          <div className="category-card">
            <Link href="/car-auction/auction-sidebar" className="category-img">
              <img src="/assets/img/home1/category-img8.jpg" alt="" />
            </Link>
            <div className="category-content">
              <h5><Link href="/car-auction/auction-sidebar">Real Estate</Link></h5>
              <span>45,680 Item</span>
            </div>
          </div>
        </div>
        <div className="col wow animate fadeInDown" data-wow-delay="700ms" data-wow-duration="1500ms">
          <div className="category-card">
            <Link href="/car-auction/auction-sidebar" className="category-img">
              <img src="/assets/img/home1/category-img9.jpg" alt="" />
            </Link>
            <div className="category-content">
              <h5><Link href="/car-auction/auction-sidebar">Fashion</Link></h5>
              <span>41,250 Item</span>
            </div>
          </div>
        </div>
        <div className="col wow animate fadeInDown" data-wow-delay="600ms" data-wow-duration="1500ms">
          <div className="category-card">
            <Link href="/car-auction/auction-sidebar" className="category-img">
              <img src="/assets/img/inner-pages/category-img1.jpg" alt="" />
            </Link>
            <div className="category-content">
              <h5><Link href="/car-auction/auction-sidebar">Ceramics</Link></h5>
              <span>41,488 Item</span>
            </div>
          </div>
        </div>
        <div className="col wow animate fadeInDown" data-wow-delay="500ms" data-wow-duration="1500ms">
          <div className="category-card">
            <Link href="/car-auction/auction-sidebar" className="category-img">
              <img src="/assets/img/inner-pages/category-img2.jpg" alt="" />
            </Link>
            <div className="category-content">
              <h5><Link href="/car-auction/auction-sidebar">Instruments</Link></h5>
              <span>45,477 Item</span>
            </div>
          </div>
        </div>
        <div className="col wow animate fadeInDown" data-wow-delay="400ms" data-wow-duration="1500ms">
          <div className="category-card">
            <Link href="/car-auction/auction-sidebar" className="category-img">
              <img src="/assets/img/inner-pages/category-img3.jpg" alt="" />
            </Link>
            <div className="category-content">
              <h5><Link href="/car-auction/auction-sidebar">Toys &amp; Games</Link></h5>
              <span>45,356 Item</span>
            </div>
          </div>
        </div>
        <div className="col wow animate fadeInDown" data-wow-delay="300ms" data-wow-duration="1500ms">
          <div className="category-card">
            <Link href="/car-auction/auction-sidebar" className="category-img">
              <img src="/assets/img/inner-pages/category-img4.jpg" alt="" />
            </Link>
            <div className="category-content">
              <h5><Link href="/car-auction/auction-sidebar">Gadgets</Link></h5>
              <span>45,878 Item</span>
            </div>
          </div>
        </div>
        <div className="col wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
          <div className="category-card">
            <Link href="/car-auction/auction-sidebar" className="category-img">
              <img src="/assets/img/inner-pages/category-img5.jpg" alt="" />
            </Link>
            <div className="category-content">
              <h5><Link href="/car-auction/auction-sidebar">Automobiles</Link></h5>
              <span>45,897 Item</span>
            </div>
          </div>
        </div>
        <div className="col wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
          <div className="category-card">
            <Link href="/car-auction/auction-sidebar" className="category-img">
              <img src="/assets/img/inner-pages/category-img6.jpg" alt="" />
            </Link>
            <div className="category-content">
              <h5><Link href="/car-auction/auction-sidebar">Decorative Art</Link></h5>
              <span>43,778 Item</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer2/>
    <div className="home1-footer-top-area">
      <div className="row g-4">
        <div className="col-lg-6">
          <div className="footer-top-banner">
            <div className="banner-content">
              <span>How to use</span>
              <h2><Link href="/car-auction/how-to-buy">How to bid your item</Link></h2>
            </div>
            <Link href="/car-auction/how-to-buy" className="arrow">
              <svg width={100} height={100} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <g>
                  <path d="M0.495049 0H99.9999V18.6274L18.8119 99.9997L0 81.3723L55.4455 26.4705L0.495049 26.9607V0Z" />
                  <path d="M100 100.001V37.2559L73.2673 63.7264V100.001H100Z" />
                </g>
              </svg>
            </Link>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="footer-top-banner two">
            <div className="banner-content">
              <span>How to use</span>
              <h2><Link href="/car-auction/how-to-sell">How to sell your item</Link></h2>
            </div>
            <Link href="/car-auction/how-to-sell" className="arrow">
              <svg width={100} height={100} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <g>
                  <path d="M0.495049 0H99.9999V18.6274L18.8119 99.9997L0 81.3723L55.4455 26.4705L0.495049 26.9607V0Z" />
                  <path d="M100 100.001V37.2559L73.2673 63.7264V100.001H100Z" />
                </g>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
    <div className="footer-wrapper">
      <div className="container">
        <div className="footer-menu-wrap">
          <div className="row g-lg-4 gy-5">
            <div className="col-lg-2 col-sm-6">
              <div className="footer-widget">
                <div className="widget-title">
                  <h4>Category</h4>
                </div>
                <div className="menu-container">
                  <ul className="widget-list">
                    <li><Link href="/car-auction/auction-grid">Automotive</Link></li>
                    <li><Link href="/car-auction/auction-grid">Antiques</Link></li>
                    <li><Link href="/car-auction/auction-grid">Digital art</Link></li>
                    <li><Link href="/car-auction/auction-grid">Books &amp; comics</Link></li>
                    <li><Link href="/car-auction/auction-grid">Gadget</Link></li>
                    <li><Link href="/car-auction/auction-grid">Electronics</Link></li>
                    <li><Link href="/car-auction/auction-grid">Coin</Link></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-sm-6">
              <div className="footer-widget">
                <div className="widget-title">
                  <h4>Company</h4>
                </div>
                <div className="menu-container">
                  <ul className="widget-list">
                    <li><Link href="/car-auction/how-to-buy">How to bid with us</Link></li>
                    <li><Link href="/car-auction/how-to-sell">How to sell with us</Link></li>
                    <li><Link href="/about">About us</Link></li>
                    <li><Link href="/faq">F.A.Q</Link></li>
                    <li><a href="#">Our Brand</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 d-flex align-items-center justify-content-lg-center justify-content-start">
              <div className="footer-logo-area">
                <div className="footer-logo">
                  <img src="/assets/img/footer-logo.svg" alt="" />
                </div>
                <div className="social-area">
                  <h5>Social Just You Connected Us!</h5>
                  <p>All of update in social</p>
                  <ul className="social-list">
                    <li>
                      <a href="https://www.linkedin.com/">
                        <i className="bi bi-linkedin" />
                        <span>LinkedIn</span>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.facebook.com/">
                        <i className="bi bi-facebook" />
                        <span>Facebook</span>
                      </a>
                    </li>
                    <li>
                      <a href="https://twitter.com/">
                        <i className="bi bi-twitter-x" />
                        <span>Twitter</span>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/">
                        <i className="bi bi-instagram" />
                        <span>Instagram</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 d-flex justify-content-sm-end justify-content-start">
              <div className="newletter-and-payment-wrap">
                <div className="newletter-area">
                  <h4>Join Our Newsletter &amp; More information.</h4>
                  <form>
                    <div className="form-inner">
                      <input type="email" placeholder="Email Address" />
                      <button type="submit"><i className="bi bi-arrow-right" /></button>
                    </div>
                  </form>
                </div>
                <div className="payment-area">
                  <h6>Secured Payment Gateways</h6>
                  <ul className="payment-options">
                    <li><img src="/assets/img/home1/icon/visa.svg" alt="" /></li>
                    <li><img src="/assets/img/home1/icon/master-card.svg" alt="" /></li>
                    <li><img src="/assets/img/home1/icon/american-express.svg" alt="" /></li>
                    <li><img src="/assets/img/home1/icon/maestro.svg" alt="" /></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="copyright-area">
            <p>©Copyright 2024 <Link href="/car-auciton">Probid</Link> | Design By <a href="https://www.egenslab.com/">Egens Lab</a></p>   
          </div>
          <div className="footer-bottom-right">
            <ul>
              <li><Link href="/car-auciton/support-center">Support Center</Link></li>
              <li><Link href="/car-auciton/terms-condition">Terms &amp; Conditions</Link></li>
              <li><Link href="/car-auciton/privacy-policy">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
</>

  )
}

export default CategoryPage
