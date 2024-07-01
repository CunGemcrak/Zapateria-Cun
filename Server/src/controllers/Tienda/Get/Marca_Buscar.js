const { Marca } = require('../../../db.js');

const obtenerMarcas = async (req, res) => {
    try {
        const marcas = await Marca.findAll();
        if (marcas.length > 0) {
          //  console.log('Marcas encontradas:', marcas);
            return res.status(200).json({ marcas });
        } else {
        //    console.log('No se encontraron marcas');
            return res.status(404).json({ message: 'No se encontraron marcas' });
        }
    } catch (error) {
        console.error('Error al buscar las marcas en la base de datos:', error);
        return res.status(500).json({ message: 'Error interno del servidor' });
    }
};

module.exports = { obtenerMarcas };
