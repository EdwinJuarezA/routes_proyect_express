const { Router } = require('express');
const router = Router();
//const ingredientes = require('../data/ingredientes.json');
const Drinks = require("../models/bebidas.model.js");
const verifyToken = require('../middleware/auth');

// Obtener todas las bebidas
router.get('/', verifyToken, async (req, res) => {
    const drinks = await Drinks.findAll();
    res.status(200).json({
        ok: true,
        status: 200,
        body: drinks
    });
});

// Obtener una bebida por ID
router.get('/:id', async(req, res) => {
    const id = req.params.id;
    const drinks = await Drinks.findOne({
        where: {
            BebidaID: id,
        }
    });
    res.status(200).json({
        ok:true,
        status: 200,
        body: drinks
    })
});

// Crear una nueva bebida
router.post('/',async (req, res) => {
    const dataDrinks = req.body;
    await Drinks.sync();
    const create_drink = await Drinks.create({
        Nombre: dataDrinks.Nombre,
        Precio: dataDrinks.Precio,
        CategoriaID: dataDrinks.CategoriaID,
        Stock: dataDrinks.Stock
    });
    res.status(201).json(create_drink);
});

// Actualizar bebida
router.put('/:id', async(req, res) => {
    const id = req.params.id;
    const dataDrinks = req.body;
    const update_drinks = await Drinks.update({
        Nombre: dataDrinks.Nombre,
        Precio: dataDrinks.Precio,
        CategoriaID: dataDrinks.CategoriaID,
        Stock: dataDrinks.Stock
    },{
        where: {
            BebidaID: id,
        }
    })
    res.status(200).json({
        ok:true,
        status:200,
        body:update_drinks
    })
});

// Eliminar bebida
router.delete('/:id', async(req, res) => {
    const id = req.params.id;
    const delete_pedido = await Pedidos.destroy({
        where: {
            PedidoID: id,
        }
    })
    res.status(204).json({
        ok:true,
        status:204,
        body:delete_pedido
    })
});

module.exports = router;
