var express = require('express');
var bodyParser = require("body-parser");
var app=express();
var mongoose= require("mongoose");
mongoose.connect('mongodb://user:vibhuti.mishra09@gmail.com:27017/mydb', { useNewUrlParser: true })


app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine","ejs");

// Schema Setup
var campSchema = new mongoose.Schema(
    {
        name: String,
        image: String,
        description: String
    }
);
var camp = mongoose.model("camp",campSchema);

/* camp.create(
    {
        name:"salmon creet",
        image:"https://www.photosforclass.com/download/px_4268158",
        description: "Its a famous Creet in Miami"
    },function(err,campground){
        if(err){
            console.log("Error");
        }
        else{
            console.log("Item added");
            console.log(campground);
        }
    }
); */


var campArray=[
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
    // get all the campgrounds from database
    camp.find({},function(err,campgrounds){
        if (err){
            console.log("error");
        }
        else{
            res.render("index",{campgrounds:campgrounds});
        }
    });   
});

app.get("/campgrounds/form",function(req,res){
    res.render("form.ejs")
});
app.post("/campgrounds",function(req,res){
     var name=req.body.name;
     var url=req.body.image;
     var desc= req.body.descript;
     var b={name:name, image:url, description:desc}
     camp.create(b,function(err,newElement){
         if (err){
            console.log(err);
         }
         else{
            res.redirect("/campgrounds");
         }
     }); 
});

// shows more info about any campground
app.get("/campgrounds/:id",function(req,res){
    camp.findById(req.params.id,function(err, moreinfocampground){
        if (err){
            console.log(err);
        }
        else{
            res.render("show",{campgrounds:moreinfocampground});
        }
    });
});


app.listen("3000",function(req,res){
 console.log("SERVER STARTED");
});