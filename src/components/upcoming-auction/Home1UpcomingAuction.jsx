import React from 'react'
import auctionCardData from "../../data/auction-card.json";
import AuctionCard from '../auction/auction-card';
import Link from 'next/link';
const Home1UpcomingAuction = () => {
  return (
    <>
      <div className="home1-upcoming-auction-section mb-110">
        <div className="upcoming-auction-wrapper">
          <div className="row mb-60 wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
            <div className="col-lg-12 d-flex align-items-center justify-content-between flex-wrap gap-3">
              <div className="section-title">
                <h2>Upcoming <span>Auction</span></h2>
                <p>Feel free adapt this based on the specific managed services, features</p>
              </div>
              <Link className="view-button" href="/auction-grid">
                View All Auction
                <svg viewBox="0 0 13 20">
                  <polyline points="0.5 19.5 3 19.5 12.5 10 3 0.5" />
                </svg>
              </Link>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="upcoming-auction-nav">
                <nav>
                  <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    <button className="nav-link active" id="all-tab" data-bs-toggle="tab" data-bs-target="#all" type="button" role="tab" aria-controls="all" aria-selected="true">Show all</button>
                    <button className="nav-link" id="automotive-tab" data-bs-toggle="tab" data-bs-target="#automotive" type="button" role="tab" aria-controls="automotive" aria-selected="false">Automotive</button>
                    <button className="nav-link" id="antiques-tab" data-bs-toggle="tab" data-bs-target="#antiques" type="button" role="tab" aria-controls="antiques" aria-selected="false">Antiques</button>
                    <button className="nav-link" id="digital-art-tab" data-bs-toggle="tab" data-bs-target="#digital-art" type="button" role="tab" aria-controls="digital-art" aria-selected="false">Digital Art</button>
                    <button className="nav-link" id="books-comics-tab" data-bs-toggle="tab" data-bs-target="#books-comics" type="button" role="tab" aria-controls="books-comics" aria-selected="false">Books &amp; Comics</button>
                  </div>
                </nav>
              </div>
              <div className="upcoming-auction-tab-area">
                <div className="tab-content" id="nav-tabContent">
                  <div className="tab-pane fade show active" id="all" role="tabpanel" aria-labelledby="all-tab" tabIndex={0}>
                    <div className="upcoming-auction-tab-wrap">
                      <div className="upcoming-auction-banner">
                        <img src="assets/img/home1/upcoming-auction-banner-img.jpg" alt="" />
                      </div>
                      <div className="row g-4">
                        {auctionCardData["products"].filter(item => item.status === "upcoming").slice(0, 6).map((item) => {
                          return (
                            <div key={item.auctionId} className="col-lg-6 wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
                              <AuctionCard item={item} />
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="automotive" role="tabpanel" aria-labelledby="automotive-tab" tabIndex={0}>
                    <div className="upcoming-auction-tab-wrap">
                      <div className="upcoming-auction-banner">
                        <img src="assets/img/home1/upcoming-auction-banner-img.jpg" alt="" />
                      </div>
                      <div className="row g-4">
                        {auctionCardData["products"].filter(item => item.status === "upcoming").slice(2, 8).map((item) => {
                          return (
                            <div key={item.auctionId} className="col-lg-6">
                              <AuctionCard item={item} />
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="antiques" role="tabpanel" aria-labelledby="antiques-tab" tabIndex={0}>
                    <div className="upcoming-auction-tab-wrap">
                      <div className="upcoming-auction-banner">
                        <img src="assets/img/home1/upcoming-auction-banner-img.jpg" alt="" />
                      </div>
                      <div className="row g-4">
                        {auctionCardData["products"].filter(item => item.status === "upcoming").slice(3, 9).map((item) => {
                          return (
                            <div key={item.auctionId} className="col-lg-6">
                              <AuctionCard item={item} />
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="digital-art" role="tabpanel" aria-labelledby="digital-art-tab" tabIndex={0}>
                    <div className="upcoming-auction-tab-wrap">
                      <div className="upcoming-auction-banner">
                        <img src="assets/img/home1/upcoming-auction-banner-img.jpg" alt="" />
                      </div>
                      <div className="row g-4">
                        {auctionCardData["products"].filter(item => item.status === "upcoming").map((item) => {
                          return (
                            <div key={item.auctionId} className="col-lg-6">
                              <AuctionCard item={item} />
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="books-comics" role="tabpanel" aria-labelledby="books-comics-tab" tabIndex={0}>
                    <div className="upcoming-auction-tab-wrap">
                      <div className="upcoming-auction-banner">
                        <img src="assets/img/home1/upcoming-auction-banner-img.jpg" alt="" />
                      </div>
                      <div className="row g-4">
                        {auctionCardData["products"].filter(item => item.status === "upcoming").slice(0, 6).map((item) => {
                          return (
                            <div key={item.auctionId} className="col-lg-6">
                              <AuctionCard item={item} />
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Home1UpcomingAuction
