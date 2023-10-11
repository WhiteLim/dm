import React from 'react'
import join from './join.module.scss'
import Image from 'next/image'
import bg from '../../../../public/img/member/join/bg.png'
import dot from '../../../../public/img/member/join/dotdotdot.gif'
import agumon from '../../../../public/img/member/join/agumon.png'
import tornado from '../../../../public/img/member/join/tornado.png'
import con1_txt_box from '../../../../public/img/member/join/con1_txt_box.png'
import arrow from '../../../../public/img/member/join/arrow.png'

export default function page() {
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
          <div className={join.typing_txt}>
            <ul>
              <li>안녕? 디지털 월드에 온걸 환영해!</li>
              <li>너에 대해서 알려줄래?</li>
            </ul>
          </div>
          <div className={join.typing}>
            <ul>
              <li></li>
              <li></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
