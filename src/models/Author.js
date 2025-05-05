import {model, Schema} from "mongoose"
import bookSchema from "./Book.js"

const authorSchema = new Schema({
    nombre: {type: String, required: true}, 
    bio: {type: String},
    fechaNacimiento: {type: Date, required: true},
    nacionalidad: {type: String, required: true},
    libros: [bookSchema]
})


export default model("Author", authorSchema);