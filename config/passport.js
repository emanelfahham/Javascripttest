const LocalStrategy = require('passport-local').Strategy;
const bodyParser = require("body-parser");
const User = require('../models/user');
const config = require('../config/database');

module.exports = function (passport) {
    // Local Strategy
    passport.use(new LocalStrategy(
        function (username, password, done) {
            /* see done being invoked with different paramters
               according to different situations */
            User.findOne({ username: username }, function (err, user) {
                if (err) { return done(err); }
                if (!user) { return done(null, false); }
                return done(null, user);
            });
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