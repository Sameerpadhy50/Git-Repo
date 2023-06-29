const express = require("express");
const app = express();
const StudentRoute = require("./routes/students.route");
const fs = require("fs");
const { logger } = require("./middlewear/logger.middlewear");

//Pre-Class assignment
// app.use((req,res,next)=>{
//     console.log("Hello From Middlewear")
// if(!req.query.apikey){
//     console.log(req.query)
//     res.send("Login Required")
// }

// next()
// console.log("Bye from MiddleWear")
// })

//app.use(logger)

app.get("/", (req, res) => {
  res.send("Home Page");
  console.log("This is Home Page");
});
// app.get("/search", (req, res) => {
//  const data=JSON.parse(fs.readFileSync("./db.json","utf-8"))
//  let result=data.movies.filter((ele)=>{return ele.name==req.query.movie})
//  if(result.length>0){
//   console.log(result)
//   res.send(result[0])
//  }
//  else{
//   console.log('Invalid Search')
//   res.send("NO Movie Found")
//  }
// //console.log(result)
//   // res.send("This is the search result");
// });

app.get('/search/:id',(req,res)=>{
  const id=req.params.id
  const data=JSON.parse(fs.readFileSync("./db.json","utf-8"))
  

  const ans=data.movies.filter((ele)=>{
    if(ele.id==id){
      return ele.name
    }
  })
  console.log(ans)
res.send("New Params")
})

app.use("/student", StudentRoute);
app.listen(8989, () => {
  console.log("Server Run ata 8989");
});
