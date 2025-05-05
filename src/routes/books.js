//import {Request, Response} from "express"
import Book from "../models/Book.js"
import bookSchema from "../models/Book.js"
import express from "express"

const router = express.Router()

router.get("/", async (_req, res) => {
    try {
        const books = await Book.find()
        res.json(books)
    } catch (error) {
        res.status(500).json({error: "Error interno"})
    }
})

router.get("/:id", async(_req, res) => {
    try {
        const book = await Book.findOne({id: _req.params.id})
        res.json(book)
    } catch (error) {
        res.json({error: "Loco, no se encontro ese libro"})
    }
})

router.post("/", async(_req, res) => {
    try {
        const books = await Book.find()
        books.push(_req.body)
        await books.save()
        res.status(201).json(books)
    } catch (error) {
        res.status(400).json({error: "Paso algo al cargar el libro"})
    }
})

router.put("/:id", async(_req, res) => {
    try {
        const books = await Book.findOne({id: _req.params.id})
        book = books.find(b => b.id === _req.params.id) 
        //if (!book) return res.status(404).json({error: "No se pudo encontrar el libro"})
        Object.assign(book, _req.body)
        await books.save()
        res.json(book)
    } catch(error) {
    res.status(404).json({error: "No se pudo editar el libro"})
    }
})

router.delete("/:id", async(_req, res) => {
    try {

        const books = await Book.findOne({id: _req.params.id})
        books = books.filter(b => b.id !== _req.params.id)
        await books.save()

        res.json({message: "Libro eliminada"})
    } catch (error) {
        res.json({error: "Ocurrio un error al eliminar el libro"})
    }
})

export default router