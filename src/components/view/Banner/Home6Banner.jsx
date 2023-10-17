import SelectComponent from '@/uitils/SelectComponent'
import Link from 'next/link'
import React from 'react'

const Home6Banner = () => {
  return (
    <>
      <div className="home6-banner-area">
        <div className="container-fluid">
          <div className="row g-lg-4 gy-5">
            <div className="col-lg-7 d-flex align-items-center">
              <div className="banner-content">
                <span>Elite Real Estate</span>
                <h1>Real Estate Solutions</h1>
                <p>The real estate industry involves buying, selling, renting, and managing properties.</p>
                <div className="banner-content-bottom">
                  <Link legacyBehavior href="/property-list/left-sidebar">
                    <a className="primary-btn7">
                      <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 18 18">
                        <mask id="mask0_485_13523" style={{maskType: 'alpha'}} maskUnits="userSpaceOnUse" x={0} y={0} width={18} height={18}>
                          <rect width={18} height={18} fill="#D9D9D9" />
                        </mask>
                        <g mask="url(#mask0_485_13523)">
                          <path d="M17.0989 15.5563C17.0993 15.5432 17.0995 15.5302 17.0995 15.5172C17.0992 15.1881 16.9726 14.8726 16.7477 14.6399C16.5227 14.4071 16.2177 14.2762 15.8996 14.2759V8.53448L16.9795 7.69655C17.0171 7.66745 17.0474 7.62965 17.0683 7.5862C17.0891 7.54275 17.0998 7.49485 17.0995 7.44635C17.0992 7.39785 17.088 7.35009 17.0666 7.30691C17.0452 7.26373 17.0144 7.22633 16.9765 7.19771L14.3997 5.24956V1.86207C14.4793 1.86207 14.5556 1.82937 14.6118 1.77117C14.6681 1.71297 14.6997 1.63403 14.6997 1.55172V0.310345C14.6997 0.228036 14.6681 0.149099 14.6118 0.0908979C14.5556 0.0326969 14.4793 0 14.3997 0H11.3999C11.3203 0 11.244 0.0326969 11.1877 0.0908979C11.1315 0.149099 11.0999 0.228036 11.0999 0.310345V1.55172C11.0999 1.63403 11.1315 1.71297 11.1877 1.77117C11.244 1.82937 11.3203 1.86207 11.3999 1.86207V2.98168L9.17699 1.30116C9.12561 1.26232 9.06363 1.24139 9 1.24139C8.93637 1.24139 8.87439 1.26232 8.82301 1.30116L1.02345 7.19771C0.985599 7.22633 0.954756 7.26373 0.933399 7.30691C0.912041 7.35009 0.900764 7.39785 0.900472 7.44635C0.900181 7.49485 0.910882 7.54275 0.931719 7.5862C0.952556 7.62965 0.982947 7.66745 1.02045 7.69655L2.10039 8.53448V14.2759C1.78226 14.2762 1.47726 14.4071 1.25231 14.6399C1.02735 14.8726 0.900818 15.1881 0.900461 15.5172C0.900461 15.5302 0.900686 15.5432 0.901136 15.5563C0.618136 15.6316 0.371411 15.8111 0.207254 16.0612C0.0430969 16.3113 -0.027211 16.6148 0.00952183 16.9147C0.0462547 17.2146 0.187504 17.4903 0.406767 17.6901C0.626031 17.8899 0.908239 18.0001 1.20044 18H16.7996C17.0918 18.0001 17.374 17.8899 17.5932 17.6901C17.8125 17.4903 17.9537 17.2146 17.9905 16.9147C18.0272 16.6148 17.9569 16.3113 17.7927 16.0612C17.6286 15.8111 17.3819 15.6316 17.0989 15.5563ZM11.6998 0.62069H14.0997V1.24138H11.6998V0.62069ZM11.9998 3.41379V1.86207H13.7997V4.79599L11.9714 3.41379H11.9998ZM9 1.93609L16.2954 7.45153L15.5969 7.99351L9.17647 3.1628C9.12519 3.12421 9.06341 3.10343 9 3.10343C8.93659 3.10343 8.87481 3.12421 8.82353 3.1628L2.40311 7.99351L1.7046 7.45153L9 1.93609ZM0.600478 16.7586C0.600644 16.5957 0.662678 16.4393 0.773215 16.3232C0.883752 16.2071 1.03395 16.1406 1.19144 16.1379H1.19216C1.20749 16.1401 1.22283 16.142 1.23847 16.1431C1.28818 16.1463 1.33789 16.1367 1.38311 16.1151C1.42833 16.0935 1.46765 16.0606 1.4975 16.0194C1.52735 15.9781 1.54681 15.9298 1.55411 15.8788C1.56141 15.8279 1.55632 15.7758 1.53931 15.7274C1.51449 15.6603 1.50132 15.5891 1.50043 15.5172C1.50062 15.3527 1.56389 15.1949 1.67636 15.0786C1.78884 14.9622 1.94133 14.8967 2.10039 14.8966V17.3793H1.20044C1.04138 17.3791 0.888887 17.3137 0.776412 17.1973C0.663938 17.0809 0.600666 16.9232 0.600478 16.7586ZM13.4997 17.3793H9.89995V10.5517H13.4997V17.3793ZM14.0997 17.3793V10.2414C14.0997 10.1591 14.0681 10.0801 14.0118 10.0219C13.9556 9.96373 13.8793 9.93103 13.7997 9.93103H9.59997C9.5204 9.93103 9.4441 9.96373 9.38785 10.0219C9.33159 10.0801 9.29998 10.1591 9.29998 10.2414V17.3793H2.70036V8.53735L9 3.79753L15.2996 8.53735V17.3793H14.0997ZM16.7996 17.3793H15.8996V14.8966C16.0587 14.8967 16.2112 14.9622 16.3236 15.0786C16.4361 15.1949 16.4994 15.3527 16.4996 15.5172C16.4987 15.5892 16.4855 15.6604 16.4607 15.7275C16.4437 15.776 16.4386 15.828 16.4459 15.879C16.4532 15.93 16.4726 15.9783 16.5025 16.0195C16.5324 16.0608 16.5717 16.0937 16.6169 16.1153C16.6621 16.1369 16.7118 16.1465 16.7615 16.1432C16.7772 16.1422 16.7925 16.1403 16.8078 16.1381H16.8086C16.9677 16.1393 17.1198 16.2059 17.2315 16.3232C17.3431 16.4404 17.4052 16.5988 17.404 16.7634C17.4028 16.928 17.3385 17.0854 17.2251 17.201C17.1118 17.3165 16.9587 17.3807 16.7996 17.3795V17.3793Z" />
                          <path d="M7.79919 9.93164H4.1994C4.11984 9.93164 4.04353 9.96434 3.98728 10.0225C3.93102 10.0807 3.89941 10.1597 3.89941 10.242V14.5868C3.89941 14.6691 3.93102 14.7481 3.98728 14.8063C4.04353 14.8645 4.11984 14.8972 4.1994 14.8972H7.79919C7.87875 14.8972 7.95505 14.8645 8.01131 14.8063C8.06757 14.7481 8.09917 14.6691 8.09917 14.5868V10.242C8.09917 10.1597 8.06757 10.0807 8.01131 10.0225C7.95505 9.96434 7.87875 9.93164 7.79919 9.93164ZM7.49921 12.1041H6.29928V10.5523H7.49921V12.1041ZM5.69931 10.5523V12.1041H4.49938V10.5523H5.69931ZM4.49938 12.7247H5.69931V14.2765H4.49938V12.7247ZM6.29928 14.2765V12.7247H7.49921V14.2765H6.29928Z" />
                          <path d="M11.0783 13.774C11.1417 13.6157 11.069 13.4342 10.9159 13.3686C10.7629 13.303 10.5874 13.3782 10.524 13.5365C10.4606 13.6949 10.5333 13.8764 10.6863 13.942C10.8394 14.0076 11.0149 13.9324 11.0783 13.774Z" />
                        </g>
                      </svg>
                      Find Property
                    </a>
                  </Link>
                  <div className="rating">
                    <a href="#">
                      <div className="review-top">
                        <div className="logo">
                          <img src="assets/img/home2/icon/trustpilot-logo3.svg" alt="" />
                        </div>
                        <div className="star">
                          <img src="assets/img/home1/icon/trustpilot-star.svg" alt="" />
                        </div>
                      </div>
                      <div className="content">
                        <ul>
                          <li>Trust Rating <span>5.0</span></li>
                          <li><span>2348</span> Reviews</li>
                        </ul>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5 d-flex justify-content-lg-end">
              <div className="banner-img-group">
                <div className="top-img-group">
                  <div className="top-left-card">
                    <div className="icon">
                      <img src="assets/img/home6/icon/banner-icon.svg" alt="" />
                    </div>
                    <div className="content">
                      <h4>4,56,730+</h4>
                      <span>Project Sold</span>
                    </div>
                  </div>
                  <div className="top-right-img">
                    <img src="assets/img/home6/banner-img-01.png" alt="" />
                  </div>
                </div>
                <div className="bottom-img-group">
                  <div className="bottom-left-img">
                    <img src="assets/img/home6/banner-img-02.png" alt="" />
                  </div>
                  <div className="bottom-right-img">
                    <img src="assets/img/home6/banner-img-03.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home6-search-area mb-100">
        <div className="container">
          <form>
            <div className="row row-cols-xl-5 row-cols-md-3 row-cols-sm-2 row-cols-1 g-4 justify-content-center">
              <div className="col">
                <div className="form-inner">
                  <label>Property Type*</label>
                  <SelectComponent placeholder="Select" options={["For Sale","For Rent","Devlopment"]} />
                </div>
              </div>
              <div className="col">
                <div className="form-inner">
                  <label>Location*</label>
                  <SelectComponent options={["Panama City","Chicago City","New Delhi","Sydne City"]} placeholder="Select" />
                </div>
              </div>
              <div className="col">
                <div className="form-inner">
                  <label>Min. Bed*</label>
                  <SelectComponent options={["03 Beds","05 Beds"]} placeholder="Select" />
                </div>
              </div>
              <div className="col">
                <div className="form-inner">
                  <label>Price*</label>
                  <SelectComponent options={["$4,345 - $12,456","$7,345 - $17,456","$9,345 - $19,456"]} placeholder="Select" />
                </div>
              </div>
              <div className="col d-flex align-items-end">
                <div className="form-inner d-flex align-items-center justify-content-md-between">
                  <button className="primary-btn3" type="submit">
                    Sale
                  </button>
                  <button className="primary-btn3" type="submit">
                    Rent
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Home6Banner
