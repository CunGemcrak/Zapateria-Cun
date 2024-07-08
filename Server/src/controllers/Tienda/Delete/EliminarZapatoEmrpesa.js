const { Zapatos } = require('../../../db.js');

const EliminarZapatoEmrpesa = async (req, res) => {
  const { id } = req.params; // Obtenemos el ID de los parámetros de la ruta

  try {
    // Buscar el zapato por ID
    const zapato = await Zapatos.findByPk(id);

    if (!zapato) {
      console.log('El zapato no existe');
      return res.status(404).json({ message: 'El zapato no existe' });
    }

    // Eliminar el zapato de la base de datos
    await zapato.destroy();

    console.log('Zapato eliminado correctamente');
    return res.status(200).json({ data: 'true' });
  } catch (error) {
    console.error('Error al eliminar el zapato:', error);
    return res.status(500).json({ message: 'Error interno del servidor' });
  }
};

module.exports = { EliminarZapatoEmrpesa };
