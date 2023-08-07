import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Swiper.css';

 
// import required modules
import { Pagination, Navigation } from 'swiper/modules';

const SwiperComponent = () => {
  return (
    <>
      <Swiper
        pagination={true}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            <img src='/img/adver_img.png' />
        </SwiperSlide>
        <SwiperSlide>
            <img src='/img/background1.jpg' />
        </SwiperSlide>
        <SwiperSlide>
            <img src='/img/background2.jpg' />   
        </SwiperSlide>
        <SwiperSlide>
            <img src='/img/background3.jpg' />  
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default SwiperComponent;
