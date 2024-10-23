const express = require('express');
const router = express.Router();

// Ruta GET para probar CORS
router.get('/', (req, res) => {
    console.log("funcionando correctamente");
    res.status(200).send({ message: "cors funcionando correctamente" });
});

module.exports = router;
