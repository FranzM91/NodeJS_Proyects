const productoRepository = require('../repositories/productoRepository');

class ProductoService {
  async createProducto(productoData) {
    return await productoRepository.create(productoData);
  }

  async getAllProductos() {
    return await productoRepository.findAll();
  }

  async getProductoById(id) {
    return await productoRepository.findById(id);
  }

  async updateProducto(id, productoData) {
    return await productoRepository.update(id, productoData);
  }

  async deleteProducto(id) {
    return await productoRepository.delete(id);
  }
}

module.exports = new ProductoService();