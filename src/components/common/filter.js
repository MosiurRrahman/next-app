import Link from 'next/link'
import Script from 'next/script'
import React, { useRef } from 'react'

function Filter() {
     // init one ref to store the future isotope object
     const isotope = React.useRef()
     // store the filter keyword in a state
     const [filterKey, setFilterKey] = React.useState('*')
   
     // initialize an Isotope object with configs
     React.useEffect(() => {
       isotope.current = new Isotope('.filter-container', {
         itemSelector: '.grid-item',
        //  layoutMode: 'fitRows',
       })
       // cleanup
       return () => isotope.current.destroy()
     }, [])
     const weiding =useRef()
     const all =useRef()
     const Products =useRef()
     const Products2 =useRef()
     console.log(weiding);
     // handling filter key change
     React.useEffect(() => {
    console.log(filterKey);
    if(filterKey === "wedding"){
        weiding.current.classList.add("active")
        all.current.classList.remove("active")
        Products.current.classList.remove("active")
        Products2.current.classList.remove("active")
    } else if(filterKey === "Products"){
        weiding.current.classList.remove("active")
        all.current.classList.remove("active")
        Products2.current.classList.remove("active")
        Products.current.classList.add("active")
    } else if(filterKey === "Products2"){
        weiding.current.classList.remove("active")
        all.current.classList.remove("active")
        Products.current.classList.remove("active")
        Products2.current.classList.add("active")
    }
    else {
        all.current.classList.add("active")
        weiding.current.classList.remove("active")
        Products.current.classList.remove("active")
        Products2.current.classList.remove("active")
    }
       filterKey === '*'
         ? isotope.current.arrange({filter: `*`})
         : isotope.current.arrange({filter: `.${filterKey}`})
     }, [filterKey])
   
     const handleFilterKeyChange = key => () => setFilterKey(key)
  return (
    <>
    <div className="our-portfilio-area pt-120 mb-120">
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <div className="filters filter-button-group">
          <ul className="d-flex justify-content-lg-start justify-content-center flex-wrap">
            <li className="all active" ref={all} onClick={handleFilterKeyChange('*')}>All Photo</li>
            <li   ref={weiding} onClick={handleFilterKeyChange('wedding')}>Wedding</li>
            <li  ref={Products} onClick={handleFilterKeyChange('Products')}>Products</li>
            <li ref={Products2}  onClick={handleFilterKeyChange('Products2')}>Fashion</li>
          </ul>
        </div>
      </div>
    </div>
    <div className="row filter-container grid g-4 mb-70">
      <div className="col-lg-4 col-md-6 col-sm-12 grid-item  wedding">
        <div className="portfolio-img magnetic-item">
          <img className="img-fluid" src="assets/images/bg/portfolio1.png" alt="image" />
          <div className="overlay">
            <div className="icon">
              <Link data-cursor="View<br>Details" href="/portfolio-details"><i className="bi bi-plus" /></Link>
            </div>
            <div className="content">
              <h4><Link data-cursor="View<br>Details" href="/portfolio-details">Magic Moments Photo!</Link></h4>
              <span>Date: 16 January 2022</span>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 col-sm-12 grid-item   wedding">
        <div className="portfolio-img magnetic-item">
          <img className="img-fluid" src="assets/images/bg/portfolio2.png" alt="image" />
          <div className="overlay">
            <div className="icon">
              <Link data-cursor="View<br>Details" href="/portfolio-details"><i className="bi bi-plus" /></Link>
            </div>
            <div className="content">
              <h4><Link data-cursor="View<br>Details" href="/portfolio-details">Magic Moments Photo!</Link></h4>
              <span>Date: 16 January 2022</span>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 col-sm-12 grid-item  Products">
        <div className="portfolio-img magnetic-item">
          <img className="img-fluid" src="assets/images/bg/portfolio3.png" alt="image" />
          <div className="overlay">
            <div className="icon">
              <Link data-cursor="View<br>Details" href="/portfolio-details"><i className="bi bi-plus" /></Link>
            </div>
            <div className="content">
              <h4><Link data-cursor="View<br>Details" href="/portfolio-details">Magic Moments Photo!</Link></h4>
              <span>Date: 16 January 2022</span>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 col-sm-12 grid-item  Products2">
        <div className="portfolio-img magnetic-item">
          <img className="img-fluid" src="assets/images/bg/portfolio5.png" alt="image" />
          <div className="overlay">
            <div className="icon">
              <Link data-cursor="View<br>Details" href="/portfolio-details"><i className="bi bi-plus" /></Link>
            </div>
            <div className="content">
              <h4><Link data-cursor="View<br>Details" href="/portfolio-details">Magic Moments Photo!</Link></h4>
              <span>Date: 16 January 2022</span>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 col-sm-12 grid-item  wedding">
        <div className="portfolio-img magnetic-item">
          <img className="img-fluid" src="assets/images/bg/portfolio11.png" alt="image" />
          <div className="overlay">
            <div className="icon">
              <Link data-cursor="View<br>Details" href="/portfolio-details"><i className="bi bi-plus" /></Link>
            </div>
            <div className="content">
              <h4><Link data-cursor="View<br>Details" href="/portfolio-details">Magic Moments Photo!</Link></h4>
              <span>Date: 16 January 2022</span>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 col-sm-12 grid-item  Products">
        <div className="portfolio-img magnetic-item">
          <img className="img-fluid" src="assets/images/bg/portfolio4.png" alt="image" />
          <div className="overlay">
            <div className="icon">
              <Link data-cursor="View<br>Details" href="/portfolio-details"><i className="bi bi-plus" /></Link>
            </div>
            <div className="content">
              <h4><Link data-cursor="View<br>Details" href="/portfolio-details">Magic Moments Photo!</Link></h4>
              <span>Date: 16 January 2022</span>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 col-sm-12 grid-item  Products2">
        <div className="portfolio-img magnetic-item">
          <img className="img-fluid" src="assets/images/bg/portfolio9.png" alt="image" />
          <div className="overlay">
            <div className="icon">
              <Link data-cursor="View<br>Details" href="/portfolio-details"><i className="bi bi-plus" /></Link>
            </div>
            <div className="content">
              <h4><Link data-cursor="View<br>Details" href="/portfolio-details">Magic Moments Photo!</Link></h4>
              <span>Date: 16 January 2022</span>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 col-sm-12 grid-item  wedding">
        <div className="portfolio-img magnetic-item">
          <img className="img-fluid" src="assets/images/bg/portfolio8.png" alt="image" />
          <div className="overlay">
            <div className="icon">
              <Link data-cursor="View<br>Details" href="/portfolio-details"><i className="bi bi-plus" /></Link>
            </div>
            <div className="content">
              <h4><Link data-cursor="View<br>Details" href="/portfolio-details">Magic Moments Photo!</Link></h4>
              <span>Date: 16 January 2022</span>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 col-sm-12 grid-item  Products">
        <div className="portfolio-img magnetic-item">
          <img className="img-fluid" src="assets/images/bg/portfolio7.png" alt="image" />
          <div className="overlay">
            <div className="icon">
              <Link data-cursor="View<br>Details" href="/portfolio-details"><i className="bi bi-plus" /></Link>
            </div>
            <div className="content">
              <h4><Link data-cursor="View<br>Details" href="/portfolio-details">Magic Moments Photo!</Link></h4>
              <span>Date: 16 January 2022</span>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 col-sm-12 grid-item Products2">
        <div className="portfolio-img magnetic-item">
          <img className="img-fluid" src="assets/images/bg/portfolio10.png" alt="image" />
          <div className="overlay">
            <div className="icon">
              <Link data-cursor="View<br>Details" href="/portfolio-details"><i className="bi bi-plus" /></Link>
            </div>
            <div className="content">
              <h4><Link data-cursor="View<br>Details" href="/portfolio-details">Magic Moments Photo!</Link></h4>
              <span>Date: 16 January 2022</span>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 col-sm-12 grid-item  wedding">
        <div className="portfolio-img magnetic-item">
          <img className="img-fluid" src="assets/images/bg/portfolio13.png" alt="image" />
          <div className="overlay">
            <div className="icon">
              <Link data-cursor="View<br>Details" href="/portfolio-details"><i className="bi bi-plus" /></Link>
            </div>
            <div className="content">
              <h4><Link data-cursor="View<br>Details" href="/portfolio-details">Magic Moments Photo!</Link></h4>
              <span>Date: 16 January 2022</span>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 col-sm-12 grid-item  Products">
        <div className="portfolio-img magnetic-item">
          <img className="img-fluid" src="assets/images/bg/portfolio12.png" alt="image" />
          <div className="overlay">
            <div className="icon">
              <Link data-cursor="View<br>Details" href="/portfolio-details"><i className="bi bi-plus" /></Link>
            </div>
            <div className="content">
              <h4><Link data-cursor="View<br>Details" href="/portfolio-details">Magic Moments Photo!</Link></h4>
              <span>Date: 16 January 2022</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-lg-12 d-flex justify-content-center">
        <div className="load-more-btn">
          <Link className="primary-btn3 button-hover-two" href="#">Load More</Link>
        </div>
      </div>
    </div>
  </div>
</div>

     <Script src="../../../public/js/gsap.min.js" />   
    </>
  )
}

export default Filter


/* 


<ul>
          <li onClick={handleFilterKeyChange('*')}>Show Both</li>
          <li onClick={handleFilterKeyChange('vege')}>Show Veges</li>
          <li onClick={handleFilterKeyChange('fruit')}>Show Fruits</li>
        </ul>
        <hr />
        <ul className="filter-container">
          <div className="filter-item vege">
            <span>Cucumber</span>
          </div>
          <div className="filter-item fruit">
            <span>Apple</span>
          </div>
          <div className="filter-item fruit">
            <span>Orange</span>
          </div>
          <div className="filter-item fruit vege">
            <span>Tomato</span>
          </div>
        </ul>
*/