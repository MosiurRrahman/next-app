import Link from 'next/link'
import React from 'react'
import SingleSearchBox from '../common/SingleSearchBox';

const AuctionFilterSidebar = ({isMenuOpen}) => {
  const condition = ["New", "Used", "Refurbished"];
  const countries = ["Spain", "France", "Brazil", "Bangladesh"];
  const period = [
    "Today  (110)",
    "Yesterday (115)",
    "Last 7 Days (515)",
    "Last 30 Days (945)",
  ];
  const sales = ["Online", "In-Store", "Phone Order", "Email Order"];
  return (
    <div className={`filter-sidebar ${isMenuOpen?"slide":""}`}>
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
          <SingleSearchBox
                      placeholder="Online"
                      options={sales}
                      label="Sales"
                      style="two"
                    />
           
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
          <SingleSearchBox
                      placeholder="Country"
                      options={countries}
                      label="Country"
                      style="two"
                    />
            
          </div>
          <div className="single-widget mb-30">
          <SingleSearchBox
                      placeholder="Today  (110)"
                      options={period}
                      label="Period"
                      style="two"
                    />
           
          </div>
          <div className="single-widget mb-30">
          <SingleSearchBox
                      placeholder="New"
                      options={condition}
                      label="Condition"
                      style="two"
                    />
                 
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
