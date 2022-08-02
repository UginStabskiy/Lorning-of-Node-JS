
const http=require('http');
const url=require('url');
const mysql=require('mysql');

http.createServer((request,response)=>{
    //console.log(process.pid)
    //console.log('server works')
   const conn = mysql.createConnection({
        host: "localhost",
        user: "root",
        database: "Nodeleson9",
        password: "angel"
    });//db config

   let urlRequest=url.parse(request.url, true)
    // Task 2
    if (request.method==='GET' && urlRequest.query.test==='2' ){
        conn.connect(function (err) {
            if (err) {
                return console.error("Ошибка: " + err.message);
            }
            else {
                console.log("Подключение к серверу MySQL успешно установлено");
            }
        });// create connection

        let query="SELECT firstname FROM user";
        conn.query(query, (err, result) =>{
            const arrOfNames=[];
            for(let i=0;i<result.length;i++){
                arrOfNames.push(result[i]['firstname']);
            }
            console.log(JSON.stringify(arrOfNames));
        });
        response.end("Oll WORK")

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
    // Task 3
    if (request.method==='GET' && urlRequest.query.test==='3') {
        conn.connect(function (err) {
            if (err) {
                return console.error("Ошибка: " + err.message);
            }
            else {
                console.log("Подключение к серверу MySQL успешно установлено");
            }
        });// create connection

        let query="SELECT email FROM user";
        conn.query(query, (err, result) =>{
            const arrOfemail=[];
            for(let i=0;i<result.length;i++){
                arrOfemail.push(result[i]['email']);
            }
            console.log(JSON.stringify(arrOfemail));
        });
        response.end("Task 3 WORK")

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
    // Task 4
    if (request.method==='GET' && urlRequest.query.test==='4'&& urlRequest.query.email){
        conn.connect(function (err) {
            if (err) {
                return console.error("Ошибка: " + err.message);
            }
            else {
                console.log("Подключение к серверу MySQL успешно установлено");
            }
        });// create connection
        let query=`SELECT id FROM user WHERE email='${urlRequest.query.email}'`;
        conn.query(query, (err, result) =>{
            if (result.length){
                console.log(result[0]['id'])
            }else{
                console.log(0)
            }
        });
        response.end("Task 4 WORK")
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
    // Task 5
    if (request.method==='GET' && urlRequest.query.test==='5'&& urlRequest.query.email){
        conn.connect(function (err) {
            if (err) {
                return console.error("Ошибка: " + err.message);
            }
            else {
                console.log("Подключение к серверу MySQL успешно установлено");
            }
        });// create connection
        let query=`SELECT id FROM user WHERE email like "${'%'+urlRequest.query.email+'%'}"`;//dont know
        conn.query(query,(err,result,field)=>{
            console.log(err);
            console.log(result);
            response.end(JSON.stringify(result))
        });
    }
}).listen(3003,()=>{
    console.log('server start work on port 3003')
})

//ввцувцувцувцувцу