const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('Empresa', {
    id : {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Descripcion: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '',
    },
    celular: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '',
    },
    correo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    url:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    status:{
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'False', // Valor por defecto para el campo status
    },
  }, { timestamps: false });
};
