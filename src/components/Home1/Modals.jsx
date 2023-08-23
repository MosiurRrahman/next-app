import SelectComponent from '@/src/utils/SelectComponent'
import React from 'react'

function Modals() {
    const city = ["Sydne City, Australia"," Dhaka, Bangladesh","Tokyo, Japan"]
    const brand = ["Mercedes Benz","Volkswagen","Mitsubishi","Tesla"]
    const body = ["Hatchback","Covertible","Coupe","Truck"]
    const  fuel = ["Petrol + Gas","Petrol","Gas"]
    const steeringSide = ["Left","Right",]
    const color = ["Yellow","Brown","Red","Silver","Orange","Blue","Gray"]
    const door = ["03 doors","04 doors","06 doors","08 doors"]
    const year = ["2021","2020","2019","2018","",]
    const miles = ["800 miles","1500 miles","2000 miles","2500 miles"]
    const milesmax = ["1200 miles","3000 miles","3500 miles","4000 miles"]
    const priceMin = ["$2,234","$3,234","$4,234","$5,234"]
    const priceMax = ["$2,234","$3,234","$4,234","$5,234"]
  return (
    <>
        <div className="modal signUp-modal fade" id="signUpModal01" tabIndex={-1} aria-labelledby="signUpModal01Label" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
                <div className="modal-header">
                <h4 className="modal-title" id="signUpModal01Label">Sign Up</h4>
                <p>Already have an account? <button type="button" data-bs-toggle="modal" data-bs-target="#logInModal01">Log In</button></p>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"><i className="bi bi-x" /></button>
                </div>
                <div className="modal-body">
                <form>
                    <div className="row g-4">
                    <div className="col-md-6">
                        <div className="form-inner">
                        <label>First Name*</label>
                        <input type="text" placeholder="Daniel" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-inner">
                        <label>Last Name*</label>
                        <input type="text" placeholder="Last name" />
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="form-inner">
                        <label>Enter your email address*</label>
                        <input type="email" placeholder="Type email" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-inner"> 
                        <label>Password*</label>
                        <input id="password" type="password" placeholder="*** ***" />
                        <i className="bi bi-eye-slash" id="togglePassword" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-inner">
                        <label>Confirm Password*</label>
                        <input id="password2" type="password" placeholder="*** ***" />
                        <i className="bi bi-eye-slash" id="togglePassword2" />
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="form-inner">
                        <button className="primary-btn2" type="submit">Sign Up Now</button>
                        </div>
                    </div>
                    </div>
                    <div className="terms-conditon">
                    <p>By sign up,you agree to the <a href="#">‘terms &amp; conditons’</a></p>
                    </div>
                    <ul className="social-icon">
                    <li><a href="#"><img src="assets/img/home1/icon/google.svg" alt="" /></a></li>
                    <li><a href="#"><img src="assets/img/home1/icon/facebook.svg" alt="" /></a></li>
                    <li><a href="#"><img src="assets/img/home1/icon/twiter.svg" alt="" /></a></li>
                    </ul>
                </form>
                </div>
            </div>
            </div>
        </div>
        <div className="modal signUp-modal fade" id="logInModal01" tabIndex={-1} aria-labelledby="logInModal01Label" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
                <div className="modal-header">
                <h4 className="modal-title" id="logInModal01Label">Log In</h4>
                <p>Don’t have any account? <button type="button" data-bs-toggle="modal" data-bs-target="#signUpModal01">Sign Up</button></p>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"><i className="bi bi-x" /></button>
                </div>
                <div className="modal-body">
                <form>
                    <div className="row g-4">
                    <div className="col-md-12">
                        <div className="form-inner">
                        <label>Enter your email address*</label>
                        <input type="email" placeholder="Type email" />
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="form-inner"> 
                        <label>Password*</label>
                        <input id="password3" type="password" placeholder="*** ***" />
                        <i className="bi bi-eye-slash" id="togglePassword3" />
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="form-agreement form-inner d-flex justify-content-between flex-wrap">
                        <div className="form-group">
                            <input type="checkbox" id="html" />
                            <label htmlFor="html">Remember Me</label>
                        </div>
                        <a href="#" className="forgot-pass">Forget Password?</a>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="form-inner">
                        <button className="primary-btn2" type="submit">Log In</button>
                        </div>
                    </div>
                    </div>
                    <div className="terms-conditon">
                    <p>By sign up,you agree to the <a href="#">‘terms &amp; conditons’</a></p>
                    </div>
                    <ul className="social-icon">
                    <li><a href="#"><img src="assets/img/home1/icon/google.svg" alt="" /></a></li>
                    <li><a href="#"><img src="assets/img/home1/icon/facebook.svg" alt="" /></a></li>
                    <li><a href="#"><img src="assets/img/home1/icon/twiter.svg" alt="" /></a></li>
                    </ul>
                </form>
                </div>
            </div>
            </div>
        </div>
        <div className="modal signUp-modal sell-with-us fade" id="sellUsModal01" tabIndex={-1} aria-labelledby="sellUsModal01Label" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
                <div className="modal-header">
                <h4 className="modal-title" id="sellUsModal01Label">Sell Your Car</h4>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"><i className="bi bi-x" /></button>
                </div>
                <div className="modal-body">
                <form>
                    <div className="row">
                    <div className="col-lg-12 mb-15">
                        <h5>Your Personal Info</h5>
                    </div>
                    <div className="col-md-6 mb-20">
                        <div className="form-inner">
                        <label>Full Name*</label>
                        <input type="text" placeholder="Full Name*" />
                        </div>
                    </div>
                    <div className="col-md-6 mb-20">
                        <div className="form-inner">
                        <label>Phone*</label>
                        <input type="text" placeholder="+880- 123 234 ***" />
                        </div>
                    </div>
                    <div className="col-md-6 mb-20">
                        <div className="form-inner">
                        <label>Email (Optional)</label>
                        <input type="text" placeholder="Enter your email address" />
                        </div>
                    </div>
                    <div className="col-md-6 mb-20">
                        <div className="form-inner">
                        <label>Location*</label>
                        <input type="text" placeholder="Enter your address" />
                        </div>
                    </div>
                    </div>
                    <div className="row">
                    <div className="col-lg-12 mb-15 mt-25">
                        <h5>Your Car Info</h5>
                    </div>
                    <div className="col-md-6 mb-20">
                        <div className="form-inner">
                        <label>Car Brand Name*</label>
                        <input type="text" placeholder="Toyota" />
                        </div>
                    </div>
                    <div className="col-md-6 mb-20">
                        <div className="form-inner">
                        <label>Model*</label>
                        <input type="text" placeholder="RS eTN 80" />
                        </div>
                    </div>
                    <div className="col-md-6 mb-20">
                        <div className="form-inner">
                        <label>Reg. Year*</label>
                        <input type="text" placeholder={2022} />
                        </div>
                    </div>
                    <div className="col-md-6 mb-20">
                        <div className="form-inner">
                        <label>Mileage*</label>
                        <input type="text" placeholder="23,456 miles" />
                        </div>
                    </div>
                    <div className="col-md-6 mb-20">
                        <div className="form-inner">
                        <label>Fuel Type*</label>
                        <input type="text" placeholder="Petrol" />
                        </div>
                    </div>
                    <div className="col-md-6 mb-20">
                        <div className="form-inner">
                        <label>Selling Price*</label>
                        <input type="text" placeholder="Ex- $23,342.000" />
                        </div>
                    </div>
                    <div className="col-md-12 mb-35">
                        <div className="form-inner">
                        <label>Your Car Note*</label>
                        <textarea placeholder="Write somethings" defaultValue={""} />
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="form-inner">
                        <button className="primary-btn2" type="submit">Submit Now</button>
                        </div>
                    </div>
                    </div>
                </form>
                </div>
            </div>
            </div>
        </div>
        {/* Advance-search-modal */}
        <div className="modal adSearch-modal fade" id="adSearchModal01" tabIndex={-1} aria-hidden="true">
            <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content">
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"><i className="bi bi-x" /></button>
                <div className="modal-body">
                <form>
                    <h5 className="main-title">Advanced Option</h5>
                    <div className="row">
                    <div className="col-md-12 mb-30">
                        <div className="form-inner">
                        <SelectComponent options={city} placeholder="select city" />
                        </div>
                    </div>
                    <h5>More Filter</h5>
                    <div className="row mb-10">
                        <div className="col-md-6 mb-20">
                        <div className="form-inner">
                            <label>Select Brand </label>
                        <SelectComponent options={brand} placeholder="select brand" />
                        </div>
                        </div>
                        <div className="col-md-6 mb-20">
                        <div className="form-inner">
                            <label>Select Body Type</label>
                        <SelectComponent options={body} placeholder="select body type" />
                        </div>
                        </div>
                        <div className="col-md-6 mb-20">
                        <div className="form-inner">
                        <SelectComponent options={fuel} placeholder="select body fuel" />
                        </div>
                        </div>
                        <div className="col-md-6 mb-20">
                        <div className="form-inner">
                            <label>Steering Side</label>
                        <SelectComponent options={steeringSide} placeholder="select steering side" />
                        </div>
                        </div>
                        <div className="col-md-6 mb-20">
                        <div className="form-inner">
                            <label>Select Color</label>
                        <SelectComponent options={color} placeholder="select color" />
                        </div>
                        </div>
                        <div className="col-md-6 mb-20">
                        <div className="form-inner">
                            <label>Select Doors</label>
                        <SelectComponent options={door} placeholder="select door" />
                        </div>
                        </div>
                    </div>
                    <h5>Year &amp; Mileage</h5>
                    <div className="row">
                        <div className="col-md-6 mb-20">
                        <div className="form-inner">
                            <label>Select Year </label>
                        <SelectComponent options={year} placeholder="select year" />
                        </div>
                        </div>
                        <div className="col-md-3 mb-20">
                        <div className="form-inner">
                            <label>Select Min (miles)</label>
                        <SelectComponent options={miles} placeholder="select Min" />
                        </div>
                        </div>
                        <div className="col-md-3 mb-20">
                        <div className="form-inner">
                            <label>Select Max (miles)</label>
                        <SelectComponent options={milesmax} placeholder="select Min" />
                        </div>
                        </div>
                    </div>
                    <h5 className="mb-20">Price Range</h5>
                    <div className="row">
                        <div className="col-lg-6 mb-20">
                        <div className="range-wrapper2">
                            <div className="slider-wrapper">
                            <div id="eg-range-slider" />
                            </div> 
                            <div className="valus">
                            <div className="min-value">
                                <span>$</span>
                                <input type="text" className="from" defaultValue={200} />
                            </div>
                            <div className="min-value">
                                <span>$</span>
                                <input type="text" className="to" defaultValue={2000} />
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="col-md-3 mb-20">
                        <div className="form-inner">
                            <label>Min (Price)</label>
                            <SelectComponent options={priceMin} placeholder="select price" />
                        </div>
                        </div>
                        <div className="col-md-3 mb-20">
                        <div className="form-inner">
                            <label>Max (Price)</label>
                            <SelectComponent options={priceMax} placeholder="select price" />
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="apply-btn pt-30">
                    <button className="primary-btn2" type="submit">Apply Filter</button>
                    </div>
                </form>
                </div>
            </div>
            </div>
        </div>
    </>

  )
}

export default Modals