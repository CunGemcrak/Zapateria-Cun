// Función para guardar datos en localStorage
export const setUserData = (userData) => {
    localStorage.setItem('user', JSON.stringify(userData));
};

// Función para obtener datos de localStorage
export const getUserData = () => {
    const userData = localStorage.getItem('user');
    return userData ? JSON.parse(userData) : null;
};

// Función para eliminar datos de localStorage
export const removeUserData = () => {
    localStorage.removeItem('user');
};
