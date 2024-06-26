require('dotenv').config();
const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');

const {
  DB_USER, DB_PASSWORD, DB_HOST, DB_NAME,
} = process.env;

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  dialect: 'mysql',
  logging: false,
  native: false,
});

const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach(model => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
const { Categoria, Calidad, Color, Empresa, Imagen, Marca, Talla, User, Venta, Zapatos } = sequelize.models;

// Definimos la asociación 1:N entre Login y Necesidades
// Login.hasMany(Necesidades, { foreignKey: 'id_login', sourceKey: 'id' });
// Necesidades.belongsTo(Login, { foreignKey: 'id_login', targetKey: 'id' });



// Llama a la función de inicialización


// Función para inicializar la base de datos
module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  Categoria, Calidad, Color, Empresa, Imagen, Marca, Talla, User, Venta, Zapatos,
  conn: sequelize,     // para importar la conexión { conn } = require('./db.js');
};
