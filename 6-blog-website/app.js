const express= require("express");
var app= express();
var mongoose = require("mongoose");
var ejs = require('ejs');
var path=require("path");
const bodyParser = require("body-parser");
const { request } = require("http");


mongoose.connect("mongodb://localhost/mydb")
app.use(express.static(path.join(__dirname,'public')));
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

app.post("/blogs",function(req,res){
    var title = req.body.title;
    var image = req.body.image;
    var about = req.body.body;
    var b = {
        title: title,
        image: image,
        body:about
    };
    blog.create(b,function(err,newblog){
        if(err){
            res.redirect("/blogs/new");
        }
        else{
            res.redirect("/blogs");
        }
    });
});

app.listen("3000",function(req,res){
    console.log("Server started");
});
