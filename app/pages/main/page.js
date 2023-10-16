"use client"
import React, { useEffect, useRef, useState } from 'react'
import main from './main.module.scss'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';


export default function page() {
  const input = useRef();
  
  useEffect(()=>{
    input.current.focus();
  },[]);

  const searchBtn =  ()=>{
    console.log(123)
  };

  return (
    <div className={main.main_wrap}>
      <div className={main.bg}>
        <div className={main.logo_nick}>
          <figure className={main.logo}><img src='/img/main/logo.png' alt='로고 이미지'/></figure>
          <div className={main.logo_nick_wrap}>
            <figure className={main.nick_wrap}><img src='/img/main/nick_wrap.png' alt=''/></figure>
            <div className={main.nick_txt}>
              <span>[RK.1]</span>
              <figure><img src='/img/main/icon/1.png' alt=''/></figure>
              <span>행복포키포키</span>
              <figure><img src='/img/main/face/1.png' alt=''/></figure>
            </div>
          </div>
        </div>
        <div className={main.search_input}>
          <figure className={main.search}><img src='/img/main/search.png' alt='검색상자'/></figure>
          <div className={main.input}>
            <input type="text" placeholder='디지몬을 검색해보세요.' ref={input}/>
            <figure><img src='/img/main/search_btn.png' alt='검색' onClick={searchBtn}/></figure>
          </div>
        </div>
        <div className={main.random_wrap}>
          <figure className={main.random_img}><img src='/img/main/random.png' alt='랜덤 디지몬'/></figure>
          <div className={main.random_digimon_wrap}>
          <Swiper
              slidesPerView={3.5}
              spaceBetween={20}
              grabCursor={true}
              // modules={[Pagination]}
              className={main.myswiper}
            >
            <SwiperSlide className={main.swipers}>
              <figure className={main.random_digimon_wraps}><img src='/img/main/digimon_wrap.png' alt='디지몬 이미지'/></figure>
              <figure className={main.random_digimon}><img src='/img/main/digimon/1.png' alt='디지몬 이미지'/></figure>
              <div className={main.random_digimon_box_wrap}>
                <figure><img src='/img/main/random_box.png' alt='디지몬 이름'/></figure>
                <p>어쩌고몬</p>
              </div>
            </SwiperSlide>
            <SwiperSlide className={main.swipers}>
                <figure className={main.random_digimon_wraps}><img src='/img/main/digimon_wrap.png' alt='디지몬 이미지'/></figure>
                <figure className={main.random_digimon}><img src='/img/main/digimon/1.png' alt='디지몬 이미지'/></figure>
                <div className={main.random_digimon_box_wrap}>
                  <figure><img src='/img/main/random_box.png' alt='디지몬 이름'/></figure>
                  <p>어쩌고몬</p>
                </div>
              </SwiperSlide>
              <SwiperSlide className={main.swipers}>
                <figure className={main.random_digimon_wraps}><img src='/img/main/digimon_wrap.png' alt='디지몬 이미지'/></figure>
                <figure className={main.random_digimon}><img src='/img/main/digimon/1.png' alt='디지몬 이미지'/></figure>
                <div className={main.random_digimon_box_wrap}>
                  <figure><img src='/img/main/random_box.png' alt='디지몬 이름'/></figure>
                  <p>어쩌고몬</p>
                </div>
              </SwiperSlide>
              <SwiperSlide className={main.swipers}>
                <figure className={main.random_digimon_wraps}><img src='/img/main/digimon_wrap.png' alt='디지몬 이미지'/></figure>
                <figure className={main.random_digimon}><img src='/img/main/digimon/1.png' alt='디지몬 이미지'/></figure>
                <div className={main.random_digimon_box_wrap}>
                  <figure><img src='/img/main/random_box.png' alt='디지몬 이름'/></figure>
                  <p>어쩌고몬</p>
                </div>
              </SwiperSlide>
              <SwiperSlide className={main.swipers}>
                <figure className={main.random_digimon_wraps}><img src='/img/main/digimon_wrap.png' alt='디지몬 이미지'/></figure>
                <figure className={main.random_digimon}><img src='/img/main/digimon/1.png' alt='디지몬 이미지'/></figure>
                <div className={main.random_digimon_box_wrap}>
                  <figure><img src='/img/main/random_box.png' alt='디지몬 이름'/></figure>
                  <p>어쩌고몬</p>
                </div>
              </SwiperSlide>
          </Swiper>
          </div>
        </div>
        <div className={main.today_wrap}>
          <figure className={main.today_img}><img src='/img/main/today.png' alt=''/></figure>
          <div className={main.today_text_wrap}>
            <figure className={main.today_text_wrap_img}><img src='/img/main/today_text_wrap.png' alt=''/></figure>
            <div className={main.today_ab}>
              <div className={main.today_ab_left}>
                <figure><img src='/img/main/today1.png' alt=''/></figure>
                <figure className={main.today_ab_left_wrap}><img src='/img/main/today_wrap.png' alt=''/></figure>
              </div>
              <div className={main.todya_ab_right}>
                <div className={main.todya_ab_right1}>
                  <figure className={main.today_ab_boxs}><img src='/img/main/today_boxs.png' alt=''/></figure>
                  <p>팬 더 몬</p>
                </div>
                <div className={main.todya_ab_right2}>
                  <figure className={main.todya_ab_right2_box}><img src='/img/main/today_box.png' alt=''/></figure>
                  <div className={main.todya_ab_right2_txt}>
                    <span>팬더몬이 짱임. 아구몬 못생김</span>
                    <figure><img src='/img/main/icon/1.png' alt=''/></figure>
                    <span>아아중독</span>
                  </div>
                </div>
                <div className={main.todya_ab_right2}>
                  <figure className={main.todya_ab_right2_box}><img src='/img/main/today_box.png' alt=''/></figure>
                  <div className={main.todya_ab_right2_txt}>
                    <span>팬더몬이 짱임. 아구몬 못생김</span>
                    <figure><img src='/img/main/icon/1.png' alt=''/></figure>
                    <span>아아중독</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={main.today_dm_wrap}>
          <div className={main.today_dm_imgs}>
            <figure className={main.today_dm_img}><img src='/img/main/today_dm.png' alt=''/></figure>
            <figure className={main.today_dm_img2}><img src='/img/main/quiz_plus.png' alt=''/></figure>
          </div>
          <div className={main.today_dm}>
          <Swiper
              slidesPerView={2.5}
              spaceBetween={25}
              grabCursor={true}
              // modules={[Pagination]}
              className={main.myswiper2}
            >
              <SwiperSlide className={main.swipers_2}>
                <figure className={main.today_dms_wrap}><img src='/img/main/dms_wrap.png' alt=''/></figure>
                <figure className={main.today_dms}><img src='/img/main/1.png' alt=''/></figure>
                <div className={main.today_dm_info_wrap}>
                  <figure className={main.today_dm_box}><img src='/img/main/dm_box.png' alt=''/></figure>
                  <div className={main.today_dm_info}>
                    <figure className={main.today_dm_face}><img src='/img/main/face/1.png' alt=''/></figure>
                    <div className={main.today_dm_infos}>
                      <figure className={main.today_dm_info_icon}><img src='/img/main/icon/1.png' alt=''/></figure>
                      <span>아아중독</span>
                    </div>
                    <p>님의 D.M</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className={main.swipers_2}>
                <figure className={main.today_dms_wrap}><img src='/img/main/dms_wrap.png' alt=''/></figure>
                <figure className={main.today_dms}><img src='/img/main/1.png' alt=''/></figure>
                <div className={main.today_dm_info_wrap}>
                  <figure className={main.today_dm_box}><img src='/img/main/dm_box.png' alt=''/></figure>
                  <div className={main.today_dm_info}>
                    <figure className={main.today_dm_face}><img src='/img/main/face/1.png' alt=''/></figure>
                    <div className={main.today_dm_infos}>
                      <figure className={main.today_dm_info_icon}><img src='/img/main/icon/1.png' alt=''/></figure>
                      <span>아아중독</span>
                    </div>
                    <p>님의 D.M</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className={main.swipers_2}>
                <figure className={main.today_dms_wrap}><img src='/img/main/dms_wrap.png' alt=''/></figure>
                <figure className={main.today_dms}><img src='/img/main/1.png' alt=''/></figure>
                <div className={main.today_dm_info_wrap}>
                  <figure className={main.today_dm_box}><img src='/img/main/dm_box.png' alt=''/></figure>
                  <div className={main.today_dm_info}>
                    <figure className={main.today_dm_face}><img src='/img/main/face/1.png' alt=''/></figure>
                    <div className={main.today_dm_infos}>
                      <figure className={main.today_dm_info_icon}><img src='/img/main/icon/1.png' alt=''/></figure>
                      <span>아아중독</span>
                    </div>
                    <p>님의 D.M</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className={main.swipers_2}>
                <figure className={main.today_dms_wrap}><img src='/img/main/dms_wrap.png' alt=''/></figure>
                <figure className={main.today_dms}><img src='/img/main/1.png' alt=''/></figure>
                <div className={main.today_dm_info_wrap}>
                  <figure className={main.today_dm_box}><img src='/img/main/dm_box.png' alt=''/></figure>
                  <div className={main.today_dm_info}>
                    <figure className={main.today_dm_face}><img src='/img/main/face/1.png' alt=''/></figure>
                    <div className={main.today_dm_infos}>
                      <figure className={main.today_dm_info_icon}><img src='/img/main/icon/1.png' alt=''/></figure>
                      <span>아아중독</span>
                    </div>
                    <p>님의 D.M</p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  )
}
