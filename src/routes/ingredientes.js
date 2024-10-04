const { Router } = require('express');
const router = Router();
const ingredientes = require('../data/ingredientes.json');

// Obtener todos los ingredientes
router.get('/', (req, res) => {
    res.json(ingredientes);
});

// Obtener un ingrediente por ID
router.get('/:id', (req, res) => {
    const ingrediente = ingredientes.find(i => i.id === parseInt(req.params.id));
    if (ingrediente) res.json(ingrediente);
    else res.status(404).send('Ingrediente no encontrado');
});

// Crear un nuevo ingrediente
router.post('/', (req, res) => {
    const nuevoIngrediente = req.body;
    ingredientes.push(nuevoIngrediente);
    res.status(201).json(ingredientes);
});

// Actualizar ingrediente
router.put('/:id', (req, res) => {
    const ingrediente = ingredientes.find(i => i.id === parseInt(req.params.id));
    if (ingrediente) {
        Object.assign(ingrediente, req.body);
        res.json(ingrediente);
    } else res.status(404).send('Ingrediente no encontrado');
});

// Eliminar ingrediente
router.delete('/:id', (req, res) => {
    const index = ingredientes.findIndex(i => i.id === parseInt(req.params.id));
    if (index !== -1) {
        ingredientes.splice(index, 1);
        res.json(ingredientes);
    } else res.status(404).send('Ingrediente no encontrado');
});

module.exports = router;
