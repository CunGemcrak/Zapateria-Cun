const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Calidad = sequelize.define('Calidad', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    tipo: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  }, { timestamps: false });

};

