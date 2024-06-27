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
  logging: false, // set to console.log to see the raw SQL queries
  native: false,  // lets Sequelize know we can use pg-native for ~30% more speed
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

// Sincronizamos los modelos con la base de datos (crea las tablas si no existen)
sequelize.sync({ alter: false })
  .then(() => {
    console.log('Tablas sincronizadas correctamente.');
  })
  .catch((error) => {
   // console.error('Error al sincronizar tablas:', error);
  });

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
const { User, Zapatos, Color, Empresa, Talla, Venta, Calidad, Marca } = sequelize.models;
//!RElacion de zapatos con color es de muchos a muchos
const Zapatos_Color = sequelize.define('Zapatos_Color', {}, { timestamps: false })
Zapatos.belongsToMany(Color, { through: 'Zapatos_Color' })
Color.belongsToMany(Zapatos, { through: 'Zapatos_Color' })

//!RElacion de zapatos con talla es de muchos a muchos
const Zapatos_Talla = sequelize.define('Zapatos_Talla', {}, { timestamps: false })
Zapatos.belongsToMany(Talla, { through: 'Zapatos_Talla' })
Talla.belongsToMany(Zapatos, { through: 'Zapatos_Talla' })

//!RElacion de zapatos con venta es de muchos a muchos
const User_Venta = sequelize.define('User_Venta', {}, { timestamps: false })
User.belongsToMany(Venta, { through: 'User_Venta' })
Venta.belongsToMany(User, { through: 'User_Venta' })

// Aca vendrian las relaciones
// Product.hasMany(Reviews);


module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
 User, Zapatos, Marca, Color, Empresa, Talla, Venta, Calidad, Zapatos_Color, Zapatos_Talla, User_Venta,
  conn: sequelize,     // para importart la conexión { conn } = require('./db.js');
};
