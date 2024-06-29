const { DataTypes } = require('sequelize');

// Exportamos una función que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // Definimos el modelo
  const Talla = sequelize.define('Talla', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    talla: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  }, { timestamps: false });

  // Cargamos las tallas inicialmente
  Talla.sync().then(() => {
    return Talla.bulkCreate([
      { talla: '28' }, { talla: '29' }, { talla: '30' }, { talla: '31' },
      { talla: '32' }, { talla: '33' }, { talla: '34' }, { talla: '35' },
      { talla: '36' }, { talla: '37' }, { talla: '38' }, { talla: '39' },
      { talla: '40' }, { talla: '41' }, { talla: '42' }, { talla: '43' },
      { talla: '44' }, { talla: '45' },
    ]);
  });

  return Talla;
};
