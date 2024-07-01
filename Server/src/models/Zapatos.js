const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const Zapatos = sequelize.define('Zapatos', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        tienda: {
            type: DataTypes.STRING,
            allowNull: false,
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
        },
        activo: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    }, { timestamps: false });

    // Sincronización y carga inicial de datos
    Zapatos.sync().then(() => {
        return Zapatos.bulkCreate([
            { tienda: "1", marca: "Adidas", costo: "234234", color: "azul", modelo: "adsdas", calidad: "AAA", descripcion: "asdasdsa", url: "https://firebasestorage.googleapis.com/v0/b/stylezapapp.appspot.com/o/documentos%2Fthumb-1920-1005531.jpg?alt=media&token=5bd63495-f958-45ba-8286-d106f20022cb", talla: "31", activo: "true"},
            { tienda: "1", marca: "Vans", costo: "3234", color: "Naranja", modelo: "aasdas", calidad: "AA", descripcion: "asdasdas", url: "https://firebasestorage.googleapis.com/v0/b/stylezapapp.appspot.com/o/documentos%2Fthumb-1920-1005531.jpg?alt=media&token=5bd63495-f958-45ba-8286-d106f20022cb", talla: "38", activo: "true"},
            { tienda: "2", marca: "Vinilo", costo: "234234", color: "azul", modelo: "adsdas", calidad: "AAA", descripcion: "asdasdsa", url: "https://firebasestorage.googleapis.com/v0/b/stylezapapp.appspot.com/o/documentos%2Fthumb-1920-1005531.jpg?alt=media&token=5bd63495-f958-45ba-8286-d106f20022cb", talla: "31", activo: "true"},
            { tienda: "2", marca: "Puma", costo: "3234", color: "Naranja", modelo: "aasdas", calidad: "AA", descripcion: "asdasdas", url: "https://firebasestorage.googleapis.com/v0/b/stylezapapp.appspot.com/o/documentos%2Fthumb-1920-1005531.jpg?alt=media&token=5bd63495-f958-45ba-8286-d106f20022cb", talla: "38", activo: "true"},
        ]);
    }).catch(err => {
        console.error('Error en la sincronización de Zapatos:', err);
    });

    return Zapatos;
};
