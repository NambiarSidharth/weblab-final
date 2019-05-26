var express = require("express")
var app = express()


app.get("/",function(req,res){
  res.sendFile(__dirname+"/home.html")
})

app.get("/cse",function(req,res){
  res.sendFile(__dirname+"/cse.html")
})

app.get("/ise",function(req,res){
  res.sendFile(__dirname+"/ise.html")
})

app.get("/ece",function(req,res){
  res.sendFile(__dirname+"/ece.html")
})

app.listen(5000,function(){
  console.log("listening on 5000")
})
