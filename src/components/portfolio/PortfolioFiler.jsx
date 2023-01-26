import Link from "next/link";
import React, { useState } from "react";
import portfolioData from "../../data/portfolio_data.json";

function PortfolioFiler() {
  const [items, setItems] = useState(portfolioData);
  const [CategoryActiveSlug, setCategoryActiveSlug] = useState(null);
  const filterItem = (catagoryItem) => {
    const updateItems = portfolioData.filter((curentElemet) => {
      return curentElemet.categorySlug === catagoryItem;
    });
    setCategoryActiveSlug(catagoryItem);

    setItems(updateItems);
  };
  const setAllItems = (allItems) => {
    setCategoryActiveSlug(allItems);
    return setItems(portfolioData);
  };

  const categoryCard = new Map([
    ...portfolioData.map((categoryData) => [
      categoryData.category,
      categoryData.categorySlug,
    ]),
  ]);
  return (
    <>
      <div className="our-portfilio-area bg-color2 pt-120 pb-120">
        <div className="container">
          <div className="row justify-content-center g-4">
            <div className="col-lg-12">
              <div className="filters filter-button-group">
                <ul className="d-flex justify-content-center flex-wrap">
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
                    <span>{items.length}</span>
                  </li>
                  {[...categoryCard].map((key) => {
                    return (
                      <li
                        key={key[1]}
                        onClick={() => filterItem(`${key[1]}`)}
                        className={key[1] == CategoryActiveSlug ? "active" : ""}
                      >
                        {key[0]}
                        <span>{items.length}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
          <div className="row grid  g-4 mb-70 justify-content-center">
            {items.slice(0, 6).map((element, index) => {
              return (
                <div
                  key={element.id}
                  className="col-lg-4 col-md-6 col-sm-10 grid-item"
                >
                  <div className="portfolio-single-one style-two magnetic-item">
                    <img className="img-fluid" src={element.img2} alt="image" />
                    <div className="overlay">
                      <div className="content">
                        <h3>
                          <Link
                            legacyBehavior
                            data-cursor="View<br>Details"
                            href="/portfolio-details"
                          >
                            <a>{element.title}</a>
                          </Link>
                        </h3>
                        <span>Photographer</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default PortfolioFiler;
