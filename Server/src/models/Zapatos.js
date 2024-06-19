const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Zapatos', {
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
        marca: {
            type: DataTypes.STRING,
            allowNull: false,
        }
        

    }, { timestamps: false });
};
