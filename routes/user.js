const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');


// Bring in User Model
let User = require('../models/user');
// Register Form
router.get('/register', function (req, res) {
    res.render('register');
});

// signup functionality Proccess
router.post('/register', function (req, res, next) {
var name = req.body.name;
var email = req.body.email;
var username = req.body.username;
var password = req.body.password;
    let newUser = new User({
        name: name,
        email: email,
        username: username,
        password: password
    });
    newUser.save(function (err) {
        if (err) {
            console.log(err);
            return res.render("register", { error: err.message });
        }
        passport.authenticate("local")(req, res, function () {
            res.redirect("/users/login");
        });
    });
});

    

// Login Form
router.get('/login', function (req, res) {
    res.render('login');
});

// Login Process
// Login Process
router.post('/login',  function(req, res, next) {
    passport.authenticate('local', {
        successRedirect: '/',
        failureRedirect: '/users/login',
    })(req, res, next);
});



// logout
router.get('/logout', function (req, res) {
    req.logout();
    res.redirect('/users/login');
});

module.exports = router;