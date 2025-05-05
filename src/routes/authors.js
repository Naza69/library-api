import express from "express"
//import bookSchema from "../models/Book.js"
import authorSchema from "../models/Author.js"
import Author from "../models/Author.js"

const router = express.Router()

router.get("/", async (_req, res) => {
    try {
        const authors = await Author.find()
        res.json(authors)
    } catch (error) {
        res.status(500).json({error: "Error interno"})
    }
})

router.get("/:id", async(_req, res) => {
    try {
        const author = await Author.findOne({id: _req.params.id})
        res.json(author)
    } catch (error) {
        res.json({error: "Loco, no se encontro ese autor"})
    }
})

router.post("/", async(_req, res) => {
    try {
        const authors = await Author.find()
        books.push(_req.body)
        await authors.save()
        res.status(201).json(authors)
    } catch (error) {
        res.status(400).json({error: "Paso algo al cargar el autor"})
    }
})

router.put("/:id", async(_req, res) => {
    try {
        const authors = await Author.findOne({id: _req.params.id})
        author = authors.find(b => b.id === _req.params.id) 
        Object.assign(author, _req.body)
        await authors.save()
        res.json(author)
    } catch(error) {
    res.status(404).json({error: "No se pudo editar el autor"})
    }
})

router.delete("/:id", async(_req, res) => {
    try {

        const authors = await Author.findOne({id: _req.params.id})
        authors = authors.filter(b => b.id !== _req.params.id)
        await authors.save()

        res.json({message: "Autor eliminado"})
    } catch (error) {
        res.json({error: "Ocurrio un error al eliminar el autor"})
    }
})

export default router