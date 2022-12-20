import React from 'react'

function CategoryBlogWidget() {
  return (
    <div className="single-widgets widget_egns_categoris">
    <div className="widget-title">
      <h3>Category:</h3>
    </div>
    <ul className="wp-block-categoris-cloud">
      <li><a href="blog-grid.html"><span className="tag-name">Food</span> <img className="img-fluid" src="assets/images/blog/category-divider.png" alt="" /> <span className="qty">05</span> </a></li>
      <li><a href="blog-grid.html"><span className="tag-name">Modern Life</span> <img className="img-fluid" src="assets/images/blog/category-divider.png" alt="" /> <span className="qty">03</span> </a></li>
      <li><a href="blog-grid.html"><span className="tag-name">Healthy</span> <img className="img-fluid" src="assets/images/blog/category-divider.png" alt="" /> <span className="qty">02</span> </a></li>
      <li><a href="blog-grid.html"><span className="tag-name">Dessert</span> <img className="img-fluid" src="assets/images/blog/category-divider.png" alt="" /> <span className="qty">05</span> </a></li>
      <li><a href="blog-grid.html"><span className="tag-name">Recipes</span> <img className="img-fluid" src="assets/images/blog/category-divider.png" alt="" /> <span className="qty">06</span> </a></li>
      <li><a href="blog-grid.html"><span className="tag-name">Uncategoried</span> <img className="img-fluid" src="assets/images/blog/category-divider.png" alt="" /> <span className="qty">01</span> </a></li>
    </ul>
  </div>
  )
}

export default CategoryBlogWidget