import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
function Footer () {
  return (
    <div className='footer_parent_container'>
      <div className='footer_main_container'>
        {/* First Column */}
        <div className='first_footer_column'>
          <Link to='/about'>
            <h3 className='footer_heading'> Privacy Policy </h3>
          </Link>
          <Link to='/'>
            <h3 className='footer_heading'> Terms of Use</h3>{' '}
          </Link>
        </div>
        {/* Second Column */}
        <div className='footer_column_container'>
          <h3 className='footer_heading'>Quick Links</h3>
          <ul className=''>
            <li>
              <Link to='/' style={{ textDecoration: 'none' }}>
                <h3 className=''> Packages</h3>
              </Link>
            </li>
            <li>
              <Link to='/' style={{ textDecoration: 'none' }}>
                <h3 className=''> AboutUS</h3>
              </Link>
            </li>
            <li>
              <Link to='/' style={{ textDecoration: 'none' }}>
                <h3 className=''> Testomonials</h3>
              </Link>
            </li>
          </ul>
        </div>
        {/* Third Column */}
        <div>
          <h3 className='footer_heading'>Social Links</h3>

          <div className='About_social_handle'>
            <a
              href='https://www.facebook.com/'
              target='_blank'
              className='facebook'
            >
              <i class='fa-brands fa-facebook-f'></i>
            </a>
            <a
              href='https://www.instagram.com/?hl=en'
              target='_blank'
              className='insta'
            >
              <i class='fa-brands fa-instagram'></i>
            </a>
          </div>
        </div>
        {/* Fourth Column */}
        <div className='footer_column_container'>
          <h3 className='footer_heading'>ContactUS</h3>
          <ul>
            <li>
              <Link to='/' style={{ textDecoration: 'none' }}>
                <h3 className=''> GetInTouch</h3>
              </Link>
            </li>
            <li>
              <Link to='/' style={{ textDecoration: 'none' }}>
                <h3 className=''> Login</h3>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <h4 className='copyright_disclamer'>Copyright © 2022 rameshmarandi</h4>
    </div>
  )
}

export default Footer
