import React, { useState } from 'react'
import Breadcrumb from '../components/common/Breadcrumb'
import Layout from '../layout/Layout'
import gallaryData from '../data/gallery2.json';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";

function GalleryTwoColumnLayout() {
    const [items, setItems] = useState(gallaryData);
    const [isOpenimg, setOpenimg] = useState({
        openingState: false,
        openingIndex: 0,
      });
    const filterItem = (catagoryItem) => {
      const updateItems = gallaryData.filter((curentElemet) => {
        return curentElemet.category === catagoryItem;
      });
      setItems(updateItems);
    };
    const categoryCard = new Map([
      ...gallaryData.map( categoryData => [categoryData.category, categoryData.categorySlug])
    ]);
  return (
    <Layout>
        <Breadcrumb pageName="2 Columns Gallery" pageTitle="2 Columns Gallery"/>
        <div className="columns2-gallery-area pt-120 mb-120">
        <div className="container">
            <div className="row">
            <div className="col-lg-12 mb--70">
                <div className="filters filter-button-group">
                <ul className="d-flex justify-content-center flex-wrap">
                    
                    {/* <li onClick={() => setItems(gallaryData)} className="active" data-filter="*">All</li>
                    <li onClick={() => filterItem("food")} className="">Food</li>
                    <li onClick={() => filterItem("privateevent")} className="">Private Event</li>
                    <li onClick={() => filterItem("interior")} className="">Interior</li>
                    <li onClick={() => filterItem("eatingplace")} className="">Eating Place</li>
                    <li onClick={() => filterItem("traditions")} className="">Traditions</li>
                    <br />
                    <br />
                    <br />
                    <br /> */}
                    {
                      [...categoryCard].map((listItem, index)=>{
                        console.log(listItem);
                        return(<li key={listItem[0]} onClick={() => filterItem("food")} className={index===0?"activek":"gh"}>{listItem[1]}</li>)
                      })
                    }
                </ul>
                </div>
            </div>
            </div>
            <div className="row grid g-4">
                {
                    items.map((element, index)=>{
                        return(
                            <div key={element.id} className="col-md-6 col-sm-12 grid-item food">
                            <div className="gallery2-img">
                            <div className="gallery-img">
                                <img className="img-fluid" src={element.imageSmalll} alt="" />
                                <div className="overlay">
                                <div className="zoom-icon">
                                    <img style={{cursor:"pointer"}} src="assets/images/icon/Zoom.svg" 
                                     onClick={() => setOpenimg({ openingState: true, openingIndex:index })} alt="" />
                                </div>
                                </div>
                            </div>
                            </div>
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
        <Lightbox
        className="img-fluid"
        open={isOpenimg.openingState}
        plugins={[Fullscreen]}
        index={isOpenimg.openingIndex}
        close={() => setOpenimg(false)}
        styles={{ container: { backgroundColor: "rgba(0, 0, 0, .9)" } }}
        slides={items.map(function(elem) { 
            return { src: elem.imageBig } 
        })}
      />
    </Layout>
  )
}

export default GalleryTwoColumnLayout