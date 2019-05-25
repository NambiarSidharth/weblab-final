var express = require('express')
var app = express()
var path=require("path")
var bodyParser = require("body-parser");
var expressValidator= require('express-validator')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}))
app.use(expressValidator())
app.get('/',function(req,res){
  res.sendfile(path.join(__dirname,"/index.html"))
})

app.post('/addData',function(req,res){
  var patt=/[0-9]+/

  req.checkBody('name','field empty').notEmpty()
  req.assert('salary','not proper format').matches(patt)
  req.assert('name','not string').isAlpha()
  var errors=req.validationErrors()
  console.log(errors)
  if(errors){
    res.status(400).json(errors)
  }else{
    res.status(200).json({message:"done"})
  }

})

app.listen(3000,function(){
  console.log(3000)
})
