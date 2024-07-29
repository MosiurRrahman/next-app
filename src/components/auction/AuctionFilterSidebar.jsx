import Link from 'next/link'
import React from 'react'

const AuctionFilterSidebar = () => {
  return (
    <div className="filter-sidebar">
      <div className="auction-sidebar">
        <form>
          <div className="single-widget mb-30">
            <div className="search-box">
              <input type="text" placeholder="Search" />
              <button type="submit">
                <i className="bx bx-search" />
              </button>
            </div>
          </div>
          <div className="single-widget mb-30">
            <div className="single-search-box">
              <div className="searchbox-input">
                <label>Sales</label>
                <div className="custom-select-dropdown">
                  <div className="select-input">
                    <input type="text" readOnly defaultValue="Online" />
                    <i className="bi bi-chevron-down" />
                  </div>
                  <div className="custom-select-wrap two">
                    <ul className="option-list">
                      <li className="single-item">
                        <h6>Online</h6>
                      </li>
                      <li className="single-item">
                        <h6>In-Store</h6>
                      </li>
                      <li className="single-item">
                        <h6>Phone Order</h6>
                      </li>
                      <li className="single-item">
                        <h6>Email Order</h6>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="single-widget mb-30">
            <h5 className="widget-title">Category</h5>
            <div className="checkbox-container">
              <ul>
                <li>
                  <label className="containerss">
                    <input type="checkbox" />
                    <span className="checkmark" />
                    <span>Automotive</span>
                  </label>
                </li>
                <li>
                  <label className="containerss">
                    <input type="checkbox" />
                    <span className="checkmark" />
                    <span>Antiques</span>
                  </label>
                </li>
                <li>
                  <label className="containerss">
                    <input type="checkbox" />
                    <span className="checkmark" />
                    <span>Digital Art</span>
                  </label>
                </li>
                <li>
                  <label className="containerss">
                    <input type="checkbox" />
                    <span className="checkmark" />
                    <span>Books &amp; Comic</span>
                  </label>
                </li>
                <li>
                  <label className="containerss">
                    <input type="checkbox" />
                    <span className="checkmark" />
                    <span>Old Coin</span>
                  </label>
                </li>
                <li>
                  <label className="containerss">
                    <input type="checkbox" />
                    <span className="checkmark" />
                    <span>Gadget and Technology</span>
                  </label>
                </li>
              </ul>
            </div>
          </div>
          <div className="single-widget mb-30">
            <div className="single-search-box">
              <div className="searchbox-input">
                <label>Country</label>
                <div className="custom-select-dropdown">
                  <div className="select-input">
                    <input type="text" readOnly defaultValue="Spain" />
                    <i className="bi bi-chevron-down" />
                  </div>
                  <div className="custom-select-wrap two">
                    <ul className="option-list">
                      <li className="single-item">
                        <h6>Spain</h6>
                      </li>
                      <li className="single-item">
                        <h6>France</h6>
                      </li>
                      <li className="single-item">
                        <h6>Brazil</h6>
                      </li>
                      <li className="single-item">
                        <h6>Bangladesh</h6>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="single-widget mb-30">
            <div className="single-search-box">
              <div className="searchbox-input">
                <label>Period</label>
                <div className="custom-select-dropdown">
                  <div className="select-input">
                    <input type="text" readOnly defaultValue="Today  (110)" />
                    <i className="bi bi-chevron-down" />
                  </div>
                  <div className="custom-select-wrap two">
                    <ul className="option-list">
                      <li className="single-item">
                        <h6>Today (110)</h6>
                      </li>
                      <li className="single-item">
                        <h6>Yesterday (115)</h6>
                      </li>
                      <li className="single-item">
                        <h6>Last 7 Days (515)</h6>
                      </li>
                      <li className="single-item">
                        <h6>Last 30 Days (945)</h6>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="single-widget mb-30">
            <div className="single-search-box">
              <div className="searchbox-input">
                <label>Condition</label>
                <div className="custom-select-dropdown">
                  <div className="select-input">
                    <input type="text" readOnly defaultValue="New" />
                    <i className="bi bi-chevron-down" />
                  </div>
                  <div className="custom-select-wrap two">
                    <ul className="option-list">
                      <li className="single-item">
                        <h6>New</h6>
                      </li>
                      <li className="single-item">
                        <h6>Used</h6>
                      </li>
                      <li className="single-item">
                        <h6>Refurbished</h6>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="single-widget mb-30">
            <h5 className="widget-title">Price</h5>
            <div className="range-wrap">
              <div className="row">
                <div className="col-sm-12">
                  <input type="hidden" name="min-value" defaultValue />
                  <input type="hidden" name="max-value" defaultValue />
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12">
                  <div id="slider-range" />
                </div>
              </div>
              <div className="slider-labels">
                <div className="caption">
                  <span id="slider-range-value1" />
                </div>
                <div className="caption">
                  <span id="slider-range-value2" />
                </div>
              </div>
            </div>
          </div>
          <div className="single-widget mb-30">
            <h5 className="widget-title">Type Of Sales</h5>
            <div className="checkbox-container">
              <ul>
                <li>
                  <label className="containerss">
                    <input type="checkbox" />
                    <span className="checkmark" />
                    <span>Upcoming</span>
                  </label>
                </li>
                <li>
                  <label className="containerss">
                    <input type="checkbox" />
                    <span className="checkmark" />
                    <span>Latest</span>
                  </label>
                </li>
                <li>
                  <label className="containerss">
                    <input type="checkbox" />
                    <span className="checkmark" />
                    <span>Highest Bidding</span>
                  </label>
                </li>
                <li>
                  <label className="containerss">
                    <input type="checkbox" />
                    <span className="checkmark" />
                    <span>Live Auction</span>
                  </label>
                </li>
                <li>
                  <label className="containerss">
                    <input type="checkbox" />
                    <span className="checkmark" />
                    <span>Popular</span>
                  </label>
                </li>
              </ul>
            </div>
          </div>
        </form>
        <div className="single-widget">
          <h5 className="widget-title">Highest Bidding</h5>
          <div className="highest-bidding-widget mb-20">
            <div className="highest-bidding-img">
              <Link href="/auction-details">
                <img
                  src="assets/img/inner-pages/highest-bidding-img1.jpg"
                  alt=""
                />
              </Link>
            </div>
            <div className="highest-bidding-content">
              <h6>
                <Link href="/auction-details">
                  Poutsicle Hydratingani Stain offering.
                </Link>
              </h6>
              <div className="price-area">
                <span>Current Bid at:</span>
                <strong>$4,648</strong>
              </div>
            </div>
          </div>
          <div className="highest-bidding-widget mb-20">
            <div className="highest-bidding-img">
              <Link href="/auction-details">
                <img
                  src="assets/img/inner-pages/highest-bidding-img2.jpg"
                  alt=""
                />
              </Link>
            </div>
            <div className="highest-bidding-content">
              <h6>
                <Link href="/auction-details">
                  Heritage Had Curating Watch.
                </Link>
              </h6>
              <div className="price-area">
                <span>Current Bid at:</span>
                <strong>$2,458</strong>
              </div>
            </div>
          </div>
          <div className="highest-bidding-widget">
            <div className="highest-bidding-img">
              <Link href="/auction-details">
                <img
                  src="assets/img/inner-pages/highest-bidding-img3.jpg"
                  alt=""
                />
              </Link>
            </div>
            <div className="highest-bidding-content">
              <h6>
                <Link href="/auction-details">
                  Art decorat bronze sculpture.
                </Link>
              </h6>
              <div className="price-area">
                <span>Current Bid at:</span>
                <strong>$2,878</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AuctionFilterSidebar
