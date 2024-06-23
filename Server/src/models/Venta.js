const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Venta', {
    id : {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    costo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    producto: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  }, { timestamps: false });

 
};

