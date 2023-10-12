"use client"
import React, { useState } from 'react'
import de from './detail.module.scss'
import Modal from '../../../comp/dex/detail/Modal'


export default function page() {
    // 모달 버튼 클릭 유무를 저장할 state
    const [showModal, setShowModal] = useState(false)
    // 버튼 클릭시 모달 버튼 클릭 유무를 설정하는 state 함수
    const clickModal = () => setShowModal(!showModal)



    return (
        <section className={de.detail}>
            <div className={de.detail_page}>
                <div className={de.user_info}>
                    <p><img src={'/img/detail/logo.png'} /></p>
                    <div className={de.info_box}>
                        <div>
                            <span>[Rk.1]</span>
                            <div>
                                <img src='/img/detail/user_icon.png' />
                                <p>자룡님은바보</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={de.dg_info}>
                    <h3>팬더몬인가뭔가</h3>
                    <div className={de.dg_data}>
                        <div className={de.left_data}>
                            <p className={de.like}>
                                <img src={'/img/detail/like_box.png'} />
                                <img src={'/img/detail/like_1.png'} />
                                <img src={'/img/detail/like_2.png'} />
                                <span>1,234</span>
                            </p>
                            <div className={de.dg_img}>
                                <p className={de.dg_img_1}>
                                    <img src={'/img/detail/dg_img_1.png'} />
                                </p>
                                <p className={de.sample}>
                                    <img src={'/img/detail/sample.png'} />
                                </p>
                                <p className={de.dg_img_2}>
                                    <img src={'/img/detail/dg_img_2.png'} />
                                </p>
                            </div>
                        </div>
                        <ul className={de.right_data}>
                            <li>
                                <p>LEVEL</p>
                                <span>완전체</span>
                            </li>
                            <li>
                                <p>타입</p>
                                <span>데이타</span>
                            </li>
                            <li>
                                <p>X 바이러스 항체</p>
                                <span>NONE</span>
                            </li>
                        </ul>
                    </div>
                    <div className={de.description}>
                    {showModal && <Modal clickModal={clickModal} />}
                        <p className={de.description_txt} onClick={clickModal} >

                            팬더의 모습을 한 퍼펫형 디지몬. 무표정, 무관심의 무뚝뚝한 성격으로 아예 귀여운 면이 없다. 자신을 독불장군이라고 생각하지만 같은 용모에서 인기인인 퍼펫몬을 은밀하게 부러워팬더의 모습을 한 퍼펫형 디지몬. 무표정, 무관심의 무뚝뚝한 성격으로 아예 귀여운 면이 없다. 자신을 독불장군이라고 생각하지만 같은 용모에서 인기인인 퍼펫몬을 은밀하게 부러워
                        </p>
                        <p className={de.description_more}>
                            <img src={'/img/detail/more.png'} />
                        </p>
                    </div>
                    <div className={de.get_btn}>
                        <p>포획하기</p>
                    </div>
                </div>
                <div className={de.skill_info}>
                    <div className={de.skill_gif}>
                        <p><img src={'/img/detail/digivice.gif'} /></p>
                        <span>SKILLS</span>
                    </div>
                    <div className={de.skill_txt}>
                        <p>애니멀네일</p>
                        <p>운남성</p>
                        <p>장타</p>
                        <p>대나무펀치</p>
                    </div>
                </div>
                <div className={de.dg_review}>
                    <h3>유저 한줄 평</h3>
                    <ul>
                        <li className={de.review_list}>
                            <div>
                                <p className={de.review_text}>내가 팬더몬 만나봤는데 푸바오보다 자기가 낫다하더라</p>
                                <div>
                                    <div className={de.user_text}>
                                        <img src='/img/detail/user_icon.png' />
                                        <p>자룡님은바보</p>
                                    </div>
                                    <span>[2023.10.12]</span>
                                </div>
                            </div>
                        </li>
                        <li className={de.review_list}>
                            <div>
                                <p className={de.review_text}>내가 팬더몬 만나봤는데 푸바오보다 자기가 낫다하더라</p>
                                <div>
                                    <div className={de.user_text}>
                                        <img src='/img/detail/user_icon.png' />
                                        <p>자룡님은바보</p>
                                    </div>
                                    <span>[2023.10.12]</span>
                                </div>
                            </div>
                        </li>
                        <li className={de.review_list}>
                            <div>
                                <p className={de.review_text}>내가 팬더몬 만나봤는데 푸바오보다 자기가 낫다하더라</p>
                                <div>
                                    <div className={de.user_text}>
                                        <img src='/img/detail/user_icon.png' />
                                        <p>자룡님은바보</p>
                                    </div>
                                    <span>[2023.10.12]</span>
                                </div>
                            </div>
                        </li>
                        <li className={de.review_list}>
                            <div>
                                <p className={de.review_text}>내가 팬더몬 만나봤는데 푸바오보다 자기가 낫다하더라</p>
                                <div>
                                    <div className={de.user_text}>
                                        <img src='/img/detail/user_icon.png' />
                                        <p>자룡님은바보</p>
                                    </div>
                                    <span>[2023.10.12]</span>
                                </div>
                            </div>
                        </li>
                        <li className={de.review_list}>
                            <div>
                                <p className={de.review_text}>내가 팬더몬 만나봤는데 푸바오보다 자기가 낫다하더라</p>
                                <div>
                                    <div className={de.user_text}>
                                        <img src='/img/detail/user_icon.png' />
                                        <p>자룡님은바보</p>
                                    </div>
                                    <span>[2023.10.12]</span>
                                </div>
                            </div>
                        </li>
                        <li className={de.review_list}>
                            <div>
                                <p className={de.review_text}>내가 팬더몬 만나봤는데 푸바오보다 자기가 낫다하더라</p>
                                <div>
                                    <div className={de.user_text}>
                                        <img src='/img/detail/user_icon.png' />
                                        <p>자룡님은바보</p>
                                    </div>
                                    <span>[2023.10.12]</span>
                                </div>
                            </div>
                        </li>
                        <li className={de.review_list}>
                            <div>
                                <p className={de.review_text}>내가 팬더몬 만나봤는데 푸바오보다 자기가 낫다하더라</p>
                                <div>
                                    <div className={de.user_text}>
                                        <img src='/img/detail/user_icon.png' />
                                        <p>자룡님은바보</p>
                                    </div>
                                    <span>[2023.10.12]</span>
                                </div>
                            </div>
                        </li>
                        <li className={de.review_list}>
                            <div>
                                <p className={de.review_text}>내가 팬더몬 만나봤는데 푸바오보다 자기가 낫다하더라</p>
                                <div>
                                    <div className={de.user_text}>
                                        <img src='/img/detail/user_icon.png' />
                                        <p>자룡님은바보</p>
                                    </div>
                                    <span>[2023.10.12]</span>
                                </div>
                            </div>
                        </li>
                        <li className={de.review_list}>
                            <div>
                                <p className={de.review_text}>내가 팬더몬 만나봤는데 푸바오보다 자기가 낫다하더라</p>
                                <div>
                                    <div className={de.user_text}>
                                        <img src='/img/detail/user_icon.png' />
                                        <p>자룡님은바보</p>
                                    </div>
                                    <span>[2023.10.12]</span>
                                </div>
                            </div>
                        </li>
                        <li className={de.review_list}>
                            <div>
                                <p className={de.review_text}>내가 팬더몬 만나봤는데 푸바오보다 자기가 낫다하더라</p>
                                <div>
                                    <div className={de.user_text}>
                                        <img src='/img/detail/user_icon.png' />
                                        <p>자룡님은바보</p>
                                    </div>
                                    <span>[2023.10.12]</span>
                                </div>
                            </div>
                        </li>
                        <li className={de.review_list}>
                            <div>
                                <p className={de.review_text}>내가 팬더몬 만나봤는데 푸바오보다 자기가 낫다하더라</p>
                                <div>
                                    <div className={de.user_text}>
                                        <img src='/img/detail/user_icon.png' />
                                        <p>자룡님은바보</p>
                                    </div>
                                    <span>[2023.10.12]</span>
                                </div>
                            </div>
                        </li>
                        <li className={de.review_list}>
                            <div>
                                <p className={de.review_text}>내가 팬더몬 만나봤는데 푸바오보다 자기가 낫다하더라</p>
                                <div>
                                    <div className={de.user_text}>
                                        <img src='/img/detail/user_icon.png' />
                                        <p>자룡님은바보</p>
                                    </div>
                                    <span>[2023.10.12]</span>
                                </div>
                            </div>
                        </li>
                        <li className={de.review_list}>
                            <div>
                                <p className={de.review_text}>내가 팬더몬 만나봤는데 푸바오보다 자기가 낫다하더라</p>
                                <div>
                                    <div className={de.user_text}>
                                        <img src='/img/detail/user_icon.png' />
                                        <p>자룡님은바보</p>
                                    </div>
                                    <span>[2023.10.12]</span>
                                </div>
                            </div>
                        </li>
                        <li className={de.review_list}>
                            <div>
                                <p className={de.review_text}>내가 팬더몬 만나봤는데 푸바오보다 자기가 낫다하더라</p>
                                <div>
                                    <div className={de.user_text}>
                                        <img src='/img/detail/user_icon.png' />
                                        <p>자룡님은바보</p>
                                    </div>
                                    <span>[2023.10.12]</span>
                                </div>
                            </div>
                        </li>
                        <li className={de.review_list}>
                            <div>
                                <p className={de.review_text}>내가 팬더몬 만나봤는데 푸바오보다 자기가 낫다하더라</p>
                                <div>
                                    <div className={de.user_text}>
                                        <img src='/img/detail/user_icon.png' />
                                        <p>자룡님은바보</p>
                                    </div>
                                    <span>[2023.10.12]</span>
                                </div>
                            </div>
                        </li>
                        <li className={de.review_list}>
                            <div>
                                <p className={de.review_text}>내가 팬더몬 만나봤는데 푸바오보다 자기가 낫다하더라</p>
                                <div>
                                    <div className={de.user_text}>
                                        <img src='/img/detail/user_icon.png' />
                                        <p>자룡님은바보</p>
                                    </div>
                                    <span>[2023.10.12]</span>
                                </div>
                            </div>
                        </li>
                        <li className={de.review_list}>
                            <div>
                                <p className={de.review_text}>내가 팬더몬 만나봤는데 푸바오보다 자기가 낫다하더라</p>
                                <div>
                                    <div className={de.user_text}>
                                        <img src='/img/detail/user_icon.png' />
                                        <p>자룡님은바보</p>
                                    </div>
                                    <span>[2023.10.12]</span>
                                </div>
                            </div>
                        </li>
                        <li className={de.review_list}>
                            <div>
                                <p className={de.review_text}>내가 팬더몬 만나봤는데 푸바오보다 자기가 낫다하더라</p>
                                <div>
                                    <div className={de.user_text}>
                                        <img src='/img/detail/user_icon.png' />
                                        <p>자룡님은바보</p>
                                    </div>
                                    <span>[2023.10.12]</span>
                                </div>
                            </div>
                        </li>
                        <li className={de.review_list}>
                            <div>
                                <p className={de.review_text}>내가 팬더몬 만나봤는데 푸바오보다 자기가 낫다하더라</p>
                                <div>
                                    <div className={de.user_text}>
                                        <img src='/img/detail/user_icon.png' />
                                        <p>자룡님은바보</p>
                                    </div>
                                    <span>[2023.10.12]</span>
                                </div>
                            </div>
                        </li>
                        <li className={de.review_list}>
                            <div>
                                <p className={de.review_text}>내가 팬더몬 만나봤는데 푸바오보다 자기가 낫다하더라</p>
                                <div>
                                    <div className={de.user_text}>
                                        <img src='/img/detail/user_icon.png' />
                                        <p>자룡님은바보</p>
                                    </div>
                                    <span>[2023.10.12]</span>
                                </div>
                            </div>
                        </li>
                        <li className={de.review_list}>
                            <div>
                                <p className={de.review_text}>내가 팬더몬 만나봤는데 푸바오보다 자기가 낫다하더라</p>
                                <div>
                                    <div className={de.user_text}>
                                        <img src='/img/detail/user_icon.png' />
                                        <p>자룡님은바보</p>
                                    </div>
                                    <span>[2023.10.12]</span>
                                </div>
                            </div>
                        </li>
                        <li className={de.review_list}>
                            <div>
                                <p className={de.review_text}>내가 팬더몬 만나봤는데 푸바오보다 자기가 낫다하더라</p>
                                <div>
                                    <div className={de.user_text}>
                                        <img src='/img/detail/user_icon.png' />
                                        <p>자룡님은바보</p>
                                    </div>
                                    <span>[2023.10.12]</span>
                                </div>
                            </div>
                        </li>
                        <li className={de.review_list}>
                            <div>
                                <p className={de.review_text}>내가 팬더몬 만나봤는데 푸바오보다 자기가 낫다하더라</p>
                                <div>
                                    <div className={de.user_text}>
                                        <img src='/img/detail/user_icon.png' />
                                        <p>자룡님은바보</p>
                                    </div>
                                    <span>[2023.10.12]</span>
                                </div>
                            </div>
                        </li>
                        <li className={de.review_list}>
                            <div>
                                <p className={de.review_text}>내가 팬더몬 만나봤는데 푸바오보다 자기가 낫다하더라</p>
                                <div>
                                    <div className={de.user_text}>
                                        <img src='/img/detail/user_icon.png' />
                                        <p>자룡님은바보</p>
                                    </div>
                                    <span>[2023.10.12]</span>
                                </div>
                            </div>
                        </li>
                        <li className={de.review_list}>
                            <div>
                                <p className={de.review_text}>내가 팬더몬 만나봤는데 푸바오보다 자기가 낫다하더라</p>
                                <div>
                                    <div className={de.user_text}>
                                        <img src='/img/detail/user_icon.png' />
                                        <p>자룡님은바보</p>
                                    </div>
                                    <span>[2023.10.12]</span>
                                </div>
                            </div>
                        </li>
                        <li className={de.review_list}>
                            <div>
                                <p className={de.review_text}>내가 팬더몬 만나봤는데 푸바오보다 자기가 낫다하더라</p>
                                <div>
                                    <div className={de.user_text}>
                                        <img src='/img/detail/user_icon.png' />
                                        <p>자룡님은바보</p>
                                    </div>
                                    <span>[2023.10.12]</span>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className={de.Evolution_process}>
                    <div className={de.prev}>
                        <div>
                            <img src={'/img/detail/Evolution_process.png'} />
                            <span>이전진화</span>
                        </div>
                        <ul>
                            <li className={de.Evolution_list}>
                                <div className={de.Evolution_data}>
                                    <div className={de.picture}>
                                        <img src={'/img/detail/digi_box.png'} />
                                        <div className={de.digimon}>
                                            <img src={'/img/detail/sample.png'} className={de.digi_picture} />
                                            <p>
                                                <img src={'/img/detail/mask.png'} className={de.mask} />
                                            </p>
                                        </div>
                                    </div>
                                    <div className={de.digi_name}>
                                        <img src={'/img/detail/name_box.png'} />
                                        <span>용가리몬</span>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className={de.next}>
                        <div>
                            <img src={'/img/detail/Evolution_process.png'} />
                            <span>다음진화</span>
                        </div>
                        <ul>
                            <li className={de.Evolution_list}>
                                <div className={de.Evolution_data}>
                                    <div className={de.picture}>
                                        <img src={'/img/detail/digi_box.png'} />
                                        <div className={de.digimon}>
                                            <img src={'/img/detail/sample.png'} className={de.digi_picture} />
                                            <p>
                                                <img src={'/img/detail/mask.png'} className={de.mask} />
                                            </p>
                                        </div>
                                    </div>
                                    <div className={de.digi_name}>
                                        <img src={'/img/detail/name_box.png'} />
                                        <span>용용가리몬이에용</span>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

    )
}
