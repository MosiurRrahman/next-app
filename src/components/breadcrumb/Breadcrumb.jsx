import CircleType from "circletype";
import React, { useEffect, useRef } from "react";
function Breadcrumb({ pageTitle, pageName }) {
  const circleInstance = useRef();
  useEffect(() => {
    new CircleType(circleInstance.current).radius(10);
  }, []);
  return (
    <div className="bread-crumb-section">
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-lg-8 d-flex justify-content-lg-start justify-content-center flex-column">
            <h2 className="bread-crumb-title">{pageTitle}</h2>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb gap-3 m-0 p-0">
                <li className="breadcrumb-item">
                  <a href="index.html">Home</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  {pageName}
                </li>
              </ol>
            </nav>
          </div>
          <div className="col-lg-4">
            <div className="circle-text-common circel-tex-area1">
              <img src="assets/images/icons/camera-icon.svg" alt="image" />
              <p
                id="CircleTypeText1"
                ref={circleInstance}
                className="circle-text"
              >
                SCROLL * DOWN NOW&nbsp;{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Breadcrumb;
