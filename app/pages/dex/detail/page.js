"use client"
import React from 'react'
import de from './detail.module.scss'
import logo from '../../../../public/img/detail/logo.png'
import user_icon from '../../../../public/img/detail/user_icon.png'
import like from '../../../../public/img/detail/like.png'
import dg_img from '../../../../public/img/detail/dg_img.png'
import Image from 'next/image'

export default function page() {
    return (
        <div className={de.detail_page}>
            <div className={de.user_info}>
                <p><Image src={logo} /></p>
                <div className={de.info_box}>
                    <div>
                        <span>[Rk.1]</span>
                        <div>
                            <Image src={user_icon} />
                            <p>간장공장공장</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={de.dg_info}>  {/* margin 36px */}
                <h3>팬더몬인가뭔가</h3>
                <div className={de.dg_data}>
                    <div className={de.left_data}>
                        <p className={de.like}><Image src={like} /></p>
                        <p className={de.dg_img}><Image src={dg_img} /></p>
                    </div>
                    <ul className={de.right_data}>
                        <li>
                            <p>LEVEL</p>
                            <span>완전체</span>
                        </li>
                        <li>
                            <p>TYPE</p>
                            <span>데이타</span>
                        </li>
                        <li>
                            <p>X-Antibody</p>
                            <span>none</span>
                        </li>
                    </ul>
                </div>
                <div className={de.description}>
                    <p>팬더의 모습을 한 퍼펫형 디지몬. 무표정, 무관심의 무뚝뚝한 성격으로 아예 귀여운 면이 없다. 자신을 독불장군이라고 생각하지만 같은 용모에서 인기인인 퍼펫몬을 은밀하게 부러워팬더의 모습을 한 퍼펫형 디지몬. 무표정, 무관심의 무뚝뚝한 성격으로 아예 귀여운 면이 없다. 자신을 독불장군이라고 생각하지만 같은 용모에서 인기인인 퍼펫몬을 은밀하게 부러워</p>
                </div>
            </div>
        </div>
    )
}
