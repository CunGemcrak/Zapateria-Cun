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
    idmercadopago: {
      type: DataTypes.STRING,
      allowNull: false,
    },
   
    id_usuario: {
      type: DataTypes.JSON,
      allowNull: false,
    },
    item: {
      type: DataTypes.JSON,
      allowNull: false,
    },
    preciototal: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    eliminar: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    estado: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, { timestamps: true });

 
};

