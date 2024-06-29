const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Imagen', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    // Suponiendo que debe ser 'url' o 'imagen', cambiamos el campo
    url: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  }, { timestamps: false });
};
