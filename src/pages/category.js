import Link from "next/link";
import React from "react";
import Breadcrumb from "../components/common/Breadcrumb";
import jobListData from "../data/job_list.json";
import Layout from "../layout/Layout";
function Category() {
  return (
    <Layout>
      <Breadcrumb pageName="Job Category" pageTitle="Job Category" />
      <div className="category-listing-area pt-120 mb-120">
        <div className="container">
          <div className="row g-lg-4">
            <div className="col-lg-12">
              <div className="row g-4 mb-25">
                <div className="col-lg-6 d-flex align-items-center">
                  <p className="show-item">
                    Showing results 10 in 200 jobs list
                  </p>
                </div>
                <div className="col-lg-6 d-flex align-items-center justify-content-lg-end">
                  <div className="grid-select-area">
                    <div className="select-area">
                      <select className="select1">
                        <option value={0}>Sort By(Default)</option>
                        <option value={1}>Technology</option>
                        <option value={2}>Manager</option>
                        <option value={3}>Health</option>
                        <option value={3}>Transport</option>
                        <option value={3}>Development</option>
                      </select>
                    </div>
                    <div className="grid-area">
                      <ul>
                        <li>
                          <Link legacyBehavior href="/category">
                            <a className="active">
                              <svg
                                width={16}
                                height={16}
                                viewBox="0 0 16 16"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M6.26106 6.95674H0.695674C0.311464 6.95674 0 6.64527 0 6.26106V0.695674C0 0.311464 0.311464 0 0.695674 0H6.26106C6.64527 0 6.95674 0.311464 6.95674 0.695674V6.26106C6.95674 6.64527 6.64527 6.95674 6.26106 6.95674Z" />
                                <path d="M15.304 6.95674H9.73864C9.35443 6.95674 9.04297 6.64527 9.04297 6.26106V0.695674C9.04297 0.311464 9.35443 0 9.73864 0H15.304C15.6882 0 15.9997 0.311464 15.9997 0.695674V6.26106C15.9997 6.64527 15.6882 6.95674 15.304 6.95674Z" />
                                <path d="M6.26106 16.0004H0.695674C0.311464 16.0004 0 15.689 0 15.3048V9.73937C0 9.35517 0.311464 9.0437 0.695674 9.0437H6.26106C6.64527 9.0437 6.95674 9.35517 6.95674 9.73937V15.3048C6.95674 15.689 6.64527 16.0004 6.26106 16.0004Z" />
                                <path d="M15.304 16.0004H9.73864C9.35443 16.0004 9.04297 15.689 9.04297 15.3048V9.73937C9.04297 9.35517 9.35443 9.0437 9.73864 9.0437H15.304C15.6882 9.0437 15.9997 9.35517 15.9997 9.73937V15.3048C15.9997 15.689 15.6882 16.0004 15.304 16.0004Z" />
                              </svg>
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row row-cols-xxl-5 row-cols-xl-4 row-cols-md-3 row-cols-sm-2 row-cols-1 g-3 cf justify-content-center mb-70">
                {jobListData.map((job, index) => {
                  const { id, image, available_job, jon_title } = job;
                  return (
                    <div key={id} className="col">
                      <div className="single-category">
                        <div className="category-top">
                          <div className="icon">
                            <img src={image} alt="" />
                          </div>
                          <div className="sl-no">
                            <h6>{index}</h6>
                          </div>
                        </div>
                        <div className="category-content">
                          <h5>
                            <Link legacyBehavior href="/job-listing1">
                              <a>{jon_title}</a>
                            </Link>
                          </h5>
                          <p>
                            Job Available: <span>{available_job}</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="row">
                <div className="col-lg-12 d-flex justify-content-center">
                  <div className="pagination-area">
                    <nav aria-label="...">
                      <ul className="pagination">
                        <li className="page-item disabled">
                          <a className="page-link" href="#" tabIndex={-1} />
                        </li>
                        <li className="page-item active" aria-current="page">
                          <a className="page-link" href="#">
                            01
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#">
                            02
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#">
                            03
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#" />
                        </li>
                      </ul>
                    </nav>
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

export default Category;
