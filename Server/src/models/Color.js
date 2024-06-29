const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Color = sequelize.define('Color', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    color: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  }, { 
    timestamps: false,
    // tableName: 'colors' // Asegúrate de especificar el nombre exacto de la tabla si es necesario
  });

  // Sincroniza el modelo con la base de datos y luego realiza la carga inicial de datos
  Color.sync().then(() => {
    return Color.bulkCreate([
      { color: "rojo" }, { color: "azul" }, { color: "amarillo" },
      { color: "blanco" }, { color: "Naranja" }, { color: "Rosa" },
      { color: "Combinados" }, { color: "otros" },
    ]);
  }).catch(err => {
    console.error('Error en la sincronización de Color:', err);
  });

  return Color;
};
