import { qe } from '../db';

export async function GET() {
    let data = await qe('SELECT * from dm_member');
    return Response.json(data);
}

export async function POST(req) {
    let datacheck;
    const insert = await req.json();
    let data = await qe(`SELECT * from dm_member where mb_id = ${insert.u_id}`);
    if(data.length == 0){
        datacheck = false;
        return Response.json(datacheck);
    } else {
        datacheck = true;
        return Response.json(datacheck);
    }
}