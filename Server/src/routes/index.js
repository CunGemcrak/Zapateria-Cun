const { Router } = require('express');

//!importamos controllers  para almacenar inforamcion
const {CrearUsuario} = require('../controllers/Usuario/Post/Crear_Usuario')
const {BusquedaUsuario} = require('../controllers/Usuario/Get/Data_Usuario')

const router = Router();

//!MEtodos Usuario 
router.post('/user/create', CrearUsuario)
router.get('/user', BusquedaUsuario)

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


/*
router.get('/dogs', allDogs);
router.get('/dogs/:idRaza', dog);
router.get('/dogs/name/:name', dogName);
router.get('/temperament', Temperamento);
router.post('/dogs', busquedaDog);
*/

module.exports = router;
