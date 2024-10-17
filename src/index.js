const express = require('express');
require('dotenv').config();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const sequelize = require('../src/database/database'); 
const app = express();

// Settings
const PORT = process.env.PORT || 3000;
app.set('port', PORT);

// Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Rutas
app.use('/api/users', require('./routes/protected'), require('./routes/users'));
app.use('/api/menu', require('./routes/protected'), require('./routes/menu'));
app.use('/api/clientes', require('./routes/protected'), require('./routes/clientes'));
app.use('/api/pedidos', require('./routes/protected'), require('./routes/pedidos'));
app.use('/api/login', require('./routes/protected'), require('./routes/login'));
app.use('/api/personalizar', require('./routes/protected'), require('./routes/ingredientes'));
app.use('/api/pagos', require('./routes/protected'), require('./routes/pagos'));
app.use('/api/categorias', require('./routes/protected'), require('./routes/categorias'));
app.use('/api/bebidas', require('./routes/protected'), require('./routes/bebidas'));
app.use('/api/mesas', require('./routes/protected'), require('./routes/mesas'));
app.use('/api/protected', require('./routes/protected'));


// Starting server
app.listen(app.get('port'), () => {
  console.log(`Server on port ${app.get('port')}`);
});

(async () => {
  try {
    await sequelize.sync({ force: false });
    console.log('Base de datos sincronizada correctamente.');
  } catch (error) {
    console.error('Error al sincronizar la base de datos:', error);
  }
})();