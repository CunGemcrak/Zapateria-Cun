// Middleware de validación
const validarCreacionStock = (req, res, next) => {
  const { tienda, marca, costo, color, modelo, calidad, descripcion, urlImagen, talla, correoEmpresa } = req.body;

  if (!tienda || !marca || !costo || !color || !modelo || !calidad || !descripcion || !urlImagen || !talla || !correoEmpresa) {
    console.log('Faltan datos');
    return res.status(400).json({ message: 'Faltan datos' });
  }

  // Puedes agregar más validaciones específicas según tus necesidades, como verificar tipos de datos, longitud de cadenas, etc.

  next(); // Continuar con la siguiente función (por ejemplo, la función para crear el stock)
};

// Ruta para crear stock
const { Empresa, Zapatos } = require('../../../db.js');

const CrearStock = async (req, res) => {
  const { tienda, marca, costo, color, modelo, calidad, descripcion, urlImagen, talla, correoEmpresa } = req.body;

  try {
    // Validar que los datos estén presentes y sean válidos
    // Aquí podrías usar el middleware validarCreacionStock antes de llegar a esta parte

    // Buscar la empresa por correo electrónico
    const empresa = await Empresa.findOne({
      where: { correo: correoEmpresa }
    });

    if (!empresa) {
      return res.status(404).json({ message: 'Empresa no encontrada' });
    }

    // Crear el zapato
    const zapato = await Zapatos.create({
      tienda,
      marca,
      costo,
      color,
      modelo,
      calidad,
      descripcion,
      url: urlImagen,
      talla,
      EmpresaId: empresa.id,
      activo: true
    });

    return res.status(200).json({ message: 'Stock creado y relacionado correctamente' });
  } catch (error) {
    console.error('Error al crear y relacionar stock:', error);
    return res.status(500).json({ message: 'Error interno del servidor' });
  }
};

module.exports = { validarCreacionStock, CrearStock };
