// controllers/Tienda/Get/Actualizar_Estado_Orden.js
const { Venta } = require('../../../db.js');

const ActualizaOrder = async (req, res) => {
  const { id } = req.params; // Obtén el ID de la empresa desde los parámetros de la ruta
  const { estado } = req.body; // Nuevo estado a actualizar
console.log("El eid es ", id , " estado es ", estado);
  try {
    // Busca la empresa por ID
    let venta = await Venta.findByPk(id);

    if (!venta) {
      return res.status(404).json({ error: 'Venta no encontrada' });
    }

    // Actualiza el estado de la empresa
    venta.estado = estado;
    await venta.save();

    return res.status(200).json(empresa); // Devuelve la empresa actualizada como respuesta
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Error interno del servidor' });
  }
};

module.exports = { ActualizaOrder };
