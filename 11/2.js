var express = require("express")
var bodyParser = require("body-parser")
var mongoClient = require("mongodb").MongoClient
var app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(express.static('public'))
app.get("/",function(req,res){
  res.sendFile(__dirname+"/public/index.html")
})

app.get("/insert",function(req,res){
  res.sendFile(__dirname+"/public/insert.html")
})

app.post("/addData",function(req,res){
  var data=req.body;
  mongoClient.connect("mongodb://127.0.0.1/student",function(err,db){
    if(err){
      console.log(err)
      db.close()
      res.send("error");
    }else{
      db.collection('attendance').insert(data,function(err,docs){
      db.close();
      res.send("added")
      })
    }
  })
})

app.get("/view",function(req,res){
  res.sendFile(__dirname+"/public/view.html")
})

app.get("/getData",function(req,res){
  mongoClient.connect("mongodb://127.0.0.1/student",function(err,db){
    if(err){
      console.log(err)
      db.close()
      res.send("error");
    }else{
      db.collection('attendance').find({attendance:{$lt:75}}).toArray(function(err,docs){
        console.log(docs)
        db.close()
        res.end(JSON.stringify(docs))
      })
    }
  })
})
app.listen(3000,()=>{
  console.log("listening at 3000")
})
