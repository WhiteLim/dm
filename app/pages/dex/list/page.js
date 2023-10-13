"use client"
import React, { useEffect, useState } from 'react'
import li from './list.module.scss'
import axios from 'axios'

export default function page() {

    const [data,setData] = useState();
    const [page,setPage] = useState(10);

    const get = async()=>{
        const dm = await axios.get('/api/dex/list');
        setData(dm.data.content)
    }

    const more = ()=>{ setPage(page + 10) }

    useEffect(()=>{ get() },[])
    if(!data || data.length <= 0) return <></>
    return (
        <section className={li.list_page}>
            <div className={li.user_info}>
                <p><img src={'/img/detail/logo.png'} /></p>
                <div className={li.info_box}>
                    <div className={li.inner_box}>
                        <span>[Rk.99]</span>
                        <div>
                            <img src='/img/detail/user_icon.png' />
                            <p>자룡님은바보</p>
                        </div>
                    </div>
                    <div className={li.user_profile}>
                        <p><img src={'/img/detail/profile.png'} /></p>
                    </div>
                </div>
            </div>
            <div className={li.digidex}>
                <p>
                    <img src={'/img/detail/logo.png'} />
                    <span>DIGIDEX</span>
                </p>
                <div className={li.search_area}>
                    <form>
                        <input type='search' placeholder='디지몬을 검색해보세요.' />
                        <input type='submit' />
                    </form>
                </div>
                {
                    data.slice(0,page).map((v,k)=>(
                        <p key={v.id}>{v.name}</p>
                    ))
                }
                <button onClick={more}> 더보기 </button>
            </div>
        </section>
    )
}
