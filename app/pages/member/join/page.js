"use client"
import React, { useEffect, useRef, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Navigation } from 'swiper/modules';
import join from './join.module.scss'

export default function page() {
  let con1_wrap = useRef();
  let con2_wrap = useRef();
  let input = useRef();
  let con3_wrap = useRef();
  let con4_wrap = useRef();
  let con5_wrap = useRef();


  const con1Click = ()=>{
    con1_wrap.current.style = `display:none`;
    con2_wrap.current.style = `display:block`;
  };

  const [nickName, setNickName] = useState('');
  const con2Click = ()=>{
    con2_wrap.current.style = `display:none`
    con3_wrap.current.style = `display:block`
    let nickNames = input.current.value;
    setNickName(nickNames);
    // setTimeout(()=>{
    //   console.log(nickName)
    // }, 2000);
  };
  const con3Click = ()=>{
    con3_wrap.current.style = `display:none`
    con4_wrap.current.style = `display:block`
  }
  const con4Click = ()=>{
    con4_wrap.current.style = `display:none`
    con5_wrap.current.style = `display:block`
  }

  

  const [name, setName] = useState('');
  const maxCharacters = 6;

  const inputChange = (event) => {
    const inputValue = event.target.value;
    if (inputValue.length <= maxCharacters) {
      setName(inputValue);
    }
  };
  return (
    <form className={join.all}>
      <div className={join.join_wrap}>
        <video autoPlay muted loop playsInline src='/img/background.mp4'/>
        <div className={join.bg}>
          <div className={join.join_con1_wrap} ref={con1_wrap}>
          <div className={join.con1}>
            <figure className={join.dot}><img src='/img/member/join/dotdotdot.gif' alt="쩜쩜쩜 이미지"/></figure>
            <figure className={join.agumon}><img src='/img/member/join/agumon.png' alt="아구몬 이미지"/></figure>
            <figure className={join.tornado}><img src='/img/member/join/tornado.png' alt="토네이도 이미지"/></figure>
          </div>
          <div className={join.con1_txt} onClick={con1Click}>
            <figure className={join.con1_txt_box}><img src='/img/member/join/con1_txt_box.png' alt="텍스트 박스"/></figure>
            <figure className={join.arrow}><img src='/img/member/join/arrow.png' alt="화살표 버튼"/></figure>       
            <div className={join.typing_txt}>
              <ul>
                <li>안녕? 디지털 월드에 온걸 환영해!</li>
                <li>너에 대해서 알려줄래?</li>
              </ul>
            </div>
          </div>
          </div>
          <div className={join.join_con2_wrap} ref={con2_wrap}>
            <div className={join.con2_txt}>
              <div className={join.combine1}>
                <figure className={join.small_agumon}><img src='/img/member/join/small_agumon.png' alt='작은 아구몬 이미지'/></figure>
                <figure className={join.small_tornado}><img src='/img/member/join/small_tornado.png' alt='작은 토네이도 이미지'/></figure>
              </div>
              <div className={join.combine2}>
                <figure className={join.con2_txt_box}><img src='/img/member/join/con2_txt_box.png' alt='텍스트 박스 이미지'/></figure>
                <p className={join.typing_txt2}>캐릭터를 고르고 닉네임을 지어줘!</p>
              </div>
            </div>
            <Swiper navigation={{
              nextEl: '.swiper_button_next', // 오른쪽 버튼
              prevEl: '.swiper_button_prev', // 왼쪽 버튼
            }} modules={[Navigation]} className={join.swiper_wrap}>
              <SwiperSlide className={join.swiper}><img src='/img/member/join/1.png' alt=''/></SwiperSlide>  
              <SwiperSlide className={join.swiper}><img src='/img/member/join/2.png' alt=''/></SwiperSlide>  
              <SwiperSlide className={join.swiper}><img src='/img/member/join/3.png' alt=''/></SwiperSlide>  
              <SwiperSlide className={join.swiper}><img src='/img/member/join/4.png' alt=''/></SwiperSlide>  
              <SwiperSlide className={join.swiper}><img src='/img/member/join/5.png' alt=''/></SwiperSlide>  
              <SwiperSlide className={join.swiper}><img src='/img/member/join/6.png' alt=''/></SwiperSlide>  
              <SwiperSlide className={join.swiper}><img src='/img/member/join/7.png' alt=''/></SwiperSlide>  
              <SwiperSlide className={join.swiper}><img src='/img/member/join/8.png' alt=''/></SwiperSlide>  
              <div className={join.swiper_btn}>
                <div className="swiper_button_prev"><img src='/img/member/join/prev.png' alt="왼쪽 화살표"/></div> {/* 왼쪽 화살표 버튼 */}
                <div className="swiper_button_next"><img src='/img/member/join/next.png' alt="오른쪽 화살표"/></div> {/* 오른쪽 화살표 버튼 */}
              </div>        
            </Swiper>
            <div className={join.user_name}>
              <figure className={join.user_name_txt}><img src='/img/member/join/user_name.png' alt='유저 닉네임 작성하는 창'/></figure>
              <input type="text" placeholder='닉네임을 입력하세요.' maxlength='6' ref={input} value={name} onChange={inputChange} className={join.user_input}/>
            </div>
            <div className={join.create} onClick={con2Click}>
              <figure className={join.create_img}><img src='/img/member/join/create.png' alt='생성하기'/></figure>
              <p>생성하기</p>
            </div>
          </div>
          <div className={join.join_con3_wrap} ref={con3_wrap}>
            <div className={join.con1}>
              <figure className={join.dot}><img src='/img/member/join/dotdotdot.gif' alt="쩜쩜쩜 이미지"/></figure>
              <figure className={join.agumon}><img src='/img/member/join/agumon.png' alt="아구몬 이미지"/></figure>
              <figure className={join.tornado}><img src='/img/member/join/tornado.png' alt="토네이도 이미지"/></figure>
            </div>
            <div className={join.con1_txt} onClick={con3Click}>
              <figure className={join.con1_txt_box}><img src='/img/member/join/con1_txt_box.png' alt="텍스트 박스"/></figure>
              <figure className={join.arrow}><img src='/img/member/join/arrow.png' alt="화살표 버튼"/></figure>       
              <div className={join.typing_txt}>
                <ul>
                  <li>정말 반가워 " <span style={{ color: '#00f3ff' }}>{nickName}</span> " !</li>
                  <li>디지털 월드를 구하기 위해선 너의 힘이 필요해.</li>
                  <li>나와 함께 봉인된 모든 디지몬들을 잠에서<br/>깨워줄래?</li>
                </ul>
              </div>
            </div>
          </div>
          <div className={join.join_con4_wrap} ref={con4_wrap}>
            <div className={join.con1}>
              <figure className={join.dot}><img src='/img/member/join/dotdotdot.gif' alt="쩜쩜쩜 이미지"/></figure>
              <figure className={join.agumon}><img src='/img/member/join/agumon.png' alt="아구몬 이미지"/></figure>
              <figure className={join.tornado}><img src='/img/member/join/tornado.png' alt="토네이도 이미지"/></figure>
            </div>
            <div className={join.con1_txt} onClick={con4Click}>
              <figure className={join.con1_txt_box}><img src='/img/member/join/con1_txt_box.png' alt="텍스트 박스"/></figure>
              <figure className={join.arrow}><img src='/img/member/join/arrow.png' alt="화살표 버튼"/></figure>       
              <div className={join.typing_txt}>
                <ul>
                  <li>이제 너와 함께할 캡슐을 선택해줘.</li>
                </ul>
              </div>
            </div>
          </div>
          <div className={join.join_con5_wrap} ref={con5_wrap}>
            <div className={join.capsule_wrap}>
              <figure className={join.capsule}><img src='/img/member/1.png' alt='캡슐1'/></figure>
              <figure className={join.capsule}><img src='/img/member/2.png' alt='캡슐2'/></figure>
              <figure className={join.capsule}><img src='/img/member/3.png' alt='캡슐3'/></figure>
              <figure className={join.capsule}><img src='/img/member/4.png' alt='캡슐4'/></figure>
              <figure className={join.capsule}><img src='/img/member/5.png' alt='캡슐5'/></figure>
              <figure className={join.capsule}><img src='/img/member/6.png' alt='캡슐6'/></figure>
              <figure className={join.capsule}><img src='/img/member/7.png' alt='캡슐7'/></figure>
              <figure className={join.capsule}><img src='/img/member/8.png' alt='캡슐8'/></figure>
              <figure className={join.capsule}><img src='/img/member/9.png' alt='캡슐9'/></figure>
            </div>
            <div className={join.create} onClick="">
              <figure className={join.create_img}><img src='/img/member/join/create.png' alt='생성하기'/></figure>
              <p>생성하기</p>
            </div>
          </div>
        </div>
      </div>
    </form>
  )
}
