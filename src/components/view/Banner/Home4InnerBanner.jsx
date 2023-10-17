import Link from 'next/link'
import React from 'react'

const Home4InnerBanner = () => {
  return (
    <div className="home4-inner-banner-section pt-90 pb-90">
    <div className="inner-banner-img">
      <img src="assets/img/home4/inner-banner-img2.png" alt="" />
    </div>
    <div className="container">
      <div className="row gy-5">
        <div className="col-lg-7 d-flex align-items-center">
          <div className="section-title-2 wow fadeInUp" data-wow-delay="200ms">
            <h2>Add Property With Neckle?</h2>
            <p>It provides coverage for losses or damages resulting from undisclosed liens, errors in public records, or legal disputes over ownership.</p>
            <div className="sell-btn-and-contact-info">
              <Link legacyBehavior  href="/dashboard/add-property">
                <a className="primary-btn3">
                <svg xmlns="http://www.w3.org/2000/svg" width={14} height={14} viewBox="0 0 14 14">
                  <g clipPath="url(#clip0_485_1365)">
                    <path d="M7 13.125C5.37555 13.125 3.81763 12.4797 2.66897 11.331C1.52031 10.1824 0.875 8.62445 0.875 7C0.875 5.37555 1.52031 3.81763 2.66897 2.66897C3.81763 1.52031 5.37555 0.875 7 0.875C8.62445 0.875 10.1824 1.52031 11.331 2.66897C12.4797 3.81763 13.125 5.37555 13.125 7C13.125 8.62445 12.4797 10.1824 11.331 11.331C10.1824 12.4797 8.62445 13.125 7 13.125ZM7 14C8.85652 14 10.637 13.2625 11.9497 11.9497C13.2625 10.637 14 8.85652 14 7C14 5.14348 13.2625 3.36301 11.9497 2.05025C10.637 0.737498 8.85652 0 7 0C5.14348 0 3.36301 0.737498 2.05025 2.05025C0.737498 3.36301 0 5.14348 0 7C0 8.85652 0.737498 10.637 2.05025 11.9497C3.36301 13.2625 5.14348 14 7 14Z" />
                    <path d="M7 3.5C7.11603 3.5 7.22731 3.54609 7.30936 3.62814C7.39141 3.71019 7.4375 3.82147 7.4375 3.9375V6.5625H10.0625C10.1785 6.5625 10.2898 6.60859 10.3719 6.69064C10.4539 6.77269 10.5 6.88397 10.5 7C10.5 7.11603 10.4539 7.22731 10.3719 7.30936C10.2898 7.39141 10.1785 7.4375 10.0625 7.4375H7.4375V10.0625C7.4375 10.1785 7.39141 10.2898 7.30936 10.3719C7.22731 10.4539 7.11603 10.5 7 10.5C6.88397 10.5 6.77269 10.4539 6.69064 10.3719C6.60859 10.2898 6.5625 10.1785 6.5625 10.0625V7.4375H3.9375C3.82147 7.4375 3.71019 7.39141 3.62814 7.30936C3.54609 7.22731 3.5 7.11603 3.5 7C3.5 6.88397 3.54609 6.77269 3.62814 6.69064C3.71019 6.60859 3.82147 6.5625 3.9375 6.5625H6.5625V3.9375C6.5625 3.82147 6.60859 3.71019 6.69064 3.62814C6.77269 3.54609 6.88397 3.5 7 3.5Z" />
                  </g>
                  <defs>
                    <clipPath id="clip0_485_1365">
                      <rect width={14} height={14} fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                ADD PROPERTY
                </a>
              </Link>
              <span>Or,</span>
              <div className="hotline-area">
                <div className="icon">
                  <svg width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path d="M31.1603 24.6852L24.6834 20.3658C23.8615 19.8221 22.7597 20.001 22.152 20.7769L20.2654 23.2027C20.1481 23.3573 19.9789 23.4645 19.789 23.5045C19.599 23.5444 19.4011 23.5145 19.2314 23.4203L18.8725 23.2224C17.6828 22.574 16.2025 21.7667 13.22 18.7831C10.2375 15.7995 9.42859 14.3181 8.78012 13.1306L8.58334 12.7717C8.48781 12.6021 8.45678 12.4037 8.49597 12.213C8.53516 12.0223 8.64193 11.8522 8.79662 11.734L11.2208 9.84792C11.9964 9.2402 12.1756 8.13874 11.6324 7.31655L7.31309 0.83963C6.75648 0.00237835 5.63977 -0.24896 4.77809 0.269026L2.06967 1.89597C1.21867 2.39626 0.594346 3.20652 0.327557 4.15695C-0.647737 7.71055 0.0859667 13.8435 9.12038 22.879C16.3071 30.0651 21.6572 31.9976 25.3345 31.9976C26.1809 32.0013 27.0239 31.8912 27.8409 31.6703C28.7915 31.4038 29.6018 30.7794 30.1018 29.9281L31.7304 27.2214C32.2491 26.3595 31.9979 25.2421 31.1603 24.6852ZM30.8115 26.6742L29.1867 29.3826C28.8277 29.997 28.2449 30.4488 27.5603 30.6432C24.2797 31.5439 18.5483 30.7979 9.87489 22.1245C1.20149 13.4511 0.455538 7.72017 1.35622 4.4391C1.55097 3.75367 2.00324 3.17011 2.61841 2.81053L5.32682 1.1857C5.7007 0.960737 6.18538 1.06978 6.4269 1.4331L8.77324 4.95577L10.7426 7.90946C10.9784 8.26609 10.9009 8.74409 10.5645 9.00798L8.13978 10.8941C7.40188 11.4583 7.19117 12.4792 7.64547 13.2895L7.83801 13.6393C8.51953 14.8892 9.36684 16.4442 12.4603 19.5371C15.5537 22.63 17.1081 23.4773 18.3575 24.1588L18.7078 24.3518C19.518 24.8061 20.539 24.5954 21.1032 23.8575L22.9893 21.4328C23.2533 21.0966 23.7311 21.0191 24.0879 21.2547L30.5642 25.5741C30.9278 25.8154 31.0368 26.3004 30.8115 26.6742ZM18.1324 5.33496C23.1367 5.34053 27.1921 9.39599 27.1977 14.4003C27.1977 14.6948 27.4364 14.9335 27.7309 14.9335C28.0255 14.9335 28.2642 14.6948 28.2642 14.4003C28.258 8.8072 23.7255 4.27462 18.1324 4.2685C17.8378 4.2685 17.5991 4.50721 17.5991 4.80173C17.5991 5.09625 17.8378 5.33496 18.1324 5.33496Z" />
                    <path d="M18.1324 8.53424C21.3704 8.53805 23.9944 11.162 23.9982 14.4001C23.9982 14.5415 24.0544 14.6771 24.1544 14.7771C24.2544 14.8771 24.39 14.9333 24.5314 14.9333C24.6728 14.9333 24.8085 14.8771 24.9085 14.7771C25.0085 14.6771 25.0646 14.5415 25.0646 14.4001C25.0602 10.5733 21.9591 7.47215 18.1324 7.46777C17.8378 7.46777 17.5991 7.70649 17.5991 8.00101C17.5991 8.29553 17.8378 8.53424 18.1324 8.53424Z" />
                    <path d="M18.1324 11.7344C19.6041 11.7362 20.7968 12.9289 20.7986 14.4007C20.7986 14.5422 20.8548 14.6778 20.9548 14.7778C21.0548 14.8778 21.1905 14.934 21.3319 14.934C21.4733 14.934 21.6089 14.8778 21.7089 14.7778C21.8089 14.6778 21.8651 14.5422 21.8651 14.4007C21.8627 12.3402 20.1929 10.6703 18.1324 10.668C17.8378 10.668 17.5991 10.9067 17.5991 11.2012C17.5991 11.4957 17.8378 11.7344 18.1324 11.7344Z" />
                  </svg>
                </div>
                <div className="content">
                  <span>Call Now</span>
                  <h6><a href="tel:+990737621432">+990-737 621 432</a></h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  )
}

export default Home4InnerBanner
