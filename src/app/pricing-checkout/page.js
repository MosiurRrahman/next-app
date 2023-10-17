"use client"
import React, { useState } from 'react'
import Breadcrumb from '@/components/common/Breadcrumb'
import Footer from '@/components/common/Footer'
import Header from '@/components/common/Header'
import Topbar from '@/components/common/Topbar'
import Link from 'next/link'



const Page = () => {
  const [activeOption, setActiveOption] = useState('paypal');
  const handleOptionChange = (option) => {
    setActiveOption(option);
  };
  return (
    <>
     <Topbar/>
     <Header/>
     <Breadcrumb pageName={"Checkout Page"} pageTitle={"Checkout Page"} />
     <div className="pricing-checkout-page pt-100 mb-100">
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <div className="package-and-login-area">
          <p>Without login you can’t purchase any package</p>
          <button type="button" className="modal-btn" data-bs-toggle="modal" data-bs-target="#logInModal01">login
            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16">
              <path fillRule="evenodd" clipRule="evenodd" d="M6 3.5C6 3.36739 6.05268 3.24021 6.14645 3.14645C6.24021 3.05268 6.36739 3 6.5 3H14.5C14.6326 3 14.7598 3.05268 14.8536 3.14645C14.9473 3.24021 15 3.36739 15 3.5V12.5C15 12.6326 14.9473 12.7598 14.8536 12.8536C14.7598 12.9473 14.6326 13 14.5 13H6.5C6.36739 13 6.24021 12.9473 6.14645 12.8536C6.05268 12.7598 6 12.6326 6 12.5V10.5C6 10.3674 5.94732 10.2402 5.85355 10.1464C5.75979 10.0527 5.63261 10 5.5 10C5.36739 10 5.24021 10.0527 5.14645 10.1464C5.05268 10.2402 5 10.3674 5 10.5V12.5C5 12.8978 5.15804 13.2794 5.43934 13.5607C5.72064 13.842 6.10218 14 6.5 14H14.5C14.8978 14 15.2794 13.842 15.5607 13.5607C15.842 13.2794 16 12.8978 16 12.5V3.5C16 3.10218 15.842 2.72064 15.5607 2.43934C15.2794 2.15804 14.8978 2 14.5 2H6.5C6.10218 2 5.72064 2.15804 5.43934 2.43934C5.15804 2.72064 5 3.10218 5 3.5V5.5C5 5.63261 5.05268 5.75979 5.14645 5.85355C5.24021 5.94732 5.36739 6 5.5 6C5.63261 6 5.75979 5.94732 5.85355 5.85355C5.94732 5.75979 6 5.63261 6 5.5V3.5Z" />
              <path fillRule="evenodd" clipRule="evenodd" d="M11.854 8.35414C11.9006 8.3077 11.9375 8.25252 11.9627 8.19178C11.9879 8.13103 12.0009 8.06591 12.0009 8.00014C12.0009 7.93438 11.9879 7.86926 11.9627 7.80851C11.9375 7.74776 11.9006 7.69259 11.854 7.64614L8.854 4.64614C8.80751 4.59966 8.75232 4.56278 8.69158 4.53762C8.63084 4.51246 8.56574 4.49951 8.5 4.49951C8.43426 4.49951 8.36916 4.51246 8.30842 4.53762C8.24768 4.56278 8.19249 4.59966 8.146 4.64614C8.09951 4.69263 8.06264 4.74782 8.03748 4.80856C8.01232 4.8693 7.99937 4.9344 7.99937 5.00014C7.99937 5.06589 8.01232 5.13099 8.03748 5.19173C8.06264 5.25247 8.09951 5.30766 8.146 5.35414L10.293 7.50014H1.5C1.36739 7.50014 1.24021 7.55282 1.14645 7.64659C1.05268 7.74036 1 7.86754 1 8.00014C1 8.13275 1.05268 8.25993 1.14645 8.3537C1.24021 8.44747 1.36739 8.50014 1.5 8.50014H10.293L8.146 10.6461C8.09951 10.6926 8.06264 10.7478 8.03748 10.8086C8.01232 10.8693 7.99937 10.9344 7.99937 11.0001C7.99937 11.0659 8.01232 11.131 8.03748 11.1917C8.06264 11.2525 8.09951 11.3077 8.146 11.3541C8.19249 11.4006 8.24768 11.4375 8.30842 11.4627C8.36916 11.4878 8.43426 11.5008 8.5 11.5008C8.56574 11.5008 8.63084 11.4878 8.69158 11.4627C8.75232 11.4375 8.80751 11.4006 8.854 11.3541L11.854 8.35414Z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-lg-4 p-0">
        <div className="package-pricing-area">
          <div className="package-title">
            <h6>Business Package</h6>
          </div>
          <div className="package-price-permonth">
            <h6>$ 35/<sub>per month </sub></h6>
          </div>
          <div className="package-pricing-content">
            <h6>What’s Included :</h6>
            <ul>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 12 12">
                  <g>
                    <path d="M6 11.25C4.60761 11.25 3.27226 10.6969 2.28769 9.71231C1.30312 8.72774 0.75 7.39239 0.75 6C0.75 4.60761 1.30312 3.27226 2.28769 2.28769C3.27226 1.30312 4.60761 0.75 6 0.75C7.39239 0.75 8.72774 1.30312 9.71231 2.28769C10.6969 3.27226 11.25 4.60761 11.25 6C11.25 7.39239 10.6969 8.72774 9.71231 9.71231C8.72774 10.6969 7.39239 11.25 6 11.25ZM6 12C7.5913 12 9.11742 11.3679 10.2426 10.2426C11.3679 9.11742 12 7.5913 12 6C12 4.4087 11.3679 2.88258 10.2426 1.75736C9.11742 0.632141 7.5913 0 6 0C4.4087 0 2.88258 0.632141 1.75736 1.75736C0.632141 2.88258 0 4.4087 0 6C0 7.5913 0.632141 9.11742 1.75736 10.2426C2.88258 11.3679 4.4087 12 6 12Z" />
                    <path d="M8.22727 3.72747C8.22192 3.73264 8.21691 3.73816 8.21227 3.74397L5.60752 7.06272L4.03777 5.49222C3.93113 5.39286 3.7901 5.33876 3.64437 5.34134C3.49865 5.34391 3.35961 5.40294 3.25655 5.506C3.15349 5.60906 3.09446 5.7481 3.09188 5.89382C3.08931 6.03955 3.14341 6.18059 3.24277 6.28722L5.22727 8.27247C5.28073 8.32583 5.34439 8.36788 5.41445 8.39611C5.48452 8.42433 5.55955 8.43816 5.63508 8.43676C5.7106 8.43536 5.78507 8.41876 5.85404 8.38796C5.92301 8.35716 5.98507 8.31278 6.03652 8.25747L9.03052 4.51497C9.13246 4.40796 9.1882 4.26514 9.18568 4.11737C9.18317 3.9696 9.12259 3.82875 9.01706 3.72529C8.91152 3.62182 8.76951 3.56405 8.62171 3.56446C8.47392 3.56486 8.33223 3.62342 8.22727 3.72747Z" />
                  </g>
                </svg> 16 property included
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 12 12">
                  <g>
                    <path d="M6 11.25C4.60761 11.25 3.27226 10.6969 2.28769 9.71231C1.30312 8.72774 0.75 7.39239 0.75 6C0.75 4.60761 1.30312 3.27226 2.28769 2.28769C3.27226 1.30312 4.60761 0.75 6 0.75C7.39239 0.75 8.72774 1.30312 9.71231 2.28769C10.6969 3.27226 11.25 4.60761 11.25 6C11.25 7.39239 10.6969 8.72774 9.71231 9.71231C8.72774 10.6969 7.39239 11.25 6 11.25ZM6 12C7.5913 12 9.11742 11.3679 10.2426 10.2426C11.3679 9.11742 12 7.5913 12 6C12 4.4087 11.3679 2.88258 10.2426 1.75736C9.11742 0.632141 7.5913 0 6 0C4.4087 0 2.88258 0.632141 1.75736 1.75736C0.632141 2.88258 0 4.4087 0 6C0 7.5913 0.632141 9.11742 1.75736 10.2426C2.88258 11.3679 4.4087 12 6 12Z" />
                    <path d="M8.22727 3.72747C8.22192 3.73264 8.21691 3.73816 8.21227 3.74397L5.60752 7.06272L4.03777 5.49222C3.93113 5.39286 3.7901 5.33876 3.64437 5.34134C3.49865 5.34391 3.35961 5.40294 3.25655 5.506C3.15349 5.60906 3.09446 5.7481 3.09188 5.89382C3.08931 6.03955 3.14341 6.18059 3.24277 6.28722L5.22727 8.27247C5.28073 8.32583 5.34439 8.36788 5.41445 8.39611C5.48452 8.42433 5.55955 8.43816 5.63508 8.43676C5.7106 8.43536 5.78507 8.41876 5.85404 8.38796C5.92301 8.35716 5.98507 8.31278 6.03652 8.25747L9.03052 4.51497C9.13246 4.40796 9.1882 4.26514 9.18568 4.11737C9.18317 3.9696 9.12259 3.82875 9.01706 3.72529C8.91152 3.62182 8.76951 3.56405 8.62171 3.56446C8.47392 3.56486 8.33223 3.62342 8.22727 3.72747Z" />
                  </g>
                </svg> Time duartion 6 months
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 12 12">
                  <g>
                    <path d="M6 11.25C4.60761 11.25 3.27226 10.6969 2.28769 9.71231C1.30312 8.72774 0.75 7.39239 0.75 6C0.75 4.60761 1.30312 3.27226 2.28769 2.28769C3.27226 1.30312 4.60761 0.75 6 0.75C7.39239 0.75 8.72774 1.30312 9.71231 2.28769C10.6969 3.27226 11.25 4.60761 11.25 6C11.25 7.39239 10.6969 8.72774 9.71231 9.71231C8.72774 10.6969 7.39239 11.25 6 11.25ZM6 12C7.5913 12 9.11742 11.3679 10.2426 10.2426C11.3679 9.11742 12 7.5913 12 6C12 4.4087 11.3679 2.88258 10.2426 1.75736C9.11742 0.632141 7.5913 0 6 0C4.4087 0 2.88258 0.632141 1.75736 1.75736C0.632141 2.88258 0 4.4087 0 6C0 7.5913 0.632141 9.11742 1.75736 10.2426C2.88258 11.3679 4.4087 12 6 12Z" />
                    <path d="M8.22727 3.72747C8.22192 3.73264 8.21691 3.73816 8.21227 3.74397L5.60752 7.06272L4.03777 5.49222C3.93113 5.39286 3.7901 5.33876 3.64437 5.34134C3.49865 5.34391 3.35961 5.40294 3.25655 5.506C3.15349 5.60906 3.09446 5.7481 3.09188 5.89382C3.08931 6.03955 3.14341 6.18059 3.24277 6.28722L5.22727 8.27247C5.28073 8.32583 5.34439 8.36788 5.41445 8.39611C5.48452 8.42433 5.55955 8.43816 5.63508 8.43676C5.7106 8.43536 5.78507 8.41876 5.85404 8.38796C5.92301 8.35716 5.98507 8.31278 6.03652 8.25747L9.03052 4.51497C9.13246 4.40796 9.1882 4.26514 9.18568 4.11737C9.18317 3.9696 9.12259 3.82875 9.01706 3.72529C8.91152 3.62182 8.76951 3.56405 8.62171 3.56446C8.47392 3.56486 8.33223 3.62342 8.22727 3.72747Z" />
                  </g>
                </svg> Featured property added
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 12 12">
                  <g>
                    <path d="M6 11.25C4.60761 11.25 3.27226 10.6969 2.28769 9.71231C1.30312 8.72774 0.75 7.39239 0.75 6C0.75 4.60761 1.30312 3.27226 2.28769 2.28769C3.27226 1.30312 4.60761 0.75 6 0.75C7.39239 0.75 8.72774 1.30312 9.71231 2.28769C10.6969 3.27226 11.25 4.60761 11.25 6C11.25 7.39239 10.6969 8.72774 9.71231 9.71231C8.72774 10.6969 7.39239 11.25 6 11.25ZM6 12C7.5913 12 9.11742 11.3679 10.2426 10.2426C11.3679 9.11742 12 7.5913 12 6C12 4.4087 11.3679 2.88258 10.2426 1.75736C9.11742 0.632141 7.5913 0 6 0C4.4087 0 2.88258 0.632141 1.75736 1.75736C0.632141 2.88258 0 4.4087 0 6C0 7.5913 0.632141 9.11742 1.75736 10.2426C2.88258 11.3679 4.4087 12 6 12Z" />
                    <path d="M8.22727 3.72747C8.22192 3.73264 8.21691 3.73816 8.21227 3.74397L5.60752 7.06272L4.03777 5.49222C3.93113 5.39286 3.7901 5.33876 3.64437 5.34134C3.49865 5.34391 3.35961 5.40294 3.25655 5.506C3.15349 5.60906 3.09446 5.7481 3.09188 5.89382C3.08931 6.03955 3.14341 6.18059 3.24277 6.28722L5.22727 8.27247C5.28073 8.32583 5.34439 8.36788 5.41445 8.39611C5.48452 8.42433 5.55955 8.43816 5.63508 8.43676C5.7106 8.43536 5.78507 8.41876 5.85404 8.38796C5.92301 8.35716 5.98507 8.31278 6.03652 8.25747L9.03052 4.51497C9.13246 4.40796 9.1882 4.26514 9.18568 4.11737C9.18317 3.9696 9.12259 3.82875 9.01706 3.72529C8.91152 3.62182 8.76951 3.56405 8.62171 3.56446C8.47392 3.56486 8.33223 3.62342 8.22727 3.72747Z" />
                  </g>
                </svg> List of core advanced 
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 12 12">
                  <g>
                    <path d="M6 11.25C4.60761 11.25 3.27226 10.6969 2.28769 9.71231C1.30312 8.72774 0.75 7.39239 0.75 6C0.75 4.60761 1.30312 3.27226 2.28769 2.28769C3.27226 1.30312 4.60761 0.75 6 0.75C7.39239 0.75 8.72774 1.30312 9.71231 2.28769C10.6969 3.27226 11.25 4.60761 11.25 6C11.25 7.39239 10.6969 8.72774 9.71231 9.71231C8.72774 10.6969 7.39239 11.25 6 11.25ZM6 12C7.5913 12 9.11742 11.3679 10.2426 10.2426C11.3679 9.11742 12 7.5913 12 6C12 4.4087 11.3679 2.88258 10.2426 1.75736C9.11742 0.632141 7.5913 0 6 0C4.4087 0 2.88258 0.632141 1.75736 1.75736C0.632141 2.88258 0 4.4087 0 6C0 7.5913 0.632141 9.11742 1.75736 10.2426C2.88258 11.3679 4.4087 12 6 12Z" />
                    <path d="M8.22727 3.72747C8.22192 3.73264 8.21691 3.73816 8.21227 3.74397L5.60752 7.06272L4.03777 5.49222C3.93113 5.39286 3.7901 5.33876 3.64437 5.34134C3.49865 5.34391 3.35961 5.40294 3.25655 5.506C3.15349 5.60906 3.09446 5.7481 3.09188 5.89382C3.08931 6.03955 3.14341 6.18059 3.24277 6.28722L5.22727 8.27247C5.28073 8.32583 5.34439 8.36788 5.41445 8.39611C5.48452 8.42433 5.55955 8.43816 5.63508 8.43676C5.7106 8.43536 5.78507 8.41876 5.85404 8.38796C5.92301 8.35716 5.98507 8.31278 6.03652 8.25747L9.03052 4.51497C9.13246 4.40796 9.1882 4.26514 9.18568 4.11737C9.18317 3.9696 9.12259 3.82875 9.01706 3.72529C8.91152 3.62182 8.76951 3.56405 8.62171 3.56446C8.47392 3.56486 8.33223 3.62342 8.22727 3.72747Z" />
                  </g>
                </svg> 24/7 days support
              </li>
            </ul>
          </div>
          <div className="back-btn">
            <Link legacyBehavior href="/pricing-plan">
              <a>
                <svg xmlns="http://www.w3.org/2000/svg" width={7} height={12} viewBox="0 0 7 12">
                  <path d="M0 6.00006L7 0L2.08264 6.00006L7 12L0 6.00006Z" />
                </svg>
                Go Back
              </a>
            </Link>
          </div>
        </div>
      </div>
      <div className="col-lg-8 p-0">
        <div className="details-form">
          <div className="details-form-title">
            <h4>You Details</h4>
          </div>
          <form>
            <div className="row">
              <div className="col-md-6">
                <div className="form-inner mb-30">
                  <label>Full Name*</label>
                  <input type="text" placeholder="Daniel" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-inner mb-30">
                  <label>Email Address*</label>
                  <input type="email" placeholder="info@gmail.com" />
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-inner mb-50">
                  <label>Phone Number*</label>
                  <input id="phone" type="tel" name="phone" />
                </div>
              </div>
            </div>
          </form>
          <div className="details-form-title">
            <h4>Select Payment Method</h4>
          </div>
          <ul className="payment-options">
            <li className={`paypal ${activeOption === 'paypal' ? 'active' : ''}`}  onClick={() => handleOptionChange('paypal')}>
              <img src="assets/img/inner-page/icon/paypal-logo.svg" alt="" />
              <div className="checked">
                <svg width={7} height={6} viewBox="0 0 7 6" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.9119 0.191292C6.03287 0.0672398 6.19384 -0.00134136 6.36085 1.98831e-05C6.52786 0.00138113 6.68785 0.0725785 6.80705 0.198588C6.92626 0.324598 6.99536 0.495564 6.99977 0.675411C7.00419 0.855259 6.94357 1.02992 6.83071 1.16254L3.4045 5.77827C3.34558 5.84663 3.27448 5.90148 3.19543 5.93956C3.11639 5.97764 3.03102 5.99815 2.94445 5.99988C2.85788 6.00161 2.77187 5.98451 2.69157 5.94961C2.61127 5.91471 2.53832 5.86273 2.4771 5.79677L0.204979 3.34923C0.141704 3.28572 0.0909531 3.20913 0.0557533 3.12403C0.0205534 3.03893 0.00162595 2.94707 0.000100227 2.85392C-0.0014255 2.76077 0.0144818 2.66824 0.0468729 2.58186C0.0792639 2.49547 0.127475 2.417 0.188631 2.35112C0.249787 2.28525 0.322633 2.23331 0.402826 2.19842C0.483018 2.16353 0.568913 2.14639 0.655387 2.14804C0.741861 2.14968 0.827141 2.17007 0.906141 2.20799C0.985141 2.24591 1.05624 2.30057 1.1152 2.36873L2.91332 4.30475L5.89559 0.211642C5.90096 0.204521 5.90583 0.197726 5.9119 0.191292Z" />
                </svg>
              </div>
            </li>
            <li className={`card-payment ${activeOption === 'stripe' ? 'active' : ''}`} onClick={() => handleOptionChange('stripe')}>
              Stripe
              <div className="checked">
                <svg width={7} height={6} viewBox="0 0 7 6" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.9119 0.191292C6.03287 0.0672398 6.19384 -0.00134136 6.36085 1.98831e-05C6.52786 0.00138113 6.68785 0.0725785 6.80705 0.198588C6.92626 0.324598 6.99536 0.495564 6.99977 0.675411C7.00419 0.855259 6.94357 1.02992 6.83071 1.16254L3.4045 5.77827C3.34558 5.84663 3.27448 5.90148 3.19543 5.93956C3.11639 5.97764 3.03102 5.99815 2.94445 5.99988C2.85788 6.00161 2.77187 5.98451 2.69157 5.94961C2.61127 5.91471 2.53832 5.86273 2.4771 5.79677L0.204979 3.34923C0.141704 3.28572 0.0909531 3.20913 0.0557533 3.12403C0.0205534 3.03893 0.00162595 2.94707 0.000100227 2.85392C-0.0014255 2.76077 0.0144818 2.66824 0.0468729 2.58186C0.0792639 2.49547 0.127475 2.417 0.188631 2.35112C0.249787 2.28525 0.322633 2.23331 0.402826 2.19842C0.483018 2.16353 0.568913 2.14639 0.655387 2.14804C0.741861 2.14968 0.827141 2.17007 0.906141 2.20799C0.985141 2.24591 1.05624 2.30057 1.1152 2.36873L2.91332 4.30475L5.89559 0.211642C5.90096 0.204521 5.90583 0.197726 5.9119 0.191292Z" />
                </svg>
              </div>
            </li>
            <li className={`cash-on-delivery ${activeOption === 'cashOn' ? 'active' : ''}`} onClick={() => handleOptionChange('cashOn')}>
              Cash on delivery
              <div className="checked">
                <svg width={7} height={6} viewBox="0 0 7 6" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.9119 0.191292C6.03287 0.0672398 6.19384 -0.00134136 6.36085 1.98831e-05C6.52786 0.00138113 6.68785 0.0725785 6.80705 0.198588C6.92626 0.324598 6.99536 0.495564 6.99977 0.675411C7.00419 0.855259 6.94357 1.02992 6.83071 1.16254L3.4045 5.77827C3.34558 5.84663 3.27448 5.90148 3.19543 5.93956C3.11639 5.97764 3.03102 5.99815 2.94445 5.99988C2.85788 6.00161 2.77187 5.98451 2.69157 5.94961C2.61127 5.91471 2.53832 5.86273 2.4771 5.79677L0.204979 3.34923C0.141704 3.28572 0.0909531 3.20913 0.0557533 3.12403C0.0205534 3.03893 0.00162595 2.94707 0.000100227 2.85392C-0.0014255 2.76077 0.0144818 2.66824 0.0468729 2.58186C0.0792639 2.49547 0.127475 2.417 0.188631 2.35112C0.249787 2.28525 0.322633 2.23331 0.402826 2.19842C0.483018 2.16353 0.568913 2.14639 0.655387 2.14804C0.741861 2.14968 0.827141 2.17007 0.906141 2.20799C0.985141 2.24591 1.05624 2.30057 1.1152 2.36873L2.91332 4.30475L5.89559 0.211642C5.90096 0.204521 5.90583 0.197726 5.9119 0.191292Z" />
                </svg>
              </div>
            </li>
          </ul>
          <div className="payment-form" id="card-payment" style={{ display: activeOption === 'stripe' ? 'block' : 'none' }}>
            <form>
              <div className="row">
                <div className="col-lg-12">
                  <div className="form-inner mb-30">
                    <label>Card Number*</label>
                    <div className="card-number-input">
                      <input type="text" placeholder="143 323 454 5325" />
                      <img src="assets/img/inner-page/icon/card-icons.svg" alt="" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-inner mb-30">
                    <label>Expiration Date*</label>
                    <input type="text" placeholder="mm/dd/yy " />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-inner mb-30">
                    <label>CVC*</label>
                    <input type="text" placeholder={3455} />
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="form-inner mb-50">
            <label className="containerss">
              <input type="checkbox" />
              <span className="checkmark" />
              <span className="text">I have read &amp; agree to the ‘ terms &amp; conditons ‘</span>
            </label>
          </div>
          <div className="form-inner">
            <button type="submit" className="primary-btn3" data-bs-toggle="modal" data-bs-target="#thankyouModal">Pay Now</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

     <Footer/> 
    </>
  )
}

export default Page
