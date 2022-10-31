const User = require('../models/user.model');

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

        })
    }

}

const update = (req, res, next) => {

}

const remove = (req, res, next) => {

}

module.exports = {
    create,
    update,
    remove
}