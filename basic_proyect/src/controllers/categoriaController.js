const categoriaService = require('../services/categoriaService');

class CategoriaController {
  async createCategoria(req, res) {
    try {
      const categoria = await categoriaService.createCategoria(req.body);
      res.status(201).json(categoria);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async getAllCategorias(req, res) {
    try {
      const categorias = await categoriaService.getAllCategorias();
      res.json(categorias);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async getCategoriaById(req, res) {
    try {
      const categoria = await categoriaService.getCategoriaById(req.params.id);
      if (!categoria) {
        return res.status(404).json({ message: 'Categoría no encontrada' });
      }
      res.json(categoria);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async updateCategoria(req, res) {
    try {
      const categoria = await categoriaService.updateCategoria(req.params.id, req.body);
      res.json(categoria);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async deleteCategoria(req, res) {
    try {
      await categoriaService.deleteCategoria(req.params.id);
      res.json({ message: 'Categoría eliminada' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

module.exports = new CategoriaController();