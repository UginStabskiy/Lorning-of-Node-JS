const http = require('http');
const url = require('url');

const t2 = (req, res) => {

    let urlReq = url.parse(req.url, true)
    if(req.method === 'GET' && urlReq.query.p ==='70'){
        res.end('800');
        return true
    }else{
        console.log('enter nuw number for t2');
    }
}

const t3 = (req, res) => {
    let urlReq = url.parse(req.url, true)
    if(req.method === 'GET' && urlReq.query.p ==='80'){
        res.end('900');
        return true
    }else{
        console.log('enter nuw number for t3');
    }
}

const t4 = (req, res) => {
    let urlReq = url.parse(req.url, true)
    if(req.method === 'POST' && urlReq.query.h ==='80'){
        res.end('1100');
        return true
    }else{
        console.log('h не дорівнює 80');
    }
}

const t5 = (req, res) => {
    let urlReq = url.parse(req.url, true)
    if(req.method === 'POST' && urlReq.query.h ==='90'){
        res.end('1200');
        return true
    }else{
        console.log('h не дорівнює 90');
    }
}

http.createServer((req, res) => {
    console.log('server work');
    if (!t2(req, res) && !t3(req, res) && !t4(req, res) && !t5(req, res)){
        console.log("404")
        res.statusCode=404
        res.end('good bay');
    }
}).listen(3002);