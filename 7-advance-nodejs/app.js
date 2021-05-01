const express = require('express')
const bodyParser = require('body-parser');
const adminPage = require('./routes/admin.js')
const shopPage = require('./routes/shop.js')
const path = require('path');
const rootdir = require('./utils/path.js')

const app= express();
app.use(express.static(path.join(__dirname,'public')));

app.use(bodyParser.urlencoded({extended:true}));
app.use(adminPage)
app.use(shopPage)


 
app.listen(3000)