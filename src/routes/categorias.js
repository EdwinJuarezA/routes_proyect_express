const { Router } = require('express');
const router = Router();
//const ingredientes = require('../data/ingredientes.json');
const Categories = require("../models/categorias.model.js");

// Obtener todas las categorias
router.get('/', async(req, res) => {
    const categories = await Categories.findAll()
    res.status(200).json({
        ok:true,
        status: 200,
        body: categories
    })
});

// Obtener una categoria por ID
router.get('/:id', async(req, res) => {
    const id = req.params.id;
    const categories = await Categories.findOne({
        where: {
            CategoriaId: id,
        }
    });
    res.status(200).json({
        ok:true,
        status: 200,
        body: categories
    })
});

// Crear una nueva categoria
router.post('/',async (req, res) => {
    const dataCategories = req.body;
    await Categories.sync();
    const create_category = await Categories.create({
        Nombre: dataCategories.Nombre
    });
    res.status(201).json(create_category);
});

// Actualizar categoria
router.put('/:id', async(req, res) => {
    const id = req.params.id;
    const dataCategories = req.body;
    const update_category = await Categories.update({
        Nombre: dataCategories.Nombre
    },{
        where: {
            CategoriaID: id,
        }
    })
    res.status(200).json({
        ok:true,
        status:200,
        body:update_category
    })
});

// Eliminar categoria
router.delete('/:id', async(req, res) => {
    const id = req.params.id;
    const delete_category = await Categories.destroy({
        where: {
            CategoriaID: id,
        }
    })
    res.status(204).json({
        ok:true,
        status:204,
        body:delete_category
    })
});

module.exports = router;
