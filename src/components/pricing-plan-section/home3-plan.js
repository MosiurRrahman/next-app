"use client"
import SelectComponent from '@/utils/SelectComponent'
import Link from 'next/link'
import React, { useEffect, useMemo, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";
SwiperCore.use([Autoplay, EffectFade, Navigation, Pagination]);
const Home3Plan = () => {
    const settings = useMemo(() => {
        return {
            slidesPerView: 1,
            speed: 2000,
            spaceBetween: 25,
            autoplay: {
            	delay: 2500, // Autoplay duration in milliseconds
            	disableOnInteraction: false,
            },
            navigation: {
              nextEl: ".next-5",
              prevEl: ".prev-5",
            },
        };
      }, []);
  return (
    <>
       <div className="home3-pricing-plan-section">
    <div className="container-lg container-fluid">
      <div className="row mb-60">
        <div className="col-lg-4">
          <div className="sub-title2 dark text-animation">
            <h6>Pricing Plan</h6>
          </div>
        </div>
        <div className="col-lg-8">
          <div className="section-title text-animation white text-animation">
            <h2>Flexible Pricing Plan</h2>
            <div className="dash-and-paragraph">
              <div className="dash" />
              <p>The specific goals of a marketing agency can vary depending on the client's
                needs, industry.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="row g-4">
        <div className="col-lg-4">
          <div className="pricing-contact-wrap">
            <svg className="vectors" xmlns="http://www.w3.org/2000/svg" width={172} height={208} viewBox="0 0 172 208" fill="none">
              <path d="M167.91 109.077L217.631 158.625L189.625 186.631L140.077 136.91L139.223 136.053V137.263V207.5H99.7769V137.263V136.056L98.9234 136.909L49.2018 186.631L21.3675 158.626L71.0899 109.077L71.9471 108.223H70.737H0.5V68.7769H70.737H71.9441L71.0906 67.9234L21.3679 18.2007L49.2007 -9.63209L98.9234 40.0906L99.7769 40.9441V39.737V-30.5H139.223V39.737V40.9471L140.077 40.0899L189.626 -9.63255L217.631 18.2018L167.909 67.9234L167.056 68.7769H168.263H238.5V108.223H168.263H167.053L167.91 109.077Z" />
            </svg>
            <div className="pricing-contact-top">
              <div className="icon">
                <img src="assets/img/home3/icon/contact-icon.svg" alt="" />
              </div>
              <div className="pricing-contact-title">
                <h3>Have any
                  question?</h3>
              </div>
            </div>
            <div className="pricing-contact-btn ">
              <Link className="btn-hover" href="/contact"><svg xmlns="http://www.w3.org/2000/svg" width={14} height={14} viewBox="0 0 14 14">
                  <path d="M12.25 0.875C12.4821 0.875 12.7046 0.967187 12.8687 1.13128C13.0328 1.29538 13.125 1.51794 13.125 1.75V8.75C13.125 8.98206 13.0328 9.20462 12.8687 9.36872C12.7046 9.53281 12.4821 9.625 12.25 9.625H3.86225C3.39816 9.6251 2.95311 9.80954 2.625 10.1378L0.875 11.8878V1.75C0.875 1.51794 0.967187 1.29538 1.13128 1.13128C1.29538 0.967187 1.51794 0.875 1.75 0.875H12.25ZM1.75 0C1.28587 0 0.840752 0.184374 0.512563 0.512563C0.184374 0.840752 0 1.28587 0 1.75L0 12.9439C1.8388e-05 13.0304 0.0257185 13.1151 0.0738476 13.187C0.121977 13.259 0.190371 13.315 0.270374 13.3481C0.350378 13.3812 0.438393 13.3898 0.523282 13.3728C0.60817 13.3558 0.686114 13.314 0.74725 13.2528L3.24362 10.7564C3.40768 10.5923 3.6302 10.5 3.86225 10.5H12.25C12.7141 10.5 13.1592 10.3156 13.4874 9.98744C13.8156 9.65925 14 9.21413 14 8.75V1.75C14 1.28587 13.8156 0.840752 13.4874 0.512563C13.1592 0.184374 12.7141 0 12.25 0L1.75 0Z" />
                  <path d="M2.625 3.0625C2.625 2.94647 2.67109 2.83519 2.75314 2.75314C2.83519 2.67109 2.94647 2.625 3.0625 2.625H10.9375C11.0535 2.625 11.1648 2.67109 11.2469 2.75314C11.3289 2.83519 11.375 2.94647 11.375 3.0625C11.375 3.17853 11.3289 3.28981 11.2469 3.37186C11.1648 3.45391 11.0535 3.5 10.9375 3.5H3.0625C2.94647 3.5 2.83519 3.45391 2.75314 3.37186C2.67109 3.28981 2.625 3.17853 2.625 3.0625ZM2.625 5.25C2.625 5.13397 2.67109 5.02269 2.75314 4.94064C2.83519 4.85859 2.94647 4.8125 3.0625 4.8125H10.9375C11.0535 4.8125 11.1648 4.85859 11.2469 4.94064C11.3289 5.02269 11.375 5.13397 11.375 5.25C11.375 5.36603 11.3289 5.47731 11.2469 5.55936C11.1648 5.64141 11.0535 5.6875 10.9375 5.6875H3.0625C2.94647 5.6875 2.83519 5.64141 2.75314 5.55936C2.67109 5.47731 2.625 5.36603 2.625 5.25ZM2.625 7.4375C2.625 7.32147 2.67109 7.21019 2.75314 7.12814C2.83519 7.04609 2.94647 7 3.0625 7H7.4375C7.55353 7 7.66481 7.04609 7.74686 7.12814C7.82891 7.21019 7.875 7.32147 7.875 7.4375C7.875 7.55353 7.82891 7.66481 7.74686 7.74686C7.66481 7.82891 7.55353 7.875 7.4375 7.875H3.0625C2.94647 7.875 2.83519 7.82891 2.75314 7.74686C2.67109 7.66481 2.625 7.55353 2.625 7.4375Z" />
                </svg> Let’s Talk
                <span style={{top: '50.5px', left: '83.75px'}} /> 
                </Link>
            </div>
          </div>
        </div>
        <div className="col-lg-8">
          <Swiper {...settings} className="swiper home3-pricing-slider">
            <div className="swiper-wrapper">
              <SwiperSlide className="swiper-slide">
                <div className="pricing-wrapper">
                  <div className="pricing-title-and-subscription-duration">
                    <h3>Standard</h3>
                    <div className="subscription-duration">
                      <h6>Monthly</h6>
                      <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Yearly
                          <span>(-20%
                            Save)</span></label>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-5 order-md-1 order-2">
                      <div className="include-features">
                        <h6>What’s Included :</h6>
                        <ul>
                          <li><svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 12 12">
                              <path d="M6 11.25C4.60761 11.25 3.27226 10.6969 2.28769 9.71231C1.30312 8.72774 0.75 7.39239 0.75 6C0.75 4.60761 1.30312 3.27226 2.28769 2.28769C3.27226 1.30312 4.60761 0.75 6 0.75C7.39239 0.75 8.72774 1.30312 9.71231 2.28769C10.6969 3.27226 11.25 4.60761 11.25 6C11.25 7.39239 10.6969 8.72774 9.71231 9.71231C8.72774 10.6969 7.39239 11.25 6 11.25ZM6 12C7.5913 12 9.11742 11.3679 10.2426 10.2426C11.3679 9.11742 12 7.5913 12 6C12 4.4087 11.3679 2.88258 10.2426 1.75736C9.11742 0.632141 7.5913 0 6 0C4.4087 0 2.88258 0.632141 1.75736 1.75736C0.632141 2.88258 0 4.4087 0 6C0 7.5913 0.632141 9.11742 1.75736 10.2426C2.88258 11.3679 4.4087 12 6 12Z" />
                              <path d="M8.22727 3.72747C8.22192 3.73264 8.21691 3.73816 8.21227 3.74397L5.60752 7.06272L4.03777 5.49222C3.93113 5.39286 3.7901 5.33876 3.64437 5.34134C3.49865 5.34391 3.35961 5.40294 3.25655 5.506C3.15349 5.60906 3.09446 5.7481 3.09188 5.89382C3.08931 6.03955 3.14341 6.18059 3.24277 6.28722L5.22727 8.27247C5.28073 8.32583 5.34439 8.36788 5.41445 8.39611C5.48452 8.42433 5.55955 8.43816 5.63508 8.43676C5.7106 8.43536 5.78507 8.41876 5.85404 8.38796C5.92301 8.35716 5.98507 8.31278 6.03652 8.25747L9.03052 4.51497C9.13246 4.40796 9.1882 4.26514 9.18568 4.11737C9.18317 3.9696 9.12259 3.82875 9.01706 3.72529C8.91152 3.62182 8.76951 3.56405 8.62171 3.56446C8.47392 3.56486 8.33223 3.62342 8.22727 3.72747Z" />
                            </svg> Initial Consultation</li>
                          <li><svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 12 12">
                              <path d="M6 11.25C4.60761 11.25 3.27226 10.6969 2.28769 9.71231C1.30312 8.72774 0.75 7.39239 0.75 6C0.75 4.60761 1.30312 3.27226 2.28769 2.28769C3.27226 1.30312 4.60761 0.75 6 0.75C7.39239 0.75 8.72774 1.30312 9.71231 2.28769C10.6969 3.27226 11.25 4.60761 11.25 6C11.25 7.39239 10.6969 8.72774 9.71231 9.71231C8.72774 10.6969 7.39239 11.25 6 11.25ZM6 12C7.5913 12 9.11742 11.3679 10.2426 10.2426C11.3679 9.11742 12 7.5913 12 6C12 4.4087 11.3679 2.88258 10.2426 1.75736C9.11742 0.632141 7.5913 0 6 0C4.4087 0 2.88258 0.632141 1.75736 1.75736C0.632141 2.88258 0 4.4087 0 6C0 7.5913 0.632141 9.11742 1.75736 10.2426C2.88258 11.3679 4.4087 12 6 12Z" />
                              <path d="M8.22727 3.72747C8.22192 3.73264 8.21691 3.73816 8.21227 3.74397L5.60752 7.06272L4.03777 5.49222C3.93113 5.39286 3.7901 5.33876 3.64437 5.34134C3.49865 5.34391 3.35961 5.40294 3.25655 5.506C3.15349 5.60906 3.09446 5.7481 3.09188 5.89382C3.08931 6.03955 3.14341 6.18059 3.24277 6.28722L5.22727 8.27247C5.28073 8.32583 5.34439 8.36788 5.41445 8.39611C5.48452 8.42433 5.55955 8.43816 5.63508 8.43676C5.7106 8.43536 5.78507 8.41876 5.85404 8.38796C5.92301 8.35716 5.98507 8.31278 6.03652 8.25747L9.03052 4.51497C9.13246 4.40796 9.1882 4.26514 9.18568 4.11737C9.18317 3.9696 9.12259 3.82875 9.01706 3.72529C8.91152 3.62182 8.76951 3.56405 8.62171 3.56446C8.47392 3.56486 8.33223 3.62342 8.22727 3.72747Z" />
                            </svg> Market Research</li>
                          <li><svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 12 12">
                              <path d="M6 11.25C4.60761 11.25 3.27226 10.6969 2.28769 9.71231C1.30312 8.72774 0.75 7.39239 0.75 6C0.75 4.60761 1.30312 3.27226 2.28769 2.28769C3.27226 1.30312 4.60761 0.75 6 0.75C7.39239 0.75 8.72774 1.30312 9.71231 2.28769C10.6969 3.27226 11.25 4.60761 11.25 6C11.25 7.39239 10.6969 8.72774 9.71231 9.71231C8.72774 10.6969 7.39239 11.25 6 11.25ZM6 12C7.5913 12 9.11742 11.3679 10.2426 10.2426C11.3679 9.11742 12 7.5913 12 6C12 4.4087 11.3679 2.88258 10.2426 1.75736C9.11742 0.632141 7.5913 0 6 0C4.4087 0 2.88258 0.632141 1.75736 1.75736C0.632141 2.88258 0 4.4087 0 6C0 7.5913 0.632141 9.11742 1.75736 10.2426C2.88258 11.3679 4.4087 12 6 12Z" />
                              <path d="M8.22727 3.72747C8.22192 3.73264 8.21691 3.73816 8.21227 3.74397L5.60752 7.06272L4.03777 5.49222C3.93113 5.39286 3.7901 5.33876 3.64437 5.34134C3.49865 5.34391 3.35961 5.40294 3.25655 5.506C3.15349 5.60906 3.09446 5.7481 3.09188 5.89382C3.08931 6.03955 3.14341 6.18059 3.24277 6.28722L5.22727 8.27247C5.28073 8.32583 5.34439 8.36788 5.41445 8.39611C5.48452 8.42433 5.55955 8.43816 5.63508 8.43676C5.7106 8.43536 5.78507 8.41876 5.85404 8.38796C5.92301 8.35716 5.98507 8.31278 6.03652 8.25747L9.03052 4.51497C9.13246 4.40796 9.1882 4.26514 9.18568 4.11737C9.18317 3.9696 9.12259 3.82875 9.01706 3.72529C8.91152 3.62182 8.76951 3.56405 8.62171 3.56446C8.47392 3.56486 8.33223 3.62342 8.22727 3.72747Z" />
                            </svg> Strategy Development</li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-md-7 order-md-2 order-1">
                      <div className="pricing-right">
                        <div className="custom-duration">
                          <label>Select your package duration</label>
                         <SelectComponent options={["01 month","02 month","03 month","04 month"]} placeholder={"Select Month"}/>
                        </div>
                        <div className="price">
                          <h2>$456 <span>/ per month</span></h2>
                        </div>
                        <Link href="/pricing" className="primary-btn3 btn-hover">
                          <svg xmlns="http://www.w3.org/2000/svg" width={14} height={14} viewBox="0 0 14 14">
                            <path d="M1.82326 6.42493C4.49302 5.27479 6.44651 2.87535 6.98915 0C7.53178 2.87535 9.48527 5.27479 12.1767 6.42493C12.6977 6.64306 14 7 14 7C14 7 12.6977 7.35694 12.1767 7.57507C9.50698 8.74504 7.55349 11.1246 6.98915 14C6.44651 11.1445 4.49302 8.74504 1.82326 7.5949C1.30233 7.35694 0 7.01983 0 7.01983C0 7.01983 1.30233 6.66289 1.82326 6.42493Z">
                            </path>
                          </svg>
                          Buy Now
                          <span style={{top: '50.5px', left: '83.75px'}} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="pricing-wrapper">
                  <div className="pricing-title-and-subscription-duration">
                    <h3>Premium Plan</h3>
                    <div className="subscription-duration">
                      <h6>Monthly</h6>
                      <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault2" />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault2">Yearly
                          <span>(-20%
                            Save)</span></label>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-5 order-md-1 order-2">
                      <div className="include-features">
                        <h6>What’s Included :</h6>
                        <ul>
                          <li><svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 12 12">
                              <path d="M6 11.25C4.60761 11.25 3.27226 10.6969 2.28769 9.71231C1.30312 8.72774 0.75 7.39239 0.75 6C0.75 4.60761 1.30312 3.27226 2.28769 2.28769C3.27226 1.30312 4.60761 0.75 6 0.75C7.39239 0.75 8.72774 1.30312 9.71231 2.28769C10.6969 3.27226 11.25 4.60761 11.25 6C11.25 7.39239 10.6969 8.72774 9.71231 9.71231C8.72774 10.6969 7.39239 11.25 6 11.25ZM6 12C7.5913 12 9.11742 11.3679 10.2426 10.2426C11.3679 9.11742 12 7.5913 12 6C12 4.4087 11.3679 2.88258 10.2426 1.75736C9.11742 0.632141 7.5913 0 6 0C4.4087 0 2.88258 0.632141 1.75736 1.75736C0.632141 2.88258 0 4.4087 0 6C0 7.5913 0.632141 9.11742 1.75736 10.2426C2.88258 11.3679 4.4087 12 6 12Z" />
                              <path d="M8.22727 3.72747C8.22192 3.73264 8.21691 3.73816 8.21227 3.74397L5.60752 7.06272L4.03777 5.49222C3.93113 5.39286 3.7901 5.33876 3.64437 5.34134C3.49865 5.34391 3.35961 5.40294 3.25655 5.506C3.15349 5.60906 3.09446 5.7481 3.09188 5.89382C3.08931 6.03955 3.14341 6.18059 3.24277 6.28722L5.22727 8.27247C5.28073 8.32583 5.34439 8.36788 5.41445 8.39611C5.48452 8.42433 5.55955 8.43816 5.63508 8.43676C5.7106 8.43536 5.78507 8.41876 5.85404 8.38796C5.92301 8.35716 5.98507 8.31278 6.03652 8.25747L9.03052 4.51497C9.13246 4.40796 9.1882 4.26514 9.18568 4.11737C9.18317 3.9696 9.12259 3.82875 9.01706 3.72529C8.91152 3.62182 8.76951 3.56405 8.62171 3.56446C8.47392 3.56486 8.33223 3.62342 8.22727 3.72747Z" />
                            </svg> Dedicated Account Manager </li>
                          <li><svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 12 12">
                              <path d="M6 11.25C4.60761 11.25 3.27226 10.6969 2.28769 9.71231C1.30312 8.72774 0.75 7.39239 0.75 6C0.75 4.60761 1.30312 3.27226 2.28769 2.28769C3.27226 1.30312 4.60761 0.75 6 0.75C7.39239 0.75 8.72774 1.30312 9.71231 2.28769C10.6969 3.27226 11.25 4.60761 11.25 6C11.25 7.39239 10.6969 8.72774 9.71231 9.71231C8.72774 10.6969 7.39239 11.25 6 11.25ZM6 12C7.5913 12 9.11742 11.3679 10.2426 10.2426C11.3679 9.11742 12 7.5913 12 6C12 4.4087 11.3679 2.88258 10.2426 1.75736C9.11742 0.632141 7.5913 0 6 0C4.4087 0 2.88258 0.632141 1.75736 1.75736C0.632141 2.88258 0 4.4087 0 6C0 7.5913 0.632141 9.11742 1.75736 10.2426C2.88258 11.3679 4.4087 12 6 12Z" />
                              <path d="M8.22727 3.72747C8.22192 3.73264 8.21691 3.73816 8.21227 3.74397L5.60752 7.06272L4.03777 5.49222C3.93113 5.39286 3.7901 5.33876 3.64437 5.34134C3.49865 5.34391 3.35961 5.40294 3.25655 5.506C3.15349 5.60906 3.09446 5.7481 3.09188 5.89382C3.08931 6.03955 3.14341 6.18059 3.24277 6.28722L5.22727 8.27247C5.28073 8.32583 5.34439 8.36788 5.41445 8.39611C5.48452 8.42433 5.55955 8.43816 5.63508 8.43676C5.7106 8.43536 5.78507 8.41876 5.85404 8.38796C5.92301 8.35716 5.98507 8.31278 6.03652 8.25747L9.03052 4.51497C9.13246 4.40796 9.1882 4.26514 9.18568 4.11737C9.18317 3.9696 9.12259 3.82875 9.01706 3.72529C8.91152 3.62182 8.76951 3.56405 8.62171 3.56446C8.47392 3.56486 8.33223 3.62342 8.22727 3.72747Z" />
                            </svg> Advanced Market Research</li>
                          <li><svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 12 12">
                              <path d="M6 11.25C4.60761 11.25 3.27226 10.6969 2.28769 9.71231C1.30312 8.72774 0.75 7.39239 0.75 6C0.75 4.60761 1.30312 3.27226 2.28769 2.28769C3.27226 1.30312 4.60761 0.75 6 0.75C7.39239 0.75 8.72774 1.30312 9.71231 2.28769C10.6969 3.27226 11.25 4.60761 11.25 6C11.25 7.39239 10.6969 8.72774 9.71231 9.71231C8.72774 10.6969 7.39239 11.25 6 11.25ZM6 12C7.5913 12 9.11742 11.3679 10.2426 10.2426C11.3679 9.11742 12 7.5913 12 6C12 4.4087 11.3679 2.88258 10.2426 1.75736C9.11742 0.632141 7.5913 0 6 0C4.4087 0 2.88258 0.632141 1.75736 1.75736C0.632141 2.88258 0 4.4087 0 6C0 7.5913 0.632141 9.11742 1.75736 10.2426C2.88258 11.3679 4.4087 12 6 12Z" />
                              <path d="M8.22727 3.72747C8.22192 3.73264 8.21691 3.73816 8.21227 3.74397L5.60752 7.06272L4.03777 5.49222C3.93113 5.39286 3.7901 5.33876 3.64437 5.34134C3.49865 5.34391 3.35961 5.40294 3.25655 5.506C3.15349 5.60906 3.09446 5.7481 3.09188 5.89382C3.08931 6.03955 3.14341 6.18059 3.24277 6.28722L5.22727 8.27247C5.28073 8.32583 5.34439 8.36788 5.41445 8.39611C5.48452 8.42433 5.55955 8.43816 5.63508 8.43676C5.7106 8.43536 5.78507 8.41876 5.85404 8.38796C5.92301 8.35716 5.98507 8.31278 6.03652 8.25747L9.03052 4.51497C9.13246 4.40796 9.1882 4.26514 9.18568 4.11737C9.18317 3.9696 9.12259 3.82875 9.01706 3.72529C8.91152 3.62182 8.76951 3.56405 8.62171 3.56446C8.47392 3.56486 8.33223 3.62342 8.22727 3.72747Z" />
                            </svg> Customized Marketing Strategy</li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-md-7 order-md-2 order-1">
                      <div className="pricing-right">
                        <div className="custom-duration">
                          <label>Select your package duration</label>
                          <SelectComponent options={["01 month","02 month","03 month","04 month"]} placeholder={"Select Month"}/>
                        </div>
                        <div className="price">
                          <h2>$550 <span>/ per month</span></h2>
                        </div>
                        <Link href="/pricing" className="primary-btn3 btn-hover">
                          <svg xmlns="http://www.w3.org/2000/svg" width={14} height={14} viewBox="0 0 14 14">
                            <path d="M1.82326 6.42493C4.49302 5.27479 6.44651 2.87535 6.98915 0C7.53178 2.87535 9.48527 5.27479 12.1767 6.42493C12.6977 6.64306 14 7 14 7C14 7 12.6977 7.35694 12.1767 7.57507C9.50698 8.74504 7.55349 11.1246 6.98915 14C6.44651 11.1445 4.49302 8.74504 1.82326 7.5949C1.30233 7.35694 0 7.01983 0 7.01983C0 7.01983 1.30233 6.66289 1.82326 6.42493Z">
                            </path>
                          </svg>
                          Buy Now
                          <span style={{top: '50.5px', left: '83.75px'}} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="pricing-wrapper">
                  <div className="pricing-title-and-subscription-duration">
                    <h3>Business Plan</h3>
                    <div className="subscription-duration">
                      <h6>Monthly</h6>
                      <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault3" />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault3">Yearly
                          <span>(-20%
                            Save)</span></label>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-5 order-md-1 order-2">
                      <div className="include-features">
                        <h6>What’s Included :</h6>
                        <ul>
                          <li><svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 12 12">
                              <path d="M6 11.25C4.60761 11.25 3.27226 10.6969 2.28769 9.71231C1.30312 8.72774 0.75 7.39239 0.75 6C0.75 4.60761 1.30312 3.27226 2.28769 2.28769C3.27226 1.30312 4.60761 0.75 6 0.75C7.39239 0.75 8.72774 1.30312 9.71231 2.28769C10.6969 3.27226 11.25 4.60761 11.25 6C11.25 7.39239 10.6969 8.72774 9.71231 9.71231C8.72774 10.6969 7.39239 11.25 6 11.25ZM6 12C7.5913 12 9.11742 11.3679 10.2426 10.2426C11.3679 9.11742 12 7.5913 12 6C12 4.4087 11.3679 2.88258 10.2426 1.75736C9.11742 0.632141 7.5913 0 6 0C4.4087 0 2.88258 0.632141 1.75736 1.75736C0.632141 2.88258 0 4.4087 0 6C0 7.5913 0.632141 9.11742 1.75736 10.2426C2.88258 11.3679 4.4087 12 6 12Z" />
                              <path d="M8.22727 3.72747C8.22192 3.73264 8.21691 3.73816 8.21227 3.74397L5.60752 7.06272L4.03777 5.49222C3.93113 5.39286 3.7901 5.33876 3.64437 5.34134C3.49865 5.34391 3.35961 5.40294 3.25655 5.506C3.15349 5.60906 3.09446 5.7481 3.09188 5.89382C3.08931 6.03955 3.14341 6.18059 3.24277 6.28722L5.22727 8.27247C5.28073 8.32583 5.34439 8.36788 5.41445 8.39611C5.48452 8.42433 5.55955 8.43816 5.63508 8.43676C5.7106 8.43536 5.78507 8.41876 5.85404 8.38796C5.92301 8.35716 5.98507 8.31278 6.03652 8.25747L9.03052 4.51497C9.13246 4.40796 9.1882 4.26514 9.18568 4.11737C9.18317 3.9696 9.12259 3.82875 9.01706 3.72529C8.91152 3.62182 8.76951 3.56405 8.62171 3.56446C8.47392 3.56486 8.33223 3.62342 8.22727 3.72747Z" />
                            </svg> Service Packages</li>
                          <li><svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 12 12">
                              <path d="M6 11.25C4.60761 11.25 3.27226 10.6969 2.28769 9.71231C1.30312 8.72774 0.75 7.39239 0.75 6C0.75 4.60761 1.30312 3.27226 2.28769 2.28769C3.27226 1.30312 4.60761 0.75 6 0.75C7.39239 0.75 8.72774 1.30312 9.71231 2.28769C10.6969 3.27226 11.25 4.60761 11.25 6C11.25 7.39239 10.6969 8.72774 9.71231 9.71231C8.72774 10.6969 7.39239 11.25 6 11.25ZM6 12C7.5913 12 9.11742 11.3679 10.2426 10.2426C11.3679 9.11742 12 7.5913 12 6C12 4.4087 11.3679 2.88258 10.2426 1.75736C9.11742 0.632141 7.5913 0 6 0C4.4087 0 2.88258 0.632141 1.75736 1.75736C0.632141 2.88258 0 4.4087 0 6C0 7.5913 0.632141 9.11742 1.75736 10.2426C2.88258 11.3679 4.4087 12 6 12Z" />
                              <path d="M8.22727 3.72747C8.22192 3.73264 8.21691 3.73816 8.21227 3.74397L5.60752 7.06272L4.03777 5.49222C3.93113 5.39286 3.7901 5.33876 3.64437 5.34134C3.49865 5.34391 3.35961 5.40294 3.25655 5.506C3.15349 5.60906 3.09446 5.7481 3.09188 5.89382C3.08931 6.03955 3.14341 6.18059 3.24277 6.28722L5.22727 8.27247C5.28073 8.32583 5.34439 8.36788 5.41445 8.39611C5.48452 8.42433 5.55955 8.43816 5.63508 8.43676C5.7106 8.43536 5.78507 8.41876 5.85404 8.38796C5.92301 8.35716 5.98507 8.31278 6.03652 8.25747L9.03052 4.51497C9.13246 4.40796 9.1882 4.26514 9.18568 4.11737C9.18317 3.9696 9.12259 3.82875 9.01706 3.72529C8.91152 3.62182 8.76951 3.56405 8.62171 3.56446C8.47392 3.56486 8.33223 3.62342 8.22727 3.72747Z" />
                            </svg> Pricing Tiers</li>
                          <li><svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 12 12">
                              <path d="M6 11.25C4.60761 11.25 3.27226 10.6969 2.28769 9.71231C1.30312 8.72774 0.75 7.39239 0.75 6C0.75 4.60761 1.30312 3.27226 2.28769 2.28769C3.27226 1.30312 4.60761 0.75 6 0.75C7.39239 0.75 8.72774 1.30312 9.71231 2.28769C10.6969 3.27226 11.25 4.60761 11.25 6C11.25 7.39239 10.6969 8.72774 9.71231 9.71231C8.72774 10.6969 7.39239 11.25 6 11.25ZM6 12C7.5913 12 9.11742 11.3679 10.2426 10.2426C11.3679 9.11742 12 7.5913 12 6C12 4.4087 11.3679 2.88258 10.2426 1.75736C9.11742 0.632141 7.5913 0 6 0C4.4087 0 2.88258 0.632141 1.75736 1.75736C0.632141 2.88258 0 4.4087 0 6C0 7.5913 0.632141 9.11742 1.75736 10.2426C2.88258 11.3679 4.4087 12 6 12Z" />
                              <path d="M8.22727 3.72747C8.22192 3.73264 8.21691 3.73816 8.21227 3.74397L5.60752 7.06272L4.03777 5.49222C3.93113 5.39286 3.7901 5.33876 3.64437 5.34134C3.49865 5.34391 3.35961 5.40294 3.25655 5.506C3.15349 5.60906 3.09446 5.7481 3.09188 5.89382C3.08931 6.03955 3.14341 6.18059 3.24277 6.28722L5.22727 8.27247C5.28073 8.32583 5.34439 8.36788 5.41445 8.39611C5.48452 8.42433 5.55955 8.43816 5.63508 8.43676C5.7106 8.43536 5.78507 8.41876 5.85404 8.38796C5.92301 8.35716 5.98507 8.31278 6.03652 8.25747L9.03052 4.51497C9.13246 4.40796 9.1882 4.26514 9.18568 4.11737C9.18317 3.9696 9.12259 3.82875 9.01706 3.72529C8.91152 3.62182 8.76951 3.56405 8.62171 3.56446C8.47392 3.56486 8.33223 3.62342 8.22727 3.72747Z" />
                            </svg> Hourly Rates</li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-md-7 order-md-2 order-1">
                      <div className="pricing-right">
                        <div className="custom-duration">
                          <label>Select your package duration</label>
                          <SelectComponent options={["01 month","02 month","03 month","04 month"]} placeholder={"Select Month"}/>
                        </div>
                        <div className="price">
                          <h2>$780 <span>/ per month</span></h2>
                        </div>
                        <Link href="/pricing" className="primary-btn3 btn-hover">
                          <svg xmlns="http://www.w3.org/2000/svg" width={14} height={14} viewBox="0 0 14 14">
                            <path d="M1.82326 6.42493C4.49302 5.27479 6.44651 2.87535 6.98915 0C7.53178 2.87535 9.48527 5.27479 12.1767 6.42493C12.6977 6.64306 14 7 14 7C14 7 12.6977 7.35694 12.1767 7.57507C9.50698 8.74504 7.55349 11.1246 6.98915 14C6.44651 11.1445 4.49302 8.74504 1.82326 7.5949C1.30233 7.35694 0 7.01983 0 7.01983C0 7.01983 1.30233 6.66289 1.82326 6.42493Z">
                            </path>
                          </svg>
                          Buy Now
                          <span style={{top: '50.5px', left: '83.75px'}} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </div>
          </Swiper>
        </div>
      </div>
      <div className="row justify-content-end">
        <div className="col-lg-8">
          <div className="slider-btn-area d-flex justify-content-end align-items-start">
            <div className="slider-btn-group w-100">
              <div className="slider-btn prev-5">
                <svg xmlns="http://www.w3.org/2000/svg" width={15} height={11} viewBox="0 0 15 11">
                  <path fillRule="evenodd" clipRule="evenodd" d="M0.416666 5.9668H15V4.7168H0.416666V5.9668Z" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M1.04115 4.7168C3.98115 4.7168 6.38281 7.3018 6.38281 10.0585V10.6835H5.13281V10.0585C5.13281 7.96596 3.26448 5.9668 1.04115 5.9668H0.416979V4.7168H1.04115Z">
                  </path>
                  <path fillRule="evenodd" clipRule="evenodd" d="M1.04115 5.96667C3.98115 5.96667 6.38281 3.38167 6.38281 0.625V0H5.13281V0.625C5.13281 2.71833 3.26448 4.71667 1.04115 4.71667H0.416979V5.96667H1.04115Z">
                  </path>
                </svg>
              </div>
              <div className="slider-btn next-5">
                <svg xmlns="http://www.w3.org/2000/svg" width={15} height={11} viewBox="0 0 15 11">
                  <path fillRule="evenodd" clipRule="evenodd" d="M14.5833 5.9668H0V4.7168H14.5833V5.9668Z" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M13.9589 4.7168C11.0189 4.7168 8.61719 7.3018 8.61719 10.0585V10.6835H9.86719V10.0585C9.86719 7.96596 11.7355 5.9668 13.9589 5.9668H14.583V4.7168H13.9589Z">
                  </path>
                  <path fillRule="evenodd" clipRule="evenodd" d="M13.9589 5.96667C11.0189 5.96667 8.61719 3.38167 8.61719 0.625V0H9.86719V0.625C9.86719 2.71833 11.7355 4.71667 13.9589 4.71667H14.583V5.96667H13.9589Z">
                  </path>
                </svg>
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

export default Home3Plan