import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import "yet-another-react-lightbox/styles.css";
import Breadcrumb from "../components/breadcrumb/Breadcrumb";
import gallaryData from "../data/gallaryData.json";
import Layout from "../layout/Layout";
function GalleryFullwidth() {
  const [isOpenimg, setOpenimg] = useState({
    openingState: false,
    openingIndex: 0,
  });
  return (
    <Layout>
      <Breadcrumb pageName="Gallery Fullwidth" pageTitle="Gallery Fullwidth" />
      <div className="gallery-section bg-color2 mb-44">
        <div className="container-fluid">
          <div className="row align-items-center justify-content-center g-0">
            {gallaryData.map((item, index) => {
              return (
                <div
                  key={item.id}
                  className="col-xl-3 col-lg-4 col-sm-6 col-12"
                >
                  <div className="gallery-img">
                    <img
                      className="img-fluid"
                      style={{ cursor: "pointer" }}
                      src={item.imageSmalll}
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
              );
            })}
            /{" "}
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
        slides={gallaryData.map(function (elem) {
          return { src: elem.imageBig };
        })}
      />
    </Layout>
  );
}

export default GalleryFullwidth;
