
import React from 'react'
import storeData from "../../../data/sotre-data.json"
import SelectComponent from '@/components/common/SelectComponent'
import Footer6 from '@/components/footer/Footer5'
import InnerPageHeader5 from '@/components/header/InnerPageHeader5'
import Breadcrumb5 from '@/components/common/Breadcrumb5'
import Link from 'next/link'


const sellerList = storeData["sellerList"]
const StoreListPage = () => {
  return (
<>
 <InnerPageHeader5/>
 <Breadcrumb5 pagetitle="Seller List" currentPage="Seller List" />

  <div className="store-list-section pt-110 mb-110">
    <div className="container">
      <div className="auction-grid-title-section mb-40">
        <h6>Showing 1–12 of 101 results</h6>
        <div className="filter-selector">
          <div className="selector">
            <SelectComponent options={["Default Sorting","Price Low to High","Price High to Low"]} placeholder={"Default Sorting"}/>
          </div>
        </div>
      </div>
      <div className="row g-4 mb-60">
      {
            sellerList.map((data)=>{
              const {sellerId, coverPhoto,  profile_photo,  total_item,  name, address, phone} = data
              return (
                <div key={sellerId} className="col-xl-3 col-lg-4 col-md-6">
                  <div  className="store-card">
                  <div className="store-card-cover-photo">
                    <img src={coverPhoto} alt="" />
                  </div>
                  <div className="store-card-content">
                    <div className="profile-area">
                      <div className="profile-img">
                        <img src={profile_photo} alt="" />
                      </div>
                      <div className="profile-content">
                        <h5><Link href="/gadget-and-technology/store-details">{name}</Link></h5>
                        <span>{total_item} Item</span>
                      </div>
                    </div>
                    <ul className="contact-area">
                      <li className="single-contact">
                        <div className="icon">
                          <svg width={23} height={23} viewBox="0 0 23 23" xmlns="http://www.w3.org/2000/svg">
                            <g>
                              <path d="M11.2322 21.0436C11.263 21.085 11.3028 21.1187 11.3487 21.1422C11.3946 21.1657 11.4452 21.1783 11.4968 21.1791H11.5012C11.5519 21.179 11.602 21.1675 11.6476 21.1452C11.6933 21.123 11.7333 21.0907 11.7645 21.0507C12.0415 20.6974 18.5453 12.3383 18.5453 7.04413C18.5453 5.17591 17.8031 3.38421 16.4821 2.06318C15.1611 0.742147 13.3694 0 11.5012 0C9.63294 0 7.84124 0.742147 6.52021 2.06318C5.19918 3.38421 4.45703 5.17591 4.45703 7.04413C4.45703 9.07165 5.60105 12.0489 7.85773 15.8926C9.52489 18.7322 11.2154 21.0209 11.2322 21.0436ZM11.5012 0.669466C13.1913 0.67134 14.8116 1.34358 16.0067 2.5387C17.2018 3.73381 17.874 5.35419 17.8758 7.04432C17.8758 11.5142 12.7542 18.6202 11.508 20.2825C10.277 18.5559 5.1265 11.0971 5.1265 7.04432C5.12832 5.35419 5.80051 3.73381 6.99559 2.5387C8.19067 1.34358 9.81103 0.67134 11.5012 0.669466Z" />
                              <path d="M15.5502 7.04463C15.5503 6.24374 15.3128 5.46083 14.8679 4.79489C14.423 4.12896 13.7906 3.60992 13.0506 3.30341C12.3107 2.9969 11.4965 2.91668 10.711 3.0729C9.92553 3.22912 9.20399 3.61477 8.63767 4.18107C8.07134 4.74737 7.68566 5.46889 7.5294 6.25438C7.37314 7.03988 7.45332 7.85407 7.7598 8.594C8.06628 9.33392 8.58529 9.96635 9.2512 10.4113C9.91711 10.8563 10.7 11.0938 11.5009 11.0938C12.5745 11.0926 13.6037 10.6656 14.3628 9.90652C15.122 9.14742 15.549 8.11818 15.5502 7.04463ZM11.5009 10.4243C10.8324 10.4243 10.179 10.2261 9.62314 9.85466C9.06732 9.48327 8.63411 8.9554 8.37831 8.3378C8.1225 7.72021 8.05558 7.04062 8.18601 6.38499C8.31643 5.72936 8.63835 5.12713 9.11105 4.65445C9.58375 4.18178 10.186 3.8599 10.8416 3.72951C11.4973 3.59911 12.1769 3.66607 12.7944 3.92192C13.412 4.17776 13.9399 4.61099 14.3112 5.16683C14.6826 5.72267 14.8808 6.37615 14.8807 7.04463C14.8797 7.94067 14.5232 8.79972 13.8896 9.4333C13.256 10.0669 12.3969 10.4233 11.5009 10.4243ZM14.914 18.8972C14.827 18.8887 14.7401 18.9145 14.6718 18.9691C14.6035 19.0238 14.5594 19.103 14.5487 19.1898C14.5381 19.2766 14.5618 19.3641 14.6149 19.4337C14.6679 19.5032 14.746 19.5492 14.8325 19.5619C17.7145 19.9156 18.647 20.5828 18.647 20.8504C18.647 21.3528 16.1248 22.3308 11.5009 22.3308C6.87699 22.3308 4.35482 21.3521 4.35482 20.8504C4.35482 20.5635 5.26931 19.9764 7.72377 19.6214C7.8099 19.6068 7.88689 19.559 7.93833 19.4884C7.98977 19.4178 8.01157 19.3299 7.99909 19.2434C7.98661 19.1569 7.94084 19.0788 7.87154 19.0256C7.80224 18.9724 7.71489 18.9483 7.62813 18.9586C5.83013 19.219 3.68555 19.7582 3.68555 20.8504C3.68555 22.4278 8.35938 23.0003 11.5011 23.0003C14.6428 23.0003 19.3166 22.4278 19.3166 20.8504C19.3164 19.6212 16.5582 19.0992 14.914 18.8972Z" />
                            </g>
                          </svg>
                        </div>
                        <div className="content">
                          <h6><a href="https://maps.app.goo.gl/kqJUoD2Fa4GJ2aPWA">{address}</a></h6>
                        </div>
                      </li>
                      <li className="single-contact">
                        <div className="icon">
                          <svg width={23} height={23} viewBox="0 0 23 23" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22.3981 17.7437L17.7424 14.639C17.1516 14.2481 16.3597 14.3767 15.9229 14.9345L14.5668 16.6781C14.4824 16.7893 14.3609 16.8663 14.2243 16.895C14.0878 16.9238 13.9455 16.9023 13.8235 16.8345L13.5656 16.6923C12.7104 16.2262 11.6464 15.6459 9.50256 13.5013C7.35874 11.3567 6.77728 10.2919 6.31116 9.4383L6.16971 9.18034C6.10104 9.05841 6.07874 8.91578 6.10691 8.77872C6.13508 8.64165 6.21183 8.51938 6.32301 8.43442L8.06549 7.07869C8.62302 6.64186 8.7518 5.85013 8.36141 5.25914L5.25665 0.603526C4.85656 0.00170956 4.05387 -0.178952 3.43449 0.193376L1.48768 1.36283C0.875981 1.72243 0.427217 2.30485 0.235448 2.98802C-0.465594 5.54235 0.061793 9.95073 6.55574 16.4454C11.7215 21.6108 15.5672 22.9999 18.2105 22.9999C18.8188 23.0025 19.4248 22.9234 20.012 22.7646C20.6953 22.5731 21.2778 22.1243 21.6372 21.5124L22.8078 19.5667C23.1807 18.9472 23.0001 18.144 22.3981 17.7437ZM22.1474 19.1734L20.9794 21.1202C20.7214 21.5619 20.3024 21.8866 19.8104 22.0264C17.4523 22.6738 13.3325 22.1375 7.09808 15.9031C0.863632 9.66865 0.327441 5.54927 0.97485 3.19083C1.11484 2.69814 1.43993 2.27868 1.88211 2.02021L3.82892 0.852285C4.09767 0.690578 4.44605 0.768961 4.61966 1.03012L6.30622 3.56221L7.72177 5.68533C7.8913 5.94168 7.8356 6.28526 7.59376 6.47495L5.85088 7.83067C5.32048 8.23624 5.16902 8.97007 5.49557 9.55249L5.63397 9.80394C6.12385 10.7024 6.7329 11.8201 8.95645 14.0433C11.18 16.2664 12.2973 16.8755 13.1954 17.3654L13.4472 17.5041C14.0296 17.8306 14.7635 17.6792 15.169 17.1488L16.5247 15.4059C16.7145 15.1642 17.0579 15.1086 17.3144 15.2779L21.9696 18.3827C22.2309 18.5562 22.3093 18.9047 22.1474 19.1734ZM13.0336 3.83478C16.6307 3.83877 19.5457 6.75384 19.5497 10.351C19.5497 10.5627 19.7213 10.7342 19.933 10.7342C20.1447 10.7342 20.3163 10.5627 20.3163 10.351C20.3119 6.33062 17.0539 3.0726 13.0336 3.0682C12.8219 3.0682 12.6503 3.23979 12.6503 3.45149C12.6503 3.66319 12.8219 3.83478 13.0336 3.83478Z" />
                            <path d="M13.0337 6.13474C15.3612 6.13748 17.2473 8.02361 17.25 10.3511C17.25 10.4528 17.2904 10.5502 17.3623 10.6221C17.4342 10.694 17.5317 10.7344 17.6333 10.7344C17.735 10.7344 17.8325 10.694 17.9044 10.6221C17.9762 10.5502 18.0166 10.4528 18.0166 10.3511C18.0134 7.60038 15.7843 5.37131 13.0337 5.36816C12.822 5.36816 12.6504 5.53975 12.6504 5.75145C12.6504 5.96315 12.822 6.13474 13.0337 6.13474Z" />
                            <path d="M13.0337 8.43406C14.0916 8.43532 14.9489 9.29263 14.9502 10.3506C14.9502 10.4522 14.9906 10.5497 15.0625 10.6216C15.1344 10.6935 15.2318 10.7339 15.3335 10.7339C15.4352 10.7339 15.5326 10.6935 15.6045 10.6216C15.6764 10.5497 15.7168 10.4522 15.7168 10.3506C15.7151 8.86945 14.5148 7.66914 13.0337 7.66748C12.822 7.66748 12.6504 7.83907 12.6504 8.05077C12.6504 8.26247 12.822 8.43406 13.0337 8.43406Z" />
                          </svg>
                        </div>
                        <div className="content">
                          {
                            phone.map((e)=>{
                              return (
                                <h6 key={e}><a href={`tel:${e}`}>{e}</a></h6>
                              )
                            })
                          }
                        </div>
                      </li>
                    </ul>
                    <Link className="primary-btn btn-hover" href="/gadget-and-technology/store-details">
                      View Store
                      <i className="bi bi-arrow-right" />
                      <span />
                    </Link>
                  </div>
                  </div>
                </div>
              )
            })
          }
   
      </div>
      <div className="row">
        <div className="col-lg-12 d-flex justify-content-center wow animate fadeInUp" data-wow-delay="400ms" data-wow-duration="1500ms">
          <div className="inner-pagination-area">
            <ul className="paginations">
              <li className="page-item active">
                <a href="#">01</a>
              </li>
              <li className="page-item">
                <a href="#">02</a>
              </li>
              <li className="page-item">
                <a href="#">03</a>
              </li>
              <li className="page-item paginations-button">
                <a href="#">
                  <svg width={16} height={13} viewBox="0 0 16 13" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.557 10.1026L1.34284 1.89603M15.557 10.1026C12.9386 8.59083 10.8853 3.68154 12.7282 0.489511M15.557 10.1026C12.9386 8.59083 7.66029 9.2674 5.81744 12.4593" strokeWidth="0.96" strokeLinecap="round" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>

<Footer6/>

</>

  )
}

export default StoreListPage
