import express, { urlencoded } from "express";
import mongoose from "mongoose"
import modelTimes from "./model/modelTimes.js";



const app = express();

app.use(express.json());

mongoose.connect("mongodb+srv://eniorsantos:admin@cluster0.onyrlr9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");



app.get("/supertimes", async (request, require) => {

    try {
        const returno = await modelTimes.find({});

        return require.status(200).json({ returno })
    } catch (error) {
        return require.status(404).json({ message: "Documento não encontrado " + error });
    }
})


app.get("/supertimes/:id", async (request, require) => {

    try {
        const returno = await modelTimes.findById(request.params.id);

        if(!returno){
            return require.status(404).json({ message: "Time não encontrado " + error });
        }

        return require.status(200).json({ returno })
    } catch (error) {
        return require.status(500).json({ message: "Registro não encontrado " + error });
    }
})

app.post("/supertimes", async (request, require) => {

    try {

        await modelTimes.create({ nome: request.body.nome, urlImagem: request.body.urlImagem })

        return require.status(201).json({ message: "Documento criado" });
    } catch (error) {
        return require.status(500).json({ message: "Documento não cadastrado" + error });
    }



})

app.put("/superTimes/:id", async (request, require)=>{

    try {

        await modelTimes.findByIdAndUpdate({_id:request.params.id},{ nome: request.body.nome, urlImagem: request.body.urlImagem })

        return require.status(201).json({ message: "Documento atualizado" });
    } catch (error) {
        return require.status(500).json({ message: "Erro ao atualizar documento! " + error });
    }

})

app.delete("/superTimes/:id", async (request, require)=>{

    try {

        await modelTimes.findByIdAndDelete({_id:request.params.id})

        return require.status(201).json({ message: "Documento deletado" });
    } catch (error) {
        return require.status(500).json({ message: "Erro ao atualizar documento! " + error });
    }
    
})

app.listen(3333, () => console.log("Em Execução"));


//mongodb+srv://eniorsantos:admin@cluster0.onyrlr9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0