const { User } = require('../../../db.js');
const { Op } = require('sequelize');

const CrearUsuario = async (req, res) => {
  const { name, apell, correo, password } = req.body;
  console.log('Este es el query: ' + JSON.stringify(req.body));

  try {
    if (!name || !apell || !correo || !password) {
      return res.status(404).json({ message: 'Faltan datos' });
    }

    const consultaUser = await User.findOne({
      where: { email: correo }
    });

    if (consultaUser) {
      console.log('El Usuario ya existe');
      return res.status(400).json({ message: 'El usuario ya existe' });
    } else {
      console.log('Se puede almacenar');

      const [user, created] = await User.findOrCreate({
        where: { email: correo },
        defaults: {
          name,
          apell,
          celular:"null",
          email: correo,
          password,
          url:"null",
          tipe:"1",
          state: 'true'
        }
      });

      if (created) {
        console.log('Datos guardados correctamente');
        return res.status(200).json({ state: 'true' });
      } else {
        return res.status(400).json({ message: 'No se puede almacenar usuario' });
      }
    }
  } catch (error) {
    console.error('Error al consultar la base de datos:', error);
    return res.status(500).json({ message: 'Error interno del servidor' });
  }
};

module.exports = { CrearUsuario };
