var express = require("express")
var app = express()


app.get("/",function(req,res){
  res.sendFile(__dirname+"/home.html")
})

app.get("/register",function(req,res){
  res.sendFile(__dirname+"/register.html")
})

app.get("/contact",function(req,res){
  res.sendFile(__dirname+"/contact.html")
})

app.get("/announce",function(req,res){
  res.sendFile(__dirname+"/announce.html")
})

app.listen(5000,function(){
  console.log("listening on 3000")
})
