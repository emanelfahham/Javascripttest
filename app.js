const express = require("express"),
      path    = require("path"),
      bodyParser = require("body-parser"),
      mongoose = require("mongoose"),
      session = require('express-session'),
      passport = require("passport"),

      Article  = require('./models/article'),
      config    = require('./config/database'),

      app     = express();

mongoose.connect('mongodb://localhost/testapp', { useNewUrlParser: true });
let db = mongoose.connection;


// check for db errors
db.on('error', function(err){
    console.log(err);
});
// Check connection
db.once('open', function(){
    console.log("Connected to Mongodb");
});



// Load view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(express.static(path.join(__dirname, 'public')));

// Middleware fo express-session
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
}))

// passport config
app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')(passport);


app.use(function (req, res, next) {
    res.locals.messages = require('express-messages')(req, res);
    next();
});


// Index Route
app.get("/", function(req, res){
    Article.find({}, function(err, articles){
        if(err){
            console.log(err);
        } else{
        res.render("index", {
            title: "articles",
            articles: articles
        });
    }
    });
    
});


// Route files

let articles = require('./routes/articles');
let users = require('./routes/user');
app.use('/articles', articles);
app.use('/users', users);



// Server started

app.listen(3000, function(){
    console.log("Server Started!");
});
