'use strict';

const mongoose = require('mongoose');
const User = mongoose.model('User');

exports.list_all_users = function(req, res) {
    User.find({}, (err, user) => {
        if(err) {
            res.send(err);
        } else {
            res.josn(user);
        };
    });
};

exports.ceart_a_user = function(req, res) {
    let newUser = new User(req.body);
    newUser.save((err, user) => {
        if(err)
            res.send(err)
        res.josn(user)
    })
};

exports.read_a_user = function(req, res) {
    User.findById(req.parmas.userID, (err, user) => {
        if(err)
            res.send(err)
        res.josn(user)
    })
}
