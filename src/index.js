const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
require('dotenv').config();
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

// Starting server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});
