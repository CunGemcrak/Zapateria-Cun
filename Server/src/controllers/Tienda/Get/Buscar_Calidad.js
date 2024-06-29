const { Calidad } = require('../../../db.js');

const obtenerCalidad = async (req, res) => {
    try {
        // Obtener todos los colores guardados en la base de datos
        const calidad = await Calidad.findAll();

        if (calidad.length > 0) {
            console.log('Colores encontrados:', calidad);
            return res.status(200).json({ calidad });
        } else {
            console.log('No se encontraron colores');
            return res.status(404).json({ message: 'No se encontraron calidad' });
        }
    } catch (error) {
        console.error('Error al buscar la calidad en la base de datos:', error);
        return res.status(500).json({ message: 'Error interno del servidor' });
    }
};

module.exports = { obtenerCalidad };