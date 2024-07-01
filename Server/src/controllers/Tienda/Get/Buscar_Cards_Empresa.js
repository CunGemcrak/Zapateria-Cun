const { Zapatos } = require('../../../db');

const ObtenerCardsEmpresa = async (req, res) => {
    const { id } = req.params; // Obtenemos el ID de la empresa de los parámetros de la ruta

    try {
        // Consultar zapatos por ID de la empresa
        const cards = await Zapatos.findAll({
            where: {
                 tienda: id // Asumiendo que existe un campo empresaId en tu modelo Zapatos que relaciona los zapatos con una empresa
            }
        });

        if (cards.length > 0) {
            return res.status(200).json({ cards });
        } else {
            console.log('No se encontraron zapatos para esta empresa');
            return res.status(404).json({ message: 'No se encontraron zapatos para esta empresa' });
        }
    } catch (error) {
        console.error('Error al buscar zapatos en la base de datos:', error);
        return res.status(500).json({ message: 'Error interno del servidor' });
    }
};

module.exports = { ObtenerCardsEmpresa };
