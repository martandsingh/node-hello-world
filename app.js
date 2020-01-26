const http = require('http')


http.createServer((req, res) => {
    console.log(req.url)
    if(req.url === '/'){
        res.write("Hello World From Node Js")
        res.end();
    }
    else if(req.url === '/cicd'){
        res.write('Welcome to Azure CI CD pipeline')
        res.end()
    }
}).listen(3000, () =>{
    console.log("Server running on 3000...")
})