const { Router } = require('express');
const router = Router();
const clientes = require('../data/clientes.json');

// Obtener todos los clientes
router.get('/', (req, res) => {
    res.json(clientes);
});

// Obtener un cliente por ID
router.get('/:id', (req, res) => {
    const cliente = clientes.find(c => c.id === parseInt(req.params.id));
    if (cliente) res.json(cliente);
    else res.status(404).send('Cliente no encontrado');
});

// Crear un nuevo cliente
router.post('/', (req, res) => {
    const nuevoCliente = req.body;
    clientes.push(nuevoCliente);
    res.status(201).json(clientes);
});

// Actualizar un cliente
router.put('/:id', (req, res) => {
    const cliente = clientes.find(c => c.id === parseInt(req.params.id));
    if (cliente) {
        Object.assign(cliente, req.body);
        res.json(cliente);
    } else res.status(404).send('Cliente no encontrado');
});

// Eliminar un cliente
router.delete('/:id', (req, res) => {
    const index = clientes.findIndex(c => c.id === parseInt(req.params.id));
    if (index !== -1) {
        clientes.splice(index, 1);
        res.json(clientes);
    } else res.status(404).send('Cliente no encontrado');
});

module.exports = router;