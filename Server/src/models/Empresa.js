const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Empresa = sequelize.define('Empresa', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    descripcion: {
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
    url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'False', // Valor por defecto para el campo status
    },
  }, { 
    timestamps: false,
    tableName: 'empresas' // Nombre exacto de la tabla en tu base de datos
  });

  // Sincronización y carga inicial de datos
  Empresa.sync().then(() => {
    return Empresa.bulkCreate([
      { name: 'Zapatoskool', descripcion: 'Buelvas', celular: '3012282338', correo: 'tienda1@gmail.com', password: 'geminis', url: 'null', status: 'true' },
      { name: 'gemcrak', descripcion: 'Buelvas', celular: '3012282338', correo: 'tienda2@gmail.com', password: 'geminis', url: 'null', status: 'true' },
      // Agrega más empresas si es necesario
    ]);
  }).catch(err => {
    console.error('Error en la sincronización de Empresa:', err);
  });

  return Empresa; // Devuelve el modelo Empresa al final del archivo
};

