import React from 'react'
import Layout from '../layout/Layout'
import Breadcrumb from '../components/common/Breadcrumb'
import ProductSearch from '../components/common/ProductSearch'
import ProductCategory from '../components/product/ProductCategory'
import { Link } from 'react-router-dom'
import Teatimonial from '../components/teatimonial/Teatimonial'

const BrandCategory = () => {
  return (
    <Layout>
      <Breadcrumb/>
      <ProductSearch/>
      <ProductCategory/>
      <div className="toprated-used-cars mb-100">
            <div className="container">
                <div className="row">
                <div className="col-lg-12">
                    <div className="title">
                    <h4>Top Rated Used Cars For Sale</h4>
                    </div>
                    <div className="brand-list">
                    <ul>
                        <li><Link to="/single-brand-category">Mitsubishi <span>(1,234)</span></Link></li>
                        <li><Link to="/single-brand-category">Mazda <span>(2,365)</span></Link></li>
                        <li><Link to="/single-brand-category">Land Rover <span>(7,562)</span></Link></li>
                        <li><Link to="/single-brand-category">Volkswagen <span>(1,638)</span></Link></li>
                        <li><Link to="/single-brand-category">Mercedes-Benz <span>(8,556)</span></Link></li>
                        <li><Link to="/single-brand-category">Suzuki <span>(4,772)</span></Link></li>
                        <li><Link to="/single-brand-category">Isuzu <span>(9,676)</span></Link></li>
                        <li><Link to="/single-brand-category">Volvo <span>(3,763)</span></Link></li>
                        <li><Link to="/single-brand-category">Honda <span>(2,432)</span></Link></li>
                        <li><Link to="/single-brand-category">Hyundai <span>(22,463)</span></Link></li>
                        <li><Link to="/single-brand-category">Nissan <span>(1,873)</span></Link></li>
                        <li><Link to="/single-brand-category">SsangYong <span>(277 )</span></Link></li>
                        <li><Link to="/single-brand-category">Peugeot <span>(7,382)</span></Link></li>
                        <li><Link to="/single-brand-category">Kia <span>(532)</span></Link></li>
                        <li><Link to="/single-brand-category">Maserati <span>(675)</span></Link></li>
                        <li><Link to="/single-brand-category">Bentley <span>(5,645)</span></Link></li>
                        <li><Link to="/single-brand-category">Holden <span>(11,324)</span></Link></li>
                        <li><Link to="/single-brand-category">Haval <span>(6,676)</span></Link></li>
                        <li><Link to="/single-brand-category">SKODA <span>(4,453)</span></Link></li>
                        <li><Link to="/single-brand-category">Porsche <span>(3,754)</span></Link></li>
                        <li><Link to="/single-brand-category">Subaru <span>(1,754)</span></Link></li>
                        <li><Link to="/single-brand-category">Tesla <span>(9,442)</span></Link></li>
                        <li><Link to="/single-brand-category">Mahindra <span>(3,766)</span></Link></li>
                        <li><Link to="/single-brand-category">Lamborghini <span>(6,834)</span></Link></li>
                        <li><Link to="/single-brand-category">Mitsubishi <span>(432)</span></Link></li>
                        <li><Link to="/single-brand-category">Mazda <span>(5,334)</span></Link></li>
                        <li><Link to="/single-brand-category">Bentley <span>(5,645)</span></Link></li>
                        <li><Link to="/single-brand-category">Holden <span>(11,324)</span></Link></li>
                        <li><Link to="/single-brand-category">Haval <span>(6,676)</span></Link></li>
                        <li><Link to="/single-brand-category">SKODA <span>(4,453)</span></Link></li>
                        <li><Link to="/single-brand-category">Porsche <span>(3,754)</span></Link></li>
                        <li><Link to="/single-brand-category">Subaru <span>(1,754)</span></Link></li>
                        <li><Link to="/single-brand-category">Tesla <span>(9,442)</span></Link></li>
                        <li><Link to="/single-brand-category">Mahindra <span>(3,766)</span></Link></li>
                    </ul>
                    </div>
                    
                </div>
                </div>
            </div>
        </div>

        <Teatimonial/>
    </Layout>
  )
}

export default BrandCategory
