const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Categoria = sequelize.define('Categoria', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    categoria: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    activo: {
        type: DataTypes.STRING,
        allowNull: false,
      },
  }, {
    timestamps: false,
  });

  // Sincronización y carga inicial de datos
  Categoria.sync().then(() => {
    return Categoria.bulkCreate([
      { categoria: 'Zapatilla', activo: "true" }, { categoria: 'Sandalias', activo: "true" }, 
      { categoria: 'Botas', activo: "true" },{ categoria: 'Formales', activo: "true"  }, 
      { categoria: 'Informales', activo: "true" }, { categoria: 'Deportivos', activo: "true" },
     
    ]);
  }).catch(err => {
    console.error('Error en la sincronización de Calidad:', err);
  });

  return Categoria;
};
