const { Empresa } = require('../../../db.js');

const obtenerTienda = async (req, res) => {
    const { id } = req.params;
    try {
        // Obtener la empresa por su ID
        const empresa = await Empresa.findByPk(id);

        if (empresa) {
            // Si se encontró la empresa, devolver su nombre
            return res.status(200).json({ name: empresa.name });
        } else {
            // Si no se encontró la empresa
            return res.status(404).json({ message: 'No se encontró la empresa' });
        }
    } catch (error) {
        console.error('Error al buscar la empresa en la base de datos:', error);
        return res.status(500).json({ message: 'Error interno del servidor' });
    }
};

module.exports = { obtenerTienda };
