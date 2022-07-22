
const http=require('http')
const url=require('url')
const mysql=require('mysql')

// Task 2
http.createServer((request,response)=>{
    console.log('server works')
    let urlRequest=url.parse(request.url, true)
    if (request.method==='GET' && urlRequest.query.test==='2' ){
        //console.log(process.pid)
        const conn = mysql.createConnection({
            host: "itgid.mysql.tools",
            user: "itgid_nodetest",
            database: "itgid_nodecourse",
            password: "A16gAi50YiBO"
        });// create connection
        conn.connect(function (err) {
            if (err) {
                return console.error("Ошибка: " + err.message);
            }
            else {
                console.log("Подключение к серверу MySQL успешно установлено");
            }
        });// open connection
        let query="SELECT firstname FROM user";
        response.end(JSON.stringify(query))
        conn.end( err => {
            if (err) {
                console.log(err);
                return err;
            }
            else {
                console.log('Database ----- Close');
            }
        });// close connection
    }
    if (request.method==='GET' && urlRequest.query.test==='3'&& urlRequest.query.mail==='%'){
        conn.connect(function (err) {
            if (err) {
                return console.error("Ошибка: " + err.message);
            }
            else {
                console.log("Подключение к серверу MySQL успешно установлено");
            }
        });// open connection
        let query="SELECT * FROM user";
        if(query.id.email===mail){
            console.log(id)
        }else{
            console.log('0')
        }
        conn.end( err => {
            if (err) {
                console.log(err);
                return err;
            }
            else {
                console.log('Database ----- Close');
            }
        });// close connection

        console.log('якась херня')
    }
    if (request.method==='GET' && urlRequest.query.test==='5'&& urlRequest.query.mail==='%' ){

    }
    else{
        console.log('enter valid data')
        response.end('enter valid number')
    }
}).listen(3000)