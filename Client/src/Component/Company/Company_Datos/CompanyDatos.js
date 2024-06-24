import React, { useState, useEffect } from 'react';
import './Company.Datos.css';
import { useSelector } from 'react-redux';

const CompanyDatos = () => {
  const Empresa = useSelector((state) => state.EMPRESA);

  const initialData = {
   
    nombre: Empresa.name,
    correo: Empresa.correo,
    celular: Empresa.celular,
    direccion: 'Calle Principal #123',
    descripcion: Empresa.Descripcion,
    url: Empresa.url,
    status: Empresa.status,
  };

  const [dataCompany, setDataCompany] = useState(initialData);
  const [editable, setEditable] = useState(false);

  useEffect(() => {
    setDataCompany({
      nombre: Empresa.name,
      correo: Empresa.correo,
      celular: Empresa.celular,
      direccion: 'Calle Principal #123',
      descripcion: Empresa.Descripcion,
      url: Empresa.url,
      status: Empresa.status,
    });
  }, [Empresa]);

  const handleEdit = () => {
    setEditable(true);
  };

  const handleSave = () => {
    setEditable(false);
    // Aquí podrías enviar la información actualizada al servidor o realizar otras operaciones necesarias
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDataCompany({ ...dataCompany, [name]: value });
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
          {editable ? (
            <button onClick={handleSave}>Guardar</button>
          ) : (
            <button onClick={handleEdit}>Habilitar Edición</button>
          )}
        </div>
      </div>
      <div className="companydatos-image">
        <img src={dataCompany.url} alt="Logo de la empresa" />
        <div>Subir imagen</div>
      </div>
    </div>
  );
};

export default CompanyDatos;
