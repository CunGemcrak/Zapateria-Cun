const { User } = require('../../../db.js');
const { Op } = require('sequelize');

const { MAIL_STILOZAP } = process.env;
const { transporter } = require('../../config/nodeMailerConfig');

const CrearUsuario = async (req, res) => {
  const { name, apell, correo, password } = req.body;
  console.log('Este es el query : ' + JSON.stringify(req.body));

  try {
    if (!name || !apell || !correo || !password) {
      return res.status(404).json({ message: 'Faltan datos' });
    }

    const consultaUser = await User.findOne({
      where: { email: correo }
    });

    if (consultaUser) {
      console.log('El Usuario ya existe');
      return res.status(201).json({ message: 'El usuario ya esta registrado' });
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



     

      await transporter.sendMail({
        from: `Usuario Registrado 😊 <${MAIL_STILOZAP}>`,
        to: correo,
        subject: "Usuario Registrado  😊",
        html: `
          <h2>Nuevo Registro</h2>
          <p>Hola ${name},</p>
          <p>Te damos la bienvenida  EstiloZap mundo del zapato.  👟</strong></p>
         
          <div style="text-align: center;">
            <div style="display: inline-block; border-radius: 50%; overflow: hidden; border: 2px solid black; width: 150px; height: 150px;">
              <img src="https://firebasestorage.googleapis.com/v0/b/stylezapapp.appspot.com/o/documentos%2Fdownload.gif?alt=media&token=50b7946a-5726-40ad-ad54-f3ed4a5edcd5" alt="Imagen Aprobado" style="width: 100%; height: 100%; object-fit: cover;">
            </div>
          </div>
          <br/>
          <p style="text-align: center;">Equipo Estilo Zap web master</p>
        `,
    });





        return res.status(200).json({ state: 'true' });
      } else {
        return res.status(201).json({mensaje: 'No se puede almacenar usuario' });
      }
    }
  } catch (error) {
    console.error('Error al consultar la base de datos:', error);
    return res.status(500).json({ message: 'Error interno del servidor' });
  }
};

module.exports = { CrearUsuario };
