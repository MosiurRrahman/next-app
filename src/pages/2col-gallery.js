import React from 'react'
import Breadcrumb from '../components/common/Breadcrumb'
import Layout from '../layout/Layout'

function GalleryTwoColumnLayout() {
  return (
    <Layout>
        <Breadcrumb pageName="2 Columns Gallery" pageTitle="2 Columns Gallery"/>
        <div className="columns2-gallery-area pt-120 mb-120">
        <div className="container">
            <div className="row">
            <div className="col-lg-12 mb--70">
                <div className="filters filter-button-group">
                <ul className="d-flex justify-content-center flex-wrap">
                    <li className="active" data-filter="*">All</li>
                    <li data-filter=".food" className>Food</li>
                    <li data-filter=".privateevent" className>Private Event</li>
                    <li data-filter=".interior" className>Interior</li>
                    <li data-filter=".eatingplace" className>Eating Place</li>
                    <li data-filter=".traditions" className>Traditions</li>
                </ul>
                </div>
            </div>
            </div>
            <div className="row grid g-4">
            <div className="col-md-6 col-sm-12 grid-item food">
                <a href="assets/images/bg/2col-gallery-big-01.png" data-fancybox="gallery" className="gallery2-img">
                <div className="gallery-img">
                    <img className="img-fluid" src="assets/images/bg/2col-gallery-01.png" alt="" />
                    <div className="overlay">
                    <div className="zoom-icon">
                        <img src="assets/images/icon/Zoom.svg" alt="" />
                    </div>
                    </div>
                </div>
                </a>
            </div>
            <div className="col-md-6 col-sm-12 grid-item privateevent">
                <a href="assets/images/bg/2col-gallery-big-02.png" data-fancybox="gallery" className="gallery2-img">
                <div className="gallery-img">
                    <img className="img-fluid" src="assets/images/bg/2col-gallery-02.png" alt="" />
                    <div className="overlay">
                    <div className="zoom-icon">
                        <img src="assets/images/icon/Zoom.svg" alt="" />
                    </div>
                    </div>
                </div>
                </a>
            </div>
            <div className="col-md-6 col-sm-12 grid-item interior">
                <a href="assets/images/bg/2col-gallery-big-03.png" data-fancybox="gallery" className="gallery2-img">
                <div className="gallery-img">
                    <img className="img-fluid" src="assets/images/bg/2col-gallery-03.png" alt="" />
                    <div className="overlay">
                    <div className="zoom-icon">
                        <img src="assets/images/icon/Zoom.svg" alt="" />
                    </div>
                    </div>
                </div>
                </a>
            </div>
            <div className="col-md-6 col-sm-12 grid-item eatingplace">
                <a href="assets/images/bg/2col-gallery-big-04.png" data-fancybox="gallery" className="gallery2-img">
                <div className="gallery-img">
                    <img className="img-fluid" src="assets/images/bg/2col-gallery-04.png" alt="" />
                    <div className="overlay">
                    <div className="zoom-icon">
                        <img src="assets/images/icon/Zoom.svg" alt="" />
                    </div>
                    </div>
                </div>
                </a>
            </div>
            <div className="col-md-6 col-sm-12 grid-item traditions">
                <a href="assets/images/bg/2col-gallery-big-05.png" data-fancybox="gallery" className="gallery2-img">
                <div className="gallery-img">
                    <img className="img-fluid" src="assets/images/bg/2col-gallery-05.png" alt="" />
                    <div className="overlay">
                    <div className="zoom-icon">
                        <img src="assets/images/icon/Zoom.svg" alt="" />
                    </div>
                    </div>
                </div>
                </a>
            </div>
            <div className="col-md-6 col-sm-12 grid-item food">
                <a href="assets/images/bg/2col-gallery-big-06.png" data-fancybox="gallery" className="gallery2-img">
                <div className="gallery-img">
                    <img className="img-fluid" src="assets/images/bg/2col-gallery-06.png" alt="" />
                    <div className="overlay">
                    <div className="zoom-icon">
                        <img src="assets/images/icon/Zoom.svg" alt="" />
                    </div>
                    </div>
                </div>
                </a>
            </div>
            </div>
            <div className="row pt-60">
            <div className="col-lg-12 d-flex justify-content-center">
                <div className="load-more-btn">
                <a className="primary-btn3 btn-md2" href="#">Load More</a>
                </div>
            </div>
            </div>
        </div>
        </div>
    </Layout>
  )
}

export default GalleryTwoColumnLayout