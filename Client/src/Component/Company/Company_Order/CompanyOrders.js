import React, { useEffect, useState } from 'react';
import Loading from '../../loading/Loading';
import CompanyMenu from '../Company_Menu/CompanyMenu';
import './CompanyOrder.css'; // Asegúrate de importar tu archivo CSS correctamente

const CompanyOrders = () => {
    const [loading, setLoading] = useState(true);
    const [orders, setOrders] = useState([]);
    const [formData, setFormData] = useState({
        customerName: '',
        productName: '',
        quantity: 0,
        price: 0,
        status: ''
    });
    const [editOrderId, setEditOrderId] = useState(null); // Estado para almacenar el ID del pedido en edición

    useEffect(() => {
        // Simulación de carga de datos
        const timer = setTimeout(() => {
            setLoading(false);
            // Datos simulados de pedidos
            setOrders([
                {
                    id: 1,
                    customerName: 'Cliente A',
                    productName: 'Producto X',
                    quantity: 5,
                    price: 100,
                    status: 'Pendiente'
                },
                {
                    id: 2,
                    customerName: 'Cliente B',
                    productName: 'Producto Y',
                    quantity: 3,
                    price: 75,
                    status: 'En proceso'
                },
                {
                    id: 3,
                    customerName: 'Cliente C',
                    productName: 'Producto Z',
                    quantity: 2,
                    price: 50,
                    status: 'Completado'
                }
            ]);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    const handleChange = (e, orderId) => {
        const { name, value } = e.target;
        // Copiar el formulario actual y actualizar solo el pedido en edición
        setOrders(orders.map(order => {
            if (order.id === orderId) {
                return { ...order, [name]: value };
            }
            return order;
        }));
    };

    const handleActivateEdit = (orderId) => {
        setEditOrderId(orderId);
    };

    const handleSaveEdit = (orderId) => {
        // Aquí puedes enviar formData a tu backend o realizar otra acción de guardado
        console.log('Datos editados del pedido:', orders.find(order => order.id === orderId));
        setEditOrderId(null); // Desactivar la edición después de guardar
    };

    const handleDelete = (id) => {
        // Filtrar pedidos para eliminar el que tiene el id proporcionado
        const updatedOrders = orders.filter(order => order.id !== id);
        setOrders(updatedOrders);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes enviar formData a tu backend o realizar otra acción
        console.log('Datos del nuevo pedido:', formData);
        // Simulación de agregar nuevo pedido
        const newOrder = {
            id: orders.length + 1,
            ...formData
        };
        setOrders([...orders, newOrder]);
        // Limpiar formulario después de agregar pedido
        setFormData({
            customerName: '',
            productName: '',
            quantity: 0,
            price: 0,
            status: ''
        });
    };

    return <>
      {loading ? <Loading /> : null}
            <CompanyMenu className="nav-menu" />
        <div className="body-orders">
            
            <h2>Lista de Pedidos</h2>
            <div className="table-container">
                <table className="order-table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Cliente</th>
                            <th>Producto</th>
                            <th>Cantidad</th>
                            <th>Precio</th>
                            <th>Estado</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map(order => (
                            <tr key={order.id}>
                                <td>{order.id}</td>
                                <td>
                                    {editOrderId === order.id ?
                                        <input
                                            type="text"
                                            name="customerName"
                                            value={order.customerName}
                                            onChange={(e) => handleChange(e, order.id)}
                                            required
                                        />
                                        :
                                        order.customerName
                                    }
                                </td>
                                <td>
                                    {editOrderId === order.id ?
                                        <input
                                            type="text"
                                            name="productName"
                                            value={order.productName}
                                            onChange={(e) => handleChange(e, order.id)}
                                            required
                                        />
                                        :
                                        order.productName
                                    }
                                </td>
                                <td>
                                    {editOrderId === order.id ?
                                        <input
                                            type="number"
                                            name="quantity"
                                            value={order.quantity}
                                            onChange={(e) => handleChange(e, order.id)}
                                            required
                                        />
                                        :
                                        order.quantity
                                    }
                                </td>
                                <td>
                                    {editOrderId === order.id ?
                                        <input
                                            type="number"
                                            name="price"
                                            value={order.price}
                                            onChange={(e) => handleChange(e, order.id)}
                                            required
                                        />
                                        :
                                        order.price
                                    }
                                </td>
                                <td>
                                    {editOrderId === order.id ?
                                        <select
                                            name="status"
                                            value={order.status}
                                            onChange={(e) => handleChange(e, order.id)}
                                            required
                                        >
                                            <option value="">Seleccione</option>
                                            <option value="Pendiente">Pendiente</option>
                                            <option value="En proceso">En proceso</option>
                                            <option value="Completado">Completado</option>
                                        </select>
                                        :
                                        order.status
                                    }
                                </td>
                                <td className="order-actions">
                                    {editOrderId === order.id ?
                                        <button onClick={() => handleSaveEdit(order.id)}>Guardar</button>
                                        :
                                        <button onClick={() => handleActivateEdit(order.id)}>Editar</button>
                                    }
                                    <button onClick={() => handleDelete(order.id)}>Eliminar</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <form className="form-order" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Nombre del Cliente:</label>
                    <input
                        type="text"
                        name="customerName"
                        value={formData.customerName}
                        onChange={(e) => setFormData({ ...formData, customerName: e.target.value })}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Nombre del Producto:</label>
                    <input
                        type="text"
                        name="productName"
                        value={formData.productName}
                        onChange={(e) => setFormData({ ...formData, productName: e.target.value })}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Cantidad:</label>
                    <input
                        type="number"
                        name="quantity"
                        value={formData.quantity}
                        onChange={(e) => setFormData({ ...formData, quantity: parseInt(e.target.value) })}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Precio:</label>
                    <input
                        type="number"
                        name="price"
                        value={formData.price}
                        onChange={(e) => setFormData({ ...formData, price: parseInt(e.target.value) })}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Estado:</label>
                    <select
                        name="status"
                        value={formData.status}
                        onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                        required
                    >
                        <option value="">Seleccione</option>
                        <option value="Pendiente">Pendiente</option>
                        <option value="En proceso">En proceso</option>
                        <option value="Completado">Completado</option>
                    </select>
                </div>
                <button type="submit">Agregar Pedido</button>
            </form>
        </div>
        </>
};

export default CompanyOrders;
