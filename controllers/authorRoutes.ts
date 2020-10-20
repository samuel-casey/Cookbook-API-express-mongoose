import express = require("express");
import { Schema } from "mongoose";
const router: express.Router = express.Router();
const Author = require('../models/Author');
const Cookbook = require("../models/Cookbook");
const {IAuthor} = require('../models/interfaces')

// MONGO ACTIONS (HELPER FUNCTIONS FOR ROUTES)

// find all cookbooks
const index = () => {
    return Author.find({})
}

// find cookbook by title
const show = (firstName: string) => {
   return Author.find({firstName: firstName})
}

// create new author
const create = (newAuthor: typeof IAuthor) => {
    return Author.create({firstName: newAuthor.firstName, lastName: newAuthor.lastName})
}


// update an author by id
const update = (id: string, newData: typeof IAuthor) => {
    return Author.findByIdAndUpdate({_id: id}, { $set: {firstName: newData.firstName, lastName: newData.lastName}}, {new: true, useFindAndModify: false})
}

// find author by ID and delete
const destroy = (id: string) => {
    return Author.findByIdAndDelete({_id: id})
}

// Write the route to list all authors and the id of their cookbooks
const getBooks = (id: string) => {
    return Author.find({_id: id}).populate("cookbooks")
}

router.get('/', async (req: express.Request, res: express.Response) => {
    try {
        const authors = await index()
        res.json({
            status: 200,
            message: "ok",
            data: authors
        })
    } catch (err) {
        console.log(err)
    }
})

// Write the route to get authors by firstname:
router.get('/author/', async (req: express.Request, res: express.Response) => {
    try {
        const author = await show(req.body.firstName)
        res.json({
            status: 200,
            message: "ok",
            data: author
        })
    } catch (err) {
        console.log(err)
    }
})

// Write the route to create an author:
router.post('/author/', async (req: express.Request, res: express.Response) => {
    try {
        const newAuthor = await create(req.body)
        res.json({
            status: 200,
            message: "ok",
            data: newAuthor
        })
    } catch (err) {
        console.log(err)
    }
})

// Write the route to update an author
router.put('/author/:id', async (req: express.Request, res: express.Response) => {
      try {
        const newAuthor = await update(req.params.id, req.body)
        res.json({
            status: 200,
            message: "ok",
            data: newAuthor
        })
    } catch (err) {
        console.log(err)
    }
})

//Write a route to delete an author
router.delete('/author/:id', async (req: express.Request, res: express.Response) => {
      try {
        const deletedAuthor = await destroy(req.params.id)
        res.json({
            status: 200,
            message: "ok",
            data: deletedAuthor
        })
    } catch (err) {
        console.log(err)
    }
})

// Write the route to get all cookbooks of an author
router.get('/author/:id/cookbooks', async (req: express.Request, res: express.Response) => {
    try {
        console.log(req.params.id)
        const cookbooks = await getBooks(req.params.id).populate('cookbooks')
        res.json({
            status: 200,
            message: "ok",
            data: cookbooks
        })
    } catch (err) {

    }
})


module.exports = router