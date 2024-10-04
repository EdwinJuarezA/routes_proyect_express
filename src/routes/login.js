const { Router } = require('express');
const router = Router();
const users = require('../data/users.json');

// Validar credenciales de login
router.post('/', (req, res) => {
    const { correo, contraseña } = req.body;
    const user = users.find(u => u.correo === correo && u.contraseña === contraseña);
    
    if (user) {
        const { contraseña, ...userData } = user;
        res.json(userData);  // Retorna todos los datos excepto la contraseña
    } else {
        res.status(401).send('Credenciales incorrectas');
    }
});

module.exports = router;
