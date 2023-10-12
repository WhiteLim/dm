"use client"
import React, { useEffect, useRef } from 'react'
import join from './join.module.scss'
import Image from 'next/image'
import bg from '../../../../public/img/member/join/bg.png'
import dot from '../../../../public/img/member/join/dotdotdot.gif'
import agumon from '../../../../public/img/member/join/agumon.png'
import tornado from '../../../../public/img/member/join/tornado.png'
import con1_txt_box from '../../../../public/img/member/join/con1_txt_box.png'
import arrow from '../../../../public/img/member/join/arrow.png'

export default function page() {
  let elUl =useRef();let view =useRef(); let typingIdx =0; let typingIdx2 =0; let tyInt; let tyInt2; let one = false; let two = false;
  useEffect(()=>{
    let elLi = elUl.current.childNodes;
    
    elLi.forEach((v,k) => {
      let text = v.innerText.split('');
      if(k >= 1){
        setTimeout(()=>{
          if(two == false){
            two = true;
            tyInt2 = setInterval(kd,100);
          }
        },2000)
      } else {
        if(one == false){
          one = true;
          tyInt = setInterval(kd,100);
        }
      }
      
      function kd(){
        if(k >= 1) {
          if(typingIdx2<text.length){ 
            view.current.childNodes[k].append(text[typingIdx2])
            typingIdx2++; 
           } else{ 
              clearInterval(tyInt2);             
           }  
        } else {
          if(typingIdx<text.length){ 
            view.current.childNodes[k].append(text[typingIdx])
            typingIdx++; 
           } else{ 
              clearInterval(tyInt);             
           } 
        }
      }

    });
  },[1])



  return (
    <div className={join.join_wrap}>
      <video autoPlay muted loop playsInline src={require('../../../../public/img/background.mp4')} />
      <figure className={join.bg}><Image src={bg} alt="배경이미지"/></figure>
      <div className={join.join_con1_wrap}>
        <div className={join.con1}>
          <figure className={join.dot}><Image src={dot} alt="쩜쩜쩜 이미지"/></figure>
          <figure className={join.agumon}><Image src={agumon} alt="아구몬 이미지"/></figure>
          <figure className={join.tornado}><Image src={tornado} alt="토네이도 이미지"/></figure>
        </div>
        <div className={join.con1_txt}>
          <figure className={join.con1_txt_box}><Image src={con1_txt_box} alt="텍스트 박스"/></figure>
          <figure className={join.arrow}><Image src={arrow} alt="화살표 버튼"/></figure>       
          <div>
            <ul ref={elUl}>
              <li>안녕? 디지털 월드에 온걸 환영해!</li>
              <li>너에 대해서 알려줄래?</li>
            </ul>
          </div>
          <div className={join.typing_txt}>
            <ul ref={view}>
              <li></li>
              <li></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
