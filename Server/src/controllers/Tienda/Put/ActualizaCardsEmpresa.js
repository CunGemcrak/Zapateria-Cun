const { Zapatos } = require('../../../db.js');

const ActualizaCardsEmpresa = async (req, res) => {
  const { id } = req.params; // Obtenemos el ID del zapato a actualizar desde los parámetros de la ruta
  const { tienda, marca, costo, color, modelo, calidad, talla, activo } = req.body; // Obtenemos los datos actualizados del cuerpo de la solicitud
  
  try {
    // Verificar si el zapato existe
    const zapato = await Zapatos.findOne({
      where: { id }
    });

    if (!zapato) {
      console.log('El zapato no existe');
      return res.status(404).json({ message: 'El zapato no existe' });
    }

    // Actualizar el zapato con los nuevos datos
    await Zapatos.update(
      {
        tienda,
        marca,
        costo,
        color,
        modelo,
        calidad,
        talla,
        activo
      },
      {
        where: { id }
      }
    );

    console.log('Datos del zapato actualizados correctamente');
    return res.status(200).json({ data: 'true' });
  } catch (error) {
    console.error('Error al actualizar el zapato en la base de datos:', error);
    return res.status(500).json({ message: 'Error interno del servidor' });
  }
};

module.exports = { ActualizaCardsEmpresa };
