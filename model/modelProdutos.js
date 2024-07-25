import { Schema, model } from 'mongoose';

const produtosSchema = new Schema({
  nome: {
    type: String,
    required: true,
  },
  preco: {
    type: Number,
    required: true,
  },
  estoque: {
    type: Number,
    required: true,
    min: 0,
  },
  descricao: {
    type: String,
    required: true,
  },
  time: {
    type: Schema.Types.ObjectId,
    ref: 'Time',
    required: true,
  },
});

export default model('prodTime', produtosSchema);
