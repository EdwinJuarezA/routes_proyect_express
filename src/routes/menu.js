const { Router } = require('express');
const router = Router();
const menu = require('../data/menu.json');

// Obtener todos los elementos del menú
router.get('/', (req, res) => {
    res.json(menu);
});

// Obtener un elemento del menú por ID
router.get('/:id', (req, res) => {
    const bebida = menu.find(b => b.id === parseInt(req.params.id));
    if (bebida) res.json(bebida);
    else res.status(404).send('Bebida no encontrada');
});

// Crear un nuevo elemento del menú
router.post('/', (req, res) => {
    const nuevaBebida = req.body;
    menu.push(nuevaBebida);
    res.status(201).json(menu);
});

// Actualizar un elemento del menú
router.put('/:id', (req, res) => {
    const bebida = menu.find(b => b.id === parseInt(req.params.id));
    if (bebida) {
        Object.assign(bebida, req.body);
        res.json(bebida);
    } else res.status(404).send('Bebida no encontrada');
});

// Eliminar un elemento del menú
router.delete('/:id', (req, res) => {
    const index = menu.findIndex(b => b.id === parseInt(req.params.id));
    if (index !== -1) {
        menu.splice(index, 1);
        res.json(menu);
    } else res.status(404).send('Bebida no encontrada');
});

module.exports = router;
