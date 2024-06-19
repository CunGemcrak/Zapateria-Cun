const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Calidad', {
    id : {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    tipo: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  }, { timestamps: false });

  Calidad.addHook('afterSync', async () => {
    const initialData = ['AAA', 'AA', 'Tipo Original', 'Original'];
    for (const tipo of initialData) {
      await Calidad.findOrCreate({ where: { Tipo: tipo } });
    }
  });

};

