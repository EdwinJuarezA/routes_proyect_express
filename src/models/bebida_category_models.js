const Bebidas = require('./bebidas.model');
const Categorias = require('./categorias.model');

Categorias.hasMany(Bebidas, { foreignKey: 'CategoriaID', as: 'bebidas' });
Bebidas.belongsTo(Categorias, { foreignKey: 'CategoriaID', as: 'categoria' });

module.exports = { Bebidas, Categorias };
