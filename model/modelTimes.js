import {Schema, model} from "mongoose"

const timeSchema = new Schema({
    nome: {
        type: String,
        required: true,
    },
    urlImagem: {
        type: String,
        required: true,
    },
});

export default model("Time", timeSchema );

