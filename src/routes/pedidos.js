const { Router } = require('express');
const router = Router();
//const pedidos = require('../data/pedidos.json');
const Pedidos = require("../models/pedidos.model.js");

// Obtener todos los pedidos
router.get('/', async(req, res) => {
    /*
    res.json(pedidos);*/
    const pedidos = await Pedidos.findAll()
    res.status(200).json({
        ok:true,
        status: 200,
        body: pedidos
    })
});

// Obtener un pedido por ID
router.get('/:id', async(req, res) => {
    /*
    const pedido = pedidos.find(p => p.id === parseInt(req.params.id));
    if (pedido) res.json(pedido);
    else res.status(404).send('Pedido no encontrado');*/
    const id = req.params.id;
    const pedidos = await Pedidos.findOne({
        where: {
            PedidoID: id,
        }
    });
    res.status(200).json({
        ok:true,
        status: 200,
        body: pedidos
    })
});

// Crear un nuevo pedido
router.post('/', async(req, res) => {
    /*
    const nuevoPedido = req.body;
    pedidos.push(nuevoPedido);
    res.status(201).json(pedidos);*/
    const dataPedidos = req.body;
    await Pedidos.sync();
    const create_pedido = await Pedidos.create({
        ClienteID: dataPedidos.ClienteID,
        MesaID: dataPedidos.MesaID,
        FechaHora: dataPedidos.FechaHora,
        Estado: dataPedidos.Estado
    });
    res.status(201).json(create_pedido);
});

// Actualizar un pedido
router.put('/:id',async (req, res) => {
    /*
    const pedido = pedidos.find(p => p.id === parseInt(req.params.id));
    if (pedido) {
        Object.assign(pedido, req.body);
        res.json(pedido);
    } else res.status(404).send('Pedido no encontrado');*/
    const dataPedidos = req.body;
    await Pedidos.sync();
    const update_pedido = await Pedidos.create({
        ClienteID: dataPedidos.ClienteID,
        MesaID: dataPedidos.MesaID,
        FechaHora: dataPedidos.FechaHora,
        Estado: dataPedidos.Estado
    },{
        where: {
            PedidoID: id,
        }
    });
    res.status(201).json(update_pedido);
});

// Eliminar un pedido
router.delete('/:id', (req, res) => {
    /*
    const index = pedidos.findIndex(p => p.id === parseInt(req.params.id));
    if (index !== -1) {
        pedidos.splice(index, 1);
        res.json(pedidos);
    } else res.status(404).send('Pedido no encontrado');*/
     
});

module.exports = router;
