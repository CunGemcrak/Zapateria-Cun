const { Categoria } = require('../../../db.js');

const obtenerCategorias = async (req, res) => {
    try {
        // Obtener todos los colores guardados en la base de datos
        const categoria = await Categoria.findAll();

        if (categoria.length > 0) {
            console.log('Categorias encontrados:', categoria);
            return res.status(200).json({ categoria });
        } else {
            console.log('No se encontraron colores');
            return res.status(404).json({ message: 'No se encontraron calidad' });
        }
    } catch (error) {
        console.error('Error al buscar la calidad en la base de datos:', error);
        return res.status(500).json({ message: 'Error interno del servidor' });
    }
};

module.exports = { obtenerCategorias };