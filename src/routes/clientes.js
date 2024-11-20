const { Router } = require('express');
const router = Router();
const clientes = require('../data/clientes.json');
const { faker } = require('@faker-js/faker'); 

const Clients = require("../models/clientes.model.js");

// Obtener todos los clientes
router.get('/', async(req, res) => {
    const clients = await Clients.findAll()
    res.status(200).json({
        ok:true,
        status: 200,
        body: clients
    })
});

// Obtener un cliente por ID
router.get('/:id',async (req, res) => {
    const id = req.params.id;
    const client = await Clients.findOne({
        where: {
            ClienteID: id,
        }
    });
    res.status(200).json({
        ok:true,
        status: 200,
        body: client
    })

});

// Crear un nuevo cliente
router.post('/', async(req, res) => {
    const dataClients = req.body;
    await Clients.sync();
    const create_client = await Clients.create({
        Nombre: dataClients.Nombre,
        Correo: dataClients.Correo,
        Telefono: dataClients.Telefono,
        Comentarios: dataClients.Comentarios
    });
    res.status(201).json(create_client);
});

// Actualizar un cliente
router.put('/:id', async(req, res) => {
    const id = req.params.id;
    const dataClients = req.body;
    const update_clients = await Clients.update({
        Nombre: dataClients.Nombre,
        Correo: dataClients.Correo,
        Telefono: dataClients.Telefono,
        Comentarios: dataClients.Comentarios
    },{
        where: {
            ClienteId: id,
        }
    })
    res.status(200).json({
        ok:true,
        status:200,
        body:update_clients
    })
});

// Eliminar un cliente
router.delete('/:id', async(req, res) => {
    const id = req.params.id;
    const delete_clients = await Clients.destroy({
        where: {
            ClienteId: id,
        }
    })
    res.status(204).json({
        ok:true,
        status:204,
        body:delete_clients
    })
});

module.exports = router;
