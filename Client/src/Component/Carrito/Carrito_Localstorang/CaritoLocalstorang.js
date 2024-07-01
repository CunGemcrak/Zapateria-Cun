// cartUtils.js

export const addToCart = (item) => {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(item);
    localStorage.setItem('cart', JSON.stringify(cart));
  };
  
  // Función para obtener los elementos del carrito desde localStorage
  export const getCartItems = () => {
    return JSON.parse(localStorage.getItem('cart')) || [];
  };
  
  // Función para eliminar un elemento del carrito en localStorage
  export const removeFromCart = (itemId) => {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart = cart.filter(item => item.id !== itemId);
    localStorage.setItem('cart', JSON.stringify(cart));
  };
  
  // Función para actualizar la cantidad de un elemento en el carrito en localStorage
  export const updateCartItemQuantity = (itemId, quantity) => {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart = cart.map(item => 
      item.id === itemId ? { ...item, quantity } : item
    );
    localStorage.setItem('cart', JSON.stringify(cart));
  };
  
  // Función para limpiar el carrito
  export const clearCart = () => {
    localStorage.removeItem('cart');
  };
  
  