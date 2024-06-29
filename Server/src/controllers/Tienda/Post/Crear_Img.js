const { Empresa, Imagen, Imagen_Emrpesa } = require('../../../db.js');

const CrearImagen = async (req, res) => {
  const { name, correo, urlImagen } = req.body;
  console.log('Este es el query de la img: ' + JSON.stringify(req.body));

  try {
    if (!name || !correo) {
      return res.status(400).json({ message: 'Faltan datos' });
    }

    const consultaUser = await Empresa.findOne({
      where: { correo }
    });

    console.log("Este es el resultado de la base de datos: " + JSON.stringify(consultaUser));

    if (consultaUser) {
      console.log('La Empresa ya existe');
    //  return res.status(400).json({ message: 'La empresa ya existe' });
 

      const imagen = await Imagen.create({
        url: urlImagen,
      });
      await Imagen_Emrpesa.addImagen(imagen);
    
      return res.status(200).json({ id: imagen.id });
    }
  } catch (error) {
    console.error('Error al consultar la base de datos:', error);
    return res.status(500).json({ message: 'Error interno del servidor' });
  }
};

module.exports = { CrearImagen };
