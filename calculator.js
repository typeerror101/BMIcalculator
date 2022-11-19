const express = require("express");
const app = express();
const bodyParse = require("body-parser");

app.use(bodyParse.urlencoded({extended:true}));

app.get("/",function(req,res){
  res.sendFile(__dirname+"/index.html");
});
app.get("/bmiCalculator",function(req,res){
  res.sendFile(__dirname+"/bmiCalculator.html");
});

app.post("/bmiCalculator",function(req,res){
  var height = parseFloat(req.body.height);
  var weight = parseFloat(req.body.weight);
  var bmi = weight/(height*height);

  res.send("The bmi is "+bmi);
});

app.post("/",function(req,res){

  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);
  var sum = num1 + num2 ;

  res.send("Thanks for pressing me the answer is "+sum);
});
app.listen(3000,function(){
  console.log("Calculator server started and is running on port 3000");
});
