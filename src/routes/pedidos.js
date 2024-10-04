const { Router } = require('express');
const router = Router();
const pedidos = require('../data/pedidos.json');

// Obtener todos los pedidos
router.get('/', (req, res) => {
    res.json(pedidos);
});

// Obtener un pedido por ID
router.get('/:id', (req, res) => {
    const pedido = pedidos.find(p => p.id === parseInt(req.params.id));
    if (pedido) res.json(pedido);
    else res.status(404).send('Pedido no encontrado');
});

// Crear un nuevo pedido
router.post('/', (req, res) => {
    const nuevoPedido = req.body;
    pedidos.push(nuevoPedido);
    res.status(201).json(pedidos);
});

// Actualizar un pedido
router.put('/:id', (req, res) => {
    const pedido = pedidos.find(p => p.id === parseInt(req.params.id));
    if (pedido) {
        Object.assign(pedido, req.body);
        res.json(pedido);
    } else res.status(404).send('Pedido no encontrado');
});

// Eliminar un pedido
router.delete('/:id', (req, res) => {
    const index = pedidos.findIndex(p => p.id === parseInt(req.params.id));
    if (index !== -1) {
        pedidos.splice(index, 1);
        res.json(pedidos);
    } else res.status(404).send('Pedido no encontrado');
});

module.exports = router;
