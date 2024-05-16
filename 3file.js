const fs=require('fs');
const http=require('http')
const refer=require('./2file.js');
const { NOTFOUND } = require('dns');
const server=http.createServer((req,res)=>{
    if(req.url=='/students/login'){
        res.write("student logged in")
        res.end()
    }
    else if(req.url=='/students/display'){
        res.write(JSON.stringify(refer.person))
        res.end()
    }
})
port=4000
server.listen(port)
console.log(`server is listening on portnumber :${port}`)
