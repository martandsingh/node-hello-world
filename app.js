const http = require('http')
const port=process.env.PORT || 3000

http.createServer((req, res) => {
    console.log(req.url)
    if(req.url === '/'){
        res.write("Hello World From Node Js By martand singh")
        res.end();
    }
    else if(req.url === '/cicd'){
        res.write('Welcome to Azure CI CD pipeline - Updated')
        res.end()
    }
}).listen(port, () =>{
    console.log("Server running on 3000...")
})
