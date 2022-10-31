import app from './xpress';

const path = require('path');
const mongoose = require('mongoose');
const mongoDB = 'mongodb://localhost:27017/';

//setting up default mongoose connection
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });

//getting the default connection
const db = mongoose.connection;

//bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, "MongoDB connection error:"));

app.get('/', (req, res) => {
    res.json({
        "user": ["byron", "nodemon"]
    })
});

let port = process.env.PORT || 4000;

app.listen(port, (err) => {
    if (err)
    {
        console.log(err);
    }
    console.info('Server started on port %s.', port)
});