const { User } = require('../../../db.js');
const { Op } = require('sequelize');

const BusquedaUsuario = async (req, res) => {
    const { correo, pass } = req.params; // Obtenemos los datos de los parámetros de ruta
    console.log('Correo: ' + correo + ', Contraseña: ' + pass);
    
    try {
        if (!correo || !pass) {
            return res.status(404).json({ message: 'Faltan el correo o la contraseña' });
        }

        const usuarioEncontrado = await User.findOne({
            where: {
                [Op.or]: [
                    { email: correo },
                    { celular: correo }
                ],
                password: pass
            }
        });

        if (usuarioEncontrado) {
            console.log('Usuario encontrado:', usuarioEncontrado);
            return res.status(200).json({ usuario: usuarioEncontrado });
        } else {
            console.log('Usuario no encontrado');
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }
    } catch (error) {
        console.error('Error al buscar el usuario en la base de datos:', error);
        return res.status(500).json({ message: 'Error interno del servidor' });
    }
};

module.exports = { BusquedaUsuario };
