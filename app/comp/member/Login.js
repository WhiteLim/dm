import axios from 'axios'
export async function user_get(){
    if (typeof window !== 'undefined') {
        const mb = localStorage.getItem('loginstate')
        let member = await axios.post(`/api/member/login?mb_id=${mb}`)
        return member.data[0];
    }
}

export async function my_rank(){
    if (typeof window !== 'undefined') {
        const mb = localStorage.getItem('loginstate')
        let rk = await axios.post(`/api/member/rank?mb_id=${mb}`)
        return rk.data;
    }
}

