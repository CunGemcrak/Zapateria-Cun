const { Router } = require('express');

//!importamos controllers  para almacenar inforamcion
const {CrearUsuario} = require('../controllers/Usuario/Post/Crear_Usuario')
const {BusquedaUsuario} = require('../controllers/Usuario/Get/Data_Usuario');
const {DataTiendaUsuario} = require('../controllers/Tienda/Get/Data_Tienda');
const { CrearEmpresa } = require('../controllers/Usuario/Post/Crear_Empresa');
const { obtenerColores } = require('../controllers/Tienda/Get/Colores_Buscar');
const { obtenerTallas } = require('../controllers/Tienda/Get/Talla_Buscar');
const { obtenerMarcas } = require('../controllers/Tienda/Get/Marca_Buscar');

const router = Router();

//!MEtodos Usuario 
router.post('/user/create', CrearUsuario)
router.get('/user/:correo/:pass', BusquedaUsuario);

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
//!MEtodos Empresa 
router.post('/crear/empresa', CrearEmpresa)

router.get('/empresa/:correo/:pass', DataTiendaUsuario);
router.get('/empresa/color/',obtenerColores)
router.get('/empresa/tallas/',obtenerTallas)
router.get('/empresa/marcas',obtenerMarcas)


/*
router.get('/dogs', allDogs);
router.get('/dogs/:idRaza', dog);
router.get('/dogs/name/:name', dogName);
router.get('/temperament', Temperamento);
router.post('/dogs', busquedaDog);
*/

module.exports = router;
