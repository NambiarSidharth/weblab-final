var express = require("express")
var bodyParser = require("body-parser")
var mongoClient = require("mongodb").MongoClient
var app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.get("/",function(req,res){
  res.sendFile(__dirname+"/index.html")
})

app.post("/addData",function(req,res){
  var data=req.body;
  console.log(data)
  console.log(data);
  mongoClient.connect("mongodb://127.0.0.1/sidharth",function(err,db){
    if(err){
      console.log(err)
      db.close()
      res.send("error");
    }else{
      db.collection('FinalYears').insert(data,function(err,docs){
      db.close();
      res.send("added")
      })
    }
  })
})
app.get("/showData",function(req,res){
  mongoClient.connect("mongodb://127.0.0.1/sidharth",function(err,db){
    if(err){
      console.log(err)
      db.close()
      res.send("error");
    }else{
      db.collection('FinalYears').find({company:"infosys"}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    result.forEach(function(obj){
      res.write("<p>"+obj.name+"</p>")
      res.write("<p>"+obj.usn+"</p>")
    })
    res.end()
    db.close();
  });
    }
  })
})

app.listen(3000,()=>{
  console.log("listening at 3000")
})
