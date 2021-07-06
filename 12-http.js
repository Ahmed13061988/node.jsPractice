const http = require('http')

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.write('Hello to Home page')
        res.end()
    }
    if(req.url === '/about'){
        res.write("this is the about page")
        res.end()
    }
    res.write(`
    <h1>Sorry no page availabe</h1>
    <a href = "/"> backhome </a>`)
    res.end()
}); 
server.listen(3000); 

// var http = require('http')

// var server = http.createServer(function(request, response){
//     response.writeHead(200, {'Content-Type':'text/html'}); 
//     response.write("<html><body><h1>Hello</h1></body></html>")
//     response.end()
// })
// server.listen(3000); 