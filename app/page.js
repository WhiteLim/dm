"use client"
import React, { useEffect, useRef, useState } from 'react'
import style from './pages/Intro/page.module.scss'
import KakaoLogin from 'react-kakao-login';

export default function page() {
  const [loading, setLoading] = useState(true);
  const loadingimg = useRef();

  useEffect(() => {
    //로딩 화살표 ing
    //const loadingimg = document.querySelector('.loading');

    for (let i = 0; i < 8; i++) {
      loadingimg.current.innerHTML += "<img src='/img/intro/vector (1).png'>"
    }


    const loadImg2 = loadingimg.current.childNodes;
    loadImg2.forEach((v, k) => {
      setTimeout(() => {
        v.src = "/img/intro/vector.png"
      }, 200 * k)
    }, []);


    //로딩이 끝났을 때 바뀌는 화면
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

  const handleKakaoLogin =async (response) => {
    const u_id = response.profile.id;
    const u_nick = response.profile.properties.nickname;
    const d = await axios.post('/api/member',{u_id,u_nick})
    console.log(d.data);
    if(d.data[0] == false) {
      console.log("회원가입하셈"+d.data[1]);
    } else {
      console.log("이미 회원이셈");
    }
  };





  return (
    <article className={style.main_intro}>
      <video className={style.bg_video} autoPlay muted loop playsInline src='/img/background.mp4'/>
      <figure className={style.main_logo}>
        <img src="/img/intro/Group 2.png" />
        {loading ? (
          <figcaption className={style.loadfirst}>
            <div className={style.loading} ref={loadingimg}></div>
            <p>디지털 월드에 접속중 ...</p>
            <img src="/img/intro/intro.gif" />
          </figcaption>
        ) : (
          <section className={style.loadlast}>
            <div>
              <img src="/img/intro/WELCOME TO DIGITAL WORLD.png" alt="" />
            <KakaoLogin
                token={process.env.NEXT_PUBLIC_KAKAO_JS_KEY}
                onSuccess={handleKakaoLogin}
                onFail={console.error}
                onLogout={console.info}
                render={({ onClick }) => {
                  return (
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        onClick();
                      }}
                    >
                      <img src="/img/intro/Group 181.png" alt='' />
                    </a>
                  );
                }}
              /> 
            </div>
          </section>
        )}
      </figure>
    </article>
  )
}
