"use client"

import style from './page.module.scss'
import React, { useEffect, useRef, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import axios from 'axios';
import {user_get} from '../../../comp/member/Login'
import Footer from '@/app/comp/Footer';

export default function page() {
  // url에서 받아오기~~~~
  const params = useSearchParams();
  const idParam = params.get('id');

  //회원정보
  const [member,setMember] = useState();
  const [rk,setRk] = useState();

  async function fetchData() {
      const mb = await user_get()
      setRk(mb.rk.data)
      setMember(mb.data);
  }

  useEffect(()=>{
    fetchData();
    getWrdata();
    getAnsdata();
  },[])

  //url id값에서 DM데이터 뽑기
  const [data,setData] = useState();
  async function getWrdata(){
    const req = await axios.get(`/api/borad/view?id=${idParam}`)
    setData(req.data[0])
  }
  let textlength = data?.answer.split("").length

  //url id값에서 DM데이터 뽑기
  const [ansData,setAnsData] = useState();
  async function getAnsdata(){
    const req = await axios.get(`/api/borad/view/wrong?id=${idParam}`)
    setAnsData(req.data)
  }
  
  //~~~~~~~~~캐치마인드 크기 조절~~~~~~~~~
  const canvasRef = useRef(null);
  let [canvasWidth, setCanvasWidth]= useState();

  useEffect(()=>{
    setTimeout(() => {
      function resizeCanvas() {
          const canvas = canvasRef.current;
          const container = document.body;
          const width = container.clientWidth;
          canvas.width = width >= 600 ? 489 : width*0.7;
          canvas.height = width >= 639 ? 429 : canvasWidth*0.877;
          setCanvasWidth(canvas.clientWidth);
        }
    
        window.addEventListener('resize',resizeCanvas)
    
        resizeCanvas();
    }, 500);
  },[canvasWidth])

  //답 입력
  const [answerInput, setAnswerInput] = useState(''); 
  
  const inputKeyPress =(e) =>{
    if (e.key === 'Enter'){
      e.preventDefault(); 
      answerCompare();
    }
  };

  //답 비교
  const answerCompare = () => {

    const date = new Date();
    const y = date.getFullYear();
    const m = date.getMonth() + 1;
    const d = date.getDate();
    const toDay = `${y}.${m}.${d}`;

    const send = {
      bo_id:idParam,
      wr_id:member.mb_id,
      wr_icon:member.mb_icon,
      wr_nick:member.mb_nick,
      answer: answerInput,
      an_date: toDay
    }

    if(answerInput == data.answer){
      console.log('정답');
      axios.post('/api/borad/view',send)
    }else{
      console.log('오답');
      axios.post('/api/borad/view/wrong',send)
    }
  };

  //오답박스 열기
  const [openBigWrong,setOpenBigWrong]=useState(false);
  const [openSmallWrong,setOpenSmallWrong]=useState(true);

  const toggleWrongBox = function(){
    if(openSmallWrong){
      setOpenBigWrong(true);
      setOpenSmallWrong(false);
    }else{
      setOpenBigWrong(false);
      setOpenSmallWrong(true);
    }
  }

  if(!member || !data || !ansData) return <></>
  return (
    <article className={style.board_view}>
      <header>
        <figure className={style.logo}><img src='/img/board/write/logo.png'/></figure>
        <div className={style.profile} >
          <img className={style.pfDecoBox} src='/img/board/write/profilebox.png'/>
          <div className={style.pfInner}>
            <p>[Rk.{rk}]</p>
            <figure className={style.pfNickname}>
              <img src={`/img/main/icon/${member.mb_icon}.png`}/>
              <figcaption>{member.mb_nick}</figcaption>
            </figure>
            <div className={style.pfPictureWrap}>
              <div className={style.pfPicture}>
                <img className={style.pfPic} src={`/img/main/face/${member.mb_img}.png`}/>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className={style.title}>
        <div className={style.titleTab}>
          <img className={style.titleDeco} src='/img/board/write/mainDMtab.png'/>
          <h1>DIGIMON MIND (D.M)</h1>
        </div>
      </section>

      <section className={style.drawing}>
        <div className={style.canvasWrapper}>
          <img className={style.canvasDeco} src='/img/board/write/canvas_deco.png'/>
          <img className={style.canvas} id="canvasId" ref={canvasRef} width={canvasWidth} src={data.path} />
        </div>
      </section>

      <section className={style.hintTab}>
        <div className={style.hintDeco}>
          <p className={style.hint}>힌트: {textlength}글자</p>
          <img src='/img/board/write/drawTab.png'/>
        </div>

        <div className={style.answerBg}>
          {
            !data?.an_id ?  
            <div className={style.wrapAnswer}>
              <input className={style.answerInput} type='text' 
                placeholder='정답을 입력하세요'
                onChange={(e)=> setAnswerInput(e.target.value)}
                onKeyPress={inputKeyPress}
              />
              <div className={style.inputBtn} onClick={answerCompare}>
                <img src='/img/board/view/inputBtn.png'/>
              </div>
            </div>
          :
            <div className={style.correct}>
              <b><span>정답: </span>{data.answer}</b>
              <p className={style.winner}>
                <span>정답자: </span>
                <img src={`/img/main/icon/${data.an_icon}.png`}/>
                [{data.an_nick}]
              </p>
            </div>
          }
          </div>
      </section>
      
      <section className={style.wrongAnswers}>
        <div className={style.wrapText}>
          <b>오답리스트</b>
          <p onClick={toggleWrongBox}>
            { ansData.length > 2 && openSmallWrong && ( <img src='/img/board/view/ansListOpen.png'/> )}
            { openBigWrong && ( <img src='/img/board/view/ansListClose.png'/> )}
          </p>
        </div>
        { openSmallWrong && (
          <div className={style.wrongAnsBox}>
            <ul className={style.boxInner}>
              { 
                ansData.length > 0 && (
                  ansData.slice(0,2).map((comment)=>(
                    <li className={style.comment} key={comment.num}>
                      <img src={`/img/main/icon/${comment.wr_icon}.png`}/>
                      <span>[{comment.wr_nick}]: {comment.answer}</span>
                    </li>
                  ))
                )
              }
            </ul>
          </div>
        )
      }

      { ansData.length > 5 && openBigWrong && (
          <div className={style.bigbox}>
            <ul className={style.bigboxInner}>
              {
                ansData.slice(0,5).map((comment)=>(
                  <li className={style.comment} key={comment.num}>
                    <img src={`/img/main/icon/${comment.wr_icon}.png`}/>
                    <span>[{comment.wr_nick}]: {comment.answer}</span>
                  </li>
                ))
              }
            </ul>
          </div>
        )
      }
        
      </section>

      <Footer/>
    </article>
  )
}
