import React, { useState, useEffect } from 'react';
import './Company.Datos.css';
import { useDispatch, useSelector } from 'react-redux';
import { Actualizar_Datos_Company } from '../../../Redux/Actions/Empresa/Actions-Empresa'
import alertify from 'alertifyjs';
import 'alertifyjs/build/css/alertify.css';

import img from '../Company_img/depositphotos_59468249-stock-photo-shoes-on-the-shelf.jpg';




//firebase
import {getFirestore, collection, addDoc } from 'firebase/firestore'
import {getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import appfirebase from '../../../credenciales';


const storange = getStorage(appfirebase)
const db = getFirestore(appfirebase);


const CompanyDatos = () => {
  const Empresa = useSelector((state) => state.EMPRESA);
  const dispatch = useDispatch()

  const initialData = {
    nombre: Empresa.name,
    correo: Empresa.correo,
    celular: Empresa.celular,
    direccion: 'Calle Principal #123',
    descripcion: Empresa.Descripcion,
    url: 'https://st2.depositphotos.com/1000333/5946/i/450/depositphotos_59468249-stock-photo-shoes-on-the-shelf.jpg',
    status: Empresa.status,
  };

  const [dataCompany, setDataCompany] = useState(initialData);
  const [editable, setEditable] = useState(false);
  const [imageFile, setImageFile] = useState(null); // Estado para manejar el archivo de imagen
  const [imagePreview, setImagePreview] = useState(Empresa.url); // Estado para la vista previa de la imagen

  useEffect(() => {
    setDataCompany({
      id:Empresa.is,
      nombre: Empresa.name,
      correo: Empresa.correo,
      celular: Empresa.celular,
      direccion: 'Calle Principal #123',
      descripcion: Empresa.Descripcion,
      url: Empresa.url,
      status: Empresa.status,
    });
    setImagePreview(Empresa.url || img); // Si no hay URL de la empresa, utiliza la imagen inicial
  }, [Empresa]);

  const handleEdit = () => {
    setEditable(true);
  };

  const handleCancelar = ()=>{
    setEditable(false);
  }

  const handleSave = async() => {
    alert("Datos "+ JSON.stringify(imageFile))



    try {
      const retorno = await  dispatch(Actualizar_Datos_Company(dataCompany, Empresa.id))
      alertify.alert('Mensaje', retorno.message);
      setEditable(false);
      // Guardar la información adicionalmente (ejemplo con Firestore)
      await addDoc(collection(db, 'empresa'), {
        ...dataCompany,
      });
  
      
     
    } catch (error) {
      console.error('Error:', error);
      // Manejar errores según tu lógica de la aplicación
    }


    
   
    
    // Aquí podrías enviar la información actualizada al servidor o realizar otras operaciones necesarias
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDataCompany({ ...dataCompany, [name]: value });
  };

  const handleFileChange = async (e) => {
      

    const file = e.target.files[0];

    if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setDataCompany({ ...dataCompany, url: reader.result });
        };
        reader.readAsDataURL(file);

        const refArchivo = ref(storange, `documentos/${file.name}`);
        await uploadBytes(refArchivo, file);
        const urle_descarfada = await getDownloadURL(refArchivo);
        //setFormData({ url: urle_descarfada });
        setImagePreview(urle_descarfada)
        setDataCompany({ ...dataCompany, url: urle_descarfada });
    }
};

  return (
    <div className="companydatos-container">
      <div className="companydatos-info">
        <h2>Datos de la Empresa</h2>
       
        <div className="companydatos-item">
          <strong>Nombre:</strong>{' '}
          {editable ? (
            <input type="text" name="nombre" value={dataCompany.nombre} onChange={handleChange} />
          ) : (
            dataCompany.nombre
          )}
        </div>
        <div className="companydatos-item">
          <strong>Correo:</strong>{' '}
          {editable ? (
            <input type="text" name="correo" value={dataCompany.correo} onChange={handleChange} />
          ) : (
            dataCompany.correo
          )}
        </div>
        <div className="companydatos-item">
          <strong>Celular o Teléfono:</strong>{' '}
          {editable ? (
            <input type="text" name="celular" value={dataCompany.celular} onChange={handleChange} />
          ) : (
            dataCompany.celular
          )}
        </div>
        <div className="companydatos-item">
          <strong>Dirección:</strong>{' '}
          {editable ? (
            <input type="text" name="direccion" value={dataCompany.direccion} onChange={handleChange} />
          ) : (
            dataCompany.direccion
          )}
        </div>
        <div className="companydatos-item">
          <strong>Descripción:</strong>{' '}
          {editable ? (
            <input type="text" name="descripcion" value={dataCompany.descripcion} onChange={handleChange} />
          ) : (
            dataCompany.descripcion
          )}
        </div>
        <div className="companydatos-item">
          <strong>Estado:</strong>{' '}
          {editable ? (
            <input type="text" name="status" value={dataCompany.status} onChange={handleChange} />
          ) : (
            dataCompany.status
          )}
        </div>
        <div className="companydatos-actions">
          {editable ? (<>
            <button onClick={handleSave}>Guardar</button>
            <button onClick={handleCancelar}>cancelar</button>
            </>) : (
            <button onClick={handleEdit}>Habilitar Edición</button>
          )}
        </div>
      </div>
      <div className='grupo-file-img'>
      <div className="companydatos-image">

        <img src={imagePreview} alt="Logo de la empresa" />
      
      </div>
      {editable 
      ? <input type="file" accept="image/*" onChange={handleFileChange} />
      :null
      }
      </div>
    </div>
  );
};

export default CompanyDatos;

