import React, { useState } from 'react';
import './navFilters.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  Combined_Filter,
  Filter_Quitar,
} from '../../Redux/Actions/Usuario/Action-user';

const NavFilter = () => {
  const dispatch = useDispatch();
  const cards = useSelector((state) => state.CopyCARDS); // Asegúrate de usar CopyCARDS como referencia
  const [selectedType, setSelectedType] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedSize, setSelectedSize] = useState('');

  const handleTypeChange = (type) => {
    setSelectedType(type);
    applyFilters(type, selectedCategory, selectedSize);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    //alert(category)
    applyFilters(selectedType, category, selectedSize);
  };

  const handleSizeChange = (size) => {
    setSelectedSize(size);
    applyFilters(selectedType, selectedCategory, size);
  };

  const applyFilters = (type, category, size) => {
    dispatch(Combined_Filter(cards, type, category, size));
  };

  const handleQuitarFilter = () => {
    setSelectedType('');
    setSelectedCategory('');
    setSelectedSize('');
    dispatch(Filter_Quitar(cards));
  };

  return (
    <div className="navfilter-container">
      <div className="navfilter-section">
        <h2 className="navfilter-subtitle-titulo">Filtros</h2>
        <div onClick={handleQuitarFilter} className="filter-null">Quitar Filtros</div>
        
        <h4 className="navfilter-subtitle">Tipo</h4>
        <div className="navfilter-option">
          <input
            type="radio"
            id="caballero"
            name="type"
            value="caballero"
            checked={selectedType === 'caballero'}
            onChange={() => handleTypeChange('caballero')}
          />
          <label htmlFor="caballero">Caballero</label>
        </div>
        <div className="navfilter-option">
          <input
            type="radio"
            id="dama"
            name="type"
            value="dama"
            checked={selectedType === 'dama'}
            onChange={() => handleTypeChange('dama')}
          />
          <label htmlFor="dama">Dama</label>
        </div>
        <div className="navfilter-option">
          <input
            type="radio"
            id="mixto"
            name="type"
            value="mixto"
            checked={selectedType === 'mixto'}
            onChange={() => handleTypeChange('mixto')}
          />
          <label htmlFor="mixto">Mixto</label>
        </div>

        <hr/>

        <h4 className="navfilter-subtitle">Categoría</h4>
        <div className="navfilter-option">
          <input
            type="radio"
            id="zapatilla"
            name="zapatilla"
            value="Zapatilla"
            checked={selectedCategory === 'Zapatilla'}
            onChange={() => handleCategoryChange('Zapatilla')}
          />
          <label htmlFor="zapatilla">Zapatillas</label>
        </div>
        <div className="navfilter-option">
          <input
            type="radio"
            id="botas"
            name="botas"
            value="Botas"
            checked={selectedCategory === 'Botas'}
            onChange={() => handleCategoryChange('Botas')}
          />
          <label htmlFor="botas">Botas</label>
        </div>
        <div className="navfilter-option">
          <input
            type="radio"
            id="sandalias"
            name="sandalias"
            value="Sandalias"
            checked={selectedCategory === 'Sandalias'}
            onChange={() => handleCategoryChange('Sandalias')}
          />
          <label htmlFor="sandalias">Sandalias</label>
        </div>
        <div className="navfilter-option">
          <input
            type="radio"
            id="formales"
            name="formales"
            value="Formales"
            checked={selectedCategory === 'Formales'}
            onChange={() => handleCategoryChange('Formales')}
          />
          <label htmlFor="formales">Formales</label>
        </div>
        <div className="navfilter-option">
          <input
            type="radio"
            id="deportivos"
            name="deportivos"
            value="Deportivos"
            checked={selectedCategory === 'Deportivos'}
            onChange={() => handleCategoryChange('Deportivos')}
          />
          <label htmlFor="formales">Deportivos</label>
        </div>

        <hr/>

        <h4 className="navfilter-subtitle">Talla</h4>
        {[...Array(17).keys()].map(i => {
          const size = (i + 28).toString();
          return (
            <div className="navfilter-option" key={size}>
              <input
                type="radio"
                id={size}
                name="size"
                value={size}
                checked={selectedSize === size}
                onChange={() => handleSizeChange(size)}
              />
              <label htmlFor={size}>{size}</label>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NavFilter;
