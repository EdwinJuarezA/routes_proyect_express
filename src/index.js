const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
require('dotenv').config();

const ClientRoutes = require('./routes/clientes');
const { Sequelize } = require('sequelize');
// Settings
const PORT = process.env.PORT || 3000;
app.set('port', PORT);

// Middlewares
app.use(morgan('dev'));
app.use(express.json()); // Analiza las solicitudes en formato JSON
app.use(express.urlencoded({ extended: false })); // Para analizar datos de formularios

// Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/menu', require('./routes/menu'));
app.use('/api/clientes', require('./routes/clientes'));
app.use('/api/pedidos', require('./routes/pedidos'));
app.use('/api/login', require('./routes/login'));
app.use('/api/personalizar', require('./routes/ingredientes'));
app.use('/api/pagos', require('./routes/pagos'));
app.use('/api/categorias',require('./routes/categorias'));
app.use('/api/bebidas',require('./routes/bebidas'));
app.use('/api/mesas', require('./routes/mesas'));


// Starting server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});

(async () => {
    try {
      await sequelize.sync({ force: false });  // Cambia `force` a `true` si quieres recrear las tablas
      console.log('Base de datos sincronizada correctamente.');
    } catch (error) {
      console.error('Error al sincronizar la base de datos:', error);
    }
  })();