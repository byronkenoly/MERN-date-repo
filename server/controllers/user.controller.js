const User = require('../models/user.model');
const extend = require('lodash/extend');

/**
 * create is an asynchronous function allowing us to use await with
 * user.save() which returns a Promise
 * 
 * async/await was an addition in es8
 * 
 * for controller functions that handle asynchronous behaviour such as
 * accessing the database, we use async/await syntax to implement them
 */
const create = async (req, res) => {
    const user = new User(req.body);
    try
    {
        await user.save();
        return res.status(200).json({
            message: "Successfully signed up!"
        })
    } catch (err) {
        return res.status(400).json({
            error: "error creating user" //not supposed to be here
        })
    }
}

const list = async (req, res) => {
    try
    { 
        /**
         * Commands are run on a specific collection
         * find command gets all documents on a specific collection
         * 
         * select specifies which document fields to be included
         */
        let users = await User.find().select('first_name last_name email birthday updated created');

        //returns  list of users as json objects in an array to requesting client
        res.json(users);
    } catch (err) {
        return res.status(400).json({
            
        })
    }
}

/**
 * userById controller function querys the db and loads matching user's details
 * 
 * if a matching user is found in database, user object is appended to req
 * object in the profile key
 * 
 * next() middleware propagates control to the next relevant controller function
 */
const userByID = async (req, res, next, id) => {
    try
    {
        let user = await User.findById(id);
        if (!user)
        {
            return res.status(400).json({
                error: "User not found"
            })
        }
        req.profile = user;
        next();
    } catch (err) {
        return res.status(400).json({
            error: "Could not retrieve user"
        })
    }
}

/**
 * read function retrieves user details from req.profile(defined from userByID function)
 * sensitive data has been set to undefined
 */
const read = (req, res) => {
    req.profile.hashed_password = undefined;
    req.profile.salt = undefined;
    return res.json(req.profile);
}

const update = async (req, res) => {
    try
    {
        let user = req.profile;
        user = extend(user, req.body);
        user.updated = Date.now();
        await user.save();

        user.hashed_password = undefined;
        user.salt = undefined;
        res.json(user);
    } catch (err) {
        return res.status(400).json({
            
        })
    }
}

const remove = async (req, res) => {
    try
    {
        let user = req.profile;
        let deletedUser = await user.remove();

        deletedUser.hashed_password = undefined;
        deletedUser.salt = undefined;
        res.json(deletedUser);
    } catch (err) {
        return res.status(400).json({

        });
    }
}

module.exports = {
    create,
    list,
    userByID,
    read,
    update,
    remove
}