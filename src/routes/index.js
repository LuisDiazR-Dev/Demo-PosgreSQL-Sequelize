// * router express
const router = require('express').Router()



// * Controllers imports
// TODO: probar ruta por ruta
const testRoutes = require('../controllers/db/testRoutes')
const newUser = require('../controllers/db/newUser')

// * Rutas
router.get('/', testRoutes);


router.post('/newuser', newUser);

module.exports = router