import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import Home from '../home/Home';
import Etape1 from './Etape1';
import Etape2 from './Etape2';
import Etape3 from './Etape3';

const QuestionnaireSlider = () => {
  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide
      // className='eachSlide swiper-no-swiping'
      >
        <Etape1 />
      </SwiperSlide>

      <SwiperSlide>
        <Etape2 />
      </SwiperSlide>
      <SwiperSlide>
        <Etape3 />
      </SwiperSlide>

    </Swiper>
  )
}

export default QuestionnaireSlider