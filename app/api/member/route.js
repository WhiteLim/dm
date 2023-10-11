var mysql= require('mysql');
var connection = mysql.createConnection({
    host     : process.env.NEXT_PUBLIC_HOST,
    user     : process.env.NEXT_PUBLIC_USER,
    password : process.env.NEXT_PUBLIC_PASS,
    database : process.env.NEXT_PUBLIC_DB,
    port:'3306'
});

connection.connect();
async function qe(str,value){
    return await new Promise((rev,rej)=>{
        connection.query(str,value, function (error, results) {
            rev(results);
        });
    })
}

export async function GET() {
    let data = await qe('SELECT * from dm_member');
    return Response.json(data);
}

export async function POST(req) {
    let datacheck;
    const insert = await req.json();
    let data = await qe(`SELECT * from dm_member where mb_id = ${insert.u_id}`);
    if(data.length == 0){
        console.log(data);
        datacheck = false;
        let at = [datacheck,insert.u_id]
        return Response.json(at);
    } else {
        datacheck = true;
        return Response.json(datacheck);
    }
}