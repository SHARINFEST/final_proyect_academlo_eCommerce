const Order = require('../models/order.model');

// Crear una orden
const createOrder = async (req, res) => {
  try {
    const { totalPrice, userId, products } = req.body;

    // Crear la nueva orden
    const order = new Order({
      totalPrice,
      userId,
      products
    });

    await order.save();

    res.status(201).json({ message: 'Orden creada exitosamente', order });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al crear la orden' });
  }
};

// Obtener todas las órdenes
const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find();
    res.status(200).json({ orders });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener las órdenes' });
  }
};

// Obtener una orden por su ID
const getOrderById = async (req, res) => {
  try {
    const orderId = req.params.orderId;
    const order = await Order.findById(orderId);
    
    if (!order) {
      return res.status(404).json({ message: 'Orden no encontrada' });
    }
    
    res.status(200).json({ order });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener la orden' });
  }
};

// Actualizar el estado de una orden
const updateOrderStatus = async (req, res) => {
  try {
    const orderId = req.params.orderId;
    const { status } = req.body;
    
    const order = await Order.findByIdAndUpdate(orderId, { status }, { new: true });
    
    if (!order) {
      return res.status(404).json({ message: 'Orden no encontrada' });
    }
    
    res.status(200).json({ message: 'Estado de la orden actualizado', order });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al actualizar el estado de la orden' });
  }
};

// Eliminar una orden
const deleteOrder = async (req, res) => {
  try {
    const orderId = req.params.orderId;
    
    const order = await Order.findByIdAndDelete(orderId);
    
    if (!order) {
      return res.status(404).json({ message: 'Orden no encontrada' });
    }
    
    res.status(200).json({ message: 'Orden eliminada exitosamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al eliminar la orden' });
  }
};
module.exports = {
  createOrder,
  getAllOrders,
  getOrderById,
  updateOrderStatus,
  deleteOrder

}

