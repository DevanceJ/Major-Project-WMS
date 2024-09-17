const express = require('express');
const v1Router = express.Router();
const asyncHandler = require('express-async-handler');

v1Router.post('/add', asyncHandler(async (req, res) => {
    console.log(req.body);
    res.send('Hello from v1');
}));

v1Router.get('/get', asyncHandler(async (req, res) => {
    res.send('Hello from v1');
}
));

module.exports = v1Router;