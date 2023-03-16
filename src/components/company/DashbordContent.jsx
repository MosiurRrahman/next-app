import Link from "next/link";
import React from "react";

function DashbordContent() {
  return (
    <>
      <div className="col-lg-12">
        <div className="dashboard-inner">
          <div className="author-and-action-btn-area two mb-40">
            <div className="author-area two">
              <div className="author-img">
                <img src="/assets/images/bg/company-img2.png" alt="" />
              </div>
              <div className="author-content">
                <span>Hello,</span>
                <h4>Elite Hangstroman</h4>
              </div>
            </div>
            <div className="action-btn-group">
              <ul>
                <li>
                  <Link legacyBehavior href="/company-profile">
                    <a>
                      <span>
                        <img src="/assets/images/icon/edit2.svg" alt="" />
                      </span>
                      Edit Profile
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="counter-area">
            <div className="row g-4 justify-content-center mb-30">
              <div className="col-lg-3 col-sm-6">
                <div className="counter-single">
                  <div className="counter-icon">
                    <img src="/assets/images/icon/tt-applied.svg" alt="image" />
                  </div>
                  <div className="coundown">
                    <p>Total Applied</p>
                    <div className="d-flex align-items-center">
                      <h3 className="odometer">30</h3>
                      <span>+</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="counter-single two">
                  <div className="counter-icon">
                    <img src="/assets/images/icon/save-job.svg" alt="image" />
                  </div>
                  <div className="coundown">
                    <p>Live Jobs</p>
                    <div className="d-flex align-items-center">
                      <h3 className="odometer">80</h3>
                      <span>+</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="counter-single three">
                  <div className="counter-icon">
                    <img
                      src="/assets/images/icon/pending-icon.svg"
                      alt="image"
                    />
                  </div>
                  <div className="coundown">
                    <p>Pending Job</p>
                    <div className="d-flex align-items-center">
                      <h3 className="odometer">120</h3>
                      <span>+</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="counter-single four">
                  <div className="counter-icon">
                    <img
                      src="/assets/images/icon/closed-icon.svg"
                      alt="image"
                    />
                  </div>
                  <div className="coundown">
                    <p>Closed Jobs</p>
                    <div className="d-flex align-items-center">
                      <h3 className="odometer">900</h3>
                      <span>+</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row g-4 justify-content-cente">
              <div className="col-lg-3 col-sm-6">
                <div className="counter-single">
                  <div className="counter-icon">
                    <img
                      src="/assets/images/icon/total-view-icon.svg"
                      alt="image"
                    />
                  </div>
                  <div className="coundown">
                    <p>Total View</p>
                    <div className="d-flex align-items-center">
                      <h3 className="odometer">2500</h3>
                      <span>+</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="counter-single two">
                  <div className="counter-icon">
                    <img
                      src="/assets/images/icon/follow-icon.svg"
                      alt="image"
                    />
                  </div>
                  <div className="coundown">
                    <p>Our Followers</p>
                    <div className="d-flex align-items-center">
                      <h3 className="odometer">250</h3>
                      <span>+</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="counter-single three">
                  <div className="counter-icon">
                    <img
                      src="/assets/images/icon/highlight-icon.svg"
                      alt="image"
                    />
                  </div>
                  <div className="coundown">
                    <p>Highlighted Jobs</p>
                    <div className="d-flex align-items-center">
                      <h3 className="odometer">150</h3>
                      <span>+</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="counter-single five">
                  <div className="counter-icon">
                    <img
                      src="/assets/images/icon/featured-icon.svg"
                      alt="image"
                    />
                  </div>
                  <div className="coundown">
                    <p>Our Followers</p>
                    <div className="d-flex align-items-center">
                      <h3 className="odometer">500</h3>
                      <span>+</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="new-applied-job-area">
            <h5>New Applied List:</h5>
            <div className="table-wrapper2">
              <table className="eg-table table category-table mb-0">
                <tbody>
                  <tr>
                    <td data-label="Candidate Name">
                      <div className="employee-info">
                        <div className="employee-img">
                          <img
                            src="/assets/images/bg/employee-img1.png"
                            alt=""
                          />
                        </div>
                        <div className="employee-content">
                          <button
                            type="button"
                            className="btn btn-primary"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                          >
                            Mr. Willium Jacson
                          </button>
                          {/* Modal */}
                          <div
                            className="modal fade"
                            id="exampleModal"
                            tabIndex={-1}
                            aria-hidden="true"
                          >
                            <div className="modal-dialog">
                              <div className="row justify-content-center g-lg-4 gy-5 mb-90">
                                <div className="col-lg-10">
                                  <div className="resume-area">
                                    <div className="row g-4 mb-40">
                                      <div className="col-lg-6">
                                        <div className="author-area">
                                          <div className="author-img">
                                            <img
                                              src="/assets/images/bg/resume-author.png"
                                              alt=""
                                            />
                                          </div>
                                          <div className="name-degination">
                                            <h4>Mr. Jacoline Frankly</h4>
                                            <span>UI/UX Engineer</span>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col-lg-6">
                                        <div className="contact-area">
                                          <h4>Contact Info</h4>
                                          <ul>
                                            <li>
                                              Phone:
                                              <a href="#">
                                                +880-177 443 5455{" "}
                                                <span>
                                                  <img
                                                    src="/assets/images/icon/phone-5.svg"
                                                    alt=""
                                                  />
                                                </span>
                                              </a>
                                            </li>
                                            <li>
                                              Email:
                                              <a href="#">
                                                info@example.com{" "}
                                                <span>
                                                  <img
                                                    src="/assets/images/icon/envlop-5.svg"
                                                    alt=""
                                                  />
                                                </span>
                                              </a>
                                            </li>
                                            <li>
                                              Website:
                                              <a href="#">
                                                www.infositeexample.com{" "}
                                                <span>
                                                  <img
                                                    src="/assets/images/icon/web-5.svg "
                                                    alt=""
                                                  />
                                                </span>
                                              </a>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-lg-12">
                                      <div className="single-information-area">
                                        <div className="section-title">
                                          <h6>Career Objective</h6>
                                          <div className="dash" />
                                        </div>
                                        <div className="description">
                                          <p>
                                            I'm a passionate UI/UX designer and
                                            can bring innovative ideas &amp;
                                            concepts to life for client-based
                                            design projects. I have more than 3
                                            years of design experience in
                                            digital/e-commerce. I experienced at
                                            tackle various needs from landing
                                            page designs, web app interfaces. I
                                            have skills in User Experience
                                            Design (UXD), user-centered Design,
                                            Interaction and Visual Design for
                                            websites, applications, web, and
                                            mobile products, wireframes,
                                            mock-ups, qualitative and
                                            quantitative user studies, usability
                                            analysis, and informal usability
                                            audits.
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-lg-12">
                                      <div className="single-information-area">
                                        <div className="section-title">
                                          <h6>Personal Information</h6>
                                          <div className="dash" />
                                        </div>
                                        <div className="row g-4">
                                          <div className="col-lg-6 devaider1 position-relative">
                                            <div className="informations">
                                              <ul>
                                                <li>
                                                  <span>Father’s Name:</span>{" "}
                                                  Mr. Norman Frankly
                                                </li>
                                                <li>
                                                  <span>Date of Birth:</span> 03
                                                  January,1998
                                                </li>
                                                <li>
                                                  <span>Nationality:</span>{" "}
                                                  Bangladeshi
                                                </li>
                                                <li>
                                                  <span>Marital Status:</span>{" "}
                                                  Unmarried
                                                </li>
                                                <li>
                                                  <span>Height:</span> 5’ 5’’
                                                </li>
                                                <li>
                                                  <span>Blood Group:</span> O
                                                  ve+
                                                </li>
                                                <li>
                                                  <span>
                                                    Permanent Address:
                                                  </span>{" "}
                                                  Village: Mirpur-12 Block-C,
                                                  Thana: Pallavi, District:
                                                  Dhaka, Division: Dhaka
                                                </li>
                                              </ul>
                                            </div>
                                          </div>
                                          <div className="col-lg-6 pl-40">
                                            <div className="informations d-flex justify-content-end">
                                              <ul>
                                                <li>
                                                  <span>Mother’s Name:</span>{" "}
                                                  Mrs. Macoline Frankly
                                                </li>
                                                <li>
                                                  <span>National ID:</span> 88
                                                  9919 6712 8762
                                                </li>
                                                <li>
                                                  <span>Religion:</span> Islam
                                                </li>
                                                <li>
                                                  <span>Gender:</span> Male
                                                </li>
                                                <li>
                                                  <span>Weight:</span> 75 KG
                                                </li>
                                                <li>
                                                  <span>Height:</span> 5’ 5’’
                                                </li>
                                                <li>
                                                  <span>Present Address:</span>{" "}
                                                  Village: Mirpur DOSH, Block-C,
                                                  Avenue-02, Thana: Pallavi,
                                                  District: Dhaka, Division:
                                                  Dhaka.
                                                </li>
                                              </ul>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-lg-12">
                                      <div className="single-information-area">
                                        <div className="section-title">
                                          <h6>Educational Qualification</h6>
                                          <div className="dash" />
                                        </div>
                                        <div className="educational-qualification mb-30">
                                          <div className="passing-year">
                                            <p>
                                              <span>01.</span>April, 2016- May,
                                              2020
                                            </p>
                                            <span />
                                          </div>
                                          <div className="education-dt">
                                            <h6>
                                              Royals Republic Science &amp;
                                              Technology University
                                            </h6>
                                            <ul>
                                              <li>
                                                <span>Education Level:</span>{" "}
                                                Graduation
                                              </li>
                                              <li>
                                                <span>My Major:</span> Bachelor
                                                Degree In CSE
                                              </li>
                                              <li>
                                                <span>Result/GPA:</span>{" "}
                                                3.75/4.00
                                              </li>
                                            </ul>
                                          </div>
                                        </div>
                                        <div className="educational-qualification">
                                          <div className="passing-year">
                                            <p>
                                              <span>02.</span>June, 2014- April,
                                              2016
                                            </p>
                                            <span />
                                          </div>
                                          <div className="education-dt">
                                            <h6>
                                              International Collegiate School
                                              &amp; College
                                            </h6>
                                            <ul>
                                              <li>
                                                <span>Education Level:</span>{" "}
                                                HSC
                                              </li>
                                              <li>
                                                <span>My Major:</span> Science
                                              </li>
                                              <li>
                                                <span>Result/GPA:</span>{" "}
                                                4.96/5.00
                                              </li>
                                            </ul>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-lg-12">
                                      <div className="single-information-area">
                                        <div className="section-title">
                                          <h6>Career Application</h6>
                                          <div className="dash" />
                                        </div>
                                        <div className="row g-4 ">
                                          <div className="col-lg-6 devaider1 position-relative">
                                            <div className="informations">
                                              <ul>
                                                <li>
                                                  <span>
                                                    Current Job Place:
                                                  </span>{" "}
                                                  Norland Tech of Industry
                                                </li>
                                                <li>
                                                  <span>Position:</span> UI/UX
                                                  Engineer
                                                </li>
                                                <li>
                                                  <span>Looking For:</span> Top
                                                  Level
                                                </li>
                                              </ul>
                                            </div>
                                          </div>
                                          <div className="col-lg-6 pl-40">
                                            <div className="informations">
                                              <ul>
                                                <li>
                                                  <span>Current Salary:</span>{" "}
                                                  30000/=
                                                </li>
                                                <li>
                                                  <span>Expected Salary:</span>{" "}
                                                  40000/=
                                                </li>
                                                <li>
                                                  <span>Available:</span> Full
                                                  Time
                                                </li>
                                              </ul>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-lg-12">
                                      <div className="single-information-area">
                                        <div className="section-title">
                                          <h6>Professionals Information</h6>
                                          <div className="dash" />
                                        </div>
                                        <div className="educational-qualification mb-30">
                                          <div className="passing-year">
                                            <p>
                                              <span>01.</span>April, 2021- May,
                                              2022
                                            </p>
                                            <span />
                                          </div>
                                          <div className="education-dt">
                                            <h6>
                                              Bistro.Tech Group of Industry
                                            </h6>
                                            <p className="position">
                                              <span>Position:</span> UI/UX
                                              Engineer ( Full-Time)
                                            </p>
                                            <div className="responsibility">
                                              <h6>Responsibility:</h6>
                                              <ul>
                                                <li>
                                                  Creating high quality landing
                                                  pages optimized for client
                                                  website brands.
                                                </li>
                                                <li>
                                                  Creating e-commerce
                                                  interfaces, design
                                                  enhancements, and overall
                                                  improved user experience of
                                                  existing sites
                                                </li>
                                              </ul>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="educational-qualification">
                                          <div className="passing-year">
                                            <p>
                                              <span>02.</span>April, 2022-
                                              Continuing
                                            </p>
                                            <span />
                                          </div>
                                          <div className="education-dt">
                                            <h6>Norland Tech of Industry</h6>
                                            <p className="position">
                                              <span>Position:</span> UI/UX
                                              Engineer ( Full-Time)
                                            </p>
                                            <div className="responsibility">
                                              <h6>Responsibility:</h6>
                                              <ul>
                                                <li>
                                                  Creating high quality landing
                                                  pages optimized for client
                                                  website brands.
                                                </li>
                                                <li>
                                                  Creating e-commerce
                                                  interfaces, design
                                                  enhancements, and overall
                                                  improved user experience of
                                                  existing sites
                                                </li>
                                              </ul>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-lg-12">
                                      <div className="single-information-area">
                                        <div className="section-title">
                                          <h6>Social Network</h6>
                                          <div className="dash" />
                                        </div>
                                        <div className="social-area">
                                          <ul>
                                            <li>
                                              <a href="https://www.facebook.com/">
                                                Facebook
                                              </a>
                                            </li>
                                            <li>
                                              <a href="https://twitter.com/">
                                                Twitter
                                              </a>
                                            </li>
                                            <li>
                                              <a href="https://www.linkedin.com/">
                                                Linkedin
                                              </a>
                                            </li>
                                            <li>
                                              <a href="https://www.pinterest.com/">
                                                Pinterest
                                              </a>
                                            </li>
                                            <li>
                                              <a href="https://dribbble.com/">
                                                Dribbble
                                              </a>
                                            </li>
                                            <li>
                                              <a href="https://www.behance.net/">
                                                Behance
                                              </a>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-lg-12">
                                      <div className="declaration-area">
                                        <h6>
                                          Declaration &amp; Authentication-
                                        </h6>
                                        <p>
                                          I do hereby declare that the
                                          information given above is true of my
                                          knowledge.
                                        </p>
                                      </div>
                                      <div className="gratitude-area">
                                        <span>Yours Faithful,</span>
                                        <h6>Jacoline Frankly</h6>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="dowunload-btn pt-50">
                                    <a className="primry-btn-2 lg-btn" href="#">
                                      Download CV
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <span>
                            <img
                              src="/assets/images/icon/company-2.svg"
                              alt=""
                            />
                            Internation Colliegate University
                          </span>
                          <p>
                            <span>Applied On:</span> 02 April, 2023
                          </p>
                        </div>
                      </div>
                    </td>
                    <td data-label="Carrer Summary">
                      <div className="carrer-summary">
                        <h6>
                          Colliegate Ltd <span>(Teaching Assistant)</span>
                        </h6>
                        <ul>
                          <li>
                            <span>Experience:</span> 2+ Years
                          </li>
                          <li>
                            <span>Salary:</span> $800/ Per Month
                          </li>
                        </ul>
                      </div>
                    </td>
                    <td data-label="Actions">
                      <div className="action-btn-group">
                        <ul>
                          <li>
                            <button>
                              <img
                                src="/assets/images/icon/shortlist-icon.svg"
                                alt=""
                              />{" "}
                              Shortlist
                            </button>
                          </li>
                          <li>
                            <button className="reject">
                              <img
                                src="/assets/images/icon/rejected-icon.svg"
                                alt=""
                              />{" "}
                              Rejected
                            </button>
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td data-label="Candidate Name">
                      <div className="employee-info">
                        <div className="employee-img">
                          <img
                            src="/assets/images/bg/employee-img2.png"
                            alt=""
                          />
                        </div>
                        <div className="employee-content">
                          <button
                            type="button"
                            className="btn btn-primary"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal1"
                          >
                            Robert Williamson{" "}
                          </button>
                          {/* Modal */}
                          <div
                            className="modal fade"
                            id="exampleModal1"
                            tabIndex={-1}
                            aria-hidden="true"
                          >
                            <div className="modal-dialog">
                              <div className="row justify-content-center g-lg-4 gy-5 mb-90">
                                <div className="col-lg-10">
                                  <div className="resume-area">
                                    <div className="row g-4 mb-40">
                                      <div className="col-lg-6">
                                        <div className="author-area">
                                          <div className="author-img">
                                            <img
                                              src="/assets/images/bg/resume-author.png"
                                              alt=""
                                            />
                                          </div>
                                          <div className="name-degination">
                                            <h4>Mr. Jacoline Frankly</h4>
                                            <span>UI/UX Engineer</span>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col-lg-6">
                                        <div className="contact-area">
                                          <h4>Contact Info</h4>
                                          <ul>
                                            <li>
                                              Phone:
                                              <a href="#">
                                                +880-177 443 5455{" "}
                                                <span>
                                                  <img
                                                    src="/assets/images/icon/phone-5.svg"
                                                    alt=""
                                                  />
                                                </span>
                                              </a>
                                            </li>
                                            <li>
                                              Email:
                                              <a href="#">
                                                info@example.com{" "}
                                                <span>
                                                  <img
                                                    src="/assets/images/icon/envlop-5.svg"
                                                    alt=""
                                                  />
                                                </span>
                                              </a>
                                            </li>
                                            <li>
                                              Website:
                                              <a href="#">
                                                www.infositeexample.com{" "}
                                                <span>
                                                  <img
                                                    src="/assets/images/icon/web-5.svg "
                                                    alt=""
                                                  />
                                                </span>
                                              </a>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-lg-12">
                                      <div className="single-information-area">
                                        <div className="section-title">
                                          <h6>Career Objective</h6>
                                          <div className="dash" />
                                        </div>
                                        <div className="description">
                                          <p>
                                            I'm a passionate UI/UX designer and
                                            can bring innovative ideas &amp;
                                            concepts to life for client-based
                                            design projects. I have more than 3
                                            years of design experience in
                                            digital/e-commerce. I experienced at
                                            tackle various needs from landing
                                            page designs, web app interfaces. I
                                            have skills in User Experience
                                            Design (UXD), user-centered Design,
                                            Interaction and Visual Design for
                                            websites, applications, web, and
                                            mobile products, wireframes,
                                            mock-ups, qualitative and
                                            quantitative user studies, usability
                                            analysis, and informal usability
                                            audits.
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-lg-12">
                                      <div className="single-information-area">
                                        <div className="section-title">
                                          <h6>Personal Information</h6>
                                          <div className="dash" />
                                        </div>
                                        <div className="row g-4">
                                          <div className="col-lg-6 devaider1 position-relative">
                                            <div className="informations">
                                              <ul>
                                                <li>
                                                  <span>Father’s Name:</span>{" "}
                                                  Mr. Norman Frankly
                                                </li>
                                                <li>
                                                  <span>Date of Birth:</span> 03
                                                  January,1998
                                                </li>
                                                <li>
                                                  <span>Nationality:</span>{" "}
                                                  Bangladeshi
                                                </li>
                                                <li>
                                                  <span>Marital Status:</span>{" "}
                                                  Unmarried
                                                </li>
                                                <li>
                                                  <span>Height:</span> 5’ 5’’
                                                </li>
                                                <li>
                                                  <span>Blood Group:</span> O
                                                  ve+
                                                </li>
                                                <li>
                                                  <span>
                                                    Permanent Address:
                                                  </span>{" "}
                                                  Village: Mirpur-12 Block-C,
                                                  Thana: Pallavi, District:
                                                  Dhaka, Division: Dhaka
                                                </li>
                                              </ul>
                                            </div>
                                          </div>
                                          <div className="col-lg-6 pl-40">
                                            <div className="informations d-flex justify-content-end">
                                              <ul>
                                                <li>
                                                  <span>Mother’s Name:</span>{" "}
                                                  Mrs. Macoline Frankly
                                                </li>
                                                <li>
                                                  <span>National ID:</span> 88
                                                  9919 6712 8762
                                                </li>
                                                <li>
                                                  <span>Religion:</span> Islam
                                                </li>
                                                <li>
                                                  <span>Gender:</span> Male
                                                </li>
                                                <li>
                                                  <span>Weight:</span> 75 KG
                                                </li>
                                                <li>
                                                  <span>Height:</span> 5’ 5’’
                                                </li>
                                                <li>
                                                  <span>Present Address:</span>{" "}
                                                  Village: Mirpur DOSH, Block-C,
                                                  Avenue-02, Thana: Pallavi,
                                                  District: Dhaka, Division:
                                                  Dhaka.
                                                </li>
                                              </ul>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-lg-12">
                                      <div className="single-information-area">
                                        <div className="section-title">
                                          <h6>Educational Qualification</h6>
                                          <div className="dash" />
                                        </div>
                                        <div className="educational-qualification mb-30">
                                          <div className="passing-year">
                                            <p>
                                              <span>01.</span>April, 2016- May,
                                              2020
                                            </p>
                                            <span />
                                          </div>
                                          <div className="education-dt">
                                            <h6>
                                              Royals Republic Science &amp;
                                              Technology University
                                            </h6>
                                            <ul>
                                              <li>
                                                <span>Education Level:</span>{" "}
                                                Graduation
                                              </li>
                                              <li>
                                                <span>My Major:</span> Bachelor
                                                Degree In CSE
                                              </li>
                                              <li>
                                                <span>Result/GPA:</span>{" "}
                                                3.75/4.00
                                              </li>
                                            </ul>
                                          </div>
                                        </div>
                                        <div className="educational-qualification">
                                          <div className="passing-year">
                                            <p>
                                              <span>02.</span>June, 2014- April,
                                              2016
                                            </p>
                                            <span />
                                          </div>
                                          <div className="education-dt">
                                            <h6>
                                              International Collegiate School
                                              &amp; College
                                            </h6>
                                            <ul>
                                              <li>
                                                <span>Education Level:</span>{" "}
                                                HSC
                                              </li>
                                              <li>
                                                <span>My Major:</span> Science
                                              </li>
                                              <li>
                                                <span>Result/GPA:</span>{" "}
                                                4.96/5.00
                                              </li>
                                            </ul>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-lg-12">
                                      <div className="single-information-area">
                                        <div className="section-title">
                                          <h6>Career Application</h6>
                                          <div className="dash" />
                                        </div>
                                        <div className="row g-4 ">
                                          <div className="col-lg-6 devaider1 position-relative">
                                            <div className="informations">
                                              <ul>
                                                <li>
                                                  <span>
                                                    Current Job Place:
                                                  </span>{" "}
                                                  Norland Tech of Industry
                                                </li>
                                                <li>
                                                  <span>Position:</span> UI/UX
                                                  Engineer
                                                </li>
                                                <li>
                                                  <span>Looking For:</span> Top
                                                  Level
                                                </li>
                                              </ul>
                                            </div>
                                          </div>
                                          <div className="col-lg-6 pl-40">
                                            <div className="informations">
                                              <ul>
                                                <li>
                                                  <span>Current Salary:</span>{" "}
                                                  30000/=
                                                </li>
                                                <li>
                                                  <span>Expected Salary:</span>{" "}
                                                  40000/=
                                                </li>
                                                <li>
                                                  <span>Available:</span> Full
                                                  Time
                                                </li>
                                              </ul>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-lg-12">
                                      <div className="single-information-area">
                                        <div className="section-title">
                                          <h6>Professionals Information</h6>
                                          <div className="dash" />
                                        </div>
                                        <div className="educational-qualification mb-30">
                                          <div className="passing-year">
                                            <p>
                                              <span>01.</span>April, 2021- May,
                                              2022
                                            </p>
                                            <span />
                                          </div>
                                          <div className="education-dt">
                                            <h6>
                                              Bistro.Tech Group of Industry
                                            </h6>
                                            <p className="position">
                                              <span>Position:</span> UI/UX
                                              Engineer ( Full-Time)
                                            </p>
                                            <div className="responsibility">
                                              <h6>Responsibility:</h6>
                                              <ul>
                                                <li>
                                                  Creating high quality landing
                                                  pages optimized for client
                                                  website brands.
                                                </li>
                                                <li>
                                                  Creating e-commerce
                                                  interfaces, design
                                                  enhancements, and overall
                                                  improved user experience of
                                                  existing sites
                                                </li>
                                              </ul>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="educational-qualification">
                                          <div className="passing-year">
                                            <p>
                                              <span>02.</span>April, 2022-
                                              Continuing
                                            </p>
                                            <span />
                                          </div>
                                          <div className="education-dt">
                                            <h6>Norland Tech of Industry</h6>
                                            <p className="position">
                                              <span>Position:</span> UI/UX
                                              Engineer ( Full-Time)
                                            </p>
                                            <div className="responsibility">
                                              <h6>Responsibility:</h6>
                                              <ul>
                                                <li>
                                                  Creating high quality landing
                                                  pages optimized for client
                                                  website brands.
                                                </li>
                                                <li>
                                                  Creating e-commerce
                                                  interfaces, design
                                                  enhancements, and overall
                                                  improved user experience of
                                                  existing sites
                                                </li>
                                              </ul>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-lg-12">
                                      <div className="single-information-area">
                                        <div className="section-title">
                                          <h6>Social Network</h6>
                                          <div className="dash" />
                                        </div>
                                        <div className="social-area">
                                          <ul>
                                            <li>
                                              <a href="https://www.facebook.com/">
                                                Facebook
                                              </a>
                                            </li>
                                            <li>
                                              <a href="https://twitter.com/">
                                                Twitter
                                              </a>
                                            </li>
                                            <li>
                                              <a href="https://www.linkedin.com/">
                                                Linkedin
                                              </a>
                                            </li>
                                            <li>
                                              <a href="https://www.pinterest.com/">
                                                Pinterest
                                              </a>
                                            </li>
                                            <li>
                                              <a href="https://dribbble.com/">
                                                Dribbble
                                              </a>
                                            </li>
                                            <li>
                                              <a href="https://www.behance.net/">
                                                Behance
                                              </a>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-lg-12">
                                      <div className="declaration-area">
                                        <h6>
                                          Declaration &amp; Authentication-
                                        </h6>
                                        <p>
                                          I do hereby declare that the
                                          information given above is true of my
                                          knowledge.
                                        </p>
                                      </div>
                                      <div className="gratitude-area">
                                        <span>Yours Faithful,</span>
                                        <h6>Jacoline Frankly</h6>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="dowunload-btn pt-50">
                                    <a className="primry-btn-2 lg-btn" href="#">
                                      Download CV
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <span>
                            <img
                              src="/assets/images/icon/company-2.svg"
                              alt=""
                            />
                            London University
                          </span>
                          <p>
                            <span>Applied On:</span> 02 April, 2023
                          </p>
                        </div>
                      </div>
                    </td>
                    <td data-label="Carrer Summary">
                      <div className="carrer-summary">
                        <h6>
                          UI/UX Company Ltd <span>(UI/UX Designer)</span>
                        </h6>
                        <ul>
                          <li>
                            <span>Experience:</span> 2+ Years
                          </li>
                          <li>
                            <span>Salary:</span> $800/ Per Month
                          </li>
                        </ul>
                      </div>
                    </td>
                    <td data-label="Actions">
                      <div className="action-btn-group">
                        <ul>
                          <li>
                            <button>
                              <img
                                src="/assets/images/icon/shortlist-icon.svg"
                                alt=""
                              />{" "}
                              Shortlist
                            </button>
                          </li>
                          <li>
                            <button className="reject">
                              <img
                                src="/assets/images/icon/rejected-icon.svg"
                                alt=""
                              />{" "}
                              Rejected
                            </button>
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td data-label="Candidate Name">
                      <div className="employee-info">
                        <div className="employee-img">
                          <img
                            src="/assets/images/bg/employee-img3.png"
                            alt=""
                          />
                        </div>
                        <div className="employee-content">
                          <button
                            type="button"
                            className="btn btn-primary"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal2"
                          >
                            Robertson Harry
                          </button>
                          {/* Modal */}
                          <div
                            className="modal fade"
                            id="exampleModal2"
                            tabIndex={-1}
                            aria-hidden="true"
                          >
                            <div className="modal-dialog">
                              <div className="row justify-content-center g-lg-4 gy-5 mb-90">
                                <div className="col-lg-10">
                                  <div className="resume-area">
                                    <div className="row g-4 mb-40">
                                      <div className="col-lg-6">
                                        <div className="author-area">
                                          <div className="author-img">
                                            <img
                                              src="/assets/images/bg/resume-author.png"
                                              alt=""
                                            />
                                          </div>
                                          <div className="name-degination">
                                            <h4>Mr. Jacoline Frankly</h4>
                                            <span>UI/UX Engineer</span>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col-lg-6">
                                        <div className="contact-area">
                                          <h4>Contact Info</h4>
                                          <ul>
                                            <li>
                                              Phone:
                                              <a href="#">
                                                +880-177 443 5455{" "}
                                                <span>
                                                  <img
                                                    src="/assets/images/icon/phone-5.svg"
                                                    alt=""
                                                  />
                                                </span>
                                              </a>
                                            </li>
                                            <li>
                                              Email:
                                              <a href="#">
                                                info@example.com{" "}
                                                <span>
                                                  <img
                                                    src="/assets/images/icon/envlop-5.svg"
                                                    alt=""
                                                  />
                                                </span>
                                              </a>
                                            </li>
                                            <li>
                                              Website:
                                              <a href="#">
                                                www.infositeexample.com{" "}
                                                <span>
                                                  <img
                                                    src="/assets/images/icon/web-5.svg "
                                                    alt=""
                                                  />
                                                </span>
                                              </a>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-lg-12">
                                      <div className="single-information-area">
                                        <div className="section-title">
                                          <h6>Career Objective</h6>
                                          <div className="dash" />
                                        </div>
                                        <div className="description">
                                          <p>
                                            I'm a passionate UI/UX designer and
                                            can bring innovative ideas &amp;
                                            concepts to life for client-based
                                            design projects. I have more than 3
                                            years of design experience in
                                            digital/e-commerce. I experienced at
                                            tackle various needs from landing
                                            page designs, web app interfaces. I
                                            have skills in User Experience
                                            Design (UXD), user-centered Design,
                                            Interaction and Visual Design for
                                            websites, applications, web, and
                                            mobile products, wireframes,
                                            mock-ups, qualitative and
                                            quantitative user studies, usability
                                            analysis, and informal usability
                                            audits.
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-lg-12">
                                      <div className="single-information-area">
                                        <div className="section-title">
                                          <h6>Personal Information</h6>
                                          <div className="dash" />
                                        </div>
                                        <div className="row g-4">
                                          <div className="col-lg-6 devaider1 position-relative">
                                            <div className="informations">
                                              <ul>
                                                <li>
                                                  <span>Father’s Name:</span>{" "}
                                                  Mr. Norman Frankly
                                                </li>
                                                <li>
                                                  <span>Date of Birth:</span> 03
                                                  January,1998
                                                </li>
                                                <li>
                                                  <span>Nationality:</span>{" "}
                                                  Bangladeshi
                                                </li>
                                                <li>
                                                  <span>Marital Status:</span>{" "}
                                                  Unmarried
                                                </li>
                                                <li>
                                                  <span>Height:</span> 5’ 5’’
                                                </li>
                                                <li>
                                                  <span>Blood Group:</span> O
                                                  ve+
                                                </li>
                                                <li>
                                                  <span>
                                                    Permanent Address:
                                                  </span>{" "}
                                                  Village: Mirpur-12 Block-C,
                                                  Thana: Pallavi, District:
                                                  Dhaka, Division: Dhaka
                                                </li>
                                              </ul>
                                            </div>
                                          </div>
                                          <div className="col-lg-6 pl-40">
                                            <div className="informations d-flex justify-content-end">
                                              <ul>
                                                <li>
                                                  <span>Mother’s Name:</span>{" "}
                                                  Mrs. Macoline Frankly
                                                </li>
                                                <li>
                                                  <span>National ID:</span> 88
                                                  9919 6712 8762
                                                </li>
                                                <li>
                                                  <span>Religion:</span> Islam
                                                </li>
                                                <li>
                                                  <span>Gender:</span> Male
                                                </li>
                                                <li>
                                                  <span>Weight:</span> 75 KG
                                                </li>
                                                <li>
                                                  <span>Height:</span> 5’ 5’’
                                                </li>
                                                <li>
                                                  <span>Present Address:</span>{" "}
                                                  Village: Mirpur DOSH, Block-C,
                                                  Avenue-02, Thana: Pallavi,
                                                  District: Dhaka, Division:
                                                  Dhaka.
                                                </li>
                                              </ul>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-lg-12">
                                      <div className="single-information-area">
                                        <div className="section-title">
                                          <h6>Educational Qualification</h6>
                                          <div className="dash" />
                                        </div>
                                        <div className="educational-qualification mb-30">
                                          <div className="passing-year">
                                            <p>
                                              <span>01.</span>April, 2016- May,
                                              2020
                                            </p>
                                            <span />
                                          </div>
                                          <div className="education-dt">
                                            <h6>
                                              Royals Republic Science &amp;
                                              Technology University
                                            </h6>
                                            <ul>
                                              <li>
                                                <span>Education Level:</span>{" "}
                                                Graduation
                                              </li>
                                              <li>
                                                <span>My Major:</span> Bachelor
                                                Degree In CSE
                                              </li>
                                              <li>
                                                <span>Result/GPA:</span>{" "}
                                                3.75/4.00
                                              </li>
                                            </ul>
                                          </div>
                                        </div>
                                        <div className="educational-qualification">
                                          <div className="passing-year">
                                            <p>
                                              <span>02.</span>June, 2014- April,
                                              2016
                                            </p>
                                            <span />
                                          </div>
                                          <div className="education-dt">
                                            <h6>
                                              International Collegiate School
                                              &amp; College
                                            </h6>
                                            <ul>
                                              <li>
                                                <span>Education Level:</span>{" "}
                                                HSC
                                              </li>
                                              <li>
                                                <span>My Major:</span> Science
                                              </li>
                                              <li>
                                                <span>Result/GPA:</span>{" "}
                                                4.96/5.00
                                              </li>
                                            </ul>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-lg-12">
                                      <div className="single-information-area">
                                        <div className="section-title">
                                          <h6>Career Application</h6>
                                          <div className="dash" />
                                        </div>
                                        <div className="row g-4 ">
                                          <div className="col-lg-6 devaider1 position-relative">
                                            <div className="informations">
                                              <ul>
                                                <li>
                                                  <span>
                                                    Current Job Place:
                                                  </span>{" "}
                                                  Norland Tech of Industry
                                                </li>
                                                <li>
                                                  <span>Position:</span> UI/UX
                                                  Engineer
                                                </li>
                                                <li>
                                                  <span>Looking For:</span> Top
                                                  Level
                                                </li>
                                              </ul>
                                            </div>
                                          </div>
                                          <div className="col-lg-6 pl-40">
                                            <div className="informations">
                                              <ul>
                                                <li>
                                                  <span>Current Salary:</span>{" "}
                                                  30000/=
                                                </li>
                                                <li>
                                                  <span>Expected Salary:</span>{" "}
                                                  40000/=
                                                </li>
                                                <li>
                                                  <span>Available:</span> Full
                                                  Time
                                                </li>
                                              </ul>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-lg-12">
                                      <div className="single-information-area">
                                        <div className="section-title">
                                          <h6>Professionals Information</h6>
                                          <div className="dash" />
                                        </div>
                                        <div className="educational-qualification mb-30">
                                          <div className="passing-year">
                                            <p>
                                              <span>01.</span>April, 2021- May,
                                              2022
                                            </p>
                                            <span />
                                          </div>
                                          <div className="education-dt">
                                            <h6>
                                              Bistro.Tech Group of Industry
                                            </h6>
                                            <p className="position">
                                              <span>Position:</span> UI/UX
                                              Engineer ( Full-Time)
                                            </p>
                                            <div className="responsibility">
                                              <h6>Responsibility:</h6>
                                              <ul>
                                                <li>
                                                  Creating high quality landing
                                                  pages optimized for client
                                                  website brands.
                                                </li>
                                                <li>
                                                  Creating e-commerce
                                                  interfaces, design
                                                  enhancements, and overall
                                                  improved user experience of
                                                  existing sites
                                                </li>
                                              </ul>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="educational-qualification">
                                          <div className="passing-year">
                                            <p>
                                              <span>02.</span>April, 2022-
                                              Continuing
                                            </p>
                                            <span />
                                          </div>
                                          <div className="education-dt">
                                            <h6>Norland Tech of Industry</h6>
                                            <p className="position">
                                              <span>Position:</span> UI/UX
                                              Engineer ( Full-Time)
                                            </p>
                                            <div className="responsibility">
                                              <h6>Responsibility:</h6>
                                              <ul>
                                                <li>
                                                  Creating high quality landing
                                                  pages optimized for client
                                                  website brands.
                                                </li>
                                                <li>
                                                  Creating e-commerce
                                                  interfaces, design
                                                  enhancements, and overall
                                                  improved user experience of
                                                  existing sites
                                                </li>
                                              </ul>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-lg-12">
                                      <div className="single-information-area">
                                        <div className="section-title">
                                          <h6>Social Network</h6>
                                          <div className="dash" />
                                        </div>
                                        <div className="social-area">
                                          <ul>
                                            <li>
                                              <a href="https://www.facebook.com/">
                                                Facebook
                                              </a>
                                            </li>
                                            <li>
                                              <a href="https://twitter.com/">
                                                Twitter
                                              </a>
                                            </li>
                                            <li>
                                              <a href="https://www.linkedin.com/">
                                                Linkedin
                                              </a>
                                            </li>
                                            <li>
                                              <a href="https://www.pinterest.com/">
                                                Pinterest
                                              </a>
                                            </li>
                                            <li>
                                              <a href="https://dribbble.com/">
                                                Dribbble
                                              </a>
                                            </li>
                                            <li>
                                              <a href="https://www.behance.net/">
                                                Behance
                                              </a>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-lg-12">
                                      <div className="declaration-area">
                                        <h6>
                                          Declaration &amp; Authentication-
                                        </h6>
                                        <p>
                                          I do hereby declare that the
                                          information given above is true of my
                                          knowledge.
                                        </p>
                                      </div>
                                      <div className="gratitude-area">
                                        <span>Yours Faithful,</span>
                                        <h6>Jacoline Frankly</h6>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="dowunload-btn pt-50">
                                    <a className="primry-btn-2 lg-btn" href="#">
                                      Download CV
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <span>
                            <img
                              src="/assets/images/icon/company-2.svg"
                              alt=""
                            />
                            Royals Republic University
                          </span>
                          <p>
                            <span>Applied On:</span> 05 April, 2023
                          </p>
                        </div>
                      </div>
                    </td>
                    <td data-label="Carrer Summary">
                      <div className="carrer-summary">
                        <h6>
                          Bistro.Tech Ltd <span>(Teaching Assistant)</span>
                        </h6>
                        <ul>
                          <li>
                            <span>Experience:</span> 3+ Years
                          </li>
                          <li>
                            <span>Salary:</span> $800/ Per Month
                          </li>
                        </ul>
                      </div>
                    </td>
                    <td data-label="Actions">
                      <div className="action-btn-group">
                        <ul>
                          <li>
                            <button>
                              <img
                                src="/assets/images/icon/shortlist-icon.svg"
                                alt=""
                              />{" "}
                              Shortlist
                            </button>
                          </li>
                          <li>
                            <button className="reject">
                              <img
                                src="/assets/images/icon/rejected-icon.svg"
                                alt=""
                              />{" "}
                              Rejected
                            </button>
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td data-label="Candidate Name">
                      <div className="employee-info">
                        <div className="employee-img">
                          <img
                            src="/assets/images/bg/employee-img4.png"
                            alt=""
                          />
                        </div>
                        <div className="employee-content">
                          <button
                            type="button"
                            className="btn btn-primary"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal3"
                          >
                            Hari Jonson
                          </button>
                          {/* Modal */}
                          <div
                            className="modal fade"
                            id="exampleModal3"
                            tabIndex={-1}
                            aria-hidden="true"
                          >
                            <div className="modal-dialog">
                              <div className="row justify-content-center g-lg-4 gy-5 mb-90">
                                <div className="col-lg-10">
                                  <div className="resume-area">
                                    <div className="row g-4 mb-40">
                                      <div className="col-lg-6">
                                        <div className="author-area">
                                          <div className="author-img">
                                            <img
                                              src="/assets/images/bg/resume-author.png"
                                              alt=""
                                            />
                                          </div>
                                          <div className="name-degination">
                                            <h4>Mr. Jacoline Frankly</h4>
                                            <span>UI/UX Engineer</span>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col-lg-6">
                                        <div className="contact-area">
                                          <h4>Contact Info</h4>
                                          <ul>
                                            <li>
                                              Phone:
                                              <a href="#">
                                                +880-177 443 5455{" "}
                                                <span>
                                                  <img
                                                    src="/assets/images/icon/phone-5.svg"
                                                    alt=""
                                                  />
                                                </span>
                                              </a>
                                            </li>
                                            <li>
                                              Email:
                                              <a href="#">
                                                info@example.com{" "}
                                                <span>
                                                  <img
                                                    src="/assets/images/icon/envlop-5.svg"
                                                    alt=""
                                                  />
                                                </span>
                                              </a>
                                            </li>
                                            <li>
                                              Website:
                                              <a href="#">
                                                www.infositeexample.com{" "}
                                                <span>
                                                  <img
                                                    src="/assets/images/icon/web-5.svg "
                                                    alt=""
                                                  />
                                                </span>
                                              </a>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-lg-12">
                                      <div className="single-information-area">
                                        <div className="section-title">
                                          <h6>Career Objective</h6>
                                          <div className="dash" />
                                        </div>
                                        <div className="description">
                                          <p>
                                            I'm a passionate UI/UX designer and
                                            can bring innovative ideas &amp;
                                            concepts to life for client-based
                                            design projects. I have more than 3
                                            years of design experience in
                                            digital/e-commerce. I experienced at
                                            tackle various needs from landing
                                            page designs, web app interfaces. I
                                            have skills in User Experience
                                            Design (UXD), user-centered Design,
                                            Interaction and Visual Design for
                                            websites, applications, web, and
                                            mobile products, wireframes,
                                            mock-ups, qualitative and
                                            quantitative user studies, usability
                                            analysis, and informal usability
                                            audits.
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-lg-12">
                                      <div className="single-information-area">
                                        <div className="section-title">
                                          <h6>Personal Information</h6>
                                          <div className="dash" />
                                        </div>
                                        <div className="row g-4">
                                          <div className="col-lg-6 devaider1 position-relative">
                                            <div className="informations">
                                              <ul>
                                                <li>
                                                  <span>Father’s Name:</span>{" "}
                                                  Mr. Norman Frankly
                                                </li>
                                                <li>
                                                  <span>Date of Birth:</span> 03
                                                  January,1998
                                                </li>
                                                <li>
                                                  <span>Nationality:</span>{" "}
                                                  Bangladeshi
                                                </li>
                                                <li>
                                                  <span>Marital Status:</span>{" "}
                                                  Unmarried
                                                </li>
                                                <li>
                                                  <span>Height:</span> 5’ 5’’
                                                </li>
                                                <li>
                                                  <span>Blood Group:</span> O
                                                  ve+
                                                </li>
                                                <li>
                                                  <span>
                                                    Permanent Address:
                                                  </span>{" "}
                                                  Village: Mirpur-12 Block-C,
                                                  Thana: Pallavi, District:
                                                  Dhaka, Division: Dhaka
                                                </li>
                                              </ul>
                                            </div>
                                          </div>
                                          <div className="col-lg-6 pl-40">
                                            <div className="informations d-flex justify-content-end">
                                              <ul>
                                                <li>
                                                  <span>Mother’s Name:</span>{" "}
                                                  Mrs. Macoline Frankly
                                                </li>
                                                <li>
                                                  <span>National ID:</span> 88
                                                  9919 6712 8762
                                                </li>
                                                <li>
                                                  <span>Religion:</span> Islam
                                                </li>
                                                <li>
                                                  <span>Gender:</span> Male
                                                </li>
                                                <li>
                                                  <span>Weight:</span> 75 KG
                                                </li>
                                                <li>
                                                  <span>Height:</span> 5’ 5’’
                                                </li>
                                                <li>
                                                  <span>Present Address:</span>{" "}
                                                  Village: Mirpur DOSH, Block-C,
                                                  Avenue-02, Thana: Pallavi,
                                                  District: Dhaka, Division:
                                                  Dhaka.
                                                </li>
                                              </ul>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-lg-12">
                                      <div className="single-information-area">
                                        <div className="section-title">
                                          <h6>Educational Qualification</h6>
                                          <div className="dash" />
                                        </div>
                                        <div className="educational-qualification mb-30">
                                          <div className="passing-year">
                                            <p>
                                              <span>01.</span>April, 2016- May,
                                              2020
                                            </p>
                                            <span />
                                          </div>
                                          <div className="education-dt">
                                            <h6>
                                              Royals Republic Science &amp;
                                              Technology University
                                            </h6>
                                            <ul>
                                              <li>
                                                <span>Education Level:</span>{" "}
                                                Graduation
                                              </li>
                                              <li>
                                                <span>My Major:</span> Bachelor
                                                Degree In CSE
                                              </li>
                                              <li>
                                                <span>Result/GPA:</span>{" "}
                                                3.75/4.00
                                              </li>
                                            </ul>
                                          </div>
                                        </div>
                                        <div className="educational-qualification">
                                          <div className="passing-year">
                                            <p>
                                              <span>02.</span>June, 2014- April,
                                              2016
                                            </p>
                                            <span />
                                          </div>
                                          <div className="education-dt">
                                            <h6>
                                              International Collegiate School
                                              &amp; College
                                            </h6>
                                            <ul>
                                              <li>
                                                <span>Education Level:</span>{" "}
                                                HSC
                                              </li>
                                              <li>
                                                <span>My Major:</span> Science
                                              </li>
                                              <li>
                                                <span>Result/GPA:</span>{" "}
                                                4.96/5.00
                                              </li>
                                            </ul>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-lg-12">
                                      <div className="single-information-area">
                                        <div className="section-title">
                                          <h6>Career Application</h6>
                                          <div className="dash" />
                                        </div>
                                        <div className="row g-4 ">
                                          <div className="col-lg-6 devaider1 position-relative">
                                            <div className="informations">
                                              <ul>
                                                <li>
                                                  <span>
                                                    Current Job Place:
                                                  </span>{" "}
                                                  Norland Tech of Industry
                                                </li>
                                                <li>
                                                  <span>Position:</span> UI/UX
                                                  Engineer
                                                </li>
                                                <li>
                                                  <span>Looking For:</span> Top
                                                  Level
                                                </li>
                                              </ul>
                                            </div>
                                          </div>
                                          <div className="col-lg-6 pl-40">
                                            <div className="informations">
                                              <ul>
                                                <li>
                                                  <span>Current Salary:</span>{" "}
                                                  30000/=
                                                </li>
                                                <li>
                                                  <span>Expected Salary:</span>{" "}
                                                  40000/=
                                                </li>
                                                <li>
                                                  <span>Available:</span> Full
                                                  Time
                                                </li>
                                              </ul>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-lg-12">
                                      <div className="single-information-area">
                                        <div className="section-title">
                                          <h6>Professionals Information</h6>
                                          <div className="dash" />
                                        </div>
                                        <div className="educational-qualification mb-30">
                                          <div className="passing-year">
                                            <p>
                                              <span>01.</span>April, 2021- May,
                                              2022
                                            </p>
                                            <span />
                                          </div>
                                          <div className="education-dt">
                                            <h6>
                                              Bistro.Tech Group of Industry
                                            </h6>
                                            <p className="position">
                                              <span>Position:</span> UI/UX
                                              Engineer ( Full-Time)
                                            </p>
                                            <div className="responsibility">
                                              <h6>Responsibility:</h6>
                                              <ul>
                                                <li>
                                                  Creating high quality landing
                                                  pages optimized for client
                                                  website brands.
                                                </li>
                                                <li>
                                                  Creating e-commerce
                                                  interfaces, design
                                                  enhancements, and overall
                                                  improved user experience of
                                                  existing sites
                                                </li>
                                              </ul>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="educational-qualification">
                                          <div className="passing-year">
                                            <p>
                                              <span>02.</span>April, 2022-
                                              Continuing
                                            </p>
                                            <span />
                                          </div>
                                          <div className="education-dt">
                                            <h6>Norland Tech of Industry</h6>
                                            <p className="position">
                                              <span>Position:</span> UI/UX
                                              Engineer ( Full-Time)
                                            </p>
                                            <div className="responsibility">
                                              <h6>Responsibility:</h6>
                                              <ul>
                                                <li>
                                                  Creating high quality landing
                                                  pages optimized for client
                                                  website brands.
                                                </li>
                                                <li>
                                                  Creating e-commerce
                                                  interfaces, design
                                                  enhancements, and overall
                                                  improved user experience of
                                                  existing sites
                                                </li>
                                              </ul>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-lg-12">
                                      <div className="single-information-area">
                                        <div className="section-title">
                                          <h6>Social Network</h6>
                                          <div className="dash" />
                                        </div>
                                        <div className="social-area">
                                          <ul>
                                            <li>
                                              <a href="https://www.facebook.com/">
                                                Facebook
                                              </a>
                                            </li>
                                            <li>
                                              <a href="https://twitter.com/">
                                                Twitter
                                              </a>
                                            </li>
                                            <li>
                                              <a href="https://www.linkedin.com/">
                                                Linkedin
                                              </a>
                                            </li>
                                            <li>
                                              <a href="https://www.pinterest.com/">
                                                Pinterest
                                              </a>
                                            </li>
                                            <li>
                                              <a href="https://dribbble.com/">
                                                Dribbble
                                              </a>
                                            </li>
                                            <li>
                                              <a href="https://www.behance.net/">
                                                Behance
                                              </a>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-lg-12">
                                      <div className="declaration-area">
                                        <h6>
                                          Declaration &amp; Authentication-
                                        </h6>
                                        <p>
                                          I do hereby declare that the
                                          information given above is true of my
                                          knowledge.
                                        </p>
                                      </div>
                                      <div className="gratitude-area">
                                        <span>Yours Faithful,</span>
                                        <h6>Jacoline Frankly</h6>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="dowunload-btn pt-50">
                                    <a className="primry-btn-2 lg-btn" href="#">
                                      Download CV
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <span>
                            <img
                              src="/assets/images/icon/company-2.svg"
                              alt=""
                            />
                            Bistro Mycol University
                          </span>
                          <p>
                            <span>Applied On:</span> 06 April, 2023
                          </p>
                        </div>
                      </div>
                    </td>
                    <td data-label="Carrer Summary">
                      <div className="carrer-summary">
                        <h6>
                          Elite Author <span>(Teaching Assistant)</span>
                        </h6>
                        <ul>
                          <li>
                            <span>Experience:</span> 1.5+ Years
                          </li>
                          <li>
                            <span>Salary:</span> $1200/ Per Month
                          </li>
                        </ul>
                      </div>
                    </td>
                    <td data-label="Actions">
                      <div className="action-btn-group">
                        <ul>
                          <li>
                            <button>
                              <img
                                src="/assets/images/icon/shortlist-icon.svg"
                                alt=""
                              />
                              Shortlist
                            </button>
                          </li>
                          <li>
                            <button className="reject">
                              <img
                                src="/assets/images/icon/rejected-icon.svg"
                                alt=""
                              />
                              Rejected
                            </button>
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td data-label="Candidate Name">
                      <div className="employee-info">
                        <div className="employee-img">
                          <img
                            src="/assets/images/bg/employee-img5.png"
                            alt=""
                          />
                        </div>
                        <div className="employee-content">
                          <button
                            type="button"
                            className="btn btn-primary"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal4"
                          >
                            Mrs. Jordan Harry
                          </button>
                          {/* Modal */}
                          <div
                            className="modal fade"
                            id="exampleModal4"
                            tabIndex={-1}
                            aria-hidden="true"
                          >
                            <div className="modal-dialog">
                              <div className="row justify-content-center g-lg-4 gy-5 mb-90">
                                <div className="col-lg-10">
                                  <div className="resume-area">
                                    <div className="row g-4 mb-40">
                                      <div className="col-lg-6">
                                        <div className="author-area">
                                          <div className="author-img">
                                            <img
                                              src="/assets/images/bg/resume-author.png"
                                              alt=""
                                            />
                                          </div>
                                          <div className="name-degination">
                                            <h4>Mr. Jacoline Frankly</h4>
                                            <span>UI/UX Engineer</span>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col-lg-6">
                                        <div className="contact-area">
                                          <h4>Contact Info</h4>
                                          <ul>
                                            <li>
                                              Phone:
                                              <a href="#">
                                                +880-177 443 5455{" "}
                                                <span>
                                                  <img
                                                    src="/assets/images/icon/phone-5.svg"
                                                    alt=""
                                                  />
                                                </span>
                                              </a>
                                            </li>
                                            <li>
                                              Email:
                                              <a href="#">
                                                info@example.com
                                                <span>
                                                  <img
                                                    src="/assets/images/icon/envlop-5.svg"
                                                    alt=""
                                                  />
                                                </span>
                                              </a>
                                            </li>
                                            <li>
                                              Website:
                                              <a href="#">
                                                www.infositeexample.com
                                                <span>
                                                  <img
                                                    src="/assets/images/icon/web-5.svg "
                                                    alt=""
                                                  />
                                                </span>
                                              </a>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-lg-12">
                                      <div className="single-information-area">
                                        <div className="section-title">
                                          <h6>Career Objective</h6>
                                          <div className="dash" />
                                        </div>
                                        <div className="description">
                                          <p>
                                            I'm a passionate UI/UX designer and
                                            can bring innovative ideas &amp;
                                            concepts to life for client-based
                                            design projects. I have more than 3
                                            years of design experience in
                                            digital/e-commerce. I experienced at
                                            tackle various needs from landing
                                            page designs, web app interfaces. I
                                            have skills in User Experience
                                            Design (UXD), user-centered Design,
                                            Interaction and Visual Design for
                                            websites, applications, web, and
                                            mobile products, wireframes,
                                            mock-ups, qualitative and
                                            quantitative user studies, usability
                                            analysis, and informal usability
                                            audits.
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-lg-12">
                                      <div className="single-information-area">
                                        <div className="section-title">
                                          <h6>Personal Information</h6>
                                          <div className="dash" />
                                        </div>
                                        <div className="row g-4">
                                          <div className="col-lg-6 devaider1 position-relative">
                                            <div className="informations">
                                              <ul>
                                                <li>
                                                  <span>Father’s Name:</span>
                                                  Mr. Norman Frankly
                                                </li>
                                                <li>
                                                  <span>Date of Birth:</span> 03
                                                  January,1998
                                                </li>
                                                <li>
                                                  <span>Nationality:</span>
                                                  Bangladeshi
                                                </li>
                                                <li>
                                                  <span>Marital Status:</span>
                                                  Unmarried
                                                </li>
                                                <li>
                                                  <span>Height:</span> 5’ 5’’
                                                </li>
                                                <li>
                                                  <span>Blood Group:</span> O
                                                  ve+
                                                </li>
                                                <li>
                                                  <span>
                                                    Permanent Address:
                                                  </span>
                                                  Village: Mirpur-12 Block-C,
                                                  Thana: Pallavi, District:
                                                  Dhaka, Division: Dhaka
                                                </li>
                                              </ul>
                                            </div>
                                          </div>
                                          <div className="col-lg-6 pl-40">
                                            <div className="informations d-flex justify-content-end">
                                              <ul>
                                                <li>
                                                  <span>Mother’s Name:</span>
                                                  Mrs. Macoline Frankly
                                                </li>
                                                <li>
                                                  <span>National ID:</span> 88
                                                  9919 6712 8762
                                                </li>
                                                <li>
                                                  <span>Religion:</span> Islam
                                                </li>
                                                <li>
                                                  <span>Gender:</span> Male
                                                </li>
                                                <li>
                                                  <span>Weight:</span> 75 KG
                                                </li>
                                                <li>
                                                  <span>Height:</span> 5’ 5’’
                                                </li>
                                                <li>
                                                  <span>Present Address:</span>
                                                  Village: Mirpur DOSH, Block-C,
                                                  Avenue-02, Thana: Pallavi,
                                                  District: Dhaka, Division:
                                                  Dhaka.
                                                </li>
                                              </ul>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-lg-12">
                                      <div className="single-information-area">
                                        <div className="section-title">
                                          <h6>Educational Qualification</h6>
                                          <div className="dash" />
                                        </div>
                                        <div className="educational-qualification mb-30">
                                          <div className="passing-year">
                                            <p>
                                              <span>01.</span>April, 2016- May,
                                              2020
                                            </p>
                                            <span />
                                          </div>
                                          <div className="education-dt">
                                            <h6>
                                              Royals Republic Science &amp;
                                              Technology University
                                            </h6>
                                            <ul>
                                              <li>
                                                <span>Education Level:</span>{" "}
                                                Graduation
                                              </li>
                                              <li>
                                                <span>My Major:</span> Bachelor
                                                Degree In CSE
                                              </li>
                                              <li>
                                                <span>Result/GPA:</span>{" "}
                                                3.75/4.00
                                              </li>
                                            </ul>
                                          </div>
                                        </div>
                                        <div className="educational-qualification">
                                          <div className="passing-year">
                                            <p>
                                              <span>02.</span>June, 2014- April,
                                              2016
                                            </p>
                                            <span />
                                          </div>
                                          <div className="education-dt">
                                            <h6>
                                              International Collegiate School
                                              &amp; College
                                            </h6>
                                            <ul>
                                              <li>
                                                <span>Education Level:</span>{" "}
                                                HSC
                                              </li>
                                              <li>
                                                <span>My Major:</span> Science
                                              </li>
                                              <li>
                                                <span>Result/GPA:</span>{" "}
                                                4.96/5.00
                                              </li>
                                            </ul>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-lg-12">
                                      <div className="single-information-area">
                                        <div className="section-title">
                                          <h6>Career Application</h6>
                                          <div className="dash" />
                                        </div>
                                        <div className="row g-4 ">
                                          <div className="col-lg-6 devaider1 position-relative">
                                            <div className="informations">
                                              <ul>
                                                <li>
                                                  <span>
                                                    Current Job Place:
                                                  </span>{" "}
                                                  Norland Tech of Industry
                                                </li>
                                                <li>
                                                  <span>Position:</span> UI/UX
                                                  Engineer
                                                </li>
                                                <li>
                                                  <span>Looking For:</span> Top
                                                  Level
                                                </li>
                                              </ul>
                                            </div>
                                          </div>
                                          <div className="col-lg-6 pl-40">
                                            <div className="informations">
                                              <ul>
                                                <li>
                                                  <span>Current Salary:</span>{" "}
                                                  30000/=
                                                </li>
                                                <li>
                                                  <span>Expected Salary:</span>{" "}
                                                  40000/=
                                                </li>
                                                <li>
                                                  <span>Available:</span> Full
                                                  Time
                                                </li>
                                              </ul>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-lg-12">
                                      <div className="single-information-area">
                                        <div className="section-title">
                                          <h6>Professionals Information</h6>
                                          <div className="dash" />
                                        </div>
                                        <div className="educational-qualification mb-30">
                                          <div className="passing-year">
                                            <p>
                                              <span>01.</span>April, 2021- May,
                                              2022
                                            </p>
                                            <span />
                                          </div>
                                          <div className="education-dt">
                                            <h6>
                                              Bistro.Tech Group of Industry
                                            </h6>
                                            <p className="position">
                                              <span>Position:</span> UI/UX
                                              Engineer ( Full-Time)
                                            </p>
                                            <div className="responsibility">
                                              <h6>Responsibility:</h6>
                                              <ul>
                                                <li>
                                                  Creating high quality landing
                                                  pages optimized for client
                                                  website brands.
                                                </li>
                                                <li>
                                                  Creating e-commerce
                                                  interfaces, design
                                                  enhancements, and overall
                                                  improved user experience of
                                                  existing sites
                                                </li>
                                              </ul>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="educational-qualification">
                                          <div className="passing-year">
                                            <p>
                                              <span>02.</span>April, 2022-
                                              Continuing
                                            </p>
                                            <span />
                                          </div>
                                          <div className="education-dt">
                                            <h6>Norland Tech of Industry</h6>
                                            <p className="position">
                                              <span>Position:</span> UI/UX
                                              Engineer ( Full-Time)
                                            </p>
                                            <div className="responsibility">
                                              <h6>Responsibility:</h6>
                                              <ul>
                                                <li>
                                                  Creating high quality landing
                                                  pages optimized for client
                                                  website brands.
                                                </li>
                                                <li>
                                                  Creating e-commerce
                                                  interfaces, design
                                                  enhancements, and overall
                                                  improved user experience of
                                                  existing sites
                                                </li>
                                              </ul>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-lg-12">
                                      <div className="single-information-area">
                                        <div className="section-title">
                                          <h6>Social Network</h6>
                                          <div className="dash" />
                                        </div>
                                        <div className="social-area">
                                          <ul>
                                            <li>
                                              <a href="https://www.facebook.com/">
                                                Facebook
                                              </a>
                                            </li>
                                            <li>
                                              <a href="https://twitter.com/">
                                                Twitter
                                              </a>
                                            </li>
                                            <li>
                                              <a href="https://www.linkedin.com/">
                                                Linkedin
                                              </a>
                                            </li>
                                            <li>
                                              <a href="https://www.pinterest.com/">
                                                Pinterest
                                              </a>
                                            </li>
                                            <li>
                                              <a href="https://dribbble.com/">
                                                Dribbble
                                              </a>
                                            </li>
                                            <li>
                                              <a href="https://www.behance.net/">
                                                Behance
                                              </a>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-lg-12">
                                      <div className="declaration-area">
                                        <h6>
                                          Declaration &amp; Authentication-
                                        </h6>
                                        <p>
                                          I do hereby declare that the
                                          information given above is true of my
                                          knowledge.
                                        </p>
                                      </div>
                                      <div className="gratitude-area">
                                        <span>Yours Faithful,</span>
                                        <h6>Jacoline Frankly</h6>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="dowunload-btn pt-50">
                                    <a className="primry-btn-2 lg-btn" href="#">
                                      Download CV
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <span>
                            <img
                              src="/assets/images/icon/company-2.svg"
                              alt=""
                            />
                            Internation Colliegate University
                          </span>
                          <p>
                            <span>Applied On:</span> 07 April, 2023
                          </p>
                        </div>
                      </div>
                    </td>
                    <td data-label="Carrer Summary">
                      <div className="carrer-summary">
                        <h6>
                          Marko Group <span>(Teaching Assistant)</span>
                        </h6>
                        <ul>
                          <li>
                            <span>Experience:</span> 2.5+ Years
                          </li>
                          <li>
                            <span>Salary:</span> $900/ Per Month
                          </li>
                        </ul>
                      </div>
                    </td>
                    <td data-label="Actions">
                      <div className="action-btn-group">
                        <ul>
                          <li>
                            <button>
                              <img
                                src="/assets/images/icon/shortlist-icon.svg"
                                alt=""
                              />{" "}
                              Shortlist
                            </button>
                          </li>
                          <li>
                            <button className="reject">
                              <img
                                src="/assets/images/icon/rejected-icon.svg"
                                alt=""
                              />{" "}
                              Rejected
                            </button>
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td data-label="Candidate Name">
                      <div className="employee-info">
                        <div className="employee-img">
                          <img
                            src="/assets/images/bg/employee-img6.png"
                            alt=""
                          />
                        </div>
                        <div className="employee-content">
                          <button
                            type="button"
                            className="btn btn-primary"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal5"
                          >
                            Juliya Bhut
                          </button>
                          {/* Modal */}
                          <div
                            className="modal fade"
                            id="exampleModal5"
                            tabIndex={-1}
                            aria-hidden="true"
                          >
                            <div className="modal-dialog">
                              <div className="row justify-content-center g-lg-4 gy-5 mb-90">
                                <div className="col-lg-10">
                                  <div className="resume-area">
                                    <div className="row g-4 mb-40">
                                      <div className="col-lg-6">
                                        <div className="author-area">
                                          <div className="author-img">
                                            <img
                                              src="/assets/images/bg/resume-author.png"
                                              alt=""
                                            />
                                          </div>
                                          <div className="name-degination">
                                            <h4>Mr. Jacoline Frankly</h4>
                                            <span>UI/UX Engineer</span>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col-lg-6">
                                        <div className="contact-area">
                                          <h4>Contact Info</h4>
                                          <ul>
                                            <li>
                                              Phone:
                                              <a href="#">
                                                +880-177 443 5455{" "}
                                                <span>
                                                  <img
                                                    src="/assets/images/icon/phone-5.svg"
                                                    alt=""
                                                  />
                                                </span>
                                              </a>
                                            </li>
                                            <li>
                                              Email:
                                              <a href="#">
                                                info@example.com{" "}
                                                <span>
                                                  <img
                                                    src="/assets/images/icon/envlop-5.svg"
                                                    alt=""
                                                  />
                                                </span>
                                              </a>
                                            </li>
                                            <li>
                                              Website:
                                              <a href="#">
                                                www.infositeexample.com{" "}
                                                <span>
                                                  <img
                                                    src="/assets/images/icon/web-5.svg "
                                                    alt=""
                                                  />
                                                </span>
                                              </a>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-lg-12">
                                      <div className="single-information-area">
                                        <div className="section-title">
                                          <h6>Career Objective</h6>
                                          <div className="dash" />
                                        </div>
                                        <div className="description">
                                          <p>
                                            I'm a passionate UI/UX designer and
                                            can bring innovative ideas &amp;
                                            concepts to life for client-based
                                            design projects. I have more than 3
                                            years of design experience in
                                            digital/e-commerce. I experienced at
                                            tackle various needs from landing
                                            page designs, web app interfaces. I
                                            have skills in User Experience
                                            Design (UXD), user-centered Design,
                                            Interaction and Visual Design for
                                            websites, applications, web, and
                                            mobile products, wireframes,
                                            mock-ups, qualitative and
                                            quantitative user studies, usability
                                            analysis, and informal usability
                                            audits.
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-lg-12">
                                      <div className="single-information-area">
                                        <div className="section-title">
                                          <h6>Personal Information</h6>
                                          <div className="dash" />
                                        </div>
                                        <div className="row g-4">
                                          <div className="col-lg-6 devaider1 position-relative">
                                            <div className="informations">
                                              <ul>
                                                <li>
                                                  <span>Father’s Name:</span>{" "}
                                                  Mr. Norman Frankly
                                                </li>
                                                <li>
                                                  <span>Date of Birth:</span> 03
                                                  January,1998
                                                </li>
                                                <li>
                                                  <span>Nationality:</span>{" "}
                                                  Bangladeshi
                                                </li>
                                                <li>
                                                  <span>Marital Status:</span>{" "}
                                                  Unmarried
                                                </li>
                                                <li>
                                                  <span>Height:</span> 5’ 5’’
                                                </li>
                                                <li>
                                                  <span>Blood Group:</span> O
                                                  ve+
                                                </li>
                                                <li>
                                                  <span>
                                                    Permanent Address:
                                                  </span>{" "}
                                                  Village: Mirpur-12 Block-C,
                                                  Thana: Pallavi, District:
                                                  Dhaka, Division: Dhaka
                                                </li>
                                              </ul>
                                            </div>
                                          </div>
                                          <div className="col-lg-6 pl-40">
                                            <div className="informations d-flex justify-content-end">
                                              <ul>
                                                <li>
                                                  <span>Mother’s Name:</span>{" "}
                                                  Mrs. Macoline Frankly
                                                </li>
                                                <li>
                                                  <span>National ID:</span> 88
                                                  9919 6712 8762
                                                </li>
                                                <li>
                                                  <span>Religion:</span> Islam
                                                </li>
                                                <li>
                                                  <span>Gender:</span> Male
                                                </li>
                                                <li>
                                                  <span>Weight:</span> 75 KG
                                                </li>
                                                <li>
                                                  <span>Height:</span> 5’ 5’’
                                                </li>
                                                <li>
                                                  <span>Present Address:</span>{" "}
                                                  Village: Mirpur DOSH, Block-C,
                                                  Avenue-02, Thana: Pallavi,
                                                  District: Dhaka, Division:
                                                  Dhaka.
                                                </li>
                                              </ul>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-lg-12">
                                      <div className="single-information-area">
                                        <div className="section-title">
                                          <h6>Educational Qualification</h6>
                                          <div className="dash" />
                                        </div>
                                        <div className="educational-qualification mb-30">
                                          <div className="passing-year">
                                            <p>
                                              <span>01.</span>April, 2016- May,
                                              2020
                                            </p>
                                            <span />
                                          </div>
                                          <div className="education-dt">
                                            <h6>
                                              Royals Republic Science &amp;
                                              Technology University
                                            </h6>
                                            <ul>
                                              <li>
                                                <span>Education Level:</span>{" "}
                                                Graduation
                                              </li>
                                              <li>
                                                <span>My Major:</span> Bachelor
                                                Degree In CSE
                                              </li>
                                              <li>
                                                <span>Result/GPA:</span>{" "}
                                                3.75/4.00
                                              </li>
                                            </ul>
                                          </div>
                                        </div>
                                        <div className="educational-qualification">
                                          <div className="passing-year">
                                            <p>
                                              <span>02.</span>June, 2014- April,
                                              2016
                                            </p>
                                            <span />
                                          </div>
                                          <div className="education-dt">
                                            <h6>
                                              International Collegiate School
                                              &amp; College
                                            </h6>
                                            <ul>
                                              <li>
                                                <span>Education Level:</span>{" "}
                                                HSC
                                              </li>
                                              <li>
                                                <span>My Major:</span> Science
                                              </li>
                                              <li>
                                                <span>Result/GPA:</span>{" "}
                                                4.96/5.00
                                              </li>
                                            </ul>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-lg-12">
                                      <div className="single-information-area">
                                        <div className="section-title">
                                          <h6>Career Application</h6>
                                          <div className="dash" />
                                        </div>
                                        <div className="row g-4 ">
                                          <div className="col-lg-6 devaider1 position-relative">
                                            <div className="informations">
                                              <ul>
                                                <li>
                                                  <span>
                                                    Current Job Place:
                                                  </span>{" "}
                                                  Norland Tech of Industry
                                                </li>
                                                <li>
                                                  <span>Position:</span> UI/UX
                                                  Engineer
                                                </li>
                                                <li>
                                                  <span>Looking For:</span> Top
                                                  Level
                                                </li>
                                              </ul>
                                            </div>
                                          </div>
                                          <div className="col-lg-6 pl-40">
                                            <div className="informations">
                                              <ul>
                                                <li>
                                                  <span>Current Salary:</span>{" "}
                                                  30000/=
                                                </li>
                                                <li>
                                                  <span>Expected Salary:</span>{" "}
                                                  40000/=
                                                </li>
                                                <li>
                                                  <span>Available:</span> Full
                                                  Time
                                                </li>
                                              </ul>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-lg-12">
                                      <div className="single-information-area">
                                        <div className="section-title">
                                          <h6>Professionals Information</h6>
                                          <div className="dash" />
                                        </div>
                                        <div className="educational-qualification mb-30">
                                          <div className="passing-year">
                                            <p>
                                              <span>01.</span>April, 2021- May,
                                              2022
                                            </p>
                                            <span />
                                          </div>
                                          <div className="education-dt">
                                            <h6>
                                              Bistro.Tech Group of Industry
                                            </h6>
                                            <p className="position">
                                              <span>Position:</span> UI/UX
                                              Engineer ( Full-Time)
                                            </p>
                                            <div className="responsibility">
                                              <h6>Responsibility:</h6>
                                              <ul>
                                                <li>
                                                  Creating high quality landing
                                                  pages optimized for client
                                                  website brands.
                                                </li>
                                                <li>
                                                  Creating e-commerce
                                                  interfaces, design
                                                  enhancements, and overall
                                                  improved user experience of
                                                  existing sites
                                                </li>
                                              </ul>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="educational-qualification">
                                          <div className="passing-year">
                                            <p>
                                              <span>02.</span>April, 2022-
                                              Continuing
                                            </p>
                                            <span />
                                          </div>
                                          <div className="education-dt">
                                            <h6>Norland Tech of Industry</h6>
                                            <p className="position">
                                              <span>Position:</span> UI/UX
                                              Engineer ( Full-Time)
                                            </p>
                                            <div className="responsibility">
                                              <h6>Responsibility:</h6>
                                              <ul>
                                                <li>
                                                  Creating high quality landing
                                                  pages optimized for client
                                                  website brands.
                                                </li>
                                                <li>
                                                  Creating e-commerce
                                                  interfaces, design
                                                  enhancements, and overall
                                                  improved user experience of
                                                  existing sites
                                                </li>
                                              </ul>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-lg-12">
                                      <div className="single-information-area">
                                        <div className="section-title">
                                          <h6>Social Network</h6>
                                          <div className="dash" />
                                        </div>
                                        <div className="social-area">
                                          <ul>
                                            <li>
                                              <a href="https://www.facebook.com/">
                                                Facebook
                                              </a>
                                            </li>
                                            <li>
                                              <a href="https://twitter.com/">
                                                Twitter
                                              </a>
                                            </li>
                                            <li>
                                              <a href="https://www.linkedin.com/">
                                                Linkedin
                                              </a>
                                            </li>
                                            <li>
                                              <a href="https://www.pinterest.com/">
                                                Pinterest
                                              </a>
                                            </li>
                                            <li>
                                              <a href="https://dribbble.com/">
                                                Dribbble
                                              </a>
                                            </li>
                                            <li>
                                              <a href="https://www.behance.net/">
                                                Behance
                                              </a>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-lg-12">
                                      <div className="declaration-area">
                                        <h6>
                                          Declaration &amp; Authentication-
                                        </h6>
                                        <p>
                                          I do hereby declare that the
                                          information given above is true of my
                                          knowledge.
                                        </p>
                                      </div>
                                      <div className="gratitude-area">
                                        <span>Yours Faithful,</span>
                                        <h6>Jacoline Frankly</h6>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="dowunload-btn pt-50">
                                    <a className="primry-btn-2 lg-btn" href="#">
                                      Download CV
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <span>
                            <img
                              src="/assets/images/icon/company-2.svg"
                              alt=""
                            />
                            Internation Colliegate University
                          </span>
                          <p>
                            <span>Applied On:</span> 02 April, 2023
                          </p>
                        </div>
                      </div>
                    </td>
                    <td data-label="Carrer Summary">
                      <div className="carrer-summary">
                        <h6>
                          Nowreh Tech <span>(Teaching Assistant)</span>
                        </h6>
                        <ul>
                          <li>
                            <span>Experience:</span> 2+ Years
                          </li>
                          <li>
                            <span>Salary:</span> $800/ Per Month
                          </li>
                        </ul>
                      </div>
                    </td>
                    <td data-label="Actions">
                      <div className="action-btn-group">
                        <ul>
                          <li>
                            <button>
                              <img
                                src="/assets/images/icon/shortlist-icon.svg"
                                alt=""
                              />{" "}
                              Shortlist
                            </button>
                          </li>
                          <li>
                            <button className="reject">
                              <img
                                src="/assets/images/icon/rejected-icon.svg"
                                alt=""
                              />{" "}
                              Rejected
                            </button>
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td data-label="Candidate Name">
                      <div className="employee-info">
                        <div className="employee-img">
                          <img
                            src="/assets/images/bg/employee-img1.png"
                            alt=""
                          />
                        </div>
                        <div className="employee-content">
                          <button
                            type="button"
                            className="btn btn-primary"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal6"
                          >
                            Mr. Willium Jacson
                          </button>
                          {/* Modal */}
                          <div
                            className="modal fade"
                            id="exampleModal6"
                            tabIndex={-1}
                            aria-hidden="true"
                          >
                            <div className="modal-dialog">
                              <div className="row justify-content-center g-lg-4 gy-5 mb-90">
                                <div className="col-lg-10">
                                  <div className="resume-area">
                                    <div className="row g-4 mb-40">
                                      <div className="col-lg-6">
                                        <div className="author-area">
                                          <div className="author-img">
                                            <img
                                              src="/assets/images/bg/resume-author.png"
                                              alt=""
                                            />
                                          </div>
                                          <div className="name-degination">
                                            <h4>Mr. Jacoline Frankly</h4>
                                            <span>UI/UX Engineer</span>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col-lg-6">
                                        <div className="contact-area">
                                          <h4>Contact Info</h4>
                                          <ul>
                                            <li>
                                              Phone:
                                              <a href="#">
                                                +880-177 443 5455{" "}
                                                <span>
                                                  <img
                                                    src="/assets/images/icon/phone-5.svg"
                                                    alt=""
                                                  />
                                                </span>
                                              </a>
                                            </li>
                                            <li>
                                              Email:
                                              <a href="#">
                                                info@example.com{" "}
                                                <span>
                                                  <img
                                                    src="/assets/images/icon/envlop-5.svg"
                                                    alt=""
                                                  />
                                                </span>
                                              </a>
                                            </li>
                                            <li>
                                              Website:
                                              <a href="#">
                                                www.infositeexample.com{" "}
                                                <span>
                                                  <img
                                                    src="/assets/images/icon/web-5.svg "
                                                    alt=""
                                                  />
                                                </span>
                                              </a>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-lg-12">
                                      <div className="single-information-area">
                                        <div className="section-title">
                                          <h6>Career Objective</h6>
                                          <div className="dash" />
                                        </div>
                                        <div className="description">
                                          <p>
                                            I'm a passionate UI/UX designer and
                                            can bring innovative ideas &amp;
                                            concepts to life for client-based
                                            design projects. I have more than 3
                                            years of design experience in
                                            digital/e-commerce. I experienced at
                                            tackle various needs from landing
                                            page designs, web app interfaces. I
                                            have skills in User Experience
                                            Design (UXD), user-centered Design,
                                            Interaction and Visual Design for
                                            websites, applications, web, and
                                            mobile products, wireframes,
                                            mock-ups, qualitative and
                                            quantitative user studies, usability
                                            analysis, and informal usability
                                            audits.
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-lg-12">
                                      <div className="single-information-area">
                                        <div className="section-title">
                                          <h6>Personal Information</h6>
                                          <div className="dash" />
                                        </div>
                                        <div className="row g-4">
                                          <div className="col-lg-6 devaider1 position-relative">
                                            <div className="informations">
                                              <ul>
                                                <li>
                                                  <span>Father’s Name:</span>{" "}
                                                  Mr. Norman Frankly
                                                </li>
                                                <li>
                                                  <span>Date of Birth:</span> 03
                                                  January,1998
                                                </li>
                                                <li>
                                                  <span>Nationality:</span>{" "}
                                                  Bangladeshi
                                                </li>
                                                <li>
                                                  <span>Marital Status:</span>{" "}
                                                  Unmarried
                                                </li>
                                                <li>
                                                  <span>Height:</span> 5’ 5’’
                                                </li>
                                                <li>
                                                  <span>Blood Group:</span> O
                                                  ve+
                                                </li>
                                                <li>
                                                  <span>
                                                    Permanent Address:
                                                  </span>{" "}
                                                  Village: Mirpur-12 Block-C,
                                                  Thana: Pallavi, District:
                                                  Dhaka, Division: Dhaka
                                                </li>
                                              </ul>
                                            </div>
                                          </div>
                                          <div className="col-lg-6 pl-40">
                                            <div className="informations d-flex justify-content-end">
                                              <ul>
                                                <li>
                                                  <span>Mother’s Name:</span>{" "}
                                                  Mrs. Macoline Frankly
                                                </li>
                                                <li>
                                                  <span>National ID:</span> 88
                                                  9919 6712 8762
                                                </li>
                                                <li>
                                                  <span>Religion:</span> Islam
                                                </li>
                                                <li>
                                                  <span>Gender:</span> Male
                                                </li>
                                                <li>
                                                  <span>Weight:</span> 75 KG
                                                </li>
                                                <li>
                                                  <span>Height:</span> 5’ 5’’
                                                </li>
                                                <li>
                                                  <span>Present Address:</span>{" "}
                                                  Village: Mirpur DOSH, Block-C,
                                                  Avenue-02, Thana: Pallavi,
                                                  District: Dhaka, Division:
                                                  Dhaka.
                                                </li>
                                              </ul>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-lg-12">
                                      <div className="single-information-area">
                                        <div className="section-title">
                                          <h6>Educational Qualification</h6>
                                          <div className="dash" />
                                        </div>
                                        <div className="educational-qualification mb-30">
                                          <div className="passing-year">
                                            <p>
                                              <span>01.</span>April, 2016- May,
                                              2020
                                            </p>
                                            <span />
                                          </div>
                                          <div className="education-dt">
                                            <h6>
                                              Royals Republic Science &amp;
                                              Technology University
                                            </h6>
                                            <ul>
                                              <li>
                                                <span>Education Level:</span>{" "}
                                                Graduation
                                              </li>
                                              <li>
                                                <span>My Major:</span> Bachelor
                                                Degree In CSE
                                              </li>
                                              <li>
                                                <span>Result/GPA:</span>{" "}
                                                3.75/4.00
                                              </li>
                                            </ul>
                                          </div>
                                        </div>
                                        <div className="educational-qualification">
                                          <div className="passing-year">
                                            <p>
                                              <span>02.</span>June, 2014- April,
                                              2016
                                            </p>
                                            <span />
                                          </div>
                                          <div className="education-dt">
                                            <h6>
                                              International Collegiate School
                                              &amp; College
                                            </h6>
                                            <ul>
                                              <li>
                                                <span>Education Level:</span>{" "}
                                                HSC
                                              </li>
                                              <li>
                                                <span>My Major:</span> Science
                                              </li>
                                              <li>
                                                <span>Result/GPA:</span>{" "}
                                                4.96/5.00
                                              </li>
                                            </ul>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-lg-12">
                                      <div className="single-information-area">
                                        <div className="section-title">
                                          <h6>Career Application</h6>
                                          <div className="dash" />
                                        </div>
                                        <div className="row g-4 ">
                                          <div className="col-lg-6 devaider1 position-relative">
                                            <div className="informations">
                                              <ul>
                                                <li>
                                                  <span>
                                                    Current Job Place:
                                                  </span>{" "}
                                                  Norland Tech of Industry
                                                </li>
                                                <li>
                                                  <span>Position:</span> UI/UX
                                                  Engineer
                                                </li>
                                                <li>
                                                  <span>Looking For:</span> Top
                                                  Level
                                                </li>
                                              </ul>
                                            </div>
                                          </div>
                                          <div className="col-lg-6 pl-40">
                                            <div className="informations">
                                              <ul>
                                                <li>
                                                  <span>Current Salary:</span>{" "}
                                                  30000/=
                                                </li>
                                                <li>
                                                  <span>Expected Salary:</span>{" "}
                                                  40000/=
                                                </li>
                                                <li>
                                                  <span>Available:</span> Full
                                                  Time
                                                </li>
                                              </ul>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-lg-12">
                                      <div className="single-information-area">
                                        <div className="section-title">
                                          <h6>Professionals Information</h6>
                                          <div className="dash" />
                                        </div>
                                        <div className="educational-qualification mb-30">
                                          <div className="passing-year">
                                            <p>
                                              <span>01.</span>April, 2021- May,
                                              2022
                                            </p>
                                            <span />
                                          </div>
                                          <div className="education-dt">
                                            <h6>
                                              Bistro.Tech Group of Industry
                                            </h6>
                                            <p className="position">
                                              <span>Position:</span> UI/UX
                                              Engineer ( Full-Time)
                                            </p>
                                            <div className="responsibility">
                                              <h6>Responsibility:</h6>
                                              <ul>
                                                <li>
                                                  Creating high quality landing
                                                  pages optimized for client
                                                  website brands.
                                                </li>
                                                <li>
                                                  Creating e-commerce
                                                  interfaces, design
                                                  enhancements, and overall
                                                  improved user experience of
                                                  existing sites
                                                </li>
                                              </ul>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="educational-qualification">
                                          <div className="passing-year">
                                            <p>
                                              <span>02.</span>April, 2022-
                                              Continuing
                                            </p>
                                            <span />
                                          </div>
                                          <div className="education-dt">
                                            <h6>Norland Tech of Industry</h6>
                                            <p className="position">
                                              <span>Position:</span> UI/UX
                                              Engineer ( Full-Time)
                                            </p>
                                            <div className="responsibility">
                                              <h6>Responsibility:</h6>
                                              <ul>
                                                <li>
                                                  Creating high quality landing
                                                  pages optimized for client
                                                  website brands.
                                                </li>
                                                <li>
                                                  Creating e-commerce
                                                  interfaces, design
                                                  enhancements, and overall
                                                  improved user experience of
                                                  existing sites
                                                </li>
                                              </ul>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-lg-12">
                                      <div className="single-information-area">
                                        <div className="section-title">
                                          <h6>Social Network</h6>
                                          <div className="dash" />
                                        </div>
                                        <div className="social-area">
                                          <ul>
                                            <li>
                                              <a href="https://www.facebook.com/">
                                                Facebook
                                              </a>
                                            </li>
                                            <li>
                                              <a href="https://twitter.com/">
                                                Twitter
                                              </a>
                                            </li>
                                            <li>
                                              <a href="https://www.linkedin.com/">
                                                Linkedin
                                              </a>
                                            </li>
                                            <li>
                                              <a href="https://www.pinterest.com/">
                                                Pinterest
                                              </a>
                                            </li>
                                            <li>
                                              <a href="https://dribbble.com/">
                                                Dribbble
                                              </a>
                                            </li>
                                            <li>
                                              <a href="https://www.behance.net/">
                                                Behance
                                              </a>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-lg-12">
                                      <div className="declaration-area">
                                        <h6>
                                          Declaration &amp; Authentication-
                                        </h6>
                                        <p>
                                          I do hereby declare that the
                                          information given above is true of my
                                          knowledge.
                                        </p>
                                      </div>
                                      <div className="gratitude-area">
                                        <span>Yours Faithful,</span>
                                        <h6>Jacoline Frankly</h6>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="dowunload-btn pt-50">
                                    <a className="primry-btn-2 lg-btn" href="#">
                                      Download CV
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <span>
                            <img
                              src="/assets/images/icon/company-2.svg"
                              alt=""
                            />
                            Internation Colliegate University
                          </span>
                          <p>
                            <span>Applied On:</span> 02 April, 2023
                          </p>
                        </div>
                      </div>
                    </td>
                    <td data-label="Carrer Summary">
                      <div className="carrer-summary">
                        <h6>
                          Colliegate Ltd <span>(Teaching Assistant)</span>
                        </h6>
                        <ul>
                          <li>
                            <span>Experience:</span> 2+ Years
                          </li>
                          <li>
                            <span>Salary:</span> $800/ Per Month
                          </li>
                        </ul>
                      </div>
                    </td>
                    <td data-label="Actions">
                      <div className="action-btn-group">
                        <ul>
                          <li>
                            <button>
                              <img
                                src="/assets/images/icon/shortlist-icon.svg"
                                alt=""
                              />{" "}
                              Shortlist
                            </button>
                          </li>
                          <li>
                            <button className="reject">
                              <img
                                src="/assets/images/icon/rejected-icon.svg"
                                alt=""
                              />{" "}
                              Rejected
                            </button>
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DashbordContent;
