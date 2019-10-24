const express = require('express');
const router = express.Router();
const Message = require('../models/message');

router.get('/', function (req, res, next) {
    Message.find().then((data) => {
        res.send(data)
    }).catch(error => {
        next();
    });
})

router.post('/', function (req, res, next) {
    var message = new Message({
        content: req.body.content
    })

    message.save((err, result) => {
        if (err) {
            res.status(500).json({
                title: 'An error occured',
                error: err
            })
        }
        res.status(201).json({
            message: 'Message saved',
            obj: result
        })
    });
})

module.exports = router;