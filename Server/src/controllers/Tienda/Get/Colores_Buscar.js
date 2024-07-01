const { Color } = require('../../../db.js');

const obtenerColores = async (req, res) => {
    try {
        // Obtener todos los colores guardados en la base de datos
        const colores = await Color.findAll();

        if (colores.length > 0) {
         //   console.log('Colores encontrados:', colores);
            return res.status(200).json({ colores });
        } else {
       //     console.log('No se encontraron colores');
            return res.status(404).json({ message: 'No se encontraron colores' });
        }
    } catch (error) {
        console.error('Error al buscar los colores en la base de datos:', error);
        return res.status(500).json({ message: 'Error interno del servidor' });
    }
};

module.exports = { obtenerColores };
