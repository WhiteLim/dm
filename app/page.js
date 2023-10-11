"use client"
import { useEffect, useState } from "react";
import Kakao from "./pages/Kakao";
import axios from "axios";


export default function Home() {

  // 리스트용 변수
  const [list,setList] = useState();
  const [page,setPage] = useState(10);

  // 디테일용 변수
  const [detail,setDetail] = useState(10);

  // 디지몬 리스트

  async function listget(){
    const res = await axios.get('/api/dex/list');
    setList(res.data.content);
  }
  
  // 디지몬 디테일
  async function detailget(){
    const res = await axios.get('/api/dex/detail?num=100');
    setDetail(res.data);
  }

  useEffect(()=>{
    listget()
    detailget();
  },[])


  return (
    <>
     <Kakao />
      {
        list && list.slice(0, page).map(v=>(
          <p key={v.id}>{v.name}</p>
        ))
      }
      <button onClick={()=>{ setPage(page + 10)  }}>더보기</button>

      <div>
        <p>{detail.name}</p>
      </div>
    </>
  )
}
