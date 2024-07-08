import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FaEye, FaEyeSlash, FaEdit, FaSave, FaTimes  } from 'react-icons/fa';
import './ZapatosCard.css';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart, getCartItems } from '../../../Carrito/Carrito_Localstorang/CaritoLocalstorang';
import { Activar_Ocultar_Cards, Actualiza_Card, Muestra_Cards_Empresa, Eliminar_Card} from '../../../../Redux/Actions/Empresa/Actions-Empresa';
import alertify from 'alertifyjs';
import 'alertifyjs/build/css/alertify.css';

const ZapatosCard = ({
  id,
  tienda,
  marca,
  costo,
  color,
  modelo,
  calidad,
  descripcion,
  url,
  talla,
  activo
}) => {
  const User = useSelector((state) => state.USER);
  const [isEditing, setIsEditing] = useState(false); // Estado para controlar el modo de edición
  const [editedMarca, setEditedMarca] = useState(marca);
  const [editedCalidad, setEditedCalidad] = useState(calidad);
  const [editedModelo, setEditedModelo] = useState(modelo);
  const [editedTalla, setEditedTalla] = useState(talla);
  const [editedColor, setEditedColor] = useState(color);
  const [editedCosto, setEditedCosto] = useState(costo);
  const [cartItems, setCartItems] = useState([]);
  const [stadobtn, setStatebtn] = useState();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    color: '',
    talla: '',
    costo: '',
    marca: '',
    modelo: '',
   // descripcion: '',
    calidad: '',
    
   
});



      const colores = useSelector((state) => state.COLORES || []);
    const empresa = useSelector((state) => state.EMPRESA || []);
    const tallas = useSelector((state) => state.TALLAS || []);
    const marcas = useSelector((state) => state.MARCAS || []);
    const calidades = useSelector((state) =>state.CALIDAD || [])
    const categorias = useSelector((state)=>state.CATEGORIAS || [])

  // Cargar productos del carrito desde localStorage al inicio
  useEffect(() => {
    const items = getCartItems();
    if (activo === "true") {
      setStatebtn(true);
    } else {
      setStatebtn(false);
    }
    setCartItems(items.map(item => item.id)); // Guarda solo los IDs en cartItems para simplificar la comparación
  }, [activo]);

  const handleActivar = async (id) => {
    const dato = await dispatch(Activar_Ocultar_Cards(id));
    alert("Activar " + dato);
    setStatebtn(true);
  };

  const handleOcultar = async (id) => {
    const dato = await dispatch(Activar_Ocultar_Cards(id));
    alert("Ocultar " + dato);
    setStatebtn(false);
  };

  const handleAddToCart = () => {
    const item = {
      id,
      marca,
      tienda,
      costo,
      color,
      modelo,
      calidad,
      descripcion,
      url,
      talla,
      quantity: 1 // Ajusta la cantidad según tu necesidad
    };
    addToCart(item);
    setCartItems([...cartItems, id]); // Agrega el ID del producto al array de cartItems
    alert("Producto agregado al carrito");
  };

  const handleRemoveFromCart = () => {
    removeFromCart(id); // Implementa la función para eliminar del carrito
    setCartItems(cartItems.filter(itemId => itemId !== id)); // Elimina el ID del producto del array de cartItems
    alert("Producto eliminado del carrito");
  };

  const handleModificar = () => {
    setIsEditing(true); // Activa el modo de edición al hacer clic en editar
  };

  const handleSave =async (id) => {
    // Aquí implementarías la lógica para guardar los cambios
    // Por ejemplo, enviar los datos editados a la API, actualizar el estado, etc.
   

  // Verificar que todos los campos necesarios estén llenos
  if (
    !formData.color ||
    !formData.talla ||
    !formData.costo ||
    !formData.marca ||
    !formData.modelo ||
    !formData.calidad 
   
  ) {
    // Mostrar mensaje de alerta con Alertify
    alertify.alert('Mensaje', 'Faltan datos en el formulario' + JSON.stringify(formData));
    return; // Detener el proceso si faltan datos
  }

  const datos  = await dispatch(Actualiza_Card(id,tienda,formData))

  if(datos === "true"){
    alertify.alert("Actualizado", "Datos Actualizados Correctamente")
    dispatch(Muestra_Cards_Empresa(tienda))
  }else{
    alertify.warning("Error", "Datos no se lograron procesar")
  }
 




  setIsEditing(false); // Desactiva el modo de edición después de guardar
  alert("Cambios guardados" + id);


    

  };

  const handleDelete = (id)=>{
    alertify.confirm('Eliminar', '¿Estás seguro de que deseas eliminar este producto?', async function () {
      const res = await dispatch(Eliminar_Card(id));
      if (res === "true") {
        alertify.success('Producto eliminado correctamente');
        dispatch(Muestra_Cards_Empresa(tienda))
      } else {
        alertify.error('Error al eliminar el producto');
      }
    }, function () {
      alertify.error('Cancelado');
    });
  }

  // Verifica si el producto está en el carrito
  const isInCart = cartItems.includes(id);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
   
};

  return (
    <div className="zapatos-card" title={id}>
      <img
        src={url}
        alt="Zapato"
        className="zapatos-image"
      />
      <div className="zapatos-info">
        <div className='titulo-zapato'><p className='black-text'>Marca: </p>
          {isEditing ? (
            <select
            name="marca"
            value={formData.marca}
            onChange={handleChange}
             className='input-card-peque'
        >
            <option value="">Seleccione una marca</option>
            {marcas.map((m) => (
                <option key={m.id} value={m.marca}>
                    {m.marca}
                </option>
            ))}
        </select>
          ) : (
            marca
          )}
        </div>
        <div className="zapatos-price">
          <div className='parrafo-flex'>
            <p className='black-text'>Calidad:</p>
            {isEditing ? (
             <select
             name="calidad"
             value={formData.tipo}
             onChange={handleChange}
              className='input-card-peque'
         >
             <option value="">Seleccione una calidad</option>
             {calidades.map((m) => (
                 <option key={m.id} value={m.tipo}>
                     {m.tipo}
                 </option>
             ))}
         </select>
            ) : (
              calidad
            )}
            <p className='black-text'> Categoria:</p>
            {isEditing ? (
              <select
              name="modelo"
              value={formData.modelo}
              onChange={handleChange}
              className='input-card-peque'
          >
              <option value="">Seleccione una categoria</option>
              {categorias.map((m) => (
                  <option key={m.id} value={m.categoria}>
                      {m.categoria}
                  </option>
              ))}
          </select>
            ) : (
              modelo
            )}
          </div>
          <div className='parrafo-flex'>
            <p className='black-text'>Tallas:</p>
            {isEditing ? (
             <select
             name="talla"
             value={formData.talla}
             onChange={handleChange}
             className='input-card-peque'
         >
             <option value="">Seleccione una talla</option>
             {tallas.map((t) => (
                 <option key={t.id} value={t.talla}>
                     {t.talla}
                 </option>
             ))}
         </select>
            ) : (
              talla
            )}
            <p className='black-text'> Color:</p>
            {isEditing ? (
            <select
            name="color"
            value={formData.color}
            onChange={handleChange}
             className='input-card-peque'
        >
            <option value="">Seleccione un color</option>
            {colores.map((color) => (
                <option key={color.id} value={color.color}>
                    {color.color}
                </option>
            ))}
        </select>
            ) : (
              color
            )}
          </div>
          <div className='parrafo-flex'>
            <p className='black-text'>Costo:</p>
            {isEditing ? (
              <input
              name='costo'
              id='costo'
              type="text"
              value={formData.costo}
              onChange={(e) => setFormData({ ...formData, costo: e.target.value })}
              className='input-card-peque'
            />
            
            ) : (
              `$ ${costo}`
            )}
          </div>
        </div>
        {User.state === "true" ? (
          isInCart ? (
            <button className="zapatos-btn-Eliminar" onClick={() => handleRemoveFromCart()}>
              <FontAwesomeIcon icon={faTrash} className="icon" /> Eliminar del carrito
            </button>
          ) : (
            <button className="zapatos-btn" onClick={() => handleAddToCart()}>
              <FontAwesomeIcon icon={faShoppingCart} className="cart-icon" />
              Agregar al carrito
            </button>
          )
        ) : stadobtn ? (
          <div className='display-felx-btn'>
            <button className="zapatos-btn-Activar" onClick={() => handleOcultar(id)}>
              <FaEye className="icon" title='Ver Tarjeta' /> 
            </button>
            <button className="zapatos-btn-Activar" onClick={() => handleDelete(id)}>
              <FaTimes  className="icon" title='Eliminar Tarjeta' /> 
            </button>
            {isEditing ? (
             <><button className="zapatos-btn-Activar" onClick={() => handleSave(id)}>
                <FaSave className="icon" title='Guardar' /> 
              </button>
              </> 
            ) : (
              <button className="zapatos-btn-Activar" onClick={() => handleModificar()}>
                <FaEdit className="icon" title='Editar Textos' /> 
              </button>
            )}
          </div>
        ) : (
          <button className="zapatos-btn-Ocultar" onClick={() => handleActivar(id)}>
            <FaEyeSlash className="icon" title='Ocultar Tarjeta'/> 
          </button>
        )}
      </div>
    </div>
  );
}

export default ZapatosCard;
