const express = require('express');
require('dotenv').config();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const sequelize = require('../src/database/database');
const cors = require('cors');
const cors = require('cors'); // Importa CORS
const app = express();
const verifyToken = require('../src/middleware/auth');

<<<<<<< HEAD
const ClientRoutes = require('./routes/clientes');
//const { Sequelize } = require('sequelize');
const sequelize = require('./database/database');


// Settings
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || '192.168.1.162';
app.set('port', PORT);
const allowedOrigins = ['http://192.168.1.161',];
const corsOptions = {
  origin: function (origin, callback) {
    console.log('origin: ' + origin);

    if (!origin) {
      callback(null, true);
    } else if (allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('No permitido por CORS'));
    }
  },
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
};


// Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors(corsOptions));

app.use((req, res, next) => {
  console.log(`Solicitud recibida desde la IP: ${req.ip}`);
  next();
});



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
app.listen(PORT, HOST, () => {
  console.log(`Server running on http://${HOST}:${PORT}`);
});

(async () => {
  try {
    await sequelize.sync({ force: false });
    console.log('Base de datos sincronizada correctamente.');
  } catch (error) {
    console.error('Error al sincronizar la base de datos:', error);
  }
})();