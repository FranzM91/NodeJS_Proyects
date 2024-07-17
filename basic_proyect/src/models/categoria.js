const mongoose = require('mongoose');

const categoriaSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  descripcion: String,
  createDate: { type: Date, default: Date.now },
  updateDate: { type: Date, default: Date.now }
}, { 
  versionKey: false,
  timestamps: { createdAt: 'createDate', updatedAt: 'updateDate' }
 });

module.exports = mongoose.model('Categoria', categoriaSchema);