import mongoose from "mongoose"
import express from "express"
import dotenv from "dotenv"
import cors from "cors"

import authorRoute from "./routes/authors.js"
import bookRoute from "./routes/books.js"

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())

const PORT = process.env.PORT || 5000
const MONGO_URI = process.env.MONGO_URI || ""

mongoose.connect(MONGO_URI)  
    .then(async () => {
        console.log("Mongo parece que conecto")
    })
    .catch(err => console.error("Hubo un error al conectar a mongo", err))


//Usando rutas
app.use("/authors", authorRoute)
app.use("/books", bookRoute)

app.listen(PORT, () => console.log("El servidor esta corriendo en", PORT))



