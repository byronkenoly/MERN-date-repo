const express = require('express');
const authCtrl = require('../controllers/auth.controller');

const router = express.Router();


router.route('/api/users').get().post();

router.route('/api/users/:userId').get(authCtrl.requireSignin).put().delete();

