const http = require('http');
const fs = require('fs')
const port =1234;
const requrestHandler=(req,res)=>{
    console.log(req.url);
    let filePath ="";
    switch(req.url){
        case '/':
            filePath = './Index.html'
            break;
        case '/about':
            filePath ='./About.html'
            break;
        case '/contact':
            filePath ='./Contact.html'
            break;
        case '/product':
            filePath ='./Product.html'
            break;
         default:
                filePath = './error.html'
                break;
    }
    let data = fs.readFileSync(filePath);
    res.end(data);
    // res.setHeader('Content-type','text/html');
    // res.write('<h2>hello</h2>');
    // res.end();   
}
const server = http.createServer(requrestHandler);
server.listen(port,(err)=>{
    if(err){
        console.log(`server is not start:${err}`);
        return false;
    }else{
        console.log(`server start at http://localhost:${port}`);
        
    }
})