const { Router } = require('express');
const router = Router();
const clientes = require('../data/clientes.json');
const { faker } = require('@faker-js/faker'); 

const Clients = require("../models/clientes.model.js");

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
router.post('/', async(req, res) => {
    /*const nuevoCliente = req.body;
    clientes.push(nuevoCliente);
    res.status(201).json(clientes);*/
    const create_client = await Clients.create({
        Nombre: faker.person.fullName(),
        Correo: faker.internet.email(),
        Telefono: faker.phone.number(),
        Comentarios: faker.lorem.sentence()
    });
    res.status(201).json(create_client);
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
