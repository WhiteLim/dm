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
    //connection.end();
}

export async function GET() {
    let data = await qe('SELECT * from dm_member');
    return Response.json(data);
}