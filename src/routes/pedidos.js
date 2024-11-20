const { Router } = require('express');
const router = Router();
//const pedidos = require('../data/pedidos.json');
const Pedidos = require("../models/pedidos.model.js");

// Obtener todos los pedidos
router.get('/', async(req, res) => {
    const pedidos = await Pedidos.findAll()
    res.status(200).json({
        ok:true,
        status: 200,
        body: pedidos
    })
});

// Obtener un pedido por ID
router.get('/:id', async(req, res) => {
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

//Eliminar un pedido
router.delete('/:id', async (req, res) => {
    const id = req.params.id; 
    const delete_pedido = await Pedidos.destroy({
        where: {
            PedidoID: id,
        }
    });
    if (delete_pedido) {
        res.status(204).json({
            ok: true,
            status: 204,
            message: 'Pedido eliminado correctamente',
            body: delete_pedido,
        });
    }
});


module.exports = router;
