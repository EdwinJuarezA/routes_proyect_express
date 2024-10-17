const express = require('express');
const jwt = require('jsonwebtoken');
const config = require('../config');
const router = express.Router();

const user = { id: 1, username: 'user', password: 'password' };

router.post('/', (req, res) => {
    const { username, password } = req.body;

    if (username === user.username && password === user.password) {
        const token = jwt.sign({ id: user.id }, config.jwtSecret, {
            expiresIn: config.jwtExpiration,
        });
        return res.status(200).send({ auth: true, token });
    }

    return res.status(401).send({ auth: false, token: null });
});

module.exports = router;
