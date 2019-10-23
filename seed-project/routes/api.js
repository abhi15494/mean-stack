const express = require('express');
const router = express.Router();
const User = require('../models/user'); 

router.get('/', function(req, res, next) {
    User.find().then((data) => {
        res.send(data)
    }).catch(error => {
        next();
    });
})

router.post('/message', function (req, res, next) {
    const email = req.body.email;
    const user = new User({
        firstName: 'Abhishek',
        lastName: 'Bro',
        password: 'Admin@123',
        email: email
    });
    user.save().then(data => {
        res.send({message: email + ' - saved'})
    }).catch(error => {
        res.status(400);
        res.send(error);
        next();
    })
});

module.exports = router;