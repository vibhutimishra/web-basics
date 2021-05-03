const path = require('path')
const rootdir = require('../utils/path.js');

exports.getProduct = (req,res)=>{
    res.sendFile(path.join(rootdir, 'views','shop.html'))
};

exports.postProduct = function(req,res){
    console.log(req.body.product);
    res.redirect('/shop');
};