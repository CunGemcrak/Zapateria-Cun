const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Calidad = sequelize.define('Calidad', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    tipo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    timestamps: false,
  });

  // Sincronización y carga inicial de datos
  Calidad.sync().then(() => {
    return Calidad.bulkCreate([
      { tipo: 'AAA' }, { tipo: 'AA' }, { tipo: 'A' },
      { tipo: 'Tipo Original' }, { tipo: 'Original' },
    ]);
  }).catch(err => {
    console.error('Error en la sincronización de Calidad:', err);
  });

  return Calidad;
};
