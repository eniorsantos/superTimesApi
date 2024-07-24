import {schema, model, Schema} from "mongoose"


const podutosTime = new Schema({
    nome: {
        type: String,
        required: true
    },
    preco: {
        type: Number,
        required: true
    },
    estoque: {
        type: Number,
        required: true,
        min: 0
    },
    descricao: {
        type: String,
        required: true
    },
    time:{
    type: Schema.Types.ObjectId,
    ref: "Times",
    required:true

    }
})