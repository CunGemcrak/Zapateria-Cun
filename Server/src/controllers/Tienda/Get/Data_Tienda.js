const { Empresa } = require('../../../db.js');


const DataTiendaUsuario = async (req, res) => {
    const { correo, pass } = req.params; // Obtenemos los datos de los parámetros de ruta
    console.log('Correo: ' + correo + ', Contraseña: ' + pass);
    
    try {
        if (!correo || !pass) {
            return res.status(404).json({ message: 'Faltan el correo o la contraseña' });
        }

        // Consultar usuario por correo y contraseña
        const usuario = await Empresa.findOne({
            where: {
                correo: correo,
                password: pass
            }
        });

        if (usuario) {
            console.log('Usuario encontrado:', usuario);
            return res.status(200).json({ usuario });
        } else {
            console.log('Usuario no encontrado');
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }
    } catch (error) {
        console.error('Error al buscar el usuario en la base de datos:', error);
        return res.status(500).json({ message: 'Error interno del servidor' });
    }
};

module.exports = { DataTiendaUsuario };
