import React from 'react'
import MainLayout from '../layout/MainLayout'
import ProductSearch from '../components/common/ProductSearch'
import ProductCategory from '../utils/ProductCategory'

function BrandCategoryPage() {
  return (
    <MainLayout>
        <ProductSearch/>
        <ProductCategory/>
    </MainLayout>
  )
}

export default BrandCategoryPage