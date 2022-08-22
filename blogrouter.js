var express=require('express')
var router= express.Router()

router.use((req,res,next)=>{
    console.log("rout initated")
    next()
})
router.get("/blogs",(req,res)=>{
    res.send("blog details accessed")
})
router.post("/blogs", (req,res)=>{
    res.send("blog added")
})

module.exports=router