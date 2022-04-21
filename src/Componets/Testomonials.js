import React from 'react'
// Import Swiper React components

import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { EffectFade } from 'swiper'
import 'swiper/css/effect-fade'
// import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper'

// Import Swiper styles
// import 'swiper/css';

function Testomonials () {
  return (
    <div className='testmonial_main_container'>
      <h1>Testimonials</h1>
      <div className='testmonial_parent_container'>
        <Swiper
          spaceBetween={10}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false
          }}
          // pagination={{
          //   clickable: false,
          // }}
          // navigation={true}
          effect='fade'
          modules={[Autoplay, Pagination, Navigation]}
          className='mySwiper'
        >
          <SwiperSlide>
            <div className='review_content_container'>
              {/* Left Cntainer */}
              <div>
                <img src='' alt='first customer' />
                <h4>RAMESH MARADNI</h4>
              </div>
              {/* RightContainer */}
              <div>
                <i class='fa-solid fa-quote-left'></i>
                <p>
                  Alongside being fit, I wanted to have clear skin, reduced hair
                  fall and a regular menstrual cycle. I have been able to
                  achieve all of them while on her program...I always thought I
                  would never be able to lose weight without tough workouts and
                  a NO CARBS diet, but this program has changed my perspective.
                  I had everything on my diet chart but in the right portion and
                  a good colourful-looking plate each day. I no more crave junk
                  or binge eat. I did not have to sacrifice my social life and
                  ate out with her guidance and that's why she calls it
                  'sustainable weight loss. She saved me from the stage where I
                  could’ve been diagnosed with PCOD, I'm so thankful.......
                  There is no going back from here.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide> <div className="secondTestm"></div></SwiperSlide>
        <SwiperSlide><div className="thirdTestm"></div></SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}

export default Testomonials
