const { sequelize, User, Talla, Color, Marca, Calidad, Empresa } = require('./db');

// Función para inicializar la base de datos
const initDatabase = async () => {
    try {
        await sequelize.sync({ force: true }); // Sincroniza los modelos con la base de datos

        // Carga de datos iniciales
        await User.bulkCreate([
            { name: 'Luis', apell: 'Buelvas', celular: '3012282338', email: 'labc.1021@gmail.com', password: 'geminis', url: 'null', tipe: '1', state: 'true' },
            // Agrega más usuarios si es necesario
        ]);

        await Empresa.bulkCreate([
            { name: 'Luis', descripcion: 'Buelvas', celular: '3012282338', correo: 'admin@gmail.com', password: 'geminis', url: 'null', status: 'true' },
            // Agrega más empresas si es necesario
        ]);

        await Talla.bulkCreate([
            { talla: 28 }, { talla: 29 }, { talla: 30 }, { talla: 31 },
            { talla: 32 }, { talla: 33 }, { talla: 34 }, { talla: 35 },
            { talla: 36 }, { talla: 37 }, { talla: 38 }, { talla: 39 },
            { talla: 40 }, { talla: 41 }, { talla: 42 }, { talla: 43 },
            { talla: 44 }, { talla: 45 },
        ]);

        await Color.bulkCreate([
            { color: "rojo" }, { color: "azul" }, { color: "amarillo" },
            { color: "blanco" }, { color: "Naranja" }, { color: "Rosa" },
            { color: "Combinados" }, { color: "otros" },
        ]);

        await Marca.bulkCreate([
            { marca: "Nike" }, { marca: "Adidas" }, { marca: "Puma" },
            { marca: "Reebok" }, { marca: "Converse" }, { marca: "Vans" },
            { marca: "New Balance" }, { marca: "Under Armour" },
            { marca: "Skechers" }, { marca: "Asics" }, { marca: "Fila" },
        ]);

        await Calidad.bulkCreate([
            { tipo: 'AAA' }, { tipo: 'AA' }, { tipo: 'A' },
            { tipo: 'Tipo Original' }, { tipo: 'Original' },
        ]);

        console.log('Base de datos inicializada correctamente.');
    } catch (error) {
        console.error('Error al inicializar la base de datos:', error);
    }
};

// Exporta la función de inicialización
module.exports = { initDatabase };
