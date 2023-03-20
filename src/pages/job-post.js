import React, { useState } from "react";
import "react-quill/dist/quill.snow.css";
import Breadcrumb from "../components/common/Breadcrumb";
import Layout from "../layout/Layout";

import { Editor } from "@tinymce/tinymce-react";

function JobPost() {
  const [showInputBox, setShowInputBox] = useState("");

  const handleInputChange = (event) => {
    setShowInputBox(event.target.value);
  };
  return (
    <Layout>
      <Breadcrumb pageName="Post A Jobs" pageTitle="Post A Jobs" />
      <div className="job-post-area pt-120 mb-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="form-wrapper">
                <form>
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="section-title2">
                        <h5>Job Information:</h5>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-inner mb-25">
                        <label htmlFor="jobtitle">Job Title*</label>
                        <div className="input-area">
                          <img src="assets/images/icon/company-2.svg " alt="" />
                          <input
                            type="text"
                            id="jobtitle"
                            name="jobtitle"
                            placeholder="Senior UI/UX Engineer"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-inner mb-25">
                        <label>Job Category*</label>
                        <div className="input-area">
                          <img src="assets/images/icon/category-2.svg" alt="" />
                          <select className="select1">
                            <option value={0}>UI/UX Designer</option>
                            <option value={1}>Font End Developer</option>
                            <option value={2}>Next Js</option>
                            <option value={4}>Laravel Devloper</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-inner mb-25">
                        <label htmlFor="vacancies">Vacancies*</label>
                        <div className="input-area">
                          <img src="assets/images/icon/user-2.svg" alt="" />
                          <input
                            type="text"
                            id="vacancies"
                            name="vacancies"
                            placeholder="07 Person"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-inner">
                        <div className="salary-wrap">
                          <label className="label">Budget/Salary*</label>
                          <div className="salery-select-area">
                            <div className="single-salery">
                              <input
                                className="form-check-input"
                                type="radio"
                                id="fixedPrice1"
                                name="showInputBox"
                                defaultValue="fixedPrice"
                                defaultChecked
                                onChange={handleInputChange}
                              />
                              <label htmlFor="fixedPrice1">Fixed Salary</label>
                              <br />
                            </div>
                            <div className="single-salery">
                              <input
                                className="form-check-input"
                                type="radio"
                                id="rangePrice1"
                                name="showInputBox"
                                defaultValue="rangePrice"
                                onChange={handleInputChange}
                              />
                              <label htmlFor="rangePrice1">Salary Range</label>
                              <br />
                            </div>
                            <div className="single-salery">
                              <input
                                className="form-check-input"
                                type="radio"
                                id="negotiable1"
                                name="showInputBox"
                                defaultValue="negotiable"
                                onChange={handleInputChange}
                              />
                              <label htmlFor="negotiable1">Negotiable</label>
                              <br />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-12">
                            {showInputBox === "fixedPrice" && (
                              <div className="input-area  mb-25">
                                <img
                                  src="assets/images/icon/salary-2.svg"
                                  alt=""
                                />
                                <input
                                  type="text"
                                  name="job_fixed_price"
                                  placeholder="Salary"
                                />
                              </div>
                            )}
                          </div>
                          <div className="col-lg-12">
                            <div id="rangePrice">
                              {showInputBox === "rangePrice" && (
                                <div className="row">
                                  <div className="col-lg-6 mb-25">
                                    <div className="input-area">
                                      <img
                                        src="assets/images/icon/salary-2.svg"
                                        alt=""
                                      />
                                      <input
                                        type="text"
                                        name="job_range_price_one"
                                        placeholder="Max Salary"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-lg-6">
                                    <div className="input-area">
                                      <img
                                        src="assets/images/icon/salary-2.svg"
                                        alt=""
                                      />
                                      <input
                                        type="text"
                                        name="job_range_price_two"
                                        placeholder="Min Salary"
                                      />
                                    </div>
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-inner mb-25">
                        <label>Job Type*</label>
                        <div className="input-area">
                          <img src="assets/images/icon/company-2.svg" alt="" />
                          <select className="select1">
                            <option value={0}>Full Time</option>
                            <option value={1}>Part Time</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-inner mb-25">
                        <label htmlFor="experiences">Experience Level*</label>
                        <div className="input-area">
                          <img src="assets/images/icon/email-2.svg" alt="" />
                          <input
                            type="text"
                            id="experiences"
                            name="experiences"
                            placeholder="Type Experiences"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-inner select-jobtag mb-25">
                        <label>Job Tag*</label>
                        <div className="input-area">
                          <img src="assets/images/icon/search-2.svg" alt="" />
                          {/* <select class="js-example-basic-multiple">
                                      </select> */}
                          <select
                            className="js-example-basic-multiple"
                            data-placeholder="Select an option"
                          ></select>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-inner mb-25">
                        <label htmlFor="datepicker9">Deadline*</label>
                        <div className="input-area">
                          <img src="assets/images/icon/calender2.svg" alt="" />
                          <input
                            type="text"
                            id="datepicker9"
                            name="deadline"
                            placeholder="MM/DD/YY"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-inner mb-30">
                        <label htmlFor="summernote1">Job Description*</label>

                        <Editor
                          init={{
                            height: 500,
                            menubar: true,
                            table_tab_navigation: false,
                            plugins: [
                              "advlist autolink lists link image charmap print preview anchor",
                              "searchreplace visualblocks code fullscreen",
                              "insertdatetime media table paste code help wordcount",
                            ],
                            toolbar:
                              "undo redo | formatselect | bold italic backcolor | \
                                alignleft aligncenter alignright alignjustify | \
                                bullist numlist outdent indent | removeformat | help",
                          }}
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-agreement form-inner d-flex justify-content-between flex-wrap">
                        <div className="form-group two">
                          <input type="checkbox" id="html" />
                          <label htmlFor="html">
                            Here, I accepted company terms &amp; conditions.
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-inner">
                        <button
                          className="primry-btn-2 lg-btn w-unset"
                          type="submit"
                        >
                          Post Now
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
    </Layout>
  );
}

export default JobPost;
