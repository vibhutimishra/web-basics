const express= require("express");
var app= express();
var mongoose = require("mongoose");
const bodyParser = require("body-parser")


mongoose.connect("mongodb://localhost/restful-blog-app")
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

var blogSchema = new mongoose.Schema({
    title:String,
    image:String,
    body:String,
    created: { type:Date, default:Date.now }
});
var blog = mongoose.model("Blog", blogSchema);





app.listen("3000",function(req,res){
    console.log("Server started");
});