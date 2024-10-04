const { Router } = require('express');
const router = Router();
const users = require('../data/users.json');

// Obtener todos los usuarios
router.get('/', (req, res) => {
    res.json(users);
});

// Obtener un usuario por ID
router.get('/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (user) res.json(user);
    else res.status(404).send('Usuario no encontrado');
});

// Crear un nuevo usuario
router.post('/', (req, res) => {
    const { nombre, correo, contraseña, rol } = req.body;
    if ( nombre && correo && contraseña && rol) {
        const id = users.length + 1;
        const newUser = { id ,...req.body };
        users.push(newUser);
        res.status(201).json(users);
    } else {
        res.status(500).json({ error: "There was an error." });
    }   
});

// Actualizar usuario
router.put('/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (user) {
        Object.assign(user, req.body);
        res.json(user);
    } else res.status(404).send('Usuario no encontrado');
});

// Eliminar usuario
router.delete('/:id', (req, res) => {
    const index = users.findIndex(u => u.id === parseInt(req.params.id));
    if (index !== -1) {
        users.splice(index, 1);
        res.json(users);
    } else res.status(404).send('Usuario no encontrado');
});

module.exports = router;
