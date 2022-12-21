import React from 'react'
import Breadcrumb from '../components/common/Breadcrumb'
import Layout from '../layout/Layout'

function CustomError() {
  return (
    <Layout>
       <div className="error-pages">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-lg-8">
        <div className="error-content text-center">
          <h2>Ooops!</h2>
          <img className="img-fluid" src="assets/images/bg/404.png" alt={404} />
          <p>The page does not found , something went wrong. Go to Homepage</p>
          <a className="primary-btn7 btn-md2" href="index.html"><i className="bi bi-arrow-up-right-circle" />Home Page</a>
        </div>
      </div>
    </div>
  </div>
</div>

    </Layout>
  )
}

export default CustomError