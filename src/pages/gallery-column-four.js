import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import "yet-another-react-lightbox/styles.css";
import Breadcrumb from "../components/breadcrumb/Breadcrumb";
import gallaryData from "../data/gallaryData.json";
import Layout from "../layout/Layout";
function GalleryColumFour() {
  const [items, setItems] = useState(gallaryData);
  const [CategoryActiveSlug, setCategoryActiveSlug] = useState(null);

  const [isOpenimg, setOpenimg] = useState({
    openingState: false,
    openingIndex: 0,
  });
  const filterItem = (catagoryItem) => {
    setCategoryActiveSlug(catagoryItem);
    const updateItems = gallaryData.filter((curentElemet) => {
      return curentElemet.categorySlug === catagoryItem;
    });
    setItems(updateItems);
  };
  const setAllItems = (allItems) => {
    setCategoryActiveSlug(allItems);
    return setItems(gallaryData);
  };

  const categoryCard = new Map([
    ...gallaryData.map((categoryData) => [
      categoryData.category,
      categoryData.categorySlug,
    ]),
  ]);
  return (
    <Layout>
      <Breadcrumb
        pageName="Gallery Four Column"
        pageTitle="Gallery Four Column"
      />
      <div className="our-portfilio-area bg-color2 pt-120 pb-120 mb-44">
        <div className="container">
          <div className="row justify-content-center g-4">
            <div className="col-lg-3 text-start">
              <h2 className="section-title-one">Gallery</h2>
            </div>
            <div className="col-lg-9">
              <div className="filters filter-button-group">
                <ul className="d-flex justify-content-lg-end justify-content-center flex-wrap">
                  <li
                    onClick={() => setAllItems("all")}
                    className={
                      CategoryActiveSlug == "all" || CategoryActiveSlug == null
                        ? "active"
                        : ""
                    }
                    data-filter="*"
                  >
                    All
                  </li>
                  {[...categoryCard].map((key) => {
                    return (
                      <li
                        key={key[1]}
                        onClick={() => filterItem(`${key[1]}`)}
                        className={key[1] == CategoryActiveSlug ? "active" : ""}
                      >
                        {key[0]}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
          <div className="row grid g-4 mb-70 justify-content-center">
            {items.map((element, index) => {
              return (
                <div
                  key={element.id}
                  className="col-xl-3 col-lg-4 col-md-6 col-sm-6"
                >
                  <div className="gallery2-img">
                    <div className="gallery-img">
                      <img
                        className="img-fluid"
                        style={{ cursor: "pointer" }}
                        src={element.imageSmalll}
                        alt=""
                        onClick={() =>
                          setOpenimg({
                            openingState: true,
                            openingIndex: index,
                          })
                        }
                      />
                    </div>
                  </div>
                </div>
              );
            })}
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
        slides={items.map(function (elem) {
          return { src: elem.imageBig };
        })}
      />
    </Layout>
  );
}

export default GalleryColumFour;
