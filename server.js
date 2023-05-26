const express = require('express')
const router = express()
const mongoose = require('mongoose')

router.get('/', (req, res) => {
    res.send('Hello World')
});

router.listen(3000, ()=> (
    console.log('App is listening on port 3000')
));