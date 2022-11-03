const User = require('../models/user.model');
const jwt = require('jsonwebtoken');

//express-jwt checks whether the requesting user is signed in and has valid JWT when
//protected route is accessed
const { expressjwt: expressJwt } = require('express-jwt');
const config = require('../../config/config');

/**
 * POST request object receives email and password in req.body
 * email is used to retrieve matching user from the db
 * password authentication method defined in User schema is used to verify password
 * 
 * if password is successfully verified, jwt module is used to generate a signed
 * jwt using a secret key and user's _id value
 * 
 * the signed jwt is returned to authenticated client along with user details
 */
const signin = async (req, res) => {
    try
    {
        let user = await User.findOne({ "email": req.body.email})
        if (!user)
        {
            return res.status(401).json({ error: "User not found"});
        }

        if (!user.authenticate(req.body.password))
        {
            return res.status(401).send({ error: "Email and password don't match." });
        }

        const token = jwt.sign({ _id: user._id}, config.jwtSecret);

        // pam - cookie name
        res.cookie('pam', token, { expire: new Date() + 9999 });

        return res.json({
            token,
            user: {
                _id: user._id,
                name: user.name,
                email: user.email
            }
        });
    } catch (err){
        return res.status(401).json({ error: "Could not sign in"});
    }
}

const signout = (req, res) => {
    res.clearCookie("pam");
    return res.status(200).json({ message: "signed out"})
}

const requireSignin = expressJwt({
    secret: config.jwtSecret,
    algorithms: ["HS256"],
    userProperty: 'auth'
});

const hasAuthorization = (req, res, next) => {
    const authorized = req.profile && req.auth && req.profile._id == req.auth._id;

    if (!(authorized))
    {
        return res.status(403).json({
            error: "User not authorized"
        })
    }
    next();
}

module.exports = {
    signin,
    signout,
    requireSignin,
    hasAuthorization
}