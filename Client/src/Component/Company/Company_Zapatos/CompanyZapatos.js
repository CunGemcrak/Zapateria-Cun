import React, { useEffect, useState } from 'react';
import { useSelector } from "react-redux";
import Loading from '../../loading/Loading';
import './CompanyZapatos.css';
import CompanyMenu from '../Company_Menu/CompanyMenu';

const CompanyZapatos = () => {
    const [loading, setLoading] = useState(true);
    const Empresa = useSelector((state) => state.EMPRESA);
    
    const [formData, setFormData] = useState({
        color: '',
        talla: '',
        costo: '',
        marca: '',
        modelo: '',
        descripcion: '',
        calidad: '' // Nuevo campo calidad
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
                <div className="form-zapatos" onClick={handleSubmit}>
                    <div className="form-group">
                        <label>Color:</label>
                        <input 
                            type="text" 
                            name="color" 
                            value={formData.color} 
                            onChange={handleChange} 
                        />
                    </div>
                    <div className="form-group">
                        <label>Talla:</label>
                        <input 
                            type="text" 
                            name="talla" 
                            value={formData.talla} 
                            onChange={handleChange} 
                        />
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
                        <input 
                            type="text" 
                            name="marca" 
                            value={formData.marca} 
                            onChange={handleChange} 
                        />
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
                    <button type="submit">Guardar Zapato</button>
                </div>
            </div>
        </div>
    );
};

export default CompanyZapatos;

