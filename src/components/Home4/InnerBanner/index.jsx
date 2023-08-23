import React from 'react'

function index() {
  return (
    <div className="home4-inner-banner-section mb-100">
  <div className="container">
    <div className="row gy-5">
      <div className="col-lg-6 d-flex align-items-center">
        <div className="section-title-2 wow fadeInUp" data-wow-delay="200ms">
          <h2>Sell Your Car With Drivco?</h2>
          <p>Car servicing is the regular maintenance and inspection of a vehicle to ensure that it is operating safely and efficiently.</p>
          <div className="sell-btn-and-contact-info">
            <button className="primary-btn3" type="button" data-bs-toggle="modal" data-bs-target="#sellUsModal01">
              <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20">
                <path d="M19.5097 0C19.3856 0.00319696 19.2676 0.0547717 19.181 0.143724L17.1383 2.18999L16.523 1.57377C16.1807 1.23243 15.7864 1.0429 15.3983 1.03212C15.1648 1.02583 14.9492 1.05906 14.6923 1.095L11.3597 1.5585C10.1336 1.72918 9.51106 2.25377 8.72058 2.99035L0.522936 10.6302C0.519601 10.6331 0.516307 10.6361 0.513055 10.6391C0.158237 10.9895 0.0046327 11.4674 0.000141332 11.9381C-0.00524831 12.4087 0.142967 12.9073 0.538207 13.245L0.511259 13.219L6.78121 19.4907L6.75605 19.4638C7.09381 19.859 7.59145 20.0063 8.06304 20.001C8.53374 19.9965 9.01252 19.8429 9.36195 19.4889C9.36499 19.4854 9.36799 19.4818 9.37093 19.4782L9.93414 18.8736L12.1762 19.709C12.403 19.7957 12.645 19.8358 12.8876 19.8268C13.1302 19.8179 13.3685 19.7601 13.5883 19.6569C14.015 19.4566 14.386 19.118 14.5567 18.6508L17.0179 11.2724C17.7509 10.4864 18.2728 9.86304 18.4426 8.64139L18.9061 5.30879C18.942 5.05189 18.9753 4.8354 18.969 4.60275C18.9582 4.2147 18.7696 3.82125 18.4273 3.47811L17.8111 2.8628L19.8556 0.818327C19.9244 0.751474 19.9715 0.665376 19.9905 0.571322C20.0096 0.477269 19.9998 0.379651 19.9624 0.29127C19.925 0.20289 19.8618 0.127872 19.781 0.0760549C19.7002 0.0242379 19.6057 -0.00195942 19.5097 0.000898315V0ZM15.3723 1.98339C15.5591 1.98788 15.5969 1.99327 15.8493 2.24658L16.4655 2.8619L15.3723 3.956C15.1812 3.86262 14.9714 3.81379 14.7588 3.81317C13.9755 3.81317 13.3296 4.45993 13.3296 5.24232C13.3296 6.02562 13.9755 6.67058 14.7579 6.67058C15.5412 6.67058 16.187 6.02562 16.187 5.24232C16.187 5.02314 16.1349 4.81564 16.0451 4.6288L17.1383 3.53471L17.7536 4.15092C18.0069 4.40334 18.0123 4.44106 18.0168 4.62701C18.0115 4.81128 17.9935 4.99496 17.9629 5.17675L17.5003 8.50934C17.3566 9.54236 17.0467 9.84418 16.3146 10.6311L8.68375 18.8188C8.56069 18.9437 8.30647 19.0452 8.05226 19.0479C7.79805 19.0515 7.58067 18.9608 7.48096 18.844C7.47263 18.8347 7.46395 18.8257 7.45491 18.817L1.18496 12.5453C1.17633 12.5363 1.16734 12.5276 1.15802 12.5192C1.04124 12.4204 0.949616 12.2021 0.953209 11.9479C0.955904 11.6946 1.05741 11.4395 1.18227 11.3164L9.37003 3.68651C10.1569 2.95352 10.4587 2.64452 11.4918 2.50079L14.8243 2.03728C15.0813 2.00135 15.2609 1.97979 15.3723 1.98339ZM14.7588 4.76534C15.0274 4.76534 15.2349 4.97374 15.2349 5.24232C15.2349 5.51091 15.0274 5.71841 14.7588 5.71841C14.4893 5.71841 14.2827 5.51091 14.2827 5.24232C14.2827 4.97374 14.4893 4.76534 14.7588 4.76534ZM6.65904 9.99868C6.56427 9.99858 6.47162 10.0268 6.39297 10.0796C6.31431 10.1325 6.25323 10.2077 6.21753 10.2954C6.18183 10.3832 6.17315 10.4797 6.1926 10.5724C6.21204 10.6652 6.25873 10.75 6.32668 10.8161L9.18409 13.6726C9.63322 14.1218 10.3069 13.448 9.85779 12.9989L7.00038 10.1424C6.95598 10.0969 6.90289 10.0607 6.84426 10.036C6.78563 10.0113 6.72265 9.99862 6.65904 9.99868ZM5.23079 11.426C5.13583 11.4258 5.04295 11.4539 4.9641 11.5068C4.88524 11.5597 4.82401 11.635 4.78828 11.723C4.75255 11.811 4.74394 11.9076 4.76357 12.0005C4.7832 12.0934 4.83016 12.1784 4.89843 12.2444L7.75583 15.1009C8.20497 15.5797 8.90832 14.8754 8.42954 14.4272L5.57303 11.5716C5.52867 11.5256 5.4755 11.489 5.4167 11.464C5.35791 11.439 5.29468 11.4261 5.23079 11.426ZM15.4549 12.9486L13.662 18.323C13.6009 18.4874 13.4123 18.6868 13.1823 18.7946C12.9523 18.9024 12.7215 18.8997 12.5778 18.8458L10.6357 18.1191L15.4549 12.9486Z" />
              </svg>
              Sell Your Car             
            </button>
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
      <div className="col-lg-6 d-flex justify-content-lg-end justify-content-sm-center justify-content-end">
        <div className="inner-banner-img">
          <div className="background-img">
            <img src="assets/img/home4/inner-banner-img1.png" alt="" />
          </div>
          <div className="car-img wow zoomIn" data-wow-delay="400ms">
            <img src="assets/img/home4/inner-banner-img2.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default index