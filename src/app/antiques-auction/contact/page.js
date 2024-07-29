import Breadcrumb5 from "@/components/common/Breadcrumb5";
import InnerpageFooter5 from "@/components/footer/InnerpageFooter5";
import InnerPageHeader5 from "@/components/header/InnerPageHeader5";
import React from "react";

const Contactpage = () => {
  return (
    <>
      <InnerPageHeader5 />
      <Breadcrumb5 pagetitle="Contact Us" currentPage="Contact Us" />
      <div className="contact-page pt-110 mb-110">
        <div className="container">
          <div className="row g-lg-4 gy-5 align-items-center">
            <div className="col-lg-5">
              <div className="single-contact mb-40">
                <div className="title">
                  <h6>To Know More</h6>
                </div>
                <div className="icon">
                  <svg
                    width={25}
                    height={25}
                    viewBox="0 0 25 25"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M23.6334 18.8782L18.8769 15.7061C18.2733 15.3068 17.4641 15.4382 17.0179 16.0081L15.6324 17.7895C15.5462 17.903 15.422 17.9817 15.2825 18.0111C15.143 18.0404 14.9977 18.0185 14.873 17.9493L14.6095 17.804C13.7358 17.3278 12.6487 16.7349 10.4585 14.5438C8.26818 12.3528 7.67412 11.2649 7.1979 10.3928L7.05339 10.1292C6.98323 10.0047 6.96045 9.85896 6.98923 9.71893C7.01801 9.57889 7.09642 9.45397 7.21002 9.36717L8.99024 7.98207C9.55985 7.53577 9.69142 6.72689 9.29258 6.12309L6.12055 1.3666C5.71179 0.751747 4.89171 0.56717 4.25891 0.947566L2.26992 2.14236C1.64496 2.50975 1.18647 3.10479 0.990549 3.80276C0.274318 6.41244 0.813132 10.9163 7.44778 17.5518C12.7255 22.8291 16.6545 24.2483 19.3551 24.2483C19.9766 24.2509 20.5956 24.1701 21.1956 24.0078C21.8937 23.8122 22.4889 23.3536 22.856 22.7285L24.052 20.7407C24.433 20.1077 24.2485 19.2872 23.6334 18.8782ZM23.3772 20.3389L22.184 22.3278C21.9203 22.7791 21.4923 23.1108 20.9896 23.2536C18.5804 23.9151 14.3714 23.3672 8.00188 16.9977C1.63234 10.6281 1.08454 6.4195 1.74597 4.00996C1.88899 3.5066 2.22113 3.07805 2.67289 2.81398L4.66188 1.62075C4.93645 1.45554 5.29239 1.53562 5.46976 1.80244L7.19285 4.38939L8.63908 6.55851C8.81228 6.82041 8.75537 7.17144 8.50829 7.36524L6.72765 8.75034C6.18576 9.1647 6.03101 9.91443 6.36465 10.5095L6.50604 10.7664C7.00653 11.6843 7.62878 12.8262 9.90051 15.0976C12.1722 17.3689 13.3138 17.9912 14.2313 18.4916L14.4886 18.6334C15.0836 18.967 15.8333 18.8123 16.2477 18.2704L17.6328 16.4897C17.8266 16.2428 18.1775 16.1859 18.4395 16.3589L23.1956 19.531C23.4626 19.7082 23.5427 20.0643 23.3772 20.3389ZM14.066 4.66786C17.741 4.67195 20.7192 7.65018 20.7233 11.3252C20.7233 11.5415 20.8986 11.7168 21.1149 11.7168C21.3312 11.7168 21.5065 11.5415 21.5065 11.3252C21.502 7.21779 18.1734 3.88918 14.066 3.88468C13.8497 3.88468 13.6744 4.05998 13.6744 4.27627C13.6744 4.49256 13.8497 4.66786 14.066 4.66786Z" />
                    <path d="M14.0654 7.01756C16.4433 7.02036 18.3703 8.94735 18.3731 11.3253C18.3731 11.4291 18.4144 11.5287 18.4878 11.6022C18.5613 11.6756 18.6609 11.7169 18.7647 11.7169C18.8686 11.7169 18.9682 11.6756 19.0416 11.6022C19.1151 11.5287 19.1563 11.4291 19.1563 11.3253C19.1531 8.51496 16.8757 6.23759 14.0654 6.23438C13.8491 6.23438 13.6738 6.40968 13.6738 6.62597C13.6738 6.84226 13.8491 7.01756 14.0654 7.01756Z" />
                    <path d="M14.0654 9.36668C15.1463 9.36797 16.0222 10.2439 16.0235 11.3247C16.0235 11.4286 16.0647 11.5282 16.1382 11.6016C16.2116 11.6751 16.3112 11.7163 16.4151 11.7163C16.5189 11.7163 16.6185 11.6751 16.692 11.6016C16.7654 11.5282 16.8067 11.4286 16.8067 11.3247C16.8049 9.81151 15.5787 8.58519 14.0654 8.5835C13.8491 8.5835 13.6738 8.7588 13.6738 8.97509C13.6738 9.19138 13.8491 9.36668 14.0654 9.36668Z" />
                  </svg>
                </div>
                <div className="content">
                  <h6>
                    <a href="tel:">+990-737 621 432</a>
                  </h6>
                  <h6>
                    <a href="tel:">+990-737 621 432</a>
                  </h6>
                </div>
              </div>
              <div className="single-contact mb-40">
                <div className="title">
                  <h6>Email Now</h6>
                </div>
                <div className="icon">
                  <svg
                    width={25}
                    height={25}
                    viewBox="0 0 25 25"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M24.1347 10.873C23.7109 7.79438 22.0783 5.0098 19.5961 3.13181C17.114 1.25381 13.9855 0.436246 10.899 0.858959C7.8125 1.28167 5.02075 2.91004 3.13793 5.38584C1.25511 7.86163 0.435439 10.9821 0.859239 14.0607C1.20704 16.6085 2.38026 18.973 4.20016 20.7942C6.02006 22.6154 8.38689 23.7933 10.9401 24.1485C11.4635 24.2163 11.9907 24.2502 12.5185 24.25C14.6477 24.2538 16.7371 23.6744 18.5587 22.5749C18.6521 22.5248 18.7343 22.4563 18.8003 22.3736C18.8664 22.2909 18.9149 22.1956 18.9429 22.0936C18.9709 21.9916 18.9779 21.885 18.9634 21.7802C18.9488 21.6755 18.9131 21.5747 18.8584 21.4842C18.8037 21.3936 18.7311 21.315 18.645 21.2533C18.5589 21.1915 18.4612 21.1478 18.3577 21.1249C18.2542 21.1019 18.1471 21.1002 18.0429 21.1198C17.9387 21.1394 17.8396 21.1798 17.7515 21.2388C15.6877 22.4762 13.251 22.9441 10.8741 22.5595C8.49724 22.1749 6.33388 20.9626 4.76815 19.1378C3.20242 17.3131 2.33564 14.9939 2.32168 12.5922C2.30773 10.1904 3.14751 7.86139 4.69193 6.01866C6.23635 4.17593 8.38547 2.93869 10.7578 2.5266C13.13 2.11452 15.572 2.55425 17.65 3.76774C19.728 4.98122 21.3077 6.88994 22.1086 9.15501C22.9095 11.4201 22.8798 13.8949 22.0247 16.1402C21.8851 16.5069 21.621 16.8133 21.2785 17.006C20.936 17.1988 20.5366 17.2658 20.1497 17.1953C19.7628 17.1249 19.4128 16.9215 19.1607 16.6204C18.9085 16.3194 18.77 15.9398 18.7693 15.5475V7.06994C18.7693 6.86283 18.6868 6.6642 18.54 6.51775C18.3932 6.3713 18.194 6.28902 17.9864 6.28902C17.7787 6.28902 17.5796 6.3713 17.4328 6.51775C17.286 6.6642 17.2035 6.86283 17.2035 7.06994V8.41779C16.3562 7.45612 15.2332 6.7773 13.9864 6.47319C12.7396 6.16908 11.4293 6.25436 10.2327 6.71751C9.03614 7.18065 8.0111 7.99929 7.29633 9.06263C6.58156 10.126 6.21156 11.3827 6.23642 12.6626C6.26128 13.9426 6.67979 15.1841 7.43531 16.219C8.19083 17.254 9.24688 18.0324 10.4605 18.449C11.6742 18.8655 12.9869 18.9001 14.2209 18.5481C15.455 18.1961 16.5508 17.4744 17.3601 16.4807C17.5543 17.1278 17.947 17.6978 18.4831 18.1106C19.0191 18.5234 19.6714 18.7581 20.3482 18.7817C21.025 18.8053 21.6922 18.6167 22.2558 18.2423C22.8195 17.8679 23.2512 17.3266 23.4903 16.6947C24.1893 14.8383 24.4108 12.8368 24.1347 10.873ZM12.5059 17.2218C11.5769 17.2218 10.6687 16.947 9.89615 16.4321C9.12365 15.9173 8.52155 15.1855 8.16601 14.3294C7.81047 13.4732 7.71744 12.5311 7.89869 11.6222C8.07995 10.7133 8.52734 9.87846 9.1843 9.22319C9.84126 8.56791 10.6783 8.12167 11.5895 7.94088C12.5007 7.76009 13.4453 7.85288 14.3036 8.20751C15.162 8.56214 15.8956 9.16269 16.4118 9.93321C16.928 10.7037 17.2035 11.6096 17.2035 12.5363C17.2022 13.7786 16.7069 14.9696 15.8262 15.8481C14.9455 16.7265 13.7514 17.2205 12.5059 17.2218Z" />
                  </svg>
                </div>
                <div className="content">
                  <h6>
                    <a href="mailto:info@example.com">info@example.com</a>
                  </h6>
                  <h6>
                    <a href="mailto:example@example.com">example@example.com</a>
                  </h6>
                </div>
              </div>
              <div className="single-contact">
                <div className="title">
                  <h6>Location</h6>
                </div>
                <div className="icon">
                  <svg
                    width={19}
                    height={25}
                    viewBox="0 0 19 25"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M15.5849 13.8806C14.7868 15.4404 13.7053 16.9944 12.5995 18.3897C11.5505 19.7051 10.4289 20.9652 9.23947 22.1644C8.05002 20.9652 6.92838 19.7051 5.87941 18.3897C4.7736 16.9944 3.69217 15.4404 2.89404 13.8806C2.08677 12.3047 1.62373 10.8286 1.62373 9.5625C1.62373 7.61482 2.4261 5.7469 3.85433 4.36968C5.28256 2.99246 7.21965 2.21875 9.23947 2.21875C11.2593 2.21875 13.1964 2.99246 14.6246 4.36968C16.0528 5.7469 16.8552 7.61482 16.8552 9.5625C16.8552 10.8286 16.3907 12.3047 15.5849 13.8806ZM9.23947 24.25C9.23947 24.25 18.3784 15.8987 18.3784 9.5625C18.3784 7.22528 17.4155 4.98379 15.7016 3.33112C13.9878 1.67846 11.6633 0.75 9.23947 0.75C6.81569 0.75 4.49118 1.67846 2.7773 3.33112C1.06343 4.98379 0.100586 7.22528 0.100586 9.5625C0.100586 15.8987 9.23947 24.25 9.23947 24.25Z" />
                    <path d="M9.24132 12.5C8.43339 12.5 7.65855 12.1905 7.08726 11.6396C6.51597 11.0887 6.19502 10.3416 6.19502 9.5625C6.19502 8.78343 6.51597 8.03626 7.08726 7.48537C7.65855 6.93449 8.43339 6.625 9.24132 6.625C10.0492 6.625 10.8241 6.93449 11.3954 7.48537C11.9667 8.03626 12.2876 8.78343 12.2876 9.5625C12.2876 10.3416 11.9667 11.0887 11.3954 11.6396C10.8241 12.1905 10.0492 12.5 9.24132 12.5ZM9.24132 13.9688C10.4532 13.9688 11.6155 13.5045 12.4724 12.6782C13.3293 11.8519 13.8108 10.7311 13.8108 9.5625C13.8108 8.39389 13.3293 7.27314 12.4724 6.44681C11.6155 5.62048 10.4532 5.15625 9.24132 5.15625C8.02943 5.15625 6.86717 5.62048 6.01023 6.44681C5.1533 7.27314 4.67188 8.39389 4.67188 9.5625C4.67188 10.7311 5.1533 11.8519 6.01023 12.6782C6.86717 13.5045 8.02943 13.9688 9.24132 13.9688Z" />
                  </svg>
                </div>
                <div className="content">
                  <h6>
                    <a href="#">
                      168/170, Avenue 01, Old York Drive Rich Mirpur DOHS,
                      Bangladesh
                    </a>
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="contact-form-area">
                <form>
                  <div className="row">
                    <div className="col-md-12 mb-20">
                      <div className="form-inner">
                        <label>Name*</label>
                        <input type="text" placeholder="Daniel Scoot" />
                      </div>
                    </div>
                    <div className="col-md-6 mb-20">
                      <div className="form-inner">
                        <label>Phone</label>
                        <input type="text" placeholder={+8801700000000} />
                      </div>
                    </div>
                    <div className="col-md-6 mb-20">
                      <div className="form-inner">
                        <label>Email</label>
                        <input type="email" placeholder="info@example.com" />
                      </div>
                    </div>
                    <div className="col-md-12 mb-30">
                      <div className="form-inner">
                        <label>Write Your Massage*</label>
                        <textarea
                          placeholder="What’s on your mind"
                          defaultValue={""}
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-inner">
                        <button className="primary-btn btn-hover" type="submit">
                          Submit Now
                          <span />
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="contact-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3649.5647631857846!2d90.36311167605992!3d23.83407118555764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c14c8682a473%3A0xa6c74743d52adb88!2sEgens%20Lab!5e0!3m2!1sen!2sbd!4v1700138349574!5m2!1sen!2sbd"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      <InnerpageFooter5 />
    </>
  );
};

export default Contactpage;
