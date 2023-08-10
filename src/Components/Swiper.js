import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide  } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../Scss/Swiper.scss';

 
// import required modules
import { Pagination, Navigation, Autoplay  } from 'swiper/modules';

const SwiperComponent = () => {
  return (
    <>
      <Swiper
        pagination={true}
        navigation={true}
        modules={[Autoplay ,Pagination, Navigation]}
        autoplay={{ delay: 6000, disableOnInteraction: false }} // 배너 6초마다 전환
        className="mySwiper"
      >
        <SwiperSlide>
            <img src='/img/adver_img.png' alt='광고문의'/>
        </SwiperSlide>
        <SwiperSlide>
            <img src='/img/background1.jpg' alt='배경1'/>
        </SwiperSlide>
        <SwiperSlide>
            <img src='/img/background2.jpg' alt='배경2'/>   
        </SwiperSlide>
        <SwiperSlide>
            <img src='/img/background3.jpg' alt='배경3'/>  
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default SwiperComponent;
