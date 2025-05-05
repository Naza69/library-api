import { model, Schema } from "mongoose";

const bookSchema = new Schema({
    titulo: {type: String},
    resumen: {type: String}, 
    genero: {type: String, required: true}, 
    publicacion: {type: Date, required: true}, 
    disponible: {type: Boolean, required: true}
})

export default model("Book", bookSchema);