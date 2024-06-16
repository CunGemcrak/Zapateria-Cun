import React from 'react';
import './navFilters.css';

const NavFilter = () => {
  return (
    <div className="navfilter-container">
     
      <div className="navfilter-section">
        <h4 className="navfilter-subtitle">Categoría</h4>
        <div className="navfilter-option">
          <input type="checkbox" id="sneakers" name="category" />
          <label htmlFor="sneakers">Zapatillas</label>
        </div>
        <div className="navfilter-option">
          <input type="checkbox" id="boots" name="category" />
          <label htmlFor="boots">Botas</label>
        </div>
        <div className="navfilter-option">
          <input type="checkbox" id="sandals" name="category" />
          <label htmlFor="sandals">Sandalias</label>
        </div>
        <div className="navfilter-option">
          <input type="checkbox" id="formal" name="category" />
          <label htmlFor="formal">Formales</label>
        </div>
      </div>

      <div className="navfilter-section">
        <h4 className="navfilter-subtitle">Tamaño</h4>
        <div className="navfilter-option">
          <input type="checkbox" id="size-36" name="size" />
          <label htmlFor="size-36">36</label>
        </div>
        <div className="navfilter-option">
          <input type="checkbox" id="size-37" name="size" />
          <label htmlFor="size-37">37</label>
        </div>
        <div className="navfilter-option">
          <input type="checkbox" id="size-38" name="size" />
          <label htmlFor="size-38">38</label>
        </div>
        <div className="navfilter-option">
          <input type="checkbox" id="size-39" name="size" />
          <label htmlFor="size-39">39</label>
        </div>
        <div className="navfilter-option">
          <input type="checkbox" id="size-40" name="size" />
          <label htmlFor="size-40">40</label>
        </div>
        <div className="navfilter-option">
          <input type="checkbox" id="size-41" name="size" />
          <label htmlFor="size-41">41</label>
        </div>
        <div className="navfilter-option">
          <input type="checkbox" id="size-42" name="size" />
          <label htmlFor="size-42">42</label>
        </div>
        <div className="navfilter-option">
          <input type="checkbox" id="size-43" name="size" />
          <label htmlFor="size-43">43</label>
        </div>
        <div className="navfilter-option">
          <input type="checkbox" id="size-44" name="size" />
          <label htmlFor="size-44">44</label>
        </div>
      </div>

      <div className="navfilter-section">
        <h4 className="navfilter-subtitle">Color</h4>
        <div className="navfilter-option">
          <input type="checkbox" id="color-black" name="color" />
          <label htmlFor="color-black">Negro</label>
        </div>
        <div className="navfilter-option">
          <input type="checkbox" id="color-white" name="color" />
          <label htmlFor="color-white">Blanco</label>
        </div>
        <div className="navfilter-option">
          <input type="checkbox" id="color-red" name="color" />
          <label htmlFor="color-red">Rojo</label>
        </div>
        <div className="navfilter-option">
          <input type="checkbox" id="color-blue" name="color" />
          <label htmlFor="color-blue">Azul</label>
        </div>
        <div className="navfilter-option">
          <input type="checkbox" id="color-green" name="color" />
          <label htmlFor="color-green">Verde</label>
        </div>
      </div>

      <div className="navfilter-section">
        <h4 className="navfilter-subtitle">Precio</h4>
        <div className="navfilter-option">
          <input type="radio" id="price-1" name="price" />
          <label htmlFor="price-1">Hasta $50</label>
        </div>
        <div className="navfilter-option">
          <input type="radio" id="price-2" name="price" />
          <label htmlFor="price-2">$50 - $100</label>
        </div>
        <div className="navfilter-option">
          <input type="radio" id="price-3" name="price" />
          <label htmlFor="price-3">$100 - $150</label>
        </div>
        <div className="navfilter-option">
          <input type="radio" id="price-4" name="price" />
          <label htmlFor="price-4">$150 - $200</label>
        </div>
        <div className="navfilter-option">
          <input type="radio" id="price-5" name="price" />
          <label htmlFor="price-5">Más de $200</label>
        </div>
      </div>
    </div>
  );
}

export default NavFilter;
