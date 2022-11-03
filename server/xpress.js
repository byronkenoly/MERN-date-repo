const express = require('express');

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const compress = require('compression');
const cors = require('cors');
const helmet = require('helmet');
const userRoutes = require('./routes/user.routes');
const authRoutes = require('./routes/auth.routes');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(compress());
app.use(helmet());
app.use(cors());

//mounting of routes
app.use('/', userRoutes);
app.use('/', authRoutes);

/**
 * error catching code added after the routes are mounted and before app is exported
 * 
 * express-jwt throws an error named UnauthorizedError when a token can't be validated
 * for some reason
 */
app.use((err, req, res, next) => {
    if (err.name === 'UnauthorizedError')
    {
        res.status(401).json({
            "error": err.name
        });
    } else if (err)
    {
        res.status(400).json({
            "error": err.name
        });
        console.log(err);
    }
})

module.exports = app;