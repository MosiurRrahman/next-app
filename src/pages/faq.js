import React from "react";
import Breadcrumb from "../components/breadcrumb/Breadcrumb";
import Layout from "../layout/Layout";

function faq() {
  return (
    <Layout>
      <Breadcrumb pageName="FAQ" pageTitle="FAQ" />
      <div className="faq-section bg-color2 pt-120 pb-120 mb-44">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-5 col-lg-6 col-md-10 order-lg-1 order-2">
              <div className="faq-block">
                <h2>Q&amp;A</h2>
                <p>
                  Donec bibendum enim ut elit porta ullamcorper. Vestibulum
                  Naitor quam nulla gonr venenatis eget dapibus ac,
                </p>
                <ul className="nav nav-tabs qa-tag-list" role="tablist">
                  <li className="nav-item" role="presentation">
                    <a
                      className="nav-link active"
                      data-bs-toggle="tab"
                      href="#tab-one"
                      aria-selected="false"
                      role="tab"
                      tabIndex={-1}
                    >
                      <img
                        src="assets/images/icons/list-cicle.svg"
                        alt="image"
                      />
                      Artist
                    </a>
                  </li>
                  <li className="nav-item" role="presentation">
                    <a
                      className="nav-link"
                      data-bs-toggle="tab"
                      href="#tab-two"
                      aria-selected="false"
                      role="tab"
                    >
                      <img
                        src="assets/images/icons/list-cicle.svg"
                        alt="image"
                      />
                      Portfolio
                    </a>
                  </li>
                  <li className="nav-item" role="presentation">
                    <a
                      className="nav-link"
                      data-bs-toggle="tab"
                      href="#tab-three"
                      aria-selected="false"
                      role="tab"
                    >
                      <img
                        src="assets/images/icons/list-cicle.svg"
                        alt="image"
                      />
                      Crypto
                    </a>
                  </li>
                  <li className="nav-item" role="presentation">
                    <a
                      className="nav-link"
                      data-bs-toggle="tab"
                      href="#tab-four"
                      aria-selected="false"
                      role="tab"
                    >
                      <img
                        src="assets/images/icons/list-cicle.svg"
                        alt="image"
                      />
                      Digital Token
                    </a>
                  </li>
                  <li className="nav-item" role="presentation">
                    <a
                      className="nav-link"
                      data-bs-toggle="tab"
                      href="#tab-five"
                      aria-selected="false"
                      role="tab"
                    >
                      <img
                        src="assets/images/icons/list-cicle.svg"
                        alt="image"
                      />
                      Blockchain NFT
                    </a>
                  </li>
                </ul>
                <h4>Social Media</h4>
                <ul className="social-one justify-content-start">
                  <li>
                    <img src="assets/images/icons/instagram.svg" alt="image" />
                    <a href="https://www.instagram.com/">IN</a>
                  </li>
                  <li>
                    <img src="assets/images/icons/dribbble.svg" alt="image" />
                    <a href="https://www.dribbble.com/">DB</a>
                  </li>
                  <li>
                    <img src="assets/images/icons/pinterest.svg" alt="image" />
                    <a href="https://www.pinterest.com/">PI</a>
                  </li>
                  <li>
                    <img src="assets/images/icons/Twitter.svg" alt="image" />
                    <a href="https://www.twitter.com/">TW</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-7 col-lg-6 col-md-10 order-lg-2 order-1">
              <div className="tab-content">
                <div
                  className="tab-pane fade active show"
                  id="tab-one"
                  role="tabpanel"
                >
                  <div
                    className="faq-wrap wow fadeInUp"
                    data-wow-duration="1.5s"
                    data-wow-delay=".2s"
                  >
                    <div className="accordion">
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                          >
                            01. Curious about how to build your own UX strategy?
                          </button>
                        </h2>
                        <div
                          id="collapseOne"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingOne"
                        >
                          <div className="accordion-body">
                            <p>
                              Aptent taciti sociosqu ad litora torquent per
                              conubia nostra, per inceptos only Integ himenaeos.
                              Praesent nec neque at dolor venenatis consectetur
                              eu quis ex. the Donec placerat felis non
                              aliquam.Mauris nec justo vitae ante auctor tol
                              euismod sit amet n Praesent commodo at massa eget
                              suscipit. Utani vitae enim velit.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                          >
                            02. Where Could a Career in UX Take You? Agency vs.
                            In-House ?
                          </button>
                        </h2>
                        <div
                          id="collapseTwo"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingTwo"
                        >
                          <div className="accordion-body">
                            <p>
                              Aptent taciti sociosqu ad litora torquent per
                              conubia nostra, per inceptos only Integ himenaeos.
                              Praesent nec neque at dolor venenatis consectetur
                              eu quis ex. the Donec placerat felis non
                              aliquam.Mauris nec justo vitae ante auctor tol
                              euismod sit amet n Praesent commodo at massa eget
                              suscipit. Utani vitae enim velit.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseThree"
                            aria-expanded="false"
                            aria-controls="collapseThree"
                          >
                            03. What Is a Problem Statement in UX? (And How To
                            Write One)?
                          </button>
                        </h2>
                        <div
                          id="collapseThree"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingThree"
                        >
                          <div className="accordion-body">
                            <p>
                              Aptent taciti sociosqu ad litora torquent per
                              conubia nostra, per inceptos only Integ himenaeos.
                              Praesent nec neque at dolor venenatis consectetur
                              eu quis ex. the Donec placerat felis non
                              aliquam.Mauris nec justo vitae ante auctor tol
                              euismod sit amet n Praesent commodo at massa eget
                              suscipit. Utani vitae enim velit.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingFour">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseFour"
                            aria-expanded="false"
                            aria-controls="collapseFour"
                          >
                            04. There are several techniques UX designers employ
                            to arrive?
                          </button>
                        </h2>
                        <div
                          id="collapseFour"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingFour"
                        >
                          <div className="accordion-body">
                            <p>
                              Aptent taciti sociosqu ad litora torquent per
                              conubia nostra, per inceptos only Integ himenaeos.
                              Praesent nec neque at dolor venenatis consectetur
                              eu quis ex. the Donec placerat felis non
                              aliquam.Mauris nec justo vitae ante auctor tol
                              euismod sit amet n Praesent commodo at massa eget
                              suscipit. Utani vitae enim velit.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingFive">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseFive"
                            aria-expanded="false"
                            aria-controls="collapseFive"
                          >
                            05. What are the users are facing? What are they
                            trying to?
                          </button>
                        </h2>
                        <div
                          id="collapseFive"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingFive"
                        >
                          <div className="accordion-body">
                            <p>
                              Aptent taciti sociosqu ad litora torquent per
                              conubia nostra, per inceptos only Integ himenaeos.
                              Praesent nec neque at dolor venenatis consectetur
                              eu quis ex. the Donec placerat felis non
                              aliquam.Mauris nec justo vitae ante auctor tol
                              euismod sit amet n Praesent commodo at massa eget
                              suscipit. Utani vitae enim velit.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* first-tab-content end */}
                <div className="tab-pane fade" id="tab-two" role="tabpanel">
                  <div
                    className="faq-wrap wow fadeInUp"
                    data-wow-duration="1.5s"
                    data-wow-delay=".2s"
                  >
                    <div className="accordion">
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingSix">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseSix"
                            aria-expanded="false"
                            aria-controls="collapseSix"
                          >
                            02. Where Could a Career in UX Take You? Agency vs.
                            In-House ?
                          </button>
                        </h2>
                        <div
                          id="collapseSix"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingSix"
                        >
                          <div className="accordion-body">
                            <p>
                              Aptent taciti sociosqu ad litora torquent per
                              conubia nostra, per inceptos only Integ himenaeos.
                              Praesent nec neque at dolor venenatis consectetur
                              eu quis ex. the Donec placerat felis non
                              aliquam.Mauris nec justo vitae ante auctor tol
                              euismod sit amet n Praesent commodo at massa eget
                              suscipit. Utani vitae enim velit.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingSeven">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseSeven"
                            aria-expanded="false"
                            aria-controls="collapseSeven"
                          >
                            03. What Is a Problem Statement in UX? (And How To
                            Write One)?
                          </button>
                        </h2>
                        <div
                          id="collapseSeven"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingSeven"
                        >
                          <div className="accordion-body">
                            <p>
                              Aptent taciti sociosqu ad litora torquent per
                              conubia nostra, per inceptos only Integ himenaeos.
                              Praesent nec neque at dolor venenatis consectetur
                              eu quis ex. the Donec placerat felis non
                              aliquam.Mauris nec justo vitae ante auctor tol
                              euismod sit amet n Praesent commodo at massa eget
                              suscipit. Utani vitae enim velit.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingEight">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseEight"
                            aria-expanded="false"
                            aria-controls="collapseEight"
                          >
                            04. There are several techniques UX designers employ
                            to arrive?
                          </button>
                        </h2>
                        <div
                          id="collapseEight"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingEight"
                        >
                          <div className="accordion-body">
                            <p>
                              Aptent taciti sociosqu ad litora torquent per
                              conubia nostra, per inceptos only Integ himenaeos.
                              Praesent nec neque at dolor venenatis consectetur
                              eu quis ex. the Donec placerat felis non
                              aliquam.Mauris nec justo vitae ante auctor tol
                              euismod sit amet n Praesent commodo at massa eget
                              suscipit. Utani vitae enim velit.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingNine">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseNine"
                            aria-expanded="false"
                            aria-controls="collapseNine"
                          >
                            05. What are the users are facing? What are they
                            trying to?
                          </button>
                        </h2>
                        <div
                          id="collapseNine"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingNine"
                        >
                          <div className="accordion-body">
                            <p>
                              Aptent taciti sociosqu ad litora torquent per
                              conubia nostra, per inceptos only Integ himenaeos.
                              Praesent nec neque at dolor venenatis consectetur
                              eu quis ex. the Donec placerat felis non
                              aliquam.Mauris nec justo vitae ante auctor tol
                              euismod sit amet n Praesent commodo at massa eget
                              suscipit. Utani vitae enim velit.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* second-tab-content end */}
                <div className="tab-pane fade" id="tab-three" role="tabpanel">
                  <div
                    className="faq-wrap wow fadeInUp"
                    data-wow-duration="1.5s"
                    data-wow-delay=".2s"
                  >
                    <div className="accordion">
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTen">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTen"
                            aria-expanded="false"
                            aria-controls="collapseTen"
                          >
                            03. What Is a Problem Statement in UX? (And How To
                            Write One)?
                          </button>
                        </h2>
                        <div
                          id="collapseTen"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingTen"
                        >
                          <div className="accordion-body">
                            <p>
                              Aptent taciti sociosqu ad litora torquent per
                              conubia nostra, per inceptos only Integ himenaeos.
                              Praesent nec neque at dolor venenatis consectetur
                              eu quis ex. the Donec placerat felis non
                              aliquam.Mauris nec justo vitae ante auctor tol
                              euismod sit amet n Praesent commodo at massa eget
                              suscipit. Utani vitae enim velit.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingEleven">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseEleven"
                            aria-expanded="false"
                            aria-controls="collapseEleven"
                          >
                            04. There are several techniques UX designers employ
                            to arrive?
                          </button>
                        </h2>
                        <div
                          id="collapseEleven"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingEleven"
                        >
                          <div className="accordion-body">
                            <p>
                              Aptent taciti sociosqu ad litora torquent per
                              conubia nostra, per inceptos only Integ himenaeos.
                              Praesent nec neque at dolor venenatis consectetur
                              eu quis ex. the Donec placerat felis non
                              aliquam.Mauris nec justo vitae ante auctor tol
                              euismod sit amet n Praesent commodo at massa eget
                              suscipit. Utani vitae enim velit.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwelve">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTwelve"
                            aria-expanded="false"
                            aria-controls="collapseTwelve"
                          >
                            05. What are the users are facing? What are they
                            trying to?
                          </button>
                        </h2>
                        <div
                          id="collapseTwelve"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingTwelve"
                        >
                          <div className="accordion-body">
                            <p>
                              Aptent taciti sociosqu ad litora torquent per
                              conubia nostra, per inceptos only Integ himenaeos.
                              Praesent nec neque at dolor venenatis consectetur
                              eu quis ex. the Donec placerat felis non
                              aliquam.Mauris nec justo vitae ante auctor tol
                              euismod sit amet n Praesent commodo at massa eget
                              suscipit. Utani vitae enim velit.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* third-tab-content end */}
                <div className="tab-pane fade" id="tab-four" role="tabpanel">
                  <div
                    className="faq-wrap wow fadeInUp"
                    data-wow-duration="1.5s"
                    data-wow-delay=".2s"
                  >
                    <div className="accordion">
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThirteen">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseThirteen"
                            aria-expanded="false"
                            aria-controls="collapseThirteen"
                          >
                            04. There are several techniques UX designers employ
                            to arrive?
                          </button>
                        </h2>
                        <div
                          id="collapseThirteen"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingThirteen"
                        >
                          <div className="accordion-body">
                            <p>
                              Aptent taciti sociosqu ad litora torquent per
                              conubia nostra, per inceptos only Integ himenaeos.
                              Praesent nec neque at dolor venenatis consectetur
                              eu quis ex. the Donec placerat felis non
                              aliquam.Mauris nec justo vitae ante auctor tol
                              euismod sit amet n Praesent commodo at massa eget
                              suscipit. Utani vitae enim velit.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingFourteen">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseFourteen"
                            aria-expanded="false"
                            aria-controls="collapseFourteen"
                          >
                            03. What Is a Problem Statement in UX? (And How To
                            Write One)?
                          </button>
                        </h2>
                        <div
                          id="collapseFourteen"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingFourteen"
                        >
                          <div className="accordion-body">
                            <p>
                              Aptent taciti sociosqu ad litora torquent per
                              conubia nostra, per inceptos only Integ himenaeos.
                              Praesent nec neque at dolor venenatis consectetur
                              eu quis ex. the Donec placerat felis non
                              aliquam.Mauris nec justo vitae ante auctor tol
                              euismod sit amet n Praesent commodo at massa eget
                              suscipit. Utani vitae enim velit.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingFifteen">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseFifteen"
                            aria-expanded="false"
                            aria-controls="collapseFifteen"
                          >
                            05. What are the users are facing? What are they
                            trying to?
                          </button>
                        </h2>
                        <div
                          id="collapseFifteen"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingFifteen"
                        >
                          <div className="accordion-body">
                            <p>
                              Aptent taciti sociosqu ad litora torquent per
                              conubia nostra, per inceptos only Integ himenaeos.
                              Praesent nec neque at dolor venenatis consectetur
                              eu quis ex. the Donec placerat felis non
                              aliquam.Mauris nec justo vitae ante auctor tol
                              euismod sit amet n Praesent commodo at massa eget
                              suscipit. Utani vitae enim velit.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* four-tab-content end */}
                <div className="tab-pane fade" id="tab-five" role="tabpanel">
                  <div
                    className="faq-wrap wow fadeInUp"
                    data-wow-duration="1.5s"
                    data-wow-delay=".2s"
                  >
                    <div className="accordion">
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingSixteen">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseSixteen"
                            aria-expanded="false"
                            aria-controls="collapseSixteen"
                          >
                            05. What are the users are facing? What are they
                            trying to?
                          </button>
                        </h2>
                        <div
                          id="collapseSixteen"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingSixteen"
                        >
                          <div className="accordion-body">
                            <p>
                              Aptent taciti sociosqu ad litora torquent per
                              conubia nostra, per inceptos only Integ himenaeos.
                              Praesent nec neque at dolor venenatis consectetur
                              eu quis ex. the Donec placerat felis non
                              aliquam.Mauris nec justo vitae ante auctor tol
                              euismod sit amet n Praesent commodo at massa eget
                              suscipit. Utani vitae enim velit.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingSeventeen">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseSeventeen"
                            aria-expanded="false"
                            aria-controls="collapseSeventeen"
                          >
                            04. There are several techniques UX designers employ
                            to arrive?
                          </button>
                        </h2>
                        <div
                          id="collapseSeventeen"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingSeventeen"
                        >
                          <div className="accordion-body">
                            <p>
                              Aptent taciti sociosqu ad litora torquent per
                              conubia nostra, per inceptos only Integ himenaeos.
                              Praesent nec neque at dolor venenatis consectetur
                              eu quis ex. the Donec placerat felis non
                              aliquam.Mauris nec justo vitae ante auctor tol
                              euismod sit amet n Praesent commodo at massa eget
                              suscipit. Utani vitae enim velit.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingEighteen">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseEighteen"
                            aria-expanded="false"
                            aria-controls="collapseEighteen"
                          >
                            03. What Is a Problem Statement in UX? (And How To
                            Write One)?
                          </button>
                        </h2>
                        <div
                          id="collapseEighteen"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingEighteen"
                        >
                          <div className="accordion-body">
                            <p>
                              Aptent taciti sociosqu ad litora torquent per
                              conubia nostra, per inceptos only Integ himenaeos.
                              Praesent nec neque at dolor venenatis consectetur
                              eu quis ex. the Donec placerat felis non
                              aliquam.Mauris nec justo vitae ante auctor tol
                              euismod sit amet n Praesent commodo at massa eget
                              suscipit. Utani vitae enim velit.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* five-tab-content end */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default faq;
