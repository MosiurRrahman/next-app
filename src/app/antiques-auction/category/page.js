
import Breadcrumb3 from '@/components/common/Breadcrumb3'
import Breadcrumb5 from '@/components/common/Breadcrumb5'
import Footer3 from '@/components/footer/Footer3'
import InnerpageFooter5 from '@/components/footer/InnerpageFooter5'
import Header3 from '@/components/header/Header3'
import Link from 'next/link'
import React from 'react'

const CategoryPage = () => {
  return (
    <>
      <Header3 />
      <Breadcrumb3 pagetitle={"Category"} currentPage={"Category"} />
      <div className="category-grid-section pt-110 mb-110">
        <div className="container">
          <div className="row gy-5 row-cols-xxl-6 row-cols-xl-5 row-cols-md-4 row-cols-sm-3 row-cols-2">
            <div className="col wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
              <div className="category-card">
                <Link href="/antiques-auction/auction-sidebar" className="category-img">
                  <img src="/assets/img/home1/category-img1.jpg" alt="" />
                </Link>
                <div className="category-content">
                  <h5><Link href="/antiques-auction/auction-sidebar">Automotive</Link></h5>
                  <span>45,533 Item</span>
                </div>
              </div>
            </div>
            <div className="col wow animate fadeInDown" data-wow-delay="300ms" data-wow-duration="1500ms">
              <div className="category-card">
                <Link href="/antiques-auction/auction-sidebar" className="category-img">
                  <img src="/assets/img/home1/category-img2.jpg" alt="" />
                </Link>
                <div className="category-content">
                  <h5><Link href="/antiques-auction/auction-sidebar">Antiques</Link></h5>
                  <span>45,680 Item</span>
                </div>
              </div>
            </div>
            <div className="col wow animate fadeInDown" data-wow-delay="400ms" data-wow-duration="1500ms">
              <div className="category-card">
                <Link href="/antiques-auction/auction-sidebar" className="category-img">
                  <img src="/assets/img/home1/category-img3.jpg" alt="" />
                </Link>
                <div className="category-content">
                  <h5><Link href="/antiques-auction/auction-sidebar">Digital Art</Link></h5>
                  <span>41,250 Item</span>
                </div>
              </div>
            </div>
            <div className="col wow animate fadeInDown" data-wow-delay="500ms" data-wow-duration="1500ms">
              <div className="category-card">
                <Link href="/antiques-auction/auction-sidebar" className="category-img">
                  <img src="/assets/img/home1/category-img4.jpg" alt="" />
                </Link>
                <div className="category-content">
                  <h5><Link href="/antiques-auction/auction-sidebar">Books &amp; Comic</Link></h5>
                  <span>48,450 Item</span>
                </div>
              </div>
            </div>
            <div className="col wow animate fadeInDown" data-wow-delay="600ms" data-wow-duration="1500ms">
              <div className="category-card">
                <Link href="/antiques-auction/auction-sidebar" className="category-img">
                  <img src="/assets/img/home1/category-img5.jpg" alt="" />
                </Link>
                <div className="category-content">
                  <h5><Link href="/antiques-auction/auction-sidebar">Old Coin</Link></h5>
                  <span>46,200 Item</span>
                </div>
              </div>
            </div>
            <div className="col wow animate fadeInDown" data-wow-delay="700ms" data-wow-duration="1500ms">
              <div className="category-card">
                <Link href="/antiques-auction/auction-sidebar" className="category-img">
                  <img src="/assets/img/home1/category-img6.jpg" alt="" />
                </Link>
                <div className="category-content">
                  <h5><Link href="/antiques-auction/auction-sidebar">Gadget</Link></h5>
                  <span>50,250 Item</span>
                </div>
              </div>
            </div>
            <div className="col wow animate fadeInDown" data-wow-delay="800ms" data-wow-duration="1500ms">
              <div className="category-card">
                <Link href="/antiques-auction/auction-sidebar" className="category-img">
                  <img src="/assets/img/home1/category-img7.jpg" alt="" />
                </Link>
                <div className="category-content">
                  <h5><Link href="/antiques-auction/auction-sidebar">Jewelry</Link></h5>
                  <span>48,202 Item</span>
                </div>
              </div>
            </div>
            <div className="col wow animate fadeInDown" data-wow-delay="800ms" data-wow-duration="1500ms">
              <div className="category-card">
                <Link href="/antiques-auction/auction-sidebar" className="category-img">
                  <img src="/assets/img/home1/category-img8.jpg" alt="" />
                </Link>
                <div className="category-content">
                  <h5><Link href="/antiques-auction/auction-sidebar">Real Estate</Link></h5>
                  <span>45,680 Item</span>
                </div>
              </div>
            </div>
            <div className="col wow animate fadeInDown" data-wow-delay="700ms" data-wow-duration="1500ms">
              <div className="category-card">
                <Link href="/antiques-auction/auction-sidebar" className="category-img">
                  <img src="/assets/img/home1/category-img9.jpg" alt="" />
                </Link>
                <div className="category-content">
                  <h5><Link href="/antiques-auction/auction-sidebar">Fashion</Link></h5>
                  <span>41,250 Item</span>
                </div>
              </div>
            </div>
            <div className="col wow animate fadeInDown" data-wow-delay="600ms" data-wow-duration="1500ms">
              <div className="category-card">
                <Link href="/antiques-auction/auction-sidebar" className="category-img">
                  <img src="/assets/img/inner-pages/category-img1.jpg" alt="" />
                </Link>
                <div className="category-content">
                  <h5><Link href="/antiques-auction/auction-sidebar">Ceramics</Link></h5>
                  <span>41,488 Item</span>
                </div>
              </div>
            </div>
            <div className="col wow animate fadeInDown" data-wow-delay="500ms" data-wow-duration="1500ms">
              <div className="category-card">
                <Link href="/antiques-auction/auction-sidebar" className="category-img">
                  <img src="/assets/img/inner-pages/category-img2.jpg" alt="" />
                </Link>
                <div className="category-content">
                  <h5><Link href="/antiques-auction/auction-sidebar">Instruments</Link></h5>
                  <span>45,477 Item</span>
                </div>
              </div>
            </div>
            <div className="col wow animate fadeInDown" data-wow-delay="400ms" data-wow-duration="1500ms">
              <div className="category-card">
                <Link href="/antiques-auction/auction-sidebar" className="category-img">
                  <img src="/assets/img/inner-pages/category-img3.jpg" alt="" />
                </Link>
                <div className="category-content">
                  <h5><Link href="/antiques-auction/auction-sidebar">Toys &amp; Games</Link></h5>
                  <span>45,356 Item</span>
                </div>
              </div>
            </div>
            <div className="col wow animate fadeInDown" data-wow-delay="300ms" data-wow-duration="1500ms">
              <div className="category-card">
                <Link href="/antiques-auction/auction-sidebar" className="category-img">
                  <img src="/assets/img/inner-pages/category-img4.jpg" alt="" />
                </Link>
                <div className="category-content">
                  <h5><Link href="/antiques-auction/auction-sidebar">Gadgets</Link></h5>
                  <span>45,878 Item</span>
                </div>
              </div>
            </div>
            <div className="col wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
              <div className="category-card">
                <Link href="/antiques-auction/auction-sidebar" className="category-img">
                  <img src="/assets/img/inner-pages/category-img5.jpg" alt="" />
                </Link>
                <div className="category-content">
                  <h5><Link href="/antiques-auction/auction-sidebar">Automobiles</Link></h5>
                  <span>45,897 Item</span>
                </div>
              </div>
            </div>
            <div className="col wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
              <div className="category-card">
                <Link href="/antiques-auction/auction-sidebar" className="category-img">
                  <img src="/assets/img/inner-pages/category-img6.jpg" alt="" />
                </Link>
                <div className="category-content">
                  <h5><Link href="/antiques-auction/auction-sidebar">Decorative Art</Link></h5>
                  <span>43,778 Item</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer3 />
    </>

  )
}

export default CategoryPage
