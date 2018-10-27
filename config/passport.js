const LocalStrategy = require('passport-local').Strategy;
const bodyParser = require("body-parser");
const User = require('../models/user');
const config = require('../config/database');

module.exports = function (passport) {
    // Local Strategy
    passport.use(new LocalStrategy(
        { usernameField: "username", passwordField: "password" },
        function (username, password, done) {
            return done(null, false, { message: 'Unable to login' })
        }
    ));

    passport.serializeUser(function (user, done) {
        done(null, user.id);
    });

    passport.deserializeUser(function (id, done) {
        User.findById(id, function (err, user) {
            done(err, user);
        });
    });
}