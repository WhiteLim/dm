"use client";
import React, { useEffect, useState } from 'react'
import my from './mydigimon.module.scss';
import Footer from '@/app/comp/Footer';
import Link from 'next/link';
import { user_get } from '../../../comp/member/Login'
import axios from 'axios';

export default function page() {
    const [data, setData] = useState([]);
    const [list, setList] = useState([]);
    const [member, setMember] = useState();
    const [rk, setRk] = useState();

    async function fetchData() {
        const mb = await user_get()
        setRk(mb.rk.data)
        setMember(mb.data);
    }

    async function getdigimon() {
        const mb_id = sessionStorage.getItem('loginstate');
        const gdg = await axios.get(`/api/member/mydigimon?id=${mb_id}`)
        setData(gdg.data);
        if(gdg.data) {
            digimonlist(gdg.data)
        }
    }

    async function digimonlist(v){
        const instance = axios.create({ baseURL:'https://www.digi-api.com/api/v1/digimon' })
        const newList = [];
        for (let i = 0; i < v.length; i++) {
            const response = await instance.get(`/${v[i].dg_id}`);
            newList.push(response.data);
          }
          setList(newList);
    }

    useEffect(() => {
        fetchData()
        getdigimon()
    }, []);

    const more = () => {
        setPage(page + 10);
    };

    const handleImgError = (e) => {
        e.target.src = 'https://digimon-api.com/images/digimon/w/Earthdramon.png';
    }


    if (!data || !member || !list) return <></>;

    return (
        <div>
            <section className={my.list_page}>
                <div className={my.user_info}>
                    <p><img src={'/img/detail/logo.png'} alt="Logo" /></p>
                    <div className={my.info_box}>
                        <div className={my.inner_box}>
                            <span>[Rk.{rk}]</span>
                            <div>
                                <img src={`/img/main/icon/${member.mb_icon}.png`} alt='' />
                                <p>{member.mb_nick}</p>
                            </div>
                        </div>
                        <div className={my.user_profile}>
                            <p><img src={`/img/main/face/${member.mb_img}.png`} alt='' /></p>
                        </div>
                    </div>
                </div>
                <div className={my.digidex}>
                    <div className={my.dex_box}>
                        <p><img src={'/img/detail/digidex.png'} alt="Digidex" /></p>
                        <span>DIGIDEX</span>
                    </div>
                </div>
                <div className={my.data_list}>
                    <p>총 {data.length} 마리</p>
                    <div className={my.digi_list}>
                        <div>
                            <ul>
                                {
                                    list && list?.slice(0, 10).map((v, k) => (
                                        <li className={my.Evolution_list} key={k}>
                                            <div className={my.Evolution_data}>
                                            <Link href={{ pathname: '../dex/detail', query: { id: v.id, } }} className={my.picture}>
                                                <img src={'/img/detail/digi_box.png'} alt="Digi Box" />
                                                <div className={my.digimon}>
                                                <img src={v.images[0].href} className={my.digi_picture} onError={handleImgError} alt="Digimon Image" />
                                                <p>
                                                    <img src={'/img/detail/mask.png'} className={my.mask} alt="Mask" />
                                                </p>
                                                </div>
                                            </Link>
                                            <Link href={{ pathname: '../dex/detail', query: { name: v.name } }} className={my.digi_name}>
                                                <img src={'/img/detail/name_box.png'} alt="Name Box" />
                                                <span>{v.name}</span>
                                            </Link>
                                            </div>
                                        </li>
                                    ))
                                }
                                <div className={my.button}>
                                    <span onClick={more}> 더보기 </span>
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>
                <Footer />
            </section >
        </div>
    )
}
