const { Router } = require('express');

//!importamos controllers  para almacenar inforamcion
const {CrearUsuario} = require('../controllers/Usuario/Post/Crear_Usuario')
const {BusquedaUsuario} = require('../controllers/Usuario/Get/Data_Usuario');
const {CrearCompra} = require('../controllers/Usuario/Post/Crear_Order')


const { CrearEmpresa } = require('../controllers/Usuario/Post/Crear_Empresa');
const { CreateOrderVenta } = require('../controllers/Usuario/Post/CreateOrderVenta')
const { BuscarOrdersUsers } = require('../controllers/Usuario/Get/BuscarOrdersUsers')

const {CorreoClaveUsers} = require('../controllers/Usuario/Get/CorreoClaveUsers')






const {DataTiendaUsuario} = require('../controllers/Tienda/Get/Data_Tienda');
const {ModificarUsuario} = require('../controllers/Usuario/Put/Modificar_Usuario')



const { obtenerColores } = require('../controllers/Tienda/Get/Colores_Buscar');
const {obtenerCalidad} = require('../controllers/Tienda/Get/Buscar_Calidad')
const { obtenerTallas } = require('../controllers/Tienda/Get/Talla_Buscar');
const { obtenerMarcas } = require('../controllers/Tienda/Get/Marca_Buscar');
const {obtenerCategorias} =  require('../controllers/Tienda/Get/Buscar_Categorias');
const {ObtenerCardsEmpresa } = require('../controllers/Tienda/Get/Buscar_Cards_Empresa');
const {obtenerTienda} = require('../controllers/Tienda/Get/Buscar_Tienda')
const { createPaymentHandler } = require('../controllers/MercadoPago/metodo_pago/MercadoPago')
const {ObtenerOrdersEmpresa} =require('../controllers/Tienda/Get/ObtenerOrdersEmpresa')



//!mwetodos put  empreza
const {ActualizarEmpresa} = require('../controllers/Tienda/Put/ActualizarEmpresa')
const {Activar_Ocultar_Card} = require('../controllers/Tienda/Put/Activar_Ocultar_Card')
const {ActualizaOrder} = require('../controllers/Tienda/Get/Actualizar_Estado_Orden')
const {ActualizaCardsEmpresa} = require('../controllers/Tienda/Put/ActualizaCardsEmpresa')


//!Emrpesa delete
const {EliminarZapatoEmrpesa} = require('../controllers/Tienda/Delete/EliminarZapatoEmrpesa')



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
router.get('/empresa/:id', obtenerTienda)
router.post('/empresa/categorias',obtenerCategorias)
router.get('/empresa/buscar/stock/:id', ObtenerCardsEmpresa)
router.get('/empresa/orders/all/:id', ObtenerOrdersEmpresa)
router.put('/empresa/actualizar/zapato/:id', ActualizaCardsEmpresa)
router.delete('/empresa/eliminar/zapato/:id', EliminarZapatoEmrpesa)


router.put('/empresa/update/:id', ActualizarEmpresa)
router.put('/empresa/buscar/stock/stado/:id', Activar_Ocultar_Card)


router.post('/empresa/imagen', CrearImagen )
router.post('/empresa/create/stock', CrearStock)


//!MEtodos Usuario 

router.post('/user/create', CrearUsuario)
router.post('/user/venta', CrearCompra) //!sse crea la url de mercado pago
router.post('/user/create/order', CreateOrderVenta)//!Se crea la orden de venta 
router.post('/user/datos/id/', CorreoClaveUsers)
router.get('/user/orders/:id', BuscarOrdersUsers)//!buscar las ordenes del usuario
router.get('/user/:correo/:pass', BusquedaUsuario);
router.get('/user/zapatos', BusquedaZapatosUsuario)
router.put('/user/actualizardatos/:id', ModificarUsuario)//!modificamos datos del usuario 






//! Actividad Mercado PAgo
router.post('/compra', createPaymentHandler)
router.put('/order/actualizar/:id', ActualizaOrder);

module.exports = router;
