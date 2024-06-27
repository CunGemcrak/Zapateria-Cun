import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Loading from '../../loading/Loading';
import './CompanyZapatos.css';
import CompanyMenu from '../Company_Menu/CompanyMenu';

const CompanyZapatos = () => {
    const [loading, setLoading] = useState(true);
    const colores = useSelector((state) => state.COLORES);
    const Empresa = useSelector((state) => state.EMPRESA);
    const talla = useSelector((state) => state.TALLAS);
    const marca = useSelector((state) => state.MARCAS);
    

    const [formData, setFormData] = useState({
        color: '',
        talla: '',
        costo: '',
        marca: '',
        modelo: '',
        descripcion: '',
        calidad: '',
        url: ''
    });

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        alert(value)
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setFormData({ ...formData, url: reader.result });
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Datos del zapato:', formData);
        // Aquí puedes enviar formData a tu backend o realizar otra acción
    };

    return (
        <div>
            {loading ? <Loading /> : null}
            <CompanyMenu className="nav-menu" />
            <div className="body-zapatos">
                <h2>Crear Nuevo Zapato</h2>
                <form className="form-zapatos" onSubmit={handleSubmit}>
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
                        <select 
                            name="color" 
                            value={formData.color} 
                            onChange={handleChange}
                        >
                            <option value="">Seleccione un color</option>
                            {talla.map((talla) => (
                                <option key={talla.id} value={talla.talla}>
                                    {talla.talla}
                                </option>
                            ))}
                        </select>
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
                        <select 
                            name="marca" 
                            value={formData.marca} 
                            onChange={handleChange}
                        >
                            <option value="">Seleccione un marca</option>
                            {  marca.map((marcas) => (
                                <option key={marcas.id} value={marcas.marca}>
                                    {marcas.marca}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Modelo:</label>
                        <input 
                            type="text" 
                            name="modelo" 
                            value={formData.modelo} 
                            onChange={handleChange} 
                        />
                    </div>
                    <div className="form-group">
                        <label>Calidad:</label>
                        <select 
                            name="calidad" 
                            value={formData.calidad} 
                            onChange={handleChange} 
                        >
                            <option value="">Seleccione</option>
                            <option value="AA">AA</option>
                            <option value="AAA">AAA</option>
                            <option value="Tipo Original">Tipo Original</option>
                            <option value="Original">Original</option>
                        </select>
                    </div>
                    <div className="form-group form-group-textarea">
                        <label>Descripción:</label>
                        <textarea 
                            name="descripcion" 
                            value={formData.descripcion} 
                            onChange={handleChange} 
                        ></textarea>
                    </div>
                    <div className="form-group">
                        <label>Subir Imagen:</label>
                        <input 
                            type="file" 
                            accept="image/*" 
                            onChange={handleFileChange} 
                        />
                    </div>
                    {formData.url && (
                        <div className="form-group">
                            <label>Vista Previa:</label>
                            <img src={formData.url} alt="Vista previa" className="img-preview" />
                        </div>
                    )}
                    <button type="submit">Guardar Zapato</button>
                </form>
            </div>
        </div>
    );
};

export default CompanyZapatos;
