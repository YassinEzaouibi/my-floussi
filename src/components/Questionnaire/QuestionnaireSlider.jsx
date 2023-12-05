import React, { memo } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import Etape1 from './Etape1';
import Etape2 from './Etape2';
import Etape3 from './Etape3';
import 'swiper/css';

const QuestionnaireSlider = () => {
  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
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

export default memo(QuestionnaireSlider)