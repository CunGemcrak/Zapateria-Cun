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
      { name: 'Zapatoskool', descripcion: 'Buelvas', celular: '3012282338', correo: 'tienda1@gmail.com', password: 'geminis', url: 'https://firebasestorage.googleapis.com/v0/b/stylezapapp.appspot.com/o/documentos%2Fthumb-1920-1010687.jpg?alt=media&token=7b366209-2deb-4b24-9eeb-b45c936ec7b2', status: 'true' },
      { name: 'gemcrak', descripcion: 'Buelvas', celular: '3012282338', correo: 'tienda2@gmail.com', password: 'geminis', url: 'https://firebasestorage.googleapis.com/v0/b/stylezapapp.appspot.com/o/documentos%2Fstock-vector-cartoon-shoe-comic-book-sports-clothing-retro-vector-comics-pop-art-design-2425165073.jpg?alt=media&token=2fdb1bb0-1534-4dbf-972a-862eeb1b3c6c', status: 'true' },
      // Agrega más empresas si es necesario
    ]);
  }).catch(err => {
    console.error('Error en la sincronización de Empresa:', err);
  });

  return Empresa; // Devuelve el modelo Empresa al final del archivo
};

