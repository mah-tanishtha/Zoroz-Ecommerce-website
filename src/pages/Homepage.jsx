import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import '../pages/styles/Layout.css'
import Carousel from '../components/Carousel'
import HomeCard from '../components/HomeCard'

const Layout = () => {
  
  return (
    <div className='layout-container d-flex flex-column justify-content-between '>
      <Header/>
      <div>
        <section>
          <Carousel/>
          <HomeCard/>
        </section>
      </div>
      <Footer/>
    </div>
  )
}

export default Layout
