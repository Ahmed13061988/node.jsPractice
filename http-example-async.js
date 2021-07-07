const http = require('http')

 const server = http.createServer((req, res)=>{
     console.log("request"); 
     res.end("Hello world")
 })

 server.listen(5000, ()=>{
     console.log("hello from the listen")
 })