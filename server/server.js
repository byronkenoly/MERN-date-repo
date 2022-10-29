const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const app = express();

mongoose.connect('mongodb://localhost:27017/')

app.get('/', (req, res) => {
    res.status(200).send();
});

let port = process.env.PORT || 4000;

app.listen(port, (err) => {
    if (err)
    {
        console.log(err);
    }
    console.info('Server started on port %s.', port)
});
