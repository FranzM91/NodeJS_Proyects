const mongoose = require('mongoose');

const productoSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  precio: { type: Number, required: true },
  descripcion: String,
  categoria: { type: mongoose.Schema.Types.ObjectId, ref: 'Categoria', required: true },
  createDate: { type: Date, default: Date.now },
  updateDate: { type: Date, default: Date.now }
}, { 
  versionKey: false,
  timestamps: { createdAt: 'createDate', updatedAt: 'updateDate' }
});

module.exports = mongoose.model('Producto', productoSchema);