import Breadcrumb from '@/components/common/Breadcrumb'
import Footer from '@/components/common/Footer'
import Header from '@/components/common/Header'
import Topbar from '@/components/common/Topbar'
import Link from 'next/link'
import React from 'react'

const Page = () => {
  return (
    <>
     <Topbar/>
     <Header/>
     <Breadcrumb pageName="About" pageTitle="Our Brief History" />
     <div className="home1-about-section pt-100 mb-100">
  <div className="container">
    <div className="row g-lg-4 gy-5">
      <div className="col-lg-5 wow fadeInUp" data-wow-delay="200ms">
        <div className="about-img">
          <img src="/assets/img/home1/home1-about-img.png" alt="" />
        </div>
      </div>
      <div className="col-lg-7">
        <div className="about-content-wrap wow fadeInUp" data-wow-delay="400ms">
          <div className="section-title1">
            <span>(Since-1994)</span>
            <h2>Get To Know About Neckle</h2>
          </div>
          <h6>Welcome to our Neckle! </h6>
          <p>We're thrilled to have you join our community of automotive enthusiasts and professionals. Whether you're a passionate driver, a car owner, or someone who loves all things automotive, you've come to the right place.</p>
          <ul className="about-features">
            <li className="single-features">
              <div className="icon-content">
                <div className="icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width={46} height={43} viewBox="0 0 46 43">
                    <path className="vector" d="M46 38C46 40.7614 43.7614 43 41 43H15L38.5198 39.5156C40.6074 39.2063 42.2761 37.6196 42.69 35.5501L46 19V38Z" />
                    <mask id="mask0_485_12362" style={{maskType: 'alpha'}} maskUnits="userSpaceOnUse" x={10} y={8} width={26} height={26}>
                      <rect x={10} y={8} width={26} height={26} />
                    </mask>
                    <g mask="url(#mask0_485_12362)">
                      <path d="M34.6984 30.4703C34.699 30.4513 34.6993 30.4325 34.6993 30.4138C34.6988 29.9384 34.516 29.4826 34.1911 29.1465C33.8662 28.8103 33.4256 28.6212 32.9661 28.6207V20.3276L34.526 19.1172C34.5802 19.0752 34.6241 19.0206 34.6542 18.9578C34.6843 18.8951 34.6997 18.8259 34.6993 18.7558C34.6989 18.6858 34.6826 18.6168 34.6518 18.5544C34.6209 18.4921 34.5764 18.438 34.5217 18.3967L30.7996 15.5827V10.6897C30.9145 10.6897 31.0247 10.6424 31.106 10.5584C31.1872 10.4743 31.2329 10.3603 31.2329 10.2414V8.44828C31.2329 8.32939 31.1872 8.21536 31.106 8.1313C31.0247 8.04723 30.9145 8 30.7996 8H26.4665C26.3515 8 26.2413 8.04723 26.1601 8.1313C26.0788 8.21536 26.0332 8.32939 26.0332 8.44828V10.2414C26.0332 10.3603 26.0788 10.4743 26.1601 10.5584C26.2413 10.6424 26.3515 10.6897 26.4665 10.6897V12.3069L23.2557 9.87945C23.1814 9.82335 23.0919 9.79312 23 9.79312C22.9081 9.79312 22.8186 9.82335 22.7443 9.87945L11.4783 18.3967C11.4236 18.438 11.3791 18.4921 11.3482 18.5544C11.3174 18.6168 11.3011 18.6858 11.3007 18.7558C11.3003 18.8259 11.3157 18.8951 11.3458 18.9578C11.3759 19.0206 11.4198 19.0752 11.474 19.1172L13.0339 20.3276V28.6207C12.5744 28.6212 12.1338 28.8103 11.8089 29.1465C11.484 29.4826 11.3012 29.9384 11.3007 30.4138C11.3007 30.4325 11.301 30.4513 11.3016 30.4703C10.8929 30.579 10.5365 30.8383 10.2994 31.1996C10.0623 31.5608 9.9607 31.9991 10.0138 32.4323C10.0668 32.8655 10.2708 33.2638 10.5876 33.5524C10.9043 33.841 11.3119 34.0002 11.734 34H34.266C34.6881 34.0002 35.0957 33.841 35.4124 33.5524C35.7292 33.2638 35.9332 32.8655 35.9862 32.4323C36.0393 31.9991 35.9377 31.5608 35.7006 31.1996C35.4635 30.8383 35.1071 30.579 34.6984 30.4703ZM26.8998 8.89655H30.3662V9.7931H26.8998V8.89655ZM27.3331 12.931V10.6897H29.9329V14.9275L27.2921 12.931H27.3331ZM23 10.7966L33.5378 18.7633L32.5288 19.5462L23.2549 12.5685C23.1808 12.5128 23.0916 12.4827 23 12.4827C22.9084 12.4827 22.8192 12.5128 22.7451 12.5685L13.4712 19.5462L12.4622 18.7633L23 10.7966ZM10.8674 32.2069C10.8676 31.9715 10.9572 31.7456 11.1169 31.5779C11.2765 31.4103 11.4935 31.3141 11.721 31.3103H11.722C11.7442 31.3135 11.7663 31.3163 11.7889 31.3178C11.8607 31.3225 11.9325 31.3086 11.9978 31.2774C12.0631 31.2462 12.1199 31.1987 12.1631 31.1391C12.2062 31.0795 12.2343 31.0097 12.2448 30.9361C12.2554 30.8625 12.248 30.7873 12.2235 30.7173C12.1876 30.6204 12.1686 30.5176 12.1673 30.4138C12.1676 30.1761 12.2589 29.9482 12.4214 29.7801C12.5839 29.6121 12.8041 29.5175 13.0339 29.5172V33.1034H11.734C11.5042 33.1032 11.2839 33.0086 11.1215 32.8405C10.959 32.6725 10.8676 32.4446 10.8674 32.2069ZM29.4996 33.1034H24.2999V23.2414H29.4996V33.1034ZM30.3662 33.1034V22.7931C30.3662 22.6742 30.3206 22.5602 30.2393 22.4761C30.1581 22.3921 30.0479 22.3448 29.9329 22.3448H23.8666C23.7517 22.3448 23.6415 22.3921 23.5602 22.4761C23.479 22.5602 23.4333 22.6742 23.4333 22.7931V33.1034H13.9005V20.3317L23 13.4853L32.0995 20.3317V33.1034H30.3662ZM34.266 33.1034H32.9661V29.5172C33.1959 29.5175 33.4161 29.6121 33.5786 29.7801C33.7411 29.9482 33.8324 30.1761 33.8327 30.4138C33.8314 30.5177 33.8124 30.6205 33.7766 30.7176C33.752 30.7875 33.7446 30.8627 33.7552 30.9363C33.7657 31.01 33.7938 31.0797 33.8369 31.1393C33.8801 31.1989 33.9369 31.2464 34.0022 31.2776C34.0675 31.3088 34.1393 31.3227 34.2111 31.318C34.2337 31.3165 34.2558 31.3138 34.278 31.3106H34.279C34.5089 31.3124 34.7286 31.4085 34.8899 31.5779C35.0512 31.7473 35.1409 31.9761 35.1391 32.2138C35.1374 32.4516 35.0445 32.679 34.8807 32.8458C34.717 33.0127 34.4959 33.1055 34.266 33.1037V33.1034Z" />
                      <path d="M21.2663 22.3457H16.0666C15.9517 22.3457 15.8415 22.3929 15.7602 22.477C15.679 22.5611 15.6333 22.6751 15.6333 22.794V29.0698C15.6333 29.1887 15.679 29.3028 15.7602 29.3868C15.8415 29.4709 15.9517 29.5181 16.0666 29.5181H21.2663C21.3812 29.5181 21.4914 29.4709 21.5727 29.3868C21.654 29.3028 21.6996 29.1887 21.6996 29.0698V22.794C21.6996 22.6751 21.654 22.5611 21.5727 22.477C21.4914 22.3929 21.3812 22.3457 21.2663 22.3457ZM20.833 25.4836H19.0998V23.2423H20.833V25.4836ZM18.2332 23.2423V25.4836H16.4999V23.2423H18.2332ZM16.4999 26.3802H18.2332V28.6216H16.4999V26.3802ZM19.0998 28.6216V26.3802H20.833V28.6216H19.0998Z" />
                      <path d="M26.0011 27.8965C26.0927 27.6677 25.9877 27.4055 25.7666 27.3108C25.5455 27.216 25.2921 27.3246 25.2005 27.5534C25.1089 27.7821 25.2139 28.0443 25.435 28.1391C25.6561 28.2338 25.9096 28.1252 26.0011 27.8965Z" />
                    </g>
                    <path className="vector" d="M0 5C0 2.23858 2.23858 0 5 0H31L7.48019 3.48442C5.39257 3.79369 3.72391 5.38043 3.31003 7.44985L0 24V5Z" />
                  </svg>
                </div>
                <div className="content">
                  <h6>Home For Sales</h6>
                  <p>This sector focuses on properties used for residential.</p>
                </div>
              </div>
              <div className="sent-btn">
                <Link legacyBehavior href="/property-list/left-sidebar">
                  <a>
                    <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.1605 0H0.849401C0.626751 0 0.413219 0.0884475 0.255781 0.245885C0.0983438 0.403323 0.00989626 0.616854 0.00989626 0.839505C0.00989626 1.06216 0.0983438 1.27569 0.255781 1.43312C0.413219 1.59056 0.626751 1.67901 0.849401 1.67901H7.13309L0.256291 8.55665C0.17611 8.63409 0.112154 8.72673 0.0681567 8.82915C0.0241591 8.93157 0.00100033 9.04173 3.16969e-05 9.1532C-0.000936937 9.26467 0.020304 9.37522 0.062515 9.47839C0.104726 9.58156 0.167062 9.67529 0.245885 9.75412C0.324709 9.83294 0.418441 9.89527 0.521613 9.93748C0.624785 9.9797 0.735331 10.0009 0.846799 9.99997C0.958268 9.999 1.06843 9.97584 1.17085 9.93184C1.27327 9.88785 1.36591 9.82389 1.44335 9.74371L8.32099 2.86649V9.1506C8.32099 9.37325 8.40944 9.58678 8.56688 9.74422C8.72431 9.90166 8.93785 9.9901 9.1605 9.9901C9.38315 9.9901 9.59668 9.90166 9.75412 9.74422C9.91155 9.58678 10 9.37325 10 9.1506V0.839505C10 0.616854 9.91155 0.403323 9.75412 0.245885C9.59668 0.0884475 9.38315 0 9.1605 0Z" />
                    </svg>
                  </a>
                </Link>
              </div>
            </li>
            <li className="single-features">
              <div className="icon-content">
                <div className="icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width={46} height={43} viewBox="0 0 46 43">
                    <path className="vector" d="M46 38C46 40.7614 43.7614 43 41 43H15L38.5198 39.5156C40.6074 39.2063 42.2761 37.6196 42.69 35.5501L46 19V38Z" />
                    <mask id="mask0_485_1236" style={{maskType: 'alpha'}} maskUnits="userSpaceOnUse" x={10} y={8} width={26} height={26}>
                      <rect x={10} y={8} width={26} height={26} />
                    </mask>
                    <g mask="url(#mask0_485_1236)">
                      <path d="M34.6984 30.4703C34.699 30.4513 34.6993 30.4325 34.6993 30.4138C34.6988 29.9384 34.516 29.4826 34.1911 29.1465C33.8662 28.8103 33.4256 28.6212 32.9661 28.6207V20.3276L34.526 19.1172C34.5802 19.0752 34.6241 19.0206 34.6542 18.9578C34.6843 18.8951 34.6997 18.8259 34.6993 18.7558C34.6989 18.6858 34.6826 18.6168 34.6518 18.5544C34.6209 18.4921 34.5764 18.438 34.5217 18.3967L30.7996 15.5827V10.6897C30.9145 10.6897 31.0247 10.6424 31.106 10.5584C31.1872 10.4743 31.2329 10.3603 31.2329 10.2414V8.44828C31.2329 8.32939 31.1872 8.21536 31.106 8.1313C31.0247 8.04723 30.9145 8 30.7996 8H26.4665C26.3515 8 26.2413 8.04723 26.1601 8.1313C26.0788 8.21536 26.0332 8.32939 26.0332 8.44828V10.2414C26.0332 10.3603 26.0788 10.4743 26.1601 10.5584C26.2413 10.6424 26.3515 10.6897 26.4665 10.6897V12.3069L23.2557 9.87945C23.1814 9.82335 23.0919 9.79312 23 9.79312C22.9081 9.79312 22.8186 9.82335 22.7443 9.87945L11.4783 18.3967C11.4236 18.438 11.3791 18.4921 11.3482 18.5544C11.3174 18.6168 11.3011 18.6858 11.3007 18.7558C11.3003 18.8259 11.3157 18.8951 11.3458 18.9578C11.3759 19.0206 11.4198 19.0752 11.474 19.1172L13.0339 20.3276V28.6207C12.5744 28.6212 12.1338 28.8103 11.8089 29.1465C11.484 29.4826 11.3012 29.9384 11.3007 30.4138C11.3007 30.4325 11.301 30.4513 11.3016 30.4703C10.8929 30.579 10.5365 30.8383 10.2994 31.1996C10.0623 31.5608 9.9607 31.9991 10.0138 32.4323C10.0668 32.8655 10.2708 33.2638 10.5876 33.5524C10.9043 33.841 11.3119 34.0002 11.734 34H34.266C34.6881 34.0002 35.0957 33.841 35.4124 33.5524C35.7292 33.2638 35.9332 32.8655 35.9862 32.4323C36.0393 31.9991 35.9377 31.5608 35.7006 31.1996C35.4635 30.8383 35.1071 30.579 34.6984 30.4703ZM26.8998 8.89655H30.3662V9.7931H26.8998V8.89655ZM27.3331 12.931V10.6897H29.9329V14.9275L27.2921 12.931H27.3331ZM23 10.7966L33.5378 18.7633L32.5288 19.5462L23.2549 12.5685C23.1808 12.5128 23.0916 12.4827 23 12.4827C22.9084 12.4827 22.8192 12.5128 22.7451 12.5685L13.4712 19.5462L12.4622 18.7633L23 10.7966ZM10.8674 32.2069C10.8676 31.9715 10.9572 31.7456 11.1169 31.5779C11.2765 31.4103 11.4935 31.3141 11.721 31.3103H11.722C11.7442 31.3135 11.7663 31.3163 11.7889 31.3178C11.8607 31.3225 11.9325 31.3086 11.9978 31.2774C12.0631 31.2462 12.1199 31.1987 12.1631 31.1391C12.2062 31.0795 12.2343 31.0097 12.2448 30.9361C12.2554 30.8625 12.248 30.7873 12.2235 30.7173C12.1876 30.6204 12.1686 30.5176 12.1673 30.4138C12.1676 30.1761 12.2589 29.9482 12.4214 29.7801C12.5839 29.6121 12.8041 29.5175 13.0339 29.5172V33.1034H11.734C11.5042 33.1032 11.2839 33.0086 11.1215 32.8405C10.959 32.6725 10.8676 32.4446 10.8674 32.2069ZM29.4996 33.1034H24.2999V23.2414H29.4996V33.1034ZM30.3662 33.1034V22.7931C30.3662 22.6742 30.3206 22.5602 30.2393 22.4761C30.1581 22.3921 30.0479 22.3448 29.9329 22.3448H23.8666C23.7517 22.3448 23.6415 22.3921 23.5602 22.4761C23.479 22.5602 23.4333 22.6742 23.4333 22.7931V33.1034H13.9005V20.3317L23 13.4853L32.0995 20.3317V33.1034H30.3662ZM34.266 33.1034H32.9661V29.5172C33.1959 29.5175 33.4161 29.6121 33.5786 29.7801C33.7411 29.9482 33.8324 30.1761 33.8327 30.4138C33.8314 30.5177 33.8124 30.6205 33.7766 30.7176C33.752 30.7875 33.7446 30.8627 33.7552 30.9363C33.7657 31.01 33.7938 31.0797 33.8369 31.1393C33.8801 31.1989 33.9369 31.2464 34.0022 31.2776C34.0675 31.3088 34.1393 31.3227 34.2111 31.318C34.2337 31.3165 34.2558 31.3138 34.278 31.3106H34.279C34.5089 31.3124 34.7286 31.4085 34.8899 31.5779C35.0512 31.7473 35.1409 31.9761 35.1391 32.2138C35.1374 32.4516 35.0445 32.679 34.8807 32.8458C34.717 33.0127 34.4959 33.1055 34.266 33.1037V33.1034Z" />
                      <path d="M21.2663 22.3457H16.0666C15.9517 22.3457 15.8415 22.3929 15.7602 22.477C15.679 22.5611 15.6333 22.6751 15.6333 22.794V29.0698C15.6333 29.1887 15.679 29.3028 15.7602 29.3868C15.8415 29.4709 15.9517 29.5181 16.0666 29.5181H21.2663C21.3812 29.5181 21.4914 29.4709 21.5727 29.3868C21.654 29.3028 21.6996 29.1887 21.6996 29.0698V22.794C21.6996 22.6751 21.654 22.5611 21.5727 22.477C21.4914 22.3929 21.3812 22.3457 21.2663 22.3457ZM20.833 25.4836H19.0998V23.2423H20.833V25.4836ZM18.2332 23.2423V25.4836H16.4999V23.2423H18.2332ZM16.4999 26.3802H18.2332V28.6216H16.4999V26.3802ZM19.0998 28.6216V26.3802H20.833V28.6216H19.0998Z" />
                      <path d="M26.0011 27.8965C26.0927 27.6677 25.9877 27.4055 25.7666 27.3108C25.5455 27.216 25.2921 27.3246 25.2005 27.5534C25.1089 27.7821 25.2139 28.0443 25.435 28.1391C25.6561 28.2338 25.9096 28.1252 26.0011 27.8965Z" />
                    </g>
                    <path className="vector" d="M0 5C0 2.23858 2.23858 0 5 0H31L7.48019 3.48442C5.39257 3.79369 3.72391 5.38043 3.31003 7.44985L0 24V5Z" />
                  </svg>
                </div>
                <div className="content">
                  <h6>High Quality Property</h6>
                  <p>This sector focuses on properties used for residential.</p>
                </div>
              </div>
              <div className="sent-btn">
                <Link legacyBehavior href="/property-list/left-sidebar">
                  <a>
                    <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.1605 0H0.849401C0.626751 0 0.413219 0.0884475 0.255781 0.245885C0.0983438 0.403323 0.00989626 0.616854 0.00989626 0.839505C0.00989626 1.06216 0.0983438 1.27569 0.255781 1.43312C0.413219 1.59056 0.626751 1.67901 0.849401 1.67901H7.13309L0.256291 8.55665C0.17611 8.63409 0.112154 8.72673 0.0681567 8.82915C0.0241591 8.93157 0.00100033 9.04173 3.16969e-05 9.1532C-0.000936937 9.26467 0.020304 9.37522 0.062515 9.47839C0.104726 9.58156 0.167062 9.67529 0.245885 9.75412C0.324709 9.83294 0.418441 9.89527 0.521613 9.93748C0.624785 9.9797 0.735331 10.0009 0.846799 9.99997C0.958268 9.999 1.06843 9.97584 1.17085 9.93184C1.27327 9.88785 1.36591 9.82389 1.44335 9.74371L8.32099 2.86649V9.1506C8.32099 9.37325 8.40944 9.58678 8.56688 9.74422C8.72431 9.90166 8.93785 9.9901 9.1605 9.9901C9.38315 9.9901 9.59668 9.90166 9.75412 9.74422C9.91155 9.58678 10 9.37325 10 9.1506V0.839505C10 0.616854 9.91155 0.403323 9.75412 0.245885C9.59668 0.0884475 9.38315 0 9.1605 0Z" />
                    </svg>
                  </a>
                </Link>
              </div>
            </li>
          </ul>
          <div className="author-and-exp-area">
            <div className="author-area">
              <p>Real estate refers to property, including land, buildings, and natural resources, along with the legal rights associated. </p>
              <div className="name-deg">
                <span><strong>Natrison Mongla</strong> (CEO &amp; Founder)</span>
              </div>
            </div>
            <div className="exp-area">
              <div className="number">
                <h2>05</h2>
              </div>
              <h5><span>Years</span> <br />
                Of Experienece</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<div className="why-choose-area pt-90 pb-90 mb-100">
  <div className="container">
    <div className="row mb-50 wow fadeInUp" data-wow-delay="200ms">
      <div className="col-lg-12 d-flex justify-content-center">
        <div className="section-title1 text-center">
          <span>Best Real Estate</span>
          <h2>Why Only Choose neckle</h2>
        </div>
      </div>
    </div>
    <div className="row mb-50 g-4 justify-content-center">
      <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="200ms">
        <div className="choose-card">
          <div className="choose-top">
            <div className="choose-icon">
              <img src="/assets/img/home1/icon/affordable.svg" alt="" />
            </div>
            <h5><span>Affordable</span> Price</h5>
          </div>
          <p>An affordable price for a luxury car may be significantly higher than an affordable price for
            a budget car...</p>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="300ms">
        <div className="choose-card">
          <div className="choose-top">
            <div className="choose-icon">
              <img src="/assets/img/home1/icon/guarantee.svg" alt="" />
            </div>
            <h5>Money Back <span>Guarantee</span></h5>
          </div>
          <p>Some may offer a full refund with no questions asked, others may require the customer to
            provide...</p>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="400ms">
        <div className="choose-card">
          <div className="choose-top">
            <div className="choose-icon">
              <img src="/assets/img/home1/icon/warranty.svg" alt="" />
            </div>
            <h5>8 Month <span>Warranty</span></h5>
          </div>
          <p>During this 8-month period, if the product fails to function properly due to a defect or
            malfunction...</p>
        </div>
      </div>
    </div>
    <div className="our-activetis">
      <div className="row justify-content-center g-lg-4 gy-5">
        <div className="col-lg-3 col-sm-4 col-sm-6 divider d-flex justify-content-lg-start justify-content-sm-center wow fadeInUp" data-wow-delay="200ms">
          <div className="single-activiti">
            <div className="icon">
              <img src="/assets/img/home1/icon/av-project.svg" alt="" />
            </div>
            <div className="content">
              <div className="number">
                <h5 className="counter">600</h5>
                <span>K+</span>
              </div>
              <p>Project Available</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-sm-4 col-sm-6 divider d-flex justify-content-sm-center wow fadeInUp" data-wow-delay="300ms">
          <div className="single-activiti">
            <div className="icon">
              <img src="/assets/img/home1/icon/sold-car.svg" alt="" />
            </div>
            <div className="content">
              <div className="number">
                <h5 className="counter">400</h5>
                <span>K+</span>
              </div>
              <p>Project Sold</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-sm-4 col-sm-6 divider d-flex justify-content-sm-center wow fadeInUp" data-wow-delay="400ms">
          <div className="single-activiti">
            <div className="icon">
              <img src="/assets/img/home1/icon/new-home.svg" alt="" />
            </div>
            <div className="content">
              <div className="number">
                <h5 className="counter">200</h5>
                <span>K+</span>
              </div>
              <p>New Home</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-sm-4 col-sm-6 d-flex justify-content-lg-end justify-content-sm-center wow fadeInUp" data-wow-delay="500ms">
          <div className="single-activiti">
            <div className="icon">
              <img src="/assets/img/home1/icon/happy-customar.svg" alt="" />
            </div>
            <div className="content">
              <div className="number">
                <h5 className="counter">98.50</h5>
                <span>%</span>
              </div>
              <p>Customer Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="row wow fadeInUp" data-wow-delay="200ms">
      <div className="col-lg-12 d-flex justify-content-center">
        <div className="trustpilot-review">
          <strong>Excellent!</strong>
          <img src="/assets/img/home1/icon/trustpilot-star2.svg" alt="" />
          <p>5.0 Rating out of <strong>5.0</strong> based on <a href="#"><strong>245354</strong>
              reviews</a></p>
          <img src="/assets/img/home1/icon/trustpilot-logo.svg" alt="" />
        </div>
      </div>
    </div>
  </div>
</div>
<div className="brief-history-section mb-100">
  <div className="container">
    <div className="row mb-50 wow fadeInUp" data-wow-delay="200ms">
      <div className="col-lg-12 d-flex align-items-center justify-content-between gap-3 flex-wrap">
        <div className="section-title1">
          <span>Our Agency Cycle</span>
          <h2>Our Brief History</h2>
        </div>
        <div className="slider-btn-group2 width-90">
          <div className="slider-btn prev-13">
            <svg width={9} height={15} viewBox="0 0 8 13" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 6.50008L8 0L2.90909 6.50008L8 13L0 6.50008Z" />
            </svg>
          </div>
          <div className="slider-btn next-13">
            <svg width={9} height={15} viewBox="0 0 8 13" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 6.50008L0 0L5.09091 6.50008L0 13L8 6.50008Z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-lg-12">
        <div className="swiper brief-history-slider">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="brief-history-card">
                <div className="brief-history-card-img">
                  <img src="/assets/img/inner-page/brief-history-card-img1.png" alt="" />
                </div>
                <div className="brief-history-card-content">
                  <h6>1996 Year</h6>
                  <p>Agency Established</p>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="brief-history-card">
                <div className="brief-history-card-img">
                  <img src="/assets/img/inner-page/brief-history-card-img2.png" alt="" />
                </div>
                <div className="brief-history-card-content">
                  <h6>2001 Year</h6>
                  <p>Rise On Marketplace</p>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="brief-history-card">
                <div className="brief-history-card-img">
                  <img src="/assets/img/inner-page/brief-history-card-img3.png" alt="" />
                </div>
                <div className="brief-history-card-content">
                  <h6>2005 Year</h6>
                  <p>Elizabeth Award</p>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="brief-history-card">
                <div className="brief-history-card-img">
                  <img src="/assets/img/inner-page/brief-history-card-img4.png" alt="" />
                </div>
                <div className="brief-history-card-content">
                  <h6>2010 Year</h6>
                  <p>Office At Sydne City</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<div className="how-it-work-section mb-100">
  <div className="container">
    <div className="row mb-50 wow fadeInUp" data-wow-delay="200ms">
      <div className="col-lg-12 d-flex align-items-end justify-content-between gap-3 flex-wrap">
        <div className="section-title-2">
          <h2>How Does It Work</h2>
          <p>Here are some of the featured Apartment in different categories</p>
        </div>      
        <div className="video-btn">
          <a data-fancybox="gallery" href="https://www.youtube.com/watch?v=MLpWrANjFbI&ab_channel=eidelchteinadvogados"><i className="bi bi-play-circle" /> Watch video</a>
        </div> 
      </div>
    </div>
    <div className="row wow fadeInUp" data-wow-delay="300ms">
      <div className="col-lg-12">
        <div className="work-process-group">
          <div className="row justify-content-center g-lg-0 gy-5">
            <div className="col-lg-3 col-sm-6">
              <div className="single-work-process text-center">
                <div className="step">
                  <span>01</span>
                </div>
                <div className="icon">
                  <img src="/assets/img/home2/icon/loaction.svg" alt="" />
                </div>
                <div className="content">
                  <h6>Choose Any where</h6>
                  <p>The real estate industry It plays a significant role in the as it contributes.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="single-work-process text-center">
                <div className="step">
                  <span>02</span>
                </div>
                <div className="icon">
                  <img src="/assets/img/home2/icon/contact.svg" alt="" />
                </div>
                <div className="content">
                  <h6>Contact With Us</h6>
                  <p>The real estate industry It plays a significant role in the as it contributes.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="single-work-process text-center">
                <div className="step">
                  <span>03</span>
                </div>
                <div className="icon">
                  <img src="/assets/img/home2/icon/pay.svg" alt="" />
                </div>
                <div className="content">
                  <h6>Pay For The Home</h6>
                  <p>The real estate industry It plays a significant role in the as it contributes.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="single-work-process text-center">
                <div className="step">
                  <span>04</span>
                </div>
                <div className="icon">
                  <img src="/assets/img/home2/icon/recieve.svg" alt="" />
                </div>
                <div className="content">
                  <h6>Recieve The Home</h6>
                  <p>The real estate industry It plays a significant role in the as it contributes.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="row wow fadeInUp" data-wow-delay="400ms">
      <div className="col-lg-12 d-flex justify-content-center">
        <div className="trustpilot-review">
          <strong>Excellent!</strong>
          <img src="/assets/img/home1/icon/trustpilot-star2.svg" alt="" />
          <p>5.0 Rating out of <strong>5.0</strong> based on <a href="#"><strong>245354</strong>
              reviews</a></p>
          <img src="/assets/img/home1/icon/trustpilot-logo.svg" alt="" />
        </div>
      </div>
    </div>
  </div>
</div>
<div className="customar-feedback-area mb-100">
  <div className="container">
    <div className="row mb-50 wow fadeInUp" data-wow-delay="200ms">
      <div className="col-lg-12">
        <div className="section-title1">
          <span>Customer Feedback</span>
          <h2>What Our Customers Are Saying</h2>
        </div>
      </div>
    </div>
    <div className="row g-4 mb-100">
      <div className="col-lg-3 wow fadeInUp" data-wow-delay="200ms">
        <div className="customer-feedback-left">
          <a href="#" className="trustpilot">
            <h5>Excellent!</h5>
            <img className="star" src="/assets/img/home1/icon/trustpilot-star3.svg" alt="" />
            <span>Based On <strong>2348</strong> Reviews</span>
            <img className="logo" src="/assets/img/home1/icon/trustpilot-log3.svg" alt="" />
          </a>
          <a href="#" className="google">
            <img className="logo" src="/assets/img/home1/icon/google3.svg" alt="" />
            <div className="star">
              <ul>
                <li className="active"><i className="bi bi-star-fill" /></li>
                <li><i className="bi bi-star-fill" /></li>
                <li><i className="bi bi-star-fill" /></li>
                <li><i className="bi bi-star-fill" /></li>
                <li className><i className="bi bi-star-half" /></li>
              </ul>
            </div>
            <span>Based On <strong>1448</strong> Reviews</span>
          </a>
        </div>
      </div>
      <div className="col-lg-9 wow fadeInUp" data-wow-delay="200ms">
        <div className="customer-feedback-right">
          <div className="swiper customer-feedback-slider mb-40">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="feedback-card">
                  <div className="feedback-top">
                    <div className="stat-area">
                      <div className="star">
                        <ul>
                          <li className="active"><i className="bi bi-star-fill" /></li>
                          <li><i className="bi bi-star-fill" /></li>
                          <li><i className="bi bi-star-fill" /></li>
                          <li><i className="bi bi-star-fill" /></li>
                          <li className><i className="bi bi-star-half" /></li>
                        </ul>
                      </div>
                      <span>Great Services!</span>
                    </div>
                    <div className="logo">
                      <img src="/assets/img/home1/icon/google3.svg" alt="" />
                    </div>
                  </div>
                  <p>neckle-Agency to the actively encourage customers to leave
                    reviews to the help promote their products and services.”</p>
                  <div className="author-name">
                    <h6>Nowry Jahan</h6>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="feedback-card">
                  <div className="feedback-top">
                    <div className="stat-area">
                      <img src="/assets/img/home1/icon/trustpilot-star.svg" alt="" />
                      <span>Trusted Company</span>
                    </div>
                    <div className="logo">
                      <img src="/assets/img/home1/icon/trustpilot-log3.svg" alt="" />
                    </div>
                  </div>
                  <p>neckle-Agency customer feedback is an invaluable source of
                    information that can help businesses improve their offerings and provide
                    better experiences.</p>
                  <div className="author-name">
                    <h6>Jhon Abraham</h6>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="feedback-card">
                  <div className="feedback-top">
                    <div className="stat-area">
                      <div className="star">
                        <ul>
                          <li className="active"><i className="bi bi-star-fill" /></li>
                          <li><i className="bi bi-star-fill" /></li>
                          <li><i className="bi bi-star-fill" /></li>
                          <li><i className="bi bi-star-fill" /></li>
                          <li className><i className="bi bi-star-half" /></li>
                        </ul>
                      </div>
                      <span>Great Services!</span>
                    </div>
                    <div className="logo">
                      <img src="/assets/img/home1/icon/google3.svg" alt="" />
                    </div>
                  </div>
                  <p>neckle-Agency to the actively encourage customers to leave
                    reviews to the help promote their products and services.”</p>
                  <div className="author-name">
                    <h6>Nowry Jahan</h6>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="feedback-card">
                  <div className="feedback-top">
                    <div className="stat-area">
                      <img src="/assets/img/home1/icon/trustpilot-star.svg" alt="" />
                      <span>Trusted Company</span>
                    </div>
                    <div className="logo">
                      <img src="/assets/img/home1/icon/trustpilot-log3.svg" alt="" />
                    </div>
                  </div>
                  <p>neckle-Agency customer feedback is an invaluable source of
                    information that can help businesses improve their offerings and provide
                    better experiences.</p>
                  <div className="author-name">
                    <h6>Jhon Abraham</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row ">
            <div className="col-lg-12 divider">
              <div className="slider-btn-group style-2 justify-content-md-between justify-content-center">
                <div className="slider-btn prev-4 d-md-flex d-none">
                  <svg width={11} height={19} viewBox="0 0 8 13" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 6.50008L8 0L2.90909 6.50008L8 13L0 6.50008Z" />
                  </svg>
                </div>
                <div className="view-btn-area">
                  <p>Thousand of People Reviews to Us</p>
                  <Link legacyBehavior href="/customer-review"><a className="view-btn">View All Review</a></Link>
                </div>
                <div className="slider-btn next-4 d-md-flex d-none">
                  <svg width={11} height={19} viewBox="0 0 8 13" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 6.50008L0 0L5.09091 6.50008L0 13L8 6.50008Z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<div className="home1-team-section pt-90 pb-90">
  <div className="container">
    <div className="row mb-50 wow fadeInUp" data-wow-delay="200ms">
      <div className="col-lg-12 d-flex align-items-center justify-content-between gap-3 flex-wrap">
        <div className="section-title1">
          <span>Top Expertise</span>
          <h2>Meet Our Associates</h2>
        </div>
        <div className="slider-btn-group2 width-90">
          <div className="slider-btn prev-13">
            <svg width={9} height={15} viewBox="0 0 8 13" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 6.50008L8 0L2.90909 6.50008L8 13L0 6.50008Z" />
            </svg>
          </div>
          <div className="slider-btn next-13">
            <svg width={9} height={15} viewBox="0 0 8 13" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 6.50008L0 0L5.09091 6.50008L0 13L8 6.50008Z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-lg-12">
        <div className="swiper home1-team-slider">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="single-team-card">
                <div className="team-img">
                  <img src="/assets/img/home1/team-img-01.png" alt="" />
                  <div className="contact-btn">
                    <a href="#" className="primary-btn3"><img src="/assets/img/home1/icon/contact.svg" alt="" /> Contact</a>
                  </div>
                </div>
                <div className="team-content">
                  <h6>Milestone Hoke</h6>
                  <span>CEO &amp; Founder</span>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="single-team-card">
                <div className="team-img">
                  <img src="/assets/img/home1/team-img-02.png" alt="" />
                  <div className="contact-btn">
                    <a href="#" className="primary-btn3"><img src="/assets/img/home1/icon/contact.svg" alt="" /> Contact</a>
                  </div>
                </div>
                <div className="team-content">
                  <h6>Nowry Jahan</h6>
                  <span>Sales Associate</span>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="single-team-card">
                <div className="team-img">
                  <img src="/assets/img/home1/team-img-03.png" alt="" />
                  <div className="contact-btn">
                    <a href="#" className="primary-btn3"><img src="/assets/img/home1/icon/contact.svg" alt="" /> Contact</a>
                  </div>
                </div>
                <div className="team-content">
                  <h6>Daniel Scoot</h6>
                  <span>Property Manager</span>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="single-team-card">
                <div className="team-img">
                  <img src="/assets/img/home1/team-img-04.png" alt="" />
                  <div className="contact-btn">
                    <a href="#" className="primary-btn3"><img src="/assets/img/home1/icon/contact.svg" alt="" /> Contact</a>
                  </div>
                </div>
                <div className="team-content">
                  <h6>Jacoline Frangly</h6>
                  <span>Residetial Agent</span>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="single-team-card">
                <div className="team-img">
                  <img src="/assets/img/home1/team-img-01.png" alt="" />
                  <div className="contact-btn">
                    <a href="#" className="primary-btn3"><img src="/assets/img/home1/icon/contact.svg" alt="" /> Contact</a>
                  </div>
                </div>
                <div className="team-content">
                  <h6>Milestone Hoke</h6>
                  <span>CEO &amp; Founder</span>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="single-team-card">
                <div className="team-img">
                  <img src="/assets/img/home1/team-img-02.png" alt="" />
                  <div className="contact-btn">
                    <a href="#" className="primary-btn3"><img src="/assets/img/home1/icon/contact.svg" alt="" /> Contact</a>
                  </div>
                </div>
                <div className="team-content">
                  <h6>Nowry Jahan</h6>
                  <span>Sales Associate</span>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="single-team-card">
                <div className="team-img">
                  <img src="/assets/img/home1/team-img-03.png" alt="" />
                  <div className="contact-btn">
                    <a href="#" className="primary-btn3"><img src="/assets/img/home1/icon/contact.svg" alt="" /> Contact</a>
                  </div>
                </div>
                <div className="team-content">
                  <h6>Daniel Scoot</h6>
                  <span>Property Manager</span>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="single-team-card">
                <div className="team-img">
                  <img src="/assets/img/home1/team-img-04.png" alt="" />
                  <div className="contact-btn">
                    <a href="#" className="primary-btn3"><img src="/assets/img/home1/icon/contact.svg" alt="" /> Contact</a>
                  </div>
                </div>
                <div className="team-content">
                  <h6>Jacoline Frangly</h6>
                  <span>Residetial Agent</span>
                </div>
              </div>
            </div>
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
