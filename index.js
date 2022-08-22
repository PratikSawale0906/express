var express= require('express')
var app = express()
app.use(express.json())
var blogrouter=require("./blogrouter.js")
app.use("/blog",blogrouter)




/** 
 * var func1=function(req,res,next){
    console.log("fist fun")
    next()
}
var func2=function(req,res,next){
    console.log("second fun")
    next()
}
var func3=function(req,res,next){
    res.send("chaining over process")
}

app.get("/blog",[func1,func2,func3])
*/




// app.get("/blog/:blogname/:author", (req,res,next)=>{
//     var blogname=req.params.blogname
//     var author=req.params.author
//     console.log(blogname)
//     console.log(author)
//     next()   
// },(req,res)=>{
//     res.send("request processed")
// })




// app.get("/blog/:blogname/:author", function(req,res){
//     var blogname=req.params.blogname
//     var author=req.params.author
//     console.log(blogname)
//     console.log(author)

//     res.send(req.params)
// })



// app.post("/", function(req,res){
//     // var blogname=req.body.blogname
//     console.log(blogname)
//     res.send(req.params)
// })

// app.put("/",function(req,res){
//     // res.send("Put request processed")
//     console.log(req.body)
//     res.send("request received")
// })

// app.patch("/", function(req,res){
//     res.send("Patch request process")
// })

// app.delete("/",function(req,res){
//     res.send("delete request process")
// })

var server=app.listen(5055,function(){
    var host= server.address().address
    var port = server.address().port
    console.log("Server running on"+host+""+port)
})

