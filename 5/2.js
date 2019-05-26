var express = require("express")
var bodyParser = require("body-parser")
var mongoClient = require("mongodb").MongoClient
var app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.get("/",function(req,res){
  res.sendFile(__dirname+"/index.html")
})

app.get("/update",function(req,res){
  res.sendFile(__dirname+"/update.html")
})
app.post("/updateData",function(req,res){
  var data=req.body
  mongoClient.connect("mongodb://127.0.0.1/sidharth",function(err,db){
    if(err){
      console.log(err)
      db.close()
      res.send("error");
    }else{
      db.collection('data1').update({'name':data.name},{$set:{'grade':data.grade}},function(err,docs){
        if(!err){
          db.collection('data1').find({}).toArray(function(err, result) {
        if (err) throw err;
        console.log(result);
        result.forEach(function(obj){
          res.write("<p>"+obj.name+"</p>")
        })
        res.end()
        db.close();
      });
    }else{
      res.send("some error")
    }
      })
    }
  })

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
      db.collection('data1').insert(data,function(err,docs){
      db.close();
      res.send("added")
      })
    }
  })
})


app.listen(3000,()=>{
  console.log("listening at 3000")
})
