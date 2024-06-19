const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  // Defino el modelo y lo asigno a una variable
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

  // Agregar hook para insertar datos iniciales después de sincronizar
  Calidad.addHook('afterSync', async () => {
    const initialData = ['AAA', 'AA', 'Tipo Original', 'Original'];
    for (const tipo of initialData) {
      await Calidad.findOrCreate({ where: { tipo } });
    }
  });

  return Calidad;
};
