const express= require("express");
var app= express();
var mongoose = require("mongoose");
var ejs = require('ejs');
const bodyParser = require("body-parser")


mongoose.connect("mongodb://localhost/mydb")
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

app.set('view engine', 'ejs');

var blogSchema = new mongoose.Schema({
    title:String,
    image:String,
    body:String,
    created: { type:Date, default:Date.now }
});
var blog = mongoose.model("blog", blogSchema);

app.get("/",function(req,res){
    res.redirect("/blogs");
});
app.get("/blogs",function(req,res){
    blog.find({},function(err,blogs){
        if(err){
            console.log(err)
        }
        else{
            res.render("index.ejs", {blogs:blogs}); 
        }
    });
});
app.get("/blogs/new",function(req,res){
    res.render("new.ejs");
});

app.listen("3000",function(req,res){
    console.log("Server started");
});