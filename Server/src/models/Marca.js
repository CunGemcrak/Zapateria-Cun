const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Marca = sequelize.define('Marca', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    marca: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  }, { 
    timestamps: false,
    tableName: 'marcas' // Nombre exacto de la tabla en tu base de datos
  });

  // Sincronización y carga inicial de datos
  Marca.sync().then(() => {
    return Marca.bulkCreate([
      { marca: "Nike" }, { marca: "Adidas" }, { marca: "Puma" },
      { marca: "Reebok" }, { marca: "Converse" }, { marca: "Vans" },
      { marca: "New Balance" }, { marca: "Under Armour" },
      { marca: "Skechers" }, { marca: "Asics" }, { marca: "Fila" },
    ]);
  }).catch(err => {
    console.error('Error en la sincronización de Marca:', err);
  });

  return Marca; // Devuelve el modelo Marca al final del archivo
};

