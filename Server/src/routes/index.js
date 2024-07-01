const { Router } = require('express');

//!importamos controllers  para almacenar inforamcion
const {CrearUsuario} = require('../controllers/Usuario/Post/Crear_Usuario')
const {BusquedaUsuario} = require('../controllers/Usuario/Get/Data_Usuario');
const {DataTiendaUsuario} = require('../controllers/Tienda/Get/Data_Tienda');
const { CrearEmpresa } = require('../controllers/Usuario/Post/Crear_Empresa');


const { obtenerColores } = require('../controllers/Tienda/Get/Colores_Buscar');
const {obtenerCalidad} = require('../controllers/Tienda/Get/Buscar_Calidad')
const { obtenerTallas } = require('../controllers/Tienda/Get/Talla_Buscar');
const { obtenerMarcas } = require('../controllers/Tienda/Get/Marca_Buscar');
const {obtenerCategorias} =  require('../controllers/Tienda/Get/Buscar_Categorias');
const {ObtenerCardsEmpresa } = require('../controllers/Tienda/Get/Buscar_Cards_Empresa');
const { createPaymentHandler } = require('../controllers/MercadoPago/metodo_pago/MercadoPago')



//!mwetodos put  empreza
const {ActualizarEmpresa} = require('../controllers/Tienda/Put/ActualizarEmpresa')
const {Activar_Ocultar_Card} = require('../controllers/Tienda/Put/Activar_Ocultar_Card')



const {CrearImagen } = require('../controllers/Tienda/Post/Crear_Img');
const { CrearStock } = require('../controllers/Tienda/Post/Crear_Stock');


const {BusquedaZapatosUsuario} = require('../controllers/Usuario/Get/Stock_Usuario')

const router = Router();


// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
//!MEtodos Empresa 
router.post('/crear/empresa', CrearEmpresa)
router.get('/empresa/:correo/:pass', DataTiendaUsuario);
router.get('/empresa/color/',obtenerColores)
router.get('/empresa/tallas/',obtenerTallas)
router.get('/empresa/marcas',obtenerMarcas)
router.get('/empresa/calidad',obtenerCalidad)
router.get('/empresa/categorias',obtenerCategorias)
router.get('/empresa/buscar/stock/:id', ObtenerCardsEmpresa)



router.put('/empresa/update/:id', ActualizarEmpresa)
router.put('/empresa/buscar/stock/stado/:id', Activar_Ocultar_Card)


router.post('/empresa/imagen', CrearImagen )
router.post('/empresa/create/stock', CrearStock)


//!MEtodos Usuario 
router.post('/user/create', CrearUsuario)
router.get('/user/:correo/:pass', BusquedaUsuario);
router.get('/user/zapatos', BusquedaZapatosUsuario)


//! Actividad Mercado PAgo
router.get('compra/', createPaymentHandler)
module.exports = router;
