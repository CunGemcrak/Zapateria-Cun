const { Empresa } = require('../../../db.js');

const ActualizarEmpresa = async (req, res) => {
  const { id } = req.params; // Obtenemos el nombre de los parámetros de la ruta
  const { celular, correo, password, Descripcion, url } = req.body; // Obtenemos los datos del cuerpo de la solicitud

  console.log('Este es el query: ' + JSON.stringify(req.body));

  try {
    // Verificar si la empresa existe
    const empresa = await Empresa.findOne({
      where: { id } // Utilizamos la columna 'name' para buscar la empresa
    });

    if (!empresa) {
      console.log('La empresa no existe');
      return res.status(404).json({ message: 'La empresa no existe' });
    }

    // Actualizar la empresa con los nuevos datos
    await Empresa.update(
      {
        celular: celular || empresa.celular,
        correo: correo || empresa.correo,
        password: password || empresa.password,
        Descripcion: Descripcion || empresa.Descripcion,
        url: url || empresa.url
      },
      {
        where: { id } // Utilizamos la columna 'name' para buscar la empresa
      }
    );

    console.log('Datos actualizados correctamente');
    return res.status(200).json({ message: 'Datos actualizados correctamente' });
  } catch (error) {
    console.error('Error al actualizar la base de datos:', error);
    return res.status(500).json({ message: 'Error interno del servidor' });
  }
};

module.exports = { ActualizarEmpresa };
