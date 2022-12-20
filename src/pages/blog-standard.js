import React from "react";
import BannerBlogWidget from "../components/blog/BannerBlogWidget";
import CategoryBlogWidget from "../components/blog/CategoryBlogWidget";
import RecentPostBlogWidget from "../components/blog/RecentPostBlogWidget";
import SearchBlogWidget from "../components/blog/SearchBlogWidget";
import TagBlogWidget from "../components/blog/TagBlogWidget";
import Breadcrumb from "../components/common/Breadcrumb";
import Layout from "../layout/Layout";
import standardData from '../data/blog_standard_data.json';
function BlogGrid1Page() {
  return (
    <>
      <Layout>
        <Breadcrumb pageName="Blog Standard" pageTitle="Blog Standard" />
        <div className="blog-standard-pages pt-120 mb-120">
  <div className="container">
    <div className="row g-lg-5 gy-5">
     
      <div className="col-lg-8">
         {
      standardData.map((item)=>{
        const {id, image, date, title, description, numberOfComment,author} = item;
        return(
          <div key={id} className="news-wrap2">
          <div className="post-thum">
            <img className="img-fluid" src={image} alt="blog-st-01" />
            <div className="batch">
              <a href="blog-grid.html">{date}</a>
            </div>
          </div>
          <div className="news-content">
            <div className="news-meta">
              <div className="publisher">
                <a href="blog-grid.html"><img src="assets/images/icon/User.svg" alt="" /> By {author}</a>
              </div>
              <div className="comment">
                <a href="blog-grid.html"><img src="assets/images/icon/Comment.svg" alt="" /> Comment({numberOfComment})</a>
              </div>
            </div>
            <h3><a href="blog-details.html">{title}</a></h3>
            <p>{description}</p>
          </div>
        </div>
        )
      })
      }
      
        <div className="paginations-area">
          <nav aria-label="Page navigation example">
            <ul className="pagination">
              {/* <li class="page-item"><a class="page-link" href="#"><i class="bi bi-arrow-left"></i></a></li> */}
              <li className="page-item"><a className="page-link" href="#">01</a></li>
              <li className="page-item"><a className="page-link" href="#">02</a></li>
              <li className="page-item"><a className="page-link" href="#">03</a></li>
              <li className="page-item"><a className="page-link" href="#"><i className="bi bi-arrow-right" /></a></li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="widget-area">
          <BannerBlogWidget/>
         <SearchBlogWidget/>
          <RecentPostBlogWidget/>
          <CategoryBlogWidget/>
         <TagBlogWidget/>
        </div>
      </div>
    </div>
  </div>
</div>
 </Layout>
    </>
  );
}

export default BlogGrid1Page;
