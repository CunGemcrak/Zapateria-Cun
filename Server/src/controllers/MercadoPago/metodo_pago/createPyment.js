const mercadopago = require("mercadopago");

const access_token=process.env.MERCADOPAGO_ACCESS_TOKEN || 'APP_USR-7366105512817556-070510-cf7b9ca64b77fa92e61de200684b8aba-1886121947' 

mercadopago.configure({
	access_token
});

module.exports = mercadopago;
