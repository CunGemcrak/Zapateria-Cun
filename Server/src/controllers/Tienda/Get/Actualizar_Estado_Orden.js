// controllers/Tienda/Get/Actualizar_Estado_Orden.js
const { Venta, User } = require('../../../db.js');
const { MAIL_CLUB } = process.env;

const { transporter } = require('../../config/nodeMailerConfig.js')

const ActualizaOrder = async (req, res) => {
  const { id } = req.params; // Obtén el ID de la empresa desde los parámetros de la ruta
  const { estado } = req.body; // Nuevo estado a actualizar
console.log("El eid es ", id , " estado es ", estado);
  try {
    // Busca la empresa por ID
    let venta = await Venta.findByPk(id);

    if (!venta) {
      return res.status(404).json({ error: 'Venta no encontrada' });
    }

    // Actualiza el estado de la empresa
    venta.estado = estado;
    await venta.save();

    const user = await User.findByPk(venta.id_usuario);
      // Enviar correo de verificación
      let correo = user.email

      if (estado === "Aprobado") {
        await transporter.sendMail({
          from: `Compra Aprobada ✅ ${MAIL_CLUB}`,
          to: correo,
          subject: "Compra Aprobada ✔",
          html: `
            <h2>Compra Aprobada</h2>
            <p>Tu compra ha sido procesada correctamente.</p>
            <div style="text-align: center;">
              <div style="display: inline-block; border-radius: 50%; overflow: hidden; border: 2px solid black; width: 150px; height: 150px;">
                <img src="https://firebasestorage.googleapis.com/v0/b/stylezapapp.appspot.com/o/documentos%2Fdownload.gif?alt=media&token=50b7946a-5726-40ad-ad54-f3ed4a5edcd5" alt="Imagen Aprobado" style="width: 100%; height: 100%; object-fit: cover;">
              </div>
            </div>
            <br/>
            <p style="text-align: center;">Equipo Estilo Zap web master</p>
          `,
        });
      } else if (estado === "Rechazado") {
        await transporter.sendMail({
          from: `Compra Rechazada ❌ ${MAIL_CLUB}`,
          to: correo,
          subject: "Compra Rechazada ❌",
          html: `
            <h2>Compra Rechazada</h2>
            <p>Lamentamos informarte que tu compra ha sido rechazada.</p>
            <div style="text-align: center;">
              <div style="display: inline-block; border-radius: 50%; overflow: hidden; border: 2px solid black; width: 150px; height: 150px;">
                <img src="https://firebasestorage.googleapis.com/v0/b/stylezapapp.appspot.com/o/documentos%2Fdownload.gif?alt=media&token=50b7946a-5726-40ad-ad54-f3ed4a5edcd5" alt="Imagen Rechazado" style="width: 100%; height: 100%; object-fit: cover;">
              </div>
            </div>
            <br/>
            <p style="text-align: center;">Equipo Estilo Zap web master</p>
          `,
        });
      }
      
      
     

    return res.status(200).json(empresa); // Devuelve la empresa actualizada como respuesta
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Error interno del servidor' });
  }
};

module.exports = { ActualizaOrder };
