const http=require("http");


const server=http.createServer((req,res)=>{

    // console.log(req.url,req.method,req.headers)
    const url=req.url
    if(url=="/"){
        console.log("Vikram")
        res.write("<h1>Vikram</h1>")
        res.end()    
    }
    else if(url=="/home"){
        res.write("<h1> Welcome Home </h1>")
        res.end()  

    }
    else if(url=="/about"){
        res.write("<h1> About Us Page </h1>")
        res.end()  

    }
    else if(url=="/node"){
        res.write("<h1> Welcome to NodeJS Project </h1>")
        res.end()  
    }


    

})
server.listen(4000)
// console.log("Server is running successfully on port ")



