const { Talla } = require('../../../db.js');

const obtenerTallas = async (req, res) => {
    try {
        const tallas = await Talla.findAll();
        if (tallas.length > 0) {
         //   console.log('Tallas encontradas:', tallas);
            return res.status(200).json({ tallas });
        } else {
          //  console.log('No se encontraron tallas');
            return res.status(404).json({ message: 'No se encontraron tallas' });
        }
    } catch (error) {
        console.error('Error al buscar las tallas en la base de datos:', error);
        return res.status(500).json({ message: 'Error interno del servidor' });
    }
};


module.exports = { obtenerTallas };
