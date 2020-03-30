const express = require('express');
const app = express();
const router = require('./route');

app.use('/', router);
app.listen(3100,function(){
   console.log("server running");
});