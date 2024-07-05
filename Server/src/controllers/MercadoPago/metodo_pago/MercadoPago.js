const mercadopago = require("mercadopago");

const access_token = process.env.MERCADOPAGO_ACCESS_TOKEN || 'APP_USR-5389618147584910-063014-3eedd897637acf68e08c91b2a7034b26-1881182558';

mercadopago.configure({
  access_token
});

const createPaymentHandler = async (req, res) => {
  const { description, price_total, quantity_order } = req.body;
  console.log("Datos recibidos:", req.body);

  const preference = {
    back_urls: {
      success: "http://localhost:3000/user/carrito/respuesta",
      failure: "http://localhost:3000/user/carrito/respuesta",
    },
    items: [
      {
        title: description,
        unit_price: Number(price_total),
        quantity: Number(quantity_order),
        currency_id: "COP",
      }
    ],
    auto_return: "approved"
  };

  try {
    const response = await mercadopago.preferences.create(preference);
    console.log("Respuesta de MercadoPago:", JSON.stringify(response.body.init_point));
    res.status(200).json(response.body.init_point);
  } catch (error) {
    console.error("Error al crear el pago:", error);
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createPaymentHandler
};
