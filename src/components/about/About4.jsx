import React from 'react'

function About4() {
  return (
    <div className="about-section-four pt-120 pb-120">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="about-four-content">
            <div className="section-title-four sibling-three text-lg-start text-center">
              <span className="ms-lg-4 ms-0">Get To Know</span>
            </div>
            <h3>“Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure.”</h3>
          </div>
        </div>
      </div>
      <div className="row mb-70 align-items-center gy-5">
        <div className="col-lg-4 text-lg-start text-center">
          <a href="about.html" className="btn--primary-outline eg-btn btn--lg style-three">Explore More</a>
        </div>
        <div className="col-lg-8">
          <ul className="nav nav-tabs nav-style-one justify-content-lg-between justify-content-center gap-sm-5 gap-4" role="tablist">
            <li className="nav-item" role="presentation">
              <a className="nav-link active" data-bs-toggle="tab" href="#tab-one" aria-selected="false" role="tab" tabIndex={-1}>2023
                <span>Award</span></a>
            </li>
            <li className="nav-item" role="presentation">
              <a className="nav-link" data-bs-toggle="tab" href="#tab-two" aria-selected="true" role="tab">2022 
                <span>Award</span></a>
            </li>
            <li className="nav-item" role="presentation">
              <a className="nav-link" data-bs-toggle="tab" href="#tab-three" aria-selected="false" role="tab" tabIndex={-1}>2021
                <span>Award</span></a>
            </li>
            <li className="nav-item" role="presentation">
              <a className="nav-link" data-bs-toggle="tab" href="#tab-four" aria-selected="true" role="tab">
                2020
                <span>Award</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div id="myTabContent" className="tab-content">
        <div className="tab-pane fade" id="tab-one" role="tabpanel">
          <div className="row gy-5">
            <div className="col-lg-4">
              <img src="assets/images/bg/award4-1.png" alt="" />
            </div>
            <div className="col-lg-8">
              <div className="award-four-content">
                <h4># Top Level SEO Agency In 2023 In Worldwide.</h4>
                <p>We denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue.</p>
                <p>In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure.</p>
                <a href="about.html" className="explore-btn" data-cursor="View Details">Read More</a>
              </div>
            </div>
          </div>
        </div>
        <div className="tab-pane fade active show" id="tab-two" role="tabpanel">
          <div className="row gy-5">
            <div className="col-lg-4">
              <img src="assets/images/bg/award4-1.png" alt="" />
            </div>
            <div className="col-lg-8">
              <div className="award-four-content">
                <h4># Top Level SEO Agency In 2022 In Worldwide.</h4>
                <p>We denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue.</p>
                <p className="mb-40 mb-40-mobile">In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure.</p>
                <a href="about.html" className="explore-btn" data-cursor="View Details">Read More</a>
              </div>
            </div>
          </div>
        </div>
        <div className="tab-pane fade" id="tab-three" role="tabpanel">
          <div className="row gy-5">
            <div className="col-lg-4">
              <img src="assets/images/bg/award4-1.png" alt="" />
            </div>
            <div className="col-lg-8">
              <div className="award-four-content">
                <h4># Top Level SEO Agency In 2021 In Worldwide.</h4>
                <p>We denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue.</p>
                <p>In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure.</p>
                <a href="about.html" className="explore-btn" data-cursor="View Details">Read More</a>
              </div>
            </div>
          </div>
        </div>
        <div className="tab-pane fade" id="tab-four" role="tabpanel">
          <div className="row gy-5">
            <div className="col-lg-4">
              <img src="assets/images/bg/award4-1.png" alt="" />
            </div>
            <div className="col-lg-8">
              <div className="award-four-content">
                <h4># Top Level SEO Agency In 2020 In Worldwide.</h4>
                <p>We denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue.</p>
                <p>In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure.</p>
                <a href="about.html" className="explore-btn" data-cursor="View Details">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default About4