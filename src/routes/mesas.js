const { Router } = require('express');
const router = Router();
const { faker } = require('@faker-js/faker'); 

const Mesas = require("../models/mesas.model.js");

// Obtener todos las mesas
router.get('/', async(req, res) => {
    const mesas = await Mesas.findAll()
    res.status(200).json({
        ok:true,
        status: 200,
        body: mesas
    })
});

// Obtener una mesa por ID
router.get('/:id',async (req, res) => {
    const id = req.params.id;
    const mesas = await Mesas.findOne({
        where: {
            MesaId: id,
        }
    });
    res.status(200).json({
        ok:true,
        status: 200,
        body: mesas
    })

});

// Crear una nueva mesa
router.post('/', async(req, res) => {
    const dataMesas = req.body;
    await Mesas.sync();
    const create_mesas = await Mesas.create({
        Numero: dataMesas.Numero,
        Estado: dataMesas.Estado
    });
    res.status(201).json(create_mesas);
});

// Actualizar una mesa
router.put('/:id', async(req, res) => {
     const id = req.params.id;
     const dataMesas = req.body;
     const update_mesas = await Mesas.update({
        Nombre: dataMesas.Nombre,
        Estado: dataMesas.Estado
     },{
        where: {
            MesaId: id,
        }
     })
     res.status(200).json({
        ok:true,
        status:200,
        body:update_mesas
     })
});

// Eliminar una mesa
router.delete('/:id', async(req, res) => {
    const id = req.params.id;
    const delete_mesas = await Mesas.destroy({
        where: {
            MesasId: id,
        }
    })
    res.status(204).json({
        ok:true,
        status:204,
        body:delete_mesas
     })
});

module.exports = router;
