const categoriaRepository = require('../repositories/categoriaRepository');

class CategoriaService {
  async createCategoria(categoriaData) {
    categoriaData.creteData = Date.now();
    return await categoriaRepository.create(categoriaData);
  }

  async getAllCategorias() {
    return await categoriaRepository.findAll();
  }

  async getCategoriaById(id) {
    return await categoriaRepository.findById(id);
  }

  async updateCategoria(id, categoriaData) {
    categoriaData.updateDate = Date.now();
    return await categoriaRepository.update(id, categoriaData);
  }

  async deleteCategoria(id) {
    return await categoriaRepository.delete(id);
  }
}

module.exports = new CategoriaService();