import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../../loading/Loading';
import './CompanyZapatos.css';
import CompanyMenu from '../Company_Menu/CompanyMenu';
import {  setTallas, setMarcas } from "../Company_Localstorang/Company_Localstorang";
import {Guardar_Stock} from '../../../Redux/Actions/Empresa/Actions-Empresa';
import alertify from 'alertifyjs';
import 'alertifyjs/build/css/alertify.css';





//firebase
import {getFirestore, collection, addDoc } from 'firebase/firestore'
import {getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import appfirebase from '../../../credenciales';

const storange = getStorage(appfirebase)
const db = getFirestore(appfirebase);

const CompanyZapatos = () => {
    const [loading, setLoading] = useState(true);
    const [formData, setFormData] = useState({
        color: '',
        talla: '',
        costo: '',
        marca: '',
        modelo: '',
        descripcion: '',
        calidad: '',
       
    });
    const [url, setUrl] = useState('https://firebasestorage.googleapis.com/v0/b/stylezapapp.appspot.com/o/documentos%2F1097661.jpg?alt=media&token=f17e6f46-b74d-4fcb-9f2e-0d334921d2a9')

  
    const dispatch = useDispatch();
    const colores = useSelector((state) => state.COLORES || []);
    const empresa = useSelector((state) => state.EMPRESA || []);
    const tallas = useSelector((state) => state.TALLAS || []);
    const marcas = useSelector((state) => state.MARCAS || []);
    const calidad = useSelector((state) =>state.CALIDAD || [])
    const categorias = useSelector((state)=>state.CATEGORIAS || [])

    




    useEffect(() => {
        const timer = setTimeout(() => {
          setLoading(false);
      //   alert(JSON.stringify(getEmpresa()))
          
     
        }, 3000);
    
        return () => clearTimeout(timer);
      }, [dispatch]);



    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    
    const handleFileChange = async (e) => {
      

        const file = e.target.files[0];

        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setFormData({ ...formData, url: reader.result });
            };
            reader.readAsDataURL(file);

            const refArchivo = ref(storange, `documentos/${file.name}`);
            await uploadBytes(refArchivo, file);
            const urle_descarfada = await getDownloadURL(refArchivo);
            //setFormData({ url: urle_descarfada });
            setUrl(urle_descarfada)
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Datos del zapato:', formData);
    };

    const hanldeAddMarca = () => {
        alertify.prompt(
            'Agregar Marca',
            'Ingrese el nombre de la nueva marca:',
            '',
            function (evt, value) {
                if (value.trim() !== '') {
                    setFormData({ ...formData, marca: value });
                    const newMarcas = [...marcas, { id: marcas.length + 1, marca: value }];
                    dispatch(setMarcas(newMarcas));
                    alertify.alert('Mensaje', 'Marca agregada con éxito');
                } else {
                    alertify.alert('Mensaje', 'El nombre de la marca no puede estar vacío');
                }
            },
            function () {
                alertify.error('Operación cancelada');
            }
        ).set({ labels: { ok: 'Guardar', cancel: 'Cancelar' } });
    };

    const hanldeAddTalla = () => {
        alertify.prompt(
            'Agregar Talla',
            'Ingrese el nombre de la nueva talla:',
            '',
            function (evt, value) {
                if (value.trim() !== '') {
                    setFormData({ ...formData, talla: value });
                    const newTallas = [...tallas, { id: tallas.length + 1, talla: value }];
                    dispatch(setTallas(newTallas));
                    alertify.alert('Mensaje', 'Talla agregada con éxito');
                } else {
                    alertify.alert('Mensaje', 'El nombre de la talla no puede estar vacío');
                }
            },
            function () {
                alertify.error('Operación cancelada');
            }
        ).set({ labels: { ok: 'Guardar', cancel: 'Cancelar' } });
    };


    const HandleGuardar = async () => {
        // Verificar que todos los campos necesarios estén llenos
        if (
          !formData.color ||
          !formData.talla ||
          !formData.costo ||
          !formData.marca ||
          !formData.categoria ||
          !formData.descripcion ||
          !formData.calidad
        ) {
          // Mostrar mensaje de alerta con Alertify
          alertify.alert('Mensaje', 'Faltan datos en el formulario');
          return; // Detener el proceso si faltan datos
        }
      
        try {
          const retorno = await dispatch(Guardar_Stock(formData, url, empresa.id));
          alertify.alert('Mensaje', retorno.message);
      
          // Guardar la información adicionalmente (ejemplo con Firestore)
          await addDoc(collection(db, 'zapatos'), {
            ...formData,
          });
      
          // Limpiar el formulario y resetear valores
          setFormData({
            color: '',
            talla: '',
            costo: '',
            marca: '',
            categoria: '',
            descripcion: '',
            calidad: '',
          });
      
          setUrl(
            'https://firebasestorage.googleapis.com/v0/b/stylezapapp.appspot.com/o/documentos%2F1097661.jpg?alt=media&token=f17e6f46-b74d-4fcb-9f2e-0d334921d2a9'
          );
        } catch (error) {
          console.error('Error:', error);
          // Manejar errores según tu lógica de la aplicación
        }
      };

    return (
        <div>
            {loading ? <Loading /> : null}
            <CompanyMenu className="nav-menu" />
            <div className="body-zapatos">
                <h2>Crear Nuevo Zapato</h2>
                <div className="form-zapatos" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Color:</label>
                        <select
                            name="color"
                            value={formData.color}
                            onChange={handleChange}
                        >
                            <option value="">Seleccione un color</option>
                            {colores.map((color) => (
                                <option key={color.id} value={color.color}>
                                    {color.color}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Talla:</label>
                        <div className='grupor-flex'>
                            <select
                                name="talla"
                                value={formData.talla}
                                onChange={handleChange}
                            >
                                <option value="">Seleccione una talla</option>
                                {tallas.map((t) => (
                                    <option key={t.id} value={t.talla}>
                                        {t.talla}
                                    </option>
                                ))}
                            </select>
                            <label className='btn-mas' onClick={hanldeAddTalla} title='Agregar una nueva talla'>+</label>
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Costo:</label>
                        <input
                            type="number"
                            name="costo"
                            value={formData.costo}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Marca:</label>
                        <div className='grupor-flex'>
                            <select
                                name="marca"
                                value={formData.marca}
                                onChange={handleChange}
                            >
                                <option value="">Seleccione una marca</option>
                                {marcas.map((m) => (
                                    <option key={m.id} value={m.marca}>
                                        {m.marca}
                                    </option>
                                ))}
                            </select>
                            <label className='btn-mas' onClick={hanldeAddMarca} title='Agregar una nueva marca'>+</label>
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Categoria:</label>
                        <div className='grupor-flex'>
                            <select
                                name="categoria"
                                value={formData.categoria}
                                onChange={handleChange}
                            >
                                <option value="">Seleccione una categoria</option>
                                {categorias.map((m) => (
                                    <option key={m.id} value={m.categoria}>
                                        {m.categoria}
                                    </option>
                                ))}
                            </select>
                            <label className='btn-mas' onClick={hanldeAddMarca} title='Agregar una nueva marca'>+</label>
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Calidad:</label>
                        <div className='grupor-flex'>
                            <select
                                name="calidad"
                                value={formData.calidad}
                                onChange={handleChange}
                            >
                                <option value="">Seleccione una calidad</option>
                                {calidad.map((m) => (
                                    <option key={m.id} value={m.tipo}>
                                        {m.tipo}
                                    </option>
                                ))}
                            </select>
                            <label className='btn-mas' onClick={hanldeAddMarca} title='Agregar una nueva marca'>+</label>
                        </div>
                    </div>
                    <div className="form-group form-group-textarea">
                        <label>Descripción:</label>
                        <textarea
                            name="descripcion"
                            value={formData.descripcion}
                            onChange={handleChange}
                        ></textarea>
                    </div>
                  {  /*
                    <div className="form-group">
                        <label>Subir Imagen:</label>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleFileChange}
                        />
                    </div>*/
                    }
                        <div className="form-group">
                            <label >Vista Previa:</label>
                            <img src={url} alt="Vista previa" className="img-preview" />
                            <label>Subir Imagen:</label>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleFileChange}
                        />
                        </div>
                    
                    <div onClick={HandleGuardar}  className='btn-Enviar'>Guardar Zapato</div>
                </div>
            </div>
        </div>
    );
};

export default CompanyZapatos;
