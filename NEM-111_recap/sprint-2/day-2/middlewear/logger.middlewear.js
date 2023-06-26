const fs=require("fs")
const logger=((req,res,next)=>{
    const startTime=new Date().getTime()
    next()
    const endTime=new Date().getTime()
    fs.appendFileSync("./text.txt",`The clint visited ${req.url} route and make a ${req.method} at ${Date()} \n`)
    console.log(endTime-startTime)
    })
    module.exports={logger}