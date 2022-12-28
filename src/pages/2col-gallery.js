import React, { useState } from 'react'
import Breadcrumb from '../components/common/Breadcrumb'
import Layout from '../layout/Layout'
import gallaryData from '../data/gallery2.json';
function GalleryTwoColumnLayout() {
    const [items, setItems] = useState(gallaryData);
    const filterItem = (catagoryItem) => {
      const updateItems = gallaryData.filter((curentElemet) => {
        return curentElemet.category === catagoryItem;
      });
      setItems(updateItems);
    };
  return (
    <Layout>
        <Breadcrumb pageName="2 Columns Gallery" pageTitle="2 Columns Gallery"/>
        <div className="columns2-gallery-area pt-120 mb-120">
        <div className="container">
            <div className="row">
            <div className="col-lg-12 mb--70">
                <div className="filters filter-button-group">
                <ul className="d-flex justify-content-center flex-wrap">
                    <li onClick={() => setItems(gallaryData)} className="active" data-filter="*">All</li>
                    <li onClick={() => filterItem("food")} className="">Food</li>
                    <li onClick={() => filterItem("privateevent")} className="">Private Event</li>
                    <li onClick={() => filterItem("interior")} className="">Interior</li>
                    <li onClick={() => filterItem("eatingplace")} className="">Eating Place</li>
                    <li onClick={() => filterItem("traditions")} className="">Traditions</li>
                </ul>
                </div>
            </div>
            </div>
            <div className="row grid g-4">
                {
                    items.map((element)=>{
                        return(
                            <div key={element.id} className="col-md-6 col-sm-12 grid-item food">
                            <a href={element.imageBig} data-fancybox="gallery" className="gallery2-img">
                            <div className="gallery-img">
                                <img className="img-fluid" src={element.imageSmalll} alt="" />
                                <div className="overlay">
                                <div className="zoom-icon">
                                    <img src="assets/images/icon/Zoom.svg" alt="" />
                                </div>
                                </div>
                            </div>
                            </a>
                        </div>
                        )
                    })
                }
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