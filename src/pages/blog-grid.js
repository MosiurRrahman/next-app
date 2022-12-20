import React from "react";
import Breadcrumb from "../components/common/Breadcrumb";
import Layout from "../layout/Layout";
import blogGridData from "../data/blog_gird_data.json"
import Link from "next/link";
function BlogGirdPage() {
  return (
    <>
      <Layout>
        <Breadcrumb pageName="Blog Grid" pageTitle="Blog Grid" />
        <div className="recent-post-area pt-120 mb-120">
            <div className="container">
                <div className="row gy-5 justify-content-center">
                    {
                        blogGridData.map((item) =>{
                            const {id, image, date, title, counMassage, author} = item;
                            return (
                                <div key={id} className="col-lg-4 col-md-6 col-sm-10">
                                <div className="news-wrap">
                                <div className="post-thum">
                                    <img className="img-fluid" src={image} alt="" />
                                    <div className="batch">
                                    <Link legacyBehavior href="/blog-grid">{date}</Link>
                                    </div>
                                </div>
                                <div className="news-content">
                                    <div className="news-meta">
                                    <div className="publisher">
                                        <Link legacyBehavior href="/blog-grid"><a><img src="assets/images/icon/User.svg" alt="" /> By {author}</a></Link>
                                    </div>
                                    <div className="comment">
                                        <Link legacyBehavior href="/blog-grid"><a><img src="assets/images/icon/Comment.svg" alt="" /> Comment({counMassage})</a></Link>
                                    </div>
                                    </div>
                                    <h3><Link legacyBehavior href="/blog-details">{title}</Link></h3>
                                </div>
                                </div>
                            </div>
                            )
                        })
                    }
                
                </div>
                <div className="row pt-60">
                <div className="col-lg-12 d-flex justify-content-center">
                    <div className="paginations-area">
                    <nav aria-label="Page navigation example">
                        <ul className="pagination">
                        <li className="page-item"><a className="page-link" href="#"><i className="bi bi-arrow-left" /></a></li>
                        <li className="page-item"><a className="page-link" href="#">01</a></li>
                        <li className="page-item"><a className="page-link" href="#">02</a></li>
                        <li className="page-item"><a className="page-link" href="#">03</a></li>
                        <li className="page-item"><a className="page-link" href="#"><i className="bi bi-arrow-right" /></a></li>
                        </ul>
                    </nav>
                    </div>
                </div>
                </div>
            </div>
        </div>

      </Layout>
    </>
  );
}

export default BlogGirdPage;
