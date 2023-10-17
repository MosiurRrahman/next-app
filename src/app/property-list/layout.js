
import Footer from '@/components/common/Footer'
import Header from '@/components/common/Header'
import Topbar from '@/components/common/Topbar'
import React from 'react'

const Layout = ({children}) => {
  return (
    <>
     <Topbar/>
     <Header/>
     {children}
     <Footer/> 
    </>
  )
}

export default Layout
