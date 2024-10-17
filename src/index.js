const express = require('express');
require('dotenv').config();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const sequelize = require('../src/database/database');
const app = express();
const verifyToken = require('../src/middleware/auth');

// Settings
const PORT = process.env.PORT || 3000;
app.set('port', PORT);

// Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Rutas
app.use('/api/users', verifyToken, require('./routes/users'));
app.use('/api/menu', verifyToken, require('./routes/menu'));
app.use('/api/clientes', verifyToken, require('./routes/clientes'));
app.use('/api/pedidos', verifyToken, require('./routes/pedidos'));
app.use('/api/personalizar', verifyToken, require('./routes/ingredientes'));
app.use('/api/pagos', verifyToken, require('./routes/pagos'));
app.use('/api/categorias', verifyToken, require('./routes/categorias'));
app.use('/api/bebidas', verifyToken, require('./routes/bebidas'));
app.use('/api/mesas', verifyToken, require('./routes/mesas'));

app.use('/api/login', require('./routes/protected'), require('./routes/login'));
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