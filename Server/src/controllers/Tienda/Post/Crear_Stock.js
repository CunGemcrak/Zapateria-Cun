const { Empresa, Zapatos } = require('../../../db.js');

const CrearStock = async (req, res) => {
  const { marca, costo, color, modelo, calidad, descripcion, urlImagen, correoEmpresa, talla } = req.body;
console.log("este es el body del create stock "+ JSON.stringify(req.body))
  try {
    if (!marca || !costo || !color || !modelo || !calidad || !descripcion || !urlImagen || !correoEmpresa || !talla) {
      return res.status(400).json({ message: 'Faltan datos' });
    }
    console.log("paso validacion ")
    // Buscar la empresa por correo electrónico
    const empresa = await Empresa.findOne({
      where: { correo: correoEmpresa }
    });
    console.log("reviso la empresa ")
    if (!empresa) {
      return res.status(201).json({ message: 'Empresa no encontrada' });
    }
    console.log("valido  la empresa ")
    // Crear el zapato
    const zapato = await Zapatos.create({
      marca,
      costo,
      color,
      modelo,
      calidad,
      descripcion,
      url:urlImagen,
      talla:talla,
      EmpresaId: empresa.id // Asociar el zapato con la empresa encontrada
    });
    console.log("creo el zapato")

    return res.status(200).json({ message: 'Stock creado y relacionado correctamente' });
  } catch (error) {
    console.error('Error al crear y relacionar stock:', error);
    return res.status(500).json({ message: 'Error interno del servidor' });
  }
};

module.exports = { CrearStock };
