import React from 'react'

function Chart2() {
  return (
    <div className="growth-section pt-120">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6">
          <div className="section-title-six sibling-two text-lg-start text-center mb-20">
            <span>Business Progress</span>
            <h2>
              Before &amp; After <span>Marketing</span>
            </h2>
          </div>
          <div className="growth-content">
            <p>
              Nothing prevents our being able to do what we like best, every
              pleasure is to be welcomed and every pain avoided. But in
              certain circumstances and owing to the claims of duty or the
              obligations of business it will frequently occur that
              pleasures have to be repudiated.
            </p>
            <p>
              We denounce with righteous indignation and dislike men who are
              so beguiled and demoralized by the charms of pleasure of the
              moment.
            </p>
          </div>
          <div className="growth-buttons">
            <ul className="nav nav-tabs" role="tablist">
              <li className="nav-item" role="presentation">
                <a
                  className="nav-link active"
                  data-bs-toggle="tab"
                  href="#home"
                  aria-selected="true"
                  role="tab"
                >
                  Before
                </a>
              </li>
              <li className="nav-item" role="presentation">
                <a
                  className="nav-link"
                  data-bs-toggle="tab"
                  href="#profile"
                  aria-selected="false"
                  role="tab"
                  tabIndex={-1}
                >
                  After
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-6">
          <div id="myTabContent" className="tab-content">
            <div
              className="tab-pane fade active show"
              id="home"
              role="tabpanel"
            >
              <div className="chart">
                <canvas id="myChart" height={250} />
                <div className="counter-wrapper">
                  <div className="coundown d-flex flex-column">
                    <p>Total Value</p>
                    <div className="d-flex flex-row justify-content-center align-items-center gap-2">
                      <h5 className="odometer" data-odometer-final={560} />
                      <i className="bi bi-plus" />
                    </div>
                  </div>
                  <div className="coundown d-flex flex-column">
                    <p>Lowest </p>
                    <div className="d-flex flex-row justify-content-center align-items-center gap-2">
                      <h5 className="odometer" data-odometer-final={100}>
                        01
                      </h5>
                      <i className="bi bi-plus" />
                    </div>
                  </div>
                  <div className="coundown d-flex flex-column">
                    <p>Highest</p>
                    <div className="d-flex flex-row justify-content-center align-items-center gap-2">
                      <h5 className="odometer" data-odometer-final={470}>
                        01
                      </h5>
                      <i className="bi bi-plus" />
                    </div>
                  </div>
                  <div className="coundown d-flex flex-column">
                    <p>Average</p>
                    <div className="d-flex flex-row justify-content-center align-items-center gap-2">
                      <h5 className="odometer" data-odometer-final={280}>
                        01
                      </h5>
                      <i className="bi bi-plus" />
                    </div>
                  </div>
                </div>
                <ul className="skills-bar-container">
                  <li>
                    <div className="progressbar-title">
                      <h6>Total Target</h6>
                      <span className="percent" id="css-pourcent" />
                    </div>
                    <div className="bar-container">
                      <span className="progressbar" id="progress-css" />
                    </div>
                  </li>
                </ul>
                {/* <div class="progress-wrapper">
                          <div class="d-flex justify-content-between mb-1">
                              <span>Total Target</span><span>90%</span>
                          </div>
                          <div class="progress">
                              <div class="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="max-width:90%;"></div>
                          </div>
                      </div> */}
              </div>
            </div>
            <div className="tab-pane fade" id="profile" role="tabpanel">
              <div className="chart">
                <canvas id="myChart2" height={250} />
                <div className="counter-wrapper">
                  <div className="coundown d-flex flex-column">
                    <p>Total Value</p>
                    <div className="d-flex flex-row justify-content-center align-items-center gap-2">
                      <h5 className="odometer" data-odometer-final={560} />
                      <i className="bi bi-plus" />
                    </div>
                  </div>
                  <div className="coundown d-flex flex-column">
                    <p>Lowest </p>
                    <div className="d-flex flex-row justify-content-center align-items-center gap-2">
                      <h5 className="odometer" data-odometer-final={100}>
                        01
                      </h5>
                      <i className="bi bi-plus" />
                    </div>
                  </div>
                  <div className="coundown d-flex flex-column">
                    <p>Highest</p>
                    <div className="d-flex flex-row justify-content-center align-items-center gap-2">
                      <h5 className="odometer" data-odometer-final={470}>
                        01
                      </h5>
                      <i className="bi bi-plus" />
                    </div>
                  </div>
                  <div className="coundown d-flex flex-column">
                    <p>Average</p>
                    <div className="d-flex flex-row justify-content-center align-items-center gap-2">
                      <h5 className="odometer" data-odometer-final={280}>
                        01
                      </h5>
                      <i className="bi bi-plus" />
                    </div>
                  </div>
                </div>
                <ul className="skills-bar-container">
                  <li>
                    <div className="progressbar-title">
                      <h6>Total Target</h6>
                      <span className="percent" id="html-pourcent" />
                    </div>
                    <div className="bar-container">
                      <span className="progressbar" id="progress-html" />
                    </div>
                  </li>
                </ul>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Chart2