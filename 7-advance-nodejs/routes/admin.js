const express = require('express')
const path = require('path')
const rootdir = require('../utils/path.js')
const router = express.Router();

router.get('/',(req,res,next)=>{
    res.sendFile(path.join(rootdir, 'views','admin.html'))
})

module.exports=router;