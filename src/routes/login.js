const express = require('express');
const jwt = require('jsonwebtoken');
const config = require('../config');
const router = express.Router();
const sequelize = require('../database/database'); 
const Usuarios = require('../models/users.model'); 

router.post('/', async (req, res) => {
    const { username, password } = req.body;

    try {
        // Buscar el usuario en la base de datos
        const user = await Usuarios.findOne({ where: { usuario: username } });
        if (!user) {
            return res.status(401).send({ auth: false, token: null, message: 'Usuario no encontrado' });
        }
        // Verificar la contraseña
        if (user.password !== password) {
            return res.status(401).send({ auth: false, token: null, message: 'Contraseña incorrecta' });
        }
        // Si todo está bien, crear el token JWT
        const token = jwt.sign({ id: user.idUsuarios, username: user.usuario }, config.jwtSecret, {
            expiresIn: config.jwtExpiration,
        });        
        return res.status(200).send({ auth: true, token });
    } catch (error) {
        return res.status(500).send({ message: 'Error al autenticar usuario', error });
    }
});

/*const user = { id: 0, username: 'edwin', password: 'legustaDaniel' };

router.post('/', (req, res) => {
    const { username, password } = req.body;

    if (username === user.username && password === user.password) {
        const token = jwt.sign({ id: user.id }, config.jwtSecret, {
            expiresIn: config.jwtExpiration,
        });
        return res.status(200).send({ auth: true, token });
    }

    return res.status(401).send({ auth: false, token: null });
});*/


module.exports = router;
