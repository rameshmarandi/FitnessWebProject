import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
function Navbar () {
  const [show, setShow] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleScroll = () => {
    setShow(window.pageYOffset > 140)
  }

  return (
    <header className={show === true ? 'navbar_active' : 'header'}>
      <nav className={show === true ? 'navbar' : 'navbar'}>
        <Link to='/' style={{ textDecoration: 'none' }}>
          <h5 className='nav_logo'> BHUMIKA GUPTA</h5>
        </Link>

        <ul className={show === true ? 'nav_links' : 'nav_links'}>
          <li>
            <Link to='/about' style={{ textDecoration: 'none' }}>
              <h5 className='nav_list'>About </h5>
            </Link>
          </li>
          <li>
            <Link to='/' style={{ textDecoration: 'none' }}>
              <h5 className='nav_list'> Offerings</h5>
            </Link>
            <ul>
              <li>
                <Link to='/' style={{ textDecoration: 'none' }}>
                  <h5 className='nav_list'> Packages</h5>
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to='/' style={{ textDecoration: 'none' }}>
              <h5 className='nav_list'>Testomonials</h5>
            </Link>
          </li>
          <li>
            <Link to='/' style={{ textDecoration: 'none' }}>
              <h5 className='nav_list'> client Transformation</h5>
            </Link>
          </li>
        </ul>
        <ul className='nav_links'>
          <li>
            <Link to='/' style={{ textDecoration: 'none' }}>
              <h5 className='nav_list'>Login </h5>
            </Link>
          </li>
          <li>
            <Link to='/' style={{ textDecoration: 'none' }}>
              <p className=' registration'>GetInTouch</p>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
