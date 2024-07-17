const Categoria = require('../models/categoria');

class CategoriaRepository {
  async create(categoriaData) {
    return await Categoria.create(categoriaData);
  }

  async findAll() {
    return await Categoria.find();
  }

  async findById(id) {
    return await Categoria.findById(id);
  }

  async update(id, categoriaData) {
    return await Categoria.findByIdAndUpdate(id, categoriaData, { new: true });
  }

  async delete(id) {
    return await Categoria.findByIdAndDelete(id);
  }
}

module.exports = new CategoriaRepository();