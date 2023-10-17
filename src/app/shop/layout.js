"use client"
import Footer from '@/components/common/Footer'
import Header from '@/components/common/Header'
import Topbar from '@/components/common/Topbar'
import Link from 'next/link'
import React from 'react'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const layout = ({children}) => {
  return (
    <>
    <ToastContainer />
    <Topbar/>
     <Header/>
     <div className="inner-page-banner">
  <div className="banner-wrapper">
    <div className="container-fluid">
      <div className="banner-main-content-wrap">
        <div className="row">
          <div className="col-xl-6 col-lg-7 d-flex align-items-center">
            <div className="banner-content">
              <h1>Shop Home Furniture</h1>
              <ul className="breadcrumb-list">
                <li><Link legacyBehavior href="/"><a>Home</a></Link></li>
                <li><Link legacyBehavior href="/shop"><a>Shop</a></Link></li>
                <li>Shop Home Furniture</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

     {children}
     <Footer/> 
    </>
  )
}

export default layout
