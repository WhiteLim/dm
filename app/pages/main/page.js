"use client"
import React, { useEffect, useRef, useState } from 'react'
import main from './main.module.scss'
import Footer from '@/app/comp/Footer';

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
              <span>행복포키</span>
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
          <figure className={main.random}><img src='/img/main/random.png' alt='랜덤 디지몬'/></figure>
        </div>
      </div>
      <Footer />
    </div>
  )
}
