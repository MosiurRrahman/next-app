import Link from 'next/link'
import React from 'react'

const Home5Tobbar = () => {
  return (
    <div className="top-bar style-5">
        <div className="logo-and-menu">
            <div className="company-logo">
            <Link legacyBehavior href="/"><img src="assets/img/logo.svg" alt="" /></Link>
            </div>
            <div className="menu">
            <ul>
                <li><Link legacyBehavior href="poperty-listing-no-sidebar"><a>Newly Listed Home</a></Link></li>
                <li><Link legacyBehavior href="poperty-listing-no-sidebar"><a>Lowest Price</a></Link></li>
                <li><Link legacyBehavior href="special-offer"><a>Offer</a></Link></li>
            </ul>
            </div>
        </div>
        <div className="topbar-right">
            <ul>
            <li>
                <div className="hotline-area d-xl-flex d-none">
                <div className="icon">
                    <img src="assets/img/home1/icon/hotline-icon.svg" alt="" />
                </div>
                <div className="content">
                    <span>To More Inquiry</span>
                    <h6><a href="tel:+990737621432">+990-737 621 432</a></h6>
                </div>
                </div>
            </li>
            </ul>
        </div>
        </div>

  )
}

export default Home5Tobbar
