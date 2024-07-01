const { Zapatos } = require('../../../db.js');

const Activar_Ocultar_Card = async (req, res) => {
  const { id } = req.params; // Obtenemos el ID de los parámetros de la ruta
console.log("este es el id " + id);
  try {
    // Buscar el zapato por ID
    const zapato = await Zapatos.findByPk(id);

    if (!zapato) {
      console.log('El zapato no existe');
      return res.status(404).json({ message: 'El zapato no existe' });
    }

    let nuevoEstado;
    if (zapato.activo === "true") {
      nuevoEstado = "false"; // Si está activo, desactivar
    } else {
      nuevoEstado = "true"; // Si no está activo, activar
    }


    console.log("estado actual  " + zapato.activo);
    await zapato.update({
      activo: nuevoEstado
    });

    console.log('Estado del zapato actualizado correctamente');
    return res.status(200).json({ estate: zapato.activo});
  } catch (error) {
    console.error('Error al actualizar el estado del zapato:', error);
    return res.status(500).json({ message: 'Error interno del servidor' });
  }
};

module.exports = { Activar_Ocultar_Card };
