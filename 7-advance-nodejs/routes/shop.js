const express = require('express');
const router = express.Router();
const path = require('path')
const rootdir = require('../utils/path.js');

router.get('/shop',(req,res,next)=>{
    res.sendFile(path.join(rootdir, 'views','shop.html'))
});

router.post('/shop',function(req,res){
    console.log(req.body.product);
});

module.exports= router;