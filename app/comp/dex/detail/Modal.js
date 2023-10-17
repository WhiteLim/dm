"use client"
import React, { useEffect, useRef, useState } from 'react'
import de from './modal.module.scss'

export function Modal(props) {
    // 전달받은 state 함수
    const { clickModal, showModal } = props;
    return (
        <section className={de.modal_page}>
            <div className={de.modal_p}>
                <div className={de.modal}>
                    <div>
                        <h3>팬더몬</h3>
                        <p>팬더의 모습을 한 퍼펫형 디지몬. 무표정, 무관심의 무뚝뚝한 성격으로 아예 귀여운 면이 없다. 자신을 독불장군이라고 생각하지만 같은 용모에서 인기인인 퍼펫몬을 은밀하게 부러워하고 있다. 하지만 의외의 실력을 가져서 간섭을 하는 상대는 공격을 하려다 도리여 당하게 된다. 개체수가 적어 좀처럼 보기가 드물다. 필살기는 손의 안쪽에 있는 손톱으로 공격하는 "애니멀 네일".</p>
                    </div>
                    <span onClick={clickModal}>창닫기</span>
                </div>
            </div>
        </section>
    )
}
export function Modal2(props) {
    const { clickModal2, showModal2 } = props;
    const elUl = useRef();
    const [openLiIndex, setOpenLiIndex] = useState(null);

    const handleLiClick = (index) => {
        if (openLiIndex === index) {
            setOpenLiIndex(null); // 클릭한 `li`가 이미 열려 있는 경우, 닫습니다.
        } else {
            setOpenLiIndex(index); // 클릭한 `li`를 엽니다.
        }
    };

    useEffect(() => {
        const liElements = elUl.current.querySelectorAll('li');
        liElements.forEach((li, index) => {
            li.addEventListener('click', () => {
                handleLiClick(index);
            });
        });

        return () => {
            liElements.forEach((li) => {
                li.removeEventListener('click', handleLiClick);
            });
        };
    }, []);

    return (
        <section className={de.modal_page_skill}>
            <div className={de.modal_p}>
                <div className={de.modal}>
                    <div className={de.more}>
                        <h3>SKILL LIST</h3>
                        <ul className={de.skill_list} ref={elUl}>
                            <li>
                                <p>Ultra Tornado</p>
                                <div className={de.skill_description} style={{ display: openLiIndex === 0 ? 'block' : 'none' }}>
                                    <span>Throws a pair of fireballs from its gauntlets.</span>
                                </div>
                            </li>
                            <li>
                                <p>Ultra Tornado</p>
                                <div className={de.skill_description} style={{ display: openLiIndex === 1 ? 'block' : 'none' }}>
                                    <span>Throws a pair of fireballs from its gauntlets.</span>
                                </div>
                            </li>
                            <li>
                                <p>Ultra Tornado</p>
                                <div className={de.skill_description} style={{ display: openLiIndex === 2? 'block' : 'none' }}>
                                    <span>Throws a pair of fireballs from its gauntlets.</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <p onClick={() => { clickModal2() }}>창닫기</p>
                </div>
            </div>
        </section>
    );
}

