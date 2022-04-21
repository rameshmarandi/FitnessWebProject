import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
function About () {
  return (
    <div className='about_main_container'>
      {/* Left side Container */}
      <div className='about_image'>
        <img
          width='350'
          height='420'
          src='https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
          alt='My Image'
        />
      </div>

      {/* RightSide Container */}
      <div className='About_right_contianer'>
        <h1> About Bhumika</h1>
        <div className='About_right_Content'>
          <h3>Nutritionist & Fat Loss Coach</h3>
          <h5>
            Hi! I am Bhumika Gupta, a{' '}
            <span className={{ fontWeight: 'bold' }}>PN certified coach.</span>{' '}
            I specialise in weight menagement & PCOS. i AM also a member of The
            PCOS Society, India.
          </h5>
          <h5>
            My approach is pesonalised & evidence based. I have helped hundreds
            of clients globally to take charge of their health through simple
            changes in diet and lifestyle.
          </h5>
          <h5>
            My philosopy is simple. When it comes to food, nothing is off the
            table. I help my clinets transform their fitness by finding the
            right balance in their lives and equipping hem for lifelong success.
          </h5>
          <h5>
            If you are struggling to reach your goals and need a sutainable
            approach to fitness. You are in the right place. Get started!
          </h5>

          <div className='About_social_handle'>
            <h3>Follow me : </h3>

            <a
              href='https://www.facebook.com/'
              target='_blank'
              className='facebook'
            >
              <i class='fa-brands fa-facebook-f'></i>

              {/* <ion-icon name='logo-facebook'></ion-icon> */}
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
      </div>
    </div>
  )
}

export default About
