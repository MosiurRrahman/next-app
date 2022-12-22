import Link from 'next/link'
import React from 'react'

function TagBlogWidget() {
  return (
    <div className="single-widgets widget_egns_tag">
        <div className="widget-title">
            <h3>Tag:</h3>
        </div>
          <ul className="wp-block-tag-cloud">
              <li><Link href="/blog-grid">Dinner</Link></li>
              <li><Link href="/blog-grid">Breakfast</Link></li>
              <li><Link href="/blog-grid">Dessert</Link></li>
              <li><Link href="/blog-grid">Beverage</Link></li>
              <li><Link href="/blog-grid">Lunch</Link></li>
              <li><Link href="/blog-grid">Food</Link></li>
              <li><Link href="/blog-grid">Menu</Link></li>
              <li><Link href="/blog-grid">Sea Food</Link></li>
          </ul>
        </div>
  )
}

export default TagBlogWidget