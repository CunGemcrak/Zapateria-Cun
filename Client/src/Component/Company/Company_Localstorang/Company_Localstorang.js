// Funciones para manejar 'colores' en localStorage
export const getColores = () => {
    const coloresString = localStorage.getItem('colores');
    try {
        return coloresString ? JSON.parse(coloresString) : []; // Parsear los datos guardados en JSON
    } catch (error) {
        console.error('Error al parsear colores desde localStorage:', error);
        return []; // Devolver un array vacío en caso de error
    }
};

export const setColores = (colores) => {
    localStorage.setItem('colores', JSON.stringify(colores)); // Serializar datos a JSON antes de guardar
};

export const removeColores = () => {
    localStorage.removeItem('colores'); // Eliminar 'colores' de localStorage
};

// Funciones para manejar 'empresa' en localStorage
export const getEmpresa = () => {
    const empresaString = localStorage.getItem('empresa');
    try {
        return empresaString ? JSON.parse(empresaString) : {}; // Parsear los datos guardados en JSON
    } catch (error) {
        console.error('Error al parsear empresa desde localStorage:', error);
        return {}; // Devolver un objeto vacío en caso de error
    }
};

export const setEmpresa = (empresa) => {
    localStorage.setItem('empresa', JSON.stringify(empresa)); // Serializar datos a JSON antes de guardar
};

export const removeEmpresa = () => {
    localStorage.removeItem('empresa'); // Eliminar 'empresa' de localStorage
};

// Funciones para manejar 'tallas' en localStorage
export const getTallas = () => {
    const tallasString = localStorage.getItem('tallas');
    try {
        return tallasString ? JSON.parse(tallasString) : []; // Parsear los datos guardados en JSON
    } catch (error) {
        console.error('Error al parsear tallas desde localStorage:', error);
        return []; // Devolver un array vacío en caso de error
    }
};

export const setTallas = (tallas) => {
    localStorage.setItem('tallas', JSON.stringify(tallas)); // Serializar datos a JSON antes de guardar
};

export const removeTallas = () => {
    localStorage.removeItem('tallas'); // Eliminar 'tallas' de localStorage
};

// Funciones para manejar 'marcas' en localStorage
export const getMarcas = () => {
    const marcasString = localStorage.getItem('marcas');
    try {
        return marcasString ? JSON.parse(marcasString) : []; // Parsear los datos guardados en JSON
    } catch (error) {
        console.error('Error al parsear marcas desde localStorage:', error);
        return []; // Devolver un array vacío en caso de error
    }
};

export const setMarcas = (marcas) => {
    localStorage.setItem('marcas', JSON.stringify(marcas)); // Serializar datos a JSON antes de guardar
};

export const removeMarcas = () => {
    localStorage.removeItem('marcas'); // Eliminar 'marcas' de localStorage
};



// Funciones para manejar 'marcas' en localStorage
export const getUser = () => {
    const marcasString = localStorage.getItem('user');
    try {
        return marcasString ? JSON.parse(marcasString) : []; // Parsear los datos guardados en JSON
    } catch (error) {
        console.error('Error al parsear user desde localStorage:', error);
        return []; // Devolver un array vacío en caso de error
    }
};

export const setUser = (user) => {
    localStorage.setItem('user', JSON.stringify(user)); // Serializar datos a JSON antes de guardar
};

export const removeUser = () => {
    localStorage.removeItem('user'); // Eliminar 'marcas' de localStorage
};
