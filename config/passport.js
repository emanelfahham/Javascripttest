const LocalStrategy = require('passport-local');
const User = require('../models/user');
const config = require('../config/database');
const bcrypt = require('bcryptjs');

module.exports = function (passport) {
    // Local Strategy
    passport.use(new LocalStrategy({
        usernameField: 'user[username]',
        passwordField: 'user[password]',
    }, (email, password, done) => {
        Users.findOne({ usernameField })
            .then((user) => {
                if (!user || !user.validatePassword(password)) {
                    return done(null, false, { errors: { 'email or password': 'is invalid' } });
                }

                return done(null, user);
            }).catch(done);
    }));

    passport.serializeUser(function (user, done) {
        done(null, user.id);
    });

    passport.deserializeUser(function (id, done) {
        User.findById(id, function (err, user) {
            done(err, user);
        });
    });
}