import React from "react";
import auctionData from "../../data/auction-card.json";
import AuctionCard from "../auction/auction-card";
import Link from "next/link";
const Home1LatestAuction = () => {
  return (
    <div className="latest-auction-section mb-110">
      <div className="container">
        <div className="row mb-60">
          <div className="col-lg-12 d-flex align-items-center justify-content-between flex-wrap gap-3">
            <div
              className="section-title wow animate fadeInLeft"
              data-wow-delay="200ms"
              data-wow-duration="1500ms"
            >
              <h2>
                Latest <span>Auction</span>
              </h2>
              <p>
                Feel free adapt this based on the specific managed services,
                features
              </p>
            </div>
            <Link
              className="view-button wow animate fadeInRight"
              data-wow-delay="200ms"
              data-wow-duration="1500ms"
              href="/auction-grid"
            >
              View All Auction
              <svg viewBox="0 0 13 20">
                <polyline points="0.5 19.5 3 19.5 12.5 10 3 0.5" />
              </svg>
            </Link>
          </div>
        </div>
        <div className="row g-4">
          {auctionData["products"].slice(0, 8).map((item) => {
            return (
              <div
                key={item.auctionId}
                className="col-xl-3 col-lg-4 col-md-6 wow animate fadeInDown"
                data-wow-delay="200ms"
                data-wow-duration="1500ms"
              >
                <AuctionCard item={item} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home1LatestAuction;
