"use client"
import Footer from '@/app/comp/Footer';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function page() {
  const [data,setData] = useState();
  const [page,setPage] = useState(10);

  async function getDM(){
    let dmdata = await axios.get('../../api/dex/list')
    setData(dmdata.data.content)
  }

  useEffect(()=>{
    getDM()
  },[])

  const more = ()=>{
    setPage(page + 10)
  }

  return (
    <div>
      {
          data && data.slice(0, page).map((v,k)=>(
              <p key={v.id}><span>{v.name}</span></p>
              ))
      }
      <button onClick={more}>더보기</button>
      <Footer />
    </div>
  )
}
