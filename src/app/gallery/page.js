import Newslatter from '@/components/common/Newslatter'
import Footer from '@/components/footer/Footer'
import Header from '@/components/header/Header'
import Topbar from '@/components/topbar/Topbar'
import React from 'react'

const page = () => {
  return (
    <>
     <Topbar/>
     <Header/>
     <div className="destination-gallery pt-120 mb-120">
        <div className="container">
          <div className="row g-4 mb-70">
            <div className="col-lg-4 col-sm-6">
              <div className="gallery-img-wrap">
                <img src="/assets/img/innerpage/gallery-06.jpg" alt="" />
                <a data-fancybox="gallery-01" href="assets/img/innerpage/gallery-06.jpg"><i className="bi bi-eye" />  Discover Island</a>
              </div>     
            </div>
            <div className="col-lg-5 col-sm-6">
              <div className="gallery-img-wrap">
                <img src="/assets/img/innerpage/gallery-01.jpg" alt="" />
                <a data-fancybox="gallery-01" href="assets/img/innerpage/gallery-01.jpg"><i className="bi bi-eye" />  Discover Island</a>
              </div> 
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="gallery-img-wrap">
                <img src="/assets/img/innerpage/gallery-02.jpg" alt="" />
                <a data-fancybox="gallery-01" href="assets/img/innerpage/gallery-02.jpg"><i className="bi bi-eye" />  Discover Island</a>
              </div> 
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="gallery-img-wrap">
                <img src="/assets/img/innerpage/gallery-03.jpg" alt="" />
                <a data-fancybox="gallery-01" href="assets/img/innerpage/gallery-03.jpg"><i className="bi bi-eye" />  Discover Island</a>
              </div> 
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="gallery-img-wrap">
                <img src="/assets/img/innerpage/gallery-04.jpg" alt="" />
                <a data-fancybox="gallery-01" href="assets/img/innerpage/gallery-04.jpg"><i className="bi bi-eye" />  Discover Island</a>
              </div> 
            </div>
            <div className="col-lg-5 col-sm-6">
              <div className="gallery-img-wrap">
                <img src="/assets/img/innerpage/gallery-05.jpg" alt="" />
                <a data-fancybox="gallery-01" href="assets/img/innerpage/gallery-05.jpg"><i className="bi bi-eye" />  Discover Island</a>
              </div> 
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="gallery-img-wrap">
                <img src="/assets/img/innerpage/gallery-07.jpg" alt="" />
                <a data-fancybox="gallery-01" href="assets/img/innerpage/gallery-06.jpg"><i className="bi bi-eye" />  Discover Island</a>
              </div>     
            </div>
            <div className="col-lg-5 col-sm-6">
              <div className="gallery-img-wrap">
                <img src="/assets/img/innerpage/gallery-08.jpg" alt="" />
                <a data-fancybox="gallery-01" href="assets/img/innerpage/gallery-01.jpg"><i className="bi bi-eye" /> Discover
                  Island</a>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="gallery-img-wrap">
                <img src="/assets/img/innerpage/gallery-09.jpg" alt="" />
                <a data-fancybox="gallery-01" href="assets/img/innerpage/gallery-02.jpg"><i className="bi bi-eye" />  Discover Island</a>
              </div> 
            </div>
          </div> 
          <div className="row">
            <div className="col-lg-12 d-flex justify-content-center">
              <a href="#" className="primary-btn1">Load More</a>
            </div>
          </div>
        </div>
      </div>
     <Newslatter/>
     <Footer/> 
    </>
  )
}

export default page
