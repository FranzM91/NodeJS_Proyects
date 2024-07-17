const Producto = require('../models/producto');

class ProductoRepository {
  async create(productoData) {
    return await Producto.create(productoData);
  }

  async findAll() {
    return await Producto.find().populate('categoria');
  }

  async findById(id) {
    return await Producto.findById(id).populate('categoria');
  }

  async update(id, productoData) {
    return await Producto.findByIdAndUpdate(id, productoData, { new: true });
  }

  async delete(id) {
    return await Producto.findByIdAndDelete(id);
  }
}

module.exports = new ProductoRepository();