import Link from "next/link";
import React from "react";
import Breadcrumb from "../components/common/Breadcrumb";
import Layout from "../layout/Layout";

function jobDetails() {
  return (
    <Layout>
      <Breadcrumb pageName="Job Details" pageTitle="Job Details" />
      <div className="job-details-pages pt-120 mb-120">
        <div className="container">
          <div className="row g-lg-4 gy-5">
            <div className="col-lg-8">
              <div className="job-details-content">
                <div className="job-list-content">
                  <div className="company-area">
                    <div className="logo">
                      <img
                        src="assets/images/bg/company-logo/company-01.png"
                        alt=""
                      />
                    </div>
                    <div className="company-details">
                      <div className="name-location">
                        <h5>
                          <a href="#">Senior UI/UX Engineer</a>
                        </h5>
                        <p>Bistro.Tech Group Ltd</p>
                      </div>
                    </div>
                  </div>
                  <div className="job-discription">
                    <ul className="one">
                      <li>
                        <img src="assets/images/icon/map-2.svg" alt="" />
                        <p>
                          <span className="title">Location:</span> Dhaka,
                          Bangladesh
                        </p>
                      </li>
                      <li>
                        <img src="assets/images/icon/category-2.svg" alt="" />
                        <p>
                          <span className="title">Category:</span> Creative
                          Design
                        </p>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <img src="assets/images/icon/company-2.svg" alt="" />
                        <p>
                          <span className="title">Job Type:</span> Full-Time
                        </p>
                      </li>
                      <li>
                        <img src="assets/images/icon/salary-2.svg" alt="" />
                        <p>
                          <span className="title">Salary:</span> $40K-$78K/Per
                          Month
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
                <p>
                  <span>Job Description:</span> A UI/UX (User Interface/User
                  Experience) designer is responsible for designing and creating
                  engaging and effective interfaces for software and web
                  applications. This includes designing the layout, visual
                  design, and interactivity of the user interface.
                </p>
                <br />
                <p>
                  <span>Job Responsibility:</span> Collaborating with
                  cross-functional teams: UI/UX designers often work closely
                  with other teams, including product management, engineering,
                  and marketing, to ensure that the user interface is aligned
                  with business and technical requirements. You will need to be
                  able to effectively communicate your design ideas and gather
                  feedback from other team members.
                </p>
                <ul>
                  <li>
                    Conducting user research and testing to understand user
                    needs and behaviors.
                  </li>
                  <li>
                    Designing wireframes, prototypes, and high-fidelity mockups.
                  </li>
                  <li>
                    Developing and maintaining design systems and style guides.
                  </li>
                  <li>
                    Collaborating with cross-functional teams, including product
                    management, engineering, and marketing.
                  </li>
                  <li>
                    Staying up-to-date with the latest design trends and
                    technologies.
                  </li>
                  <li>
                    Gathering and analyzing user requirements to inform the
                    design of new software or web applications.
                  </li>
                </ul>
                <h6>Educational Requirements:</h6>
                <ul>
                  <li>
                    Bachelor degree to complete any reputational university.
                  </li>
                  <li>
                    Bachelor degree to complete any reputational university.
                  </li>
                </ul>
                <h6>Experiences:</h6>
                <ul>
                  <li>2-3 Years in this field.</li>
                </ul>
                <p>
                  <span>Main Duties:</span> Some specific tasks that a UI/UX
                  designer might be responsible for include:
                </p>
                <ul>
                  <li>
                    Gathering and analyzing user requirements to inform the
                    design of new software or web applications.
                  </li>
                  <li>
                    Designing the layout, visual design, and interactivity of
                    the user interface.
                  </li>
                  <li>
                    Developing and maintaining design systems and style guides
                    to ensure consistency in theux
                  </li>
                  <li>
                    Collaborating with cross-functional teams, including product
                    management, engineering, and marketing, to ensure that the
                    user interface is aligned with business and technical
                    requirements
                  </li>
                </ul>
                <p>
                  <span>Extra Benefits:</span> Some specific tasks that a UI/UX
                  designer might be responsible for include:
                </p>
                <ul>
                  <li>Any health care.</li>
                  <li>Yearly performance bonus.</li>
                  <li>Flexibility &amp; remote working.</li>
                  <li>Two days off weekly.</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="job-details-sidebar">
                <div className="save-apply-btn d-flex justify-content-end mb-50">
                  <ul>
                    <li>
                      <a className="save-btn" href="#">
                        Save Job{" "}
                        <span>
                          <i className="bi bi-bookmark-fill" />
                        </span>
                      </a>
                    </li>
                    <li>
                      <a className="primry-btn-2 lg-btn" href="#">
                        Apply Position
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="job-summary-area mb-50">
                  <div className="pin">
                    <img src="assets/images/icon/pin.svg" alt="" />
                  </div>
                  <div className="job-summary-title">
                    <h6>Job Summary:</h6>
                  </div>
                  <ul>
                    <li>
                      <p>
                        <span className="title">Job Title:</span> Senior UI/UX
                        Engineer
                      </p>
                    </li>
                    <li>
                      <p>
                        <span className="title">Vacancy:</span> 07 Person
                      </p>
                    </li>
                    <li>
                      <p>
                        <span className="title">Experiences:</span> 2-3 Years.
                      </p>
                    </li>
                    <li>
                      <p>
                        <span className="title">Job Category:</span> Creative
                        Design
                      </p>
                    </li>
                    <li>
                      <p>
                        <span className="title">Job Type:</span> Full-Time
                      </p>
                    </li>
                    <li>
                      <p>
                        <span className="title">Salary:</span> 40K-$78K/
                        <span className="time">Per Month</span>
                      </p>
                    </li>
                    <li>
                      <p>
                        <span className="title">Deadline:</span> 02/02/2023
                      </p>
                    </li>
                  </ul>
                </div>
                <div className="view-job-btn mb-30">
                  <a href="#">
                    <img src="assets/images/icon/company-2.svg" alt="" />
                    View All Jobs In This Company
                  </a>
                </div>
                <div className="job-share-area mb-50">
                  <h6>Job Link Share:</h6>
                  <ul>
                    <li>
                      <a href="#">
                        <i className="bx bx-link" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="bx bxl-facebook" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="bx bxl-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="bx bxl-linkedin" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="bx bxl-instagram-alt" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="email-area mb-50">
                  <div className="title">
                    <h6>
                      <img src="assets/images/icon/email-2.svg" alt="" />
                      Email Now
                    </h6>
                  </div>
                  <p>
                    Send your resume at <a href="#">info@example.com</a>
                  </p>
                </div>
                <div className="location-area">
                  <h6>Get Location:</h6>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3649.564763018799!2d90.36349791490355!3d23.834071191491947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c14c8682a473%3A0xa6c74743d52adb88!2sEgens%20Lab!5e0!3m2!1sen!2sbd!4v1674212581590!5m2!1sen!2sbd"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-12 mb-100">
              <div className="company-gallery">
                <div className="title">
                  <h5>Company Gallery View</h5>
                </div>
                <div
                  className="swiper company-gallery-slider"
                  data-cursor="Drag"
                >
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <a
                        href="assets/images/bg/company-gallery-big-01.png"
                        data-fancybox="gallery"
                        className="gallery2-img"
                      >
                        <div className="gallery-wrap">
                          <img
                            className="img-fluid"
                            src="assets/images/bg/company-gallery-sm-01.png"
                            alt=""
                          />
                          <div className="overlay d-flex align-items-center justify-content-center">
                            <div className="items-content text-center">
                              <img src="assets/images/icon/eye.svg" alt="" />
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="swiper-slide">
                      <a
                        href="assets/images/bg/company-gallery-big-02.png"
                        data-fancybox="gallery"
                        className="gallery2-img"
                      >
                        <div className="gallery-wrap">
                          <img
                            className="img-fluid"
                            src="assets/images/bg/company-gallery-sm-02.png"
                            alt=""
                          />
                          <div className="overlay d-flex align-items-center justify-content-center">
                            <div className="items-content text-center">
                              <img src="assets/images/icon/eye.svg" alt="" />
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="swiper-slide">
                      <a
                        href="assets/images/bg/company-gallery-big-03.png"
                        data-fancybox="gallery"
                        className="gallery2-img"
                      >
                        <div className="gallery-wrap">
                          <img
                            className="img-fluid"
                            src="assets/images/bg/company-gallery-sm-03.png"
                            alt=""
                          />
                          <div className="overlay d-flex align-items-center justify-content-center">
                            <div className="items-content text-center">
                              <img src="assets/images/icon/eye.svg" alt="" />
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="swiper-slide">
                      <a
                        href="assets/images/bg/company-gallery-big-04.png"
                        data-fancybox="gallery"
                        className="gallery2-img"
                      >
                        <div className="gallery-wrap">
                          <img
                            className="img-fluid"
                            src="assets/images/bg/company-gallery-sm-04.png"
                            alt=""
                          />
                          <div className="overlay d-flex align-items-center justify-content-center">
                            <div className="items-content text-center">
                              <img src="assets/images/icon/eye.svg" alt="" />
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="swiper-slide">
                      <a
                        href="assets/images/bg/company-gallery-big-05.png"
                        data-fancybox="gallery"
                        className="gallery2-img"
                      >
                        <div className="gallery-wrap">
                          <img
                            className="img-fluid"
                            src="assets/images/bg/company-gallery-sm-05.png"
                            alt=""
                          />
                          <div className="overlay d-flex align-items-center justify-content-center">
                            <div className="items-content text-center">
                              <img src="assets/images/icon/eye.svg" alt="" />
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="related-jobs">
                <div className="section-title mb-40">
                  <h3>Related Jobs:</h3>
                  <div className="swiper-btn1 d-flex align-items-center">
                    <div className="left-btn prev-4">
                      <img
                        src="assets/images/icon/explore-elliose.svg"
                        alt=""
                      />
                    </div>
                    <div className="right-btn next-4">
                      <img
                        src="assets/images/icon/explore-elliose.svg"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div className="swiper related-job-slider">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <div className="feature-card">
                        <div className="company-area">
                          <div className="logo">
                            <img
                              src="assets/images/bg/company-logo/company-01.png"
                              alt=""
                            />
                          </div>
                          <div className="company-details">
                            <div className="name-location">
                              <h5>
                                <Link legacyBehavior href="/job-details">
                                  <a> React JS Developer</a>
                                </Link>
                              </h5>
                              <p>
                                <Link legacyBehavior href="/company-details">
                                  <a>Elite Hangstroman</a>
                                </Link>
                              </p>
                            </div>
                            <div className="bookmark">
                              <i className="bi bi-bookmark" />
                            </div>
                          </div>
                        </div>
                        <div className="job-discription">
                          <ul>
                            <li>
                              <img src="assets/images/icon/arrow2.svg" alt="" />
                              <p>
                                <span className="title">Salary:</span> $80-$110
                                / <span className="time">Per month</span>
                              </p>
                            </li>
                            <li>
                              <img src="assets/images/icon/arrow2.svg" alt="" />
                              <p>
                                <span className="title">
                                  Deadline: 02 March, 2023{" "}
                                </span>
                              </p>
                            </li>
                          </ul>
                        </div>
                        <div className="job-type-apply">
                          <div className="job-type">
                            <span className="full-time">Full Time</span>
                          </div>
                          <div className="apply-btn">
                            <Link legacyBehavior href="/job-details">
                              <a>
                                <span>
                                  <img
                                    src="assets/images/icon/apply-ellipse.svg"
                                    alt=""
                                  />
                                </span>
                                Apply Now
                              </a>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="feature-card">
                        <div className="company-area">
                          <div className="logo">
                            <img
                              src="assets/images/bg/company-logo/company-02.png"
                              alt=""
                            />
                          </div>
                          <div className="company-details">
                            <div className="name-location">
                              <h5>
                                <Link legacyBehavior href="/job-details">
                                  <a>Assistant Laboratorist</a>
                                </Link>
                              </h5>
                              <p>
                                <Link legacyBehavior href="/company-details">
                                  <a>Norland Comapny</a>
                                </Link>
                              </p>
                            </div>
                            <div className="bookmark">
                              <i className="bi bi-bookmark" />
                            </div>
                          </div>
                        </div>
                        <div className="job-discription">
                          <ul>
                            <li>
                              <img src="assets/images/icon/arrow2.svg" alt="" />
                              <p>
                                <span className="title">Salary:</span> $30-$40 /{" "}
                                <span className="time">Per month</span>
                              </p>
                            </li>
                            <li>
                              <img src="assets/images/icon/arrow2.svg" alt="" />
                              <p>
                                <span className="title">
                                  Deadline: 02 March, 2023{" "}
                                </span>
                              </p>
                            </li>
                          </ul>
                        </div>
                        <div className="job-type-apply">
                          <div className="job-type">
                            <span className="full-time">Full Time</span>
                          </div>
                          <div className="apply-btn">
                            <Link legacyBehavior href="/job-details">
                              <a>
                                <span>
                                  <img
                                    src="assets/images/icon/apply-ellipse.svg"
                                    alt=""
                                  />
                                </span>
                                Apply Now
                              </a>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="feature-card">
                        <div className="company-area">
                          <div className="logo">
                            <img
                              src="assets/images/bg/company-logo/company-04.png"
                              alt=""
                            />
                          </div>
                          <div className="company-details">
                            <div className="name-location">
                              <h5>
                                <Link legacyBehavior href="/job-details">
                                  <a>UI/UX Designer</a>
                                </Link>
                              </h5>
                              <p>
                                <Link legacyBehavior href="/company-details">
                                  <a>Techman Digita</a>
                                </Link>
                              </p>
                            </div>
                            <div className="bookmark">
                              <i className="bi bi-bookmark" />
                            </div>
                          </div>
                        </div>
                        <div className="job-discription">
                          <ul>
                            <li>
                              <img src="assets/images/icon/arrow2.svg" alt="" />
                              <p>
                                <span className="title">Salary:</span> $60-$70 /{" "}
                                <span className="time">Per month</span>
                              </p>
                            </li>
                            <li>
                              <img src="assets/images/icon/arrow2.svg" alt="" />
                              <p>
                                <span className="title">
                                  Deadline: 02 March, 2023{" "}
                                </span>
                              </p>
                            </li>
                          </ul>
                        </div>
                        <div className="job-type-apply">
                          <div className="job-type">
                            <span className="full-time">Full Time</span>
                          </div>
                          <div className="apply-btn">
                            <Link legacyBehavior href="/job-details">
                              <a>
                                <span>
                                  <img
                                    src="assets/images/icon/apply-ellipse.svg"
                                    alt=""
                                  />
                                </span>
                                Apply Now
                              </a>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default jobDetails;
