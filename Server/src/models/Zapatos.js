const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const Zapatos = sequelize.define('Zapatos', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        marca: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        costo: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        color: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        modelo: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        calidad: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        descripcion: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        url: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        talla: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    }, { timestamps: false });

    // Sincronización y carga inicial de datos
    Zapatos.sync().then(() => {
        return Zapatos.bulkCreate([
            { marca: "Adidas", costo: "234234", color: "azul", modelo: "adsdas", calidad: "AAA", descripcion: "asdasdsa", url: "https://firebasestorage.googleapis.com/v0/b/stylezapapp.appspot.com/o/documentos%2F1097661.jpg?alt=media&token=f17e6f46-b74d-4fcb-9f2e-0d334921d2a9", talla: "31" },
            { marca: "Vans", costo: "3234", color: "Naranja", modelo: "aasdas", calidad: "AA", descripcion: "asdasdas", url: "https://firebasestorage.googleapis.com/v0/b/stylezapapp.appspot.com/o/documentos%2F1005830.jpg?alt=media&token=702e0e2e-19a9-43d3-b565-7da099f78dde", talla: "38" },
            // Agrega más zapatos si es necesario
        ]);
    }).catch(err => {
        console.error('Error en la sincronización de Zapatos:', err);
    });

    return Zapatos;
};
