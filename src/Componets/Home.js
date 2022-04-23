import React from 'react'
import About from './About'
import Navbar from './Navbar'
import Services from './Services'
import Testomonials from './Testomonials'
import { Scrollbars } from 'react-custom-scrollbars'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Footer from './Footer'

function Home () {
  return (
    <>
      <div>
        <Navbar />
        {/* Hero Section */}
        <div className='home_main_container'>
          <div className='home_center_container'>
            <h1 className='home_heading'>BHUMIKA GUPTA</h1>
            <h3>Nutritionist & Fat Loss Coach</h3>
            <div className='home_btn_container'>
              <Link to='/about' style={{ textDecoration: 'none' }}>
                {' '}
                <p className='home_btn home_btn1'>Book a Sport</p>
              </Link>
              <Link to='/login' style={{ textDecoration: 'none' }}>
                {' '}
                <p className='home_btn home_btn2'>Contact</p>
              </Link>
            </div>
          </div>
        </div>
        {/* About Me Section */}
        <About />
        {/* Services/ Paclage Section*/}

        <Services />

        {/* Testomonials Section */}
        <Testomonials />
        <Footer />
      </div>
    </>
  )
}

export default Home
