// controllers/Tienda/Get/ObtenerOrdersEmpresa.js
const { Venta } = require('../../../db.js');

const ObtenerOrdersEmpresa = async (req, res) => {
  const { id } = req.params; // Obtén el ID de la empresa desde los parámetros de la ruta
  console.log("El eid es ", id);

  try {
    // Busca todas las ventas
    let ventas = await Venta.findAll();

    // Filtra las ventas para obtener solo los ítems de la tienda específica
    const ventasFiltradas = ventas.map(venta => {
      const items = JSON.parse(venta.item);
      const itemsFiltrados = items.filter(item => item.tienda === id);

      return {
        ...venta.toJSON(),
        item: itemsFiltrados,
        idVentas: venta.id
      };
    }).filter(venta => venta.item.length > 0);

    console.log("mensaje "+JSON.stringify(ventasFiltradas));

    if (ventasFiltradas.length === 0) {
      return res.status(404).json({ error: 'No se encontraron ventas para la tienda especificada' });
    }

    return res.status(200).json(ventasFiltradas);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Error interno del servidor' });
  }
};

module.exports = { ObtenerOrdersEmpresa };
