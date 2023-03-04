import React from "react";
import Breadcrumb from "../components/common/Breadcrumb";
import Layout from "./../components/layout/Layout";

function SignUpPage() {
  return (
    <Layout>
      <Breadcrumb pageName="Sign Up" pageTitle="Sign Up" />
      <section id="down" className="login-area sec-p">
        <div className="container">
          <div className="login-form">
            <h3>Sign Up</h3>
            <span>
              Do you already have an account?{" "}
              <a href="login.html">Log in here</a>
            </span>
            <form action="sign-up.html" method="get">
              <div className="row">
                <div className="col-md-6">
                  <label htmlFor="fname">
                    Frist Name*
                    <input
                      type="text"
                      name="fname"
                      id="fname"
                      placeholder="First Name"
                    />
                  </label>
                </div>
                <div className="col-md-6">
                  <label htmlFor="lname">
                    Last Name*
                    <input
                      type="text"
                      name="lname"
                      id="lname"
                      placeholder="last Name"
                    />
                  </label>
                </div>
                <div className="col-12">
                  <label htmlFor="email">
                    Email*
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Your Email Here"
                    />
                  </label>
                  <label htmlFor="password">
                    Password*
                    <i className="bi bi-eye-slash" id="togglePassword" />
                    <input
                      type="password"
                      name="email"
                      id="password"
                      placeholder="Type Your Password"
                    />
                  </label>
                </div>
              </div>
              <div className="terms-forgot">
                <p>
                  <input type="checkbox" name="agree" />I agree to the{" "}
                  <a href="#">Terms &amp; Policy</a>
                </p>
              </div>
              <input type="submit" defaultValue="Create Account" />
            </form>
            <div className="other-signup">
              <h4>or Sign up WITH</h4>
              <div className="others-account">
                <a href="#" className="google">
                  <i className="fab fa-google" />
                  Signup with google
                </a>
                <a href="#" className="facebook">
                  <i className="fab fa-facebook-f" />
                  Sign up with facebook
                </a>
              </div>
            </div>
            <p>
              By clicking the "Sign up" button, you create a Cobiro account, and
              you agree to Cobiro's <a href="#">Terms &amp; Conditions</a> &amp;{" "}
              <a href="#">Privacy Policy.</a>
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default SignUpPage;
