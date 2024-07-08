import React, { useState, useEffect } from 'react';
import './Perfil_user.css';
import NavMenu from '../../navMenu/NavMenu';
import { FiUser, FiMail, FiPhone, FiLock, FiImage } from 'react-icons/fi';
import { getUserData, setUserData } from '../LocalStorangUser/LocalstorangUser';
import { LogalstorangUSER, Buscar_Orders_Users, Actualizar_Usuario } from '../../../Redux/Actions/Usuario/Action-user';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Loading from '../../loading/Loading';

// Firebase
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import appfirebase from '../../../credenciales';


const storange = getStorage(appfirebase)
const db = getFirestore(appfirebase);

const PerfilUser = () => {
  const [loading, setLoading] = useState(true);
  const user = useSelector((state) => state.USER);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    
    nombre: '',
    apellido: '',
    celular: '',
    email: '',
    url: user.url,
  });
  const [imagePreview, setImagePreview] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const storedUser = getUserData();
    if (!user || user.state === "false") {
      if (!storedUser || storedUser.state === "false") {
        navigate('/');
      } else {
        dispatch(Buscar_Orders_Users(storedUser.id));
        dispatch(LogalstorangUSER(storedUser));
      }
    } else {
      setUserData(user);
    }
  }, [navigate, user, dispatch]);

  useEffect(() => {
    if (user && user.state !== "false") {
      setFormData({
        nombre: user.name,
        apellido: user.apell,
        celular: user.celular,
        email: user.email,
        url: user.url
      });
      setImagePreview(user.url);
    }
  }, [user]);

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result); // Mostrar la vista previa de la imagen
      };
      reader.readAsDataURL(file);
      const refArchivo = ref(storange, `documentos/${file.name}`);
      await uploadBytes(refArchivo, file);
      const urle_descarfada = await getDownloadURL(refArchivo);
      setImagePreview(urle_descarfada)
     
     
      setFormData({ ...formData, url: urle_descarfada }); // Guardar el archivo seleccionado en el estado formData
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = async () => {
    
    try {
      dispatch(Actualizar_Usuario(user.id, formData));
      setImagePreview(formData.ur)
      await addDoc(collection(db, 'user'), {
        ...formData,
      });
    
    } catch (error) {
      
    }
     
  
      setIsEditing(false);
    
  };
  

  const handleCancelClick = () => {
    // Revertir los cambios si se cancela la edición
    setFormData({
      nombre: user.nombre,
      apellido: user.apellido,
      celular: user.celular,
      email: user.email,
      pass: user.pass,
    });
    
    setIsEditing(false);
  };

  return (
    <>
      {loading && <Loading />}
      <NavMenu className="nav-menu" />
      <div className='body-user-perfil-centar'>
        <div className='form-perfil-user'>
          <h2>PERFIL USUARIO</h2>
          <div className="image-preview">
            <img src={imagePreview} alt="Preview" />
          </div>

          <div className="input-group-perfil">
            <FiImage className="input-icon" />
            <input
              type="file"
              name="image"
              accept="image/*"
              className="perfil-user-input"
              onChange={handleImageChange}
              disabled={!isEditing}
            />
          </div>

          <div className='cuadro-general'>
            <div className="data-container-input">
              <div className="input-group-perfil perfil-user-nombre">
                <FiUser className="input-icon" />
                <input
                  type='text'
                  name='nombre'
                  placeholder='Nombre'
                  className="perfil-user-input"
                  value={formData.nombre}
                  onChange={handleChange}
                  disabled={!isEditing}
                />
              </div>
              <div className="input-group-perfil perfil-user-apellido">
                <FiUser className="input-icon" />
                <input
                  type='text'
                  name='apellido'
                  placeholder='Apellido'
                  className="perfil-user-input"
                  value={formData.apellido}
                  onChange={handleChange}
                  disabled={!isEditing}
                />
              </div>
              <div className="input-group-perfil perfil-user-celular">
                <FiPhone className="input-icon" />
                <input
                  type='tel'
                  name='celular'
                  placeholder='Celular'
                  className="perfil-user-input"
                  value={formData.celular}
                  onChange={handleChange}
                  disabled={!isEditing}
                />
              </div>
              <div className="input-group-perfil perfil-user-email">
                <FiMail className="input-icon" />
                <input
                  type='email'
                  name='email'
                  placeholder='Correo'
                  className="perfil-user-input"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={!isEditing}
                />
              </div>
            </div>
            {!isEditing ? (
              <div className="btn-editar" onClick={handleEditClick}>Editar</div>
            ) : (
              <div className='btn-group-edit'>
                <div className="btn-cancelar" onClick={handleSaveClick}>Guardar</div>
                <div className="btn-cancelar" onClick={handleCancelClick}>Cancelar</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default PerfilUser;
