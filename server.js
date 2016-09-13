//Hello this is steven's app welcome!'

var express = require('express'),
    mongoose = require('mongoose'),
    path = require('path'),
    app = express(),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    ejs = require('ejs'),
    ejsLayouts = require('express-ejs-layouts'),
    logger = require('morgan')
    
    app.use(logger('dev'));
    app.use(bodyParser.urlencoded({extended:true}));
    app.set('view engine','ejs');
    app.engine('html',require('ejs').renderFile)
    app.use(express.static(path.join(__dirname,'public')));
    app.use(bodyParser.json());
    app.use(express.static('public'))

    var port = process.env.PORT || 3000

    //Routes

    app.get('/',function(req,res,next){
        res.sendFile(__dirname,'index.html')
    })

    app.get('/undefined',function(req,res,next){
        res.json({message:"You found the dank mem"})
    })

    app.listen(port,function(req,res,next){
        console.log("Now listening to " + port)
    })








    