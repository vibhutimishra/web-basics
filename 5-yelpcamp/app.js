var express = require('express');
var bodyParser = require("body-parser");
var app=express();

app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine","ejs");

var camp=[
    {name:"salmon creet",image:"https://www.photosforclass.com/download/px_4268158"},
    {name:"Granite Hill", image:"https://www.photosforclass.com/download/pb_2512944"},
    {name:"salmon creet",image:"https://www.photosforclass.com/download/px_4268158"},
    {name:"Granite Hill", image:"https://www.photosforclass.com/download/pb_2512944"},
    {name:"salmon creet",image:"https://www.photosforclass.com/download/px_4268158"},
    {name:"Granite Hill", image:"https://www.photosforclass.com/download/pb_2512944"},
    {name:"salmon creet",image:"https://www.photosforclass.com/download/px_4268158"},
    {name:"Granite Hill", image:"https://www.photosforclass.com/download/pb_2512944"},
    {name:"salmon creet",image:"https://www.photosforclass.com/download/px_4268158"},
    {name:"Granite Hill", image:"https://www.photosforclass.com/download/pb_2512944"},
];

app.get("/",function(req,res){
    res.render("landing.ejs");
});

app.get("/campgrounds",function(req,res){
     res.render("campground",{campgrounds:camp});
});

app.get("/campgrounds/form",function(req,res){
    res.render("form.ejs")
});
app.post("/campgrounds",function(req,res){
     var name=req.body.name;
     var url=req.body.image;
     var b={name:name, image:url}
     camp.push(b);
     res.redirect("/campgrounds");
});

app.listen("3000",function(req,res){
 console.log("SERVER STARTED");
});