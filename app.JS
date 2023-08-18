const http=require("http");


const server=http.createServer((req,res)=>{
    if(req.url=="/"){
        console.log("Vikram")
        res.write("<h1>Vikram</h1>")
        
    }
    

})
server.listen(4000)
console.log("Server is running successfully on port ")

