import { qe } from '../../db';

export async function GET(req) {
    let getNum = req.nextUrl.searchParams.get('id')
    let data = await qe(`SELECT num,path,answer,an_id,an_icon,an_nick from dm_borad where num=${getNum}`);
    return Response.json(data);
}

export async function POST(req) {
    const init = await req.json();
    await qe(`
        UPDATE dm_borad 
        set an_id = '${init.wr_id}',
            an_icon= '${init.wr_icon}',
            an_nick= '${init.wr_nick}'
        where num =${init.bo_id} 
    `);
    return Response.json([]);
}