const mongoose = require('mongoose');
const crypto = require('crypto');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    email: {
        type: String,
        trim: true,
        unique: 'Email already exists',
        match: [/.+\@.+\..+/, 'Please fill a valid email address'],
        required: true
    },
    created: {
        type: Date,
        default: Date.now
    },
    hashed_password: {
        type: String,
        required: true
    },
    salt: String
});

UserSchema.methods = {
    // authenticate: verifies sign in attempts
    authenticate: function (plainText) {
        return this.encryptPassword(plainText) === this.hashed_password;
    },

    // encryptPassword: generates encrypted hash from plain text password
    encryptPassword: function (password) {
        if (!password)
        {
            return '';
        }
        try {
            return crypto.createHmac('sha1', this.salt).update(password).digest('hex');
        } catch (err){
            return '';
        }
    },

    // generates a unique and random salt value using the current timestamp and Math.random()
    makeSalt: function () {
        return Math.round((new Date().valueOf() * Math.random())) + ''
    }
}

// password string provided by user isn't stored directly in user document
// it is handled as a virtual field
UserSchema.virtual('password').set( function (password) {
    this._password = password;
    this.salt = this.makeSalt();
    this.hashed_password = this.encryptPassword(password);
}).get(() => {
    return this._password;
});

UserSchema.path('hashed_password').validate(() => {
    if (this._password && this._password < 6)
    {
        this.invalidate('password', 'Password must be at least 6 characters.')
    }
    if (this.isNew && !this._password)
    {
        this.invalidate('password', 'Password is required')
    }
}, null);

/**
 * compiling model from schema
 * 
 * first argument is the singular name of the collection that will be created for the model
 * (Mongoose will create the database collection for the User model)
 * 
 * second argument is the schema you want to use in creating the model
 */
module.exports = mongoose.model('User', UserSchema);