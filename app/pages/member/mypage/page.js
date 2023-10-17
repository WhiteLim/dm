"use client"
import React, { useEffect, useRef, useState } from 'react'
import style from './page.module.scss'
import Footer from '@/app/comp/Footer'



export default function page() {

  const fig = useRef();
  const [num, setNum] = useState(0);

  useEffect(() => {
    const button = fig.current.childNodes;

    button.forEach((v, k) => {
      v.onclick = () => {
        button[num].childNodes[0].style.opacity = 0.6
        v.childNodes[0].style.opacity = 1
        setNum(k)
        if (num == k) {
          console.log('변경불가');
        } else {
          console.log('저장', k + 1);
        }
      }
    });
  })


  const modal = useRef();
  const openPage = useRef();

  useEffect(() => {
    const open = modal.current.childNodes[0];
    const select = openPage.current.childNodes[1];
    console.log(open)
    // onclick 이벤트 넣어주기
  })



  return (
    <article className={style.bg_img}>
      <div className={style.pro}>
        <div className={style.pro_title} >
          <img src='/img/member/mypage/프로필.png' />
          <img src='/img/member/mypage/Group 206.png' />
        </div>
        <figure className={style.pro_view_bg}>
          <figcaption className={style.pro_view} ref={modal}>
            <img src='/img/member/mypage/Group 239.png' />
            <div className={style.modal_p} ref={openPage} >
{/*               <img src='/img/member/mypage/Group 233.png' /> */}
              {/* 백그라운드 이미지로 넣고 position 설정해주기 */}
              <figure>
                <img src='/img/member/mypage/Group 737.png' />
              </figure>
              <figure>
                <img src='/img/member/mypage/Group 738.png' />
              </figure>
              <figure>
                <img src='/img/member/mypage/Group 739.png' />
              </figure>
              <figure>
                <img src='/img/member/mypage/Group 740.png' />
              </figure>
              <figure>
                <img src='/img/member/mypage/Group 741.png' />
              </figure>
              <figure>
                <img src='/img/member/mypage/Group 734.png' />
              </figure>
              <figure>
                <img src='/img/member/mypage/Group 736.png' />
              </figure>
              <figure>
                <img src='/img/member/mypage/Group 735.png' />
              </figure>
            </div>
            <p>[날짜]</p>
            <p>[랭킹]</p>
            <img src='/img/member/mypage/Group 759.png' className={style.pro_view_img} />
            <form className={style.pro_view_form}>
              <img src='/img/member/mypage/Frame 62.png' />
              <input type='text' name='mb_nick' className={style.text_box} />
              <input type='submit' className={style.submit_btn} value='' />
            </form>
          </figcaption>
        </figure>
      </div>
      <div className={style.capsule} ref={fig}>
        <figure>
          <img src='/img/member/mypage/1.png' alt='' />
        </figure>
        <figure>
          <img src='/img/member/mypage/2.png' alt='' />
        </figure>
        <figure>
          <img src='/img/member/mypage/3.png' alt='' />
        </figure>
        <figure>
          <img src='/img/member/mypage/4.png' alt='' />
        </figure>
        <figure>
          <img src='/img/member/mypage/5.png' alt='' />
        </figure>
        <figure>
          <img src='/img/member/mypage/6.png' alt='' />
        </figure>
        <figure>
          <img src='/img/member/mypage/7.png' alt='' />
        </figure>
        <figure>
          <img src='/img/member/mypage/8.png' alt='' />
        </figure>
        <figure>
          <img src='/img/member/mypage/9.png' alt='' />
        </figure>
      </div>
      <div className={style.last_btn}>
        <figure>
          <img src='/img/member/mypage/Group 226.png' alt='' />
        </figure>
        <figure className={style.btn_ani}>
          <img src='/img/member/mypage/Group 177.png' alt='' />
          <img src='/img/member/mypage/Ellipse 3.png' alt='' />
        </figure>
        <figure>
          <img src='/img/member/mypage/Group 264.png' alt='' />
        </figure>
      </div>

      <Footer />
    </article>
  )
}
