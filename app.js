var express=require("express");
var app=express();
var path=require("path");

app.get("/",function(req,res){
    res.render("I a Vibhuti Mishra");
});

app.get("/fall/:thing",function(req,res){
   var thing=req.params.thing;
    res.render("home.ejs",{thing:thing});
});

app.use(express.static(path.join(__dirname,'public')));
app.get("/posts",function(req,res){
    var items=[
        {title:"post 1",author:"charlie"},
        {title:"Can you believe in ghost",author:"Annie"},
        {title:"puppy Love",author:"vinbs"}
    ];
    res.render("posts.ejs",{item:items})
});
app.listen("3000",function(req,res){
    console.log("server is listen ing");
});