import express = require("express");
const router: express.Router = express.Router();
const Author = require('../models/Author');
const Cookbook = require("../models/Cookbook");
const {IAuthor} = require('../models/interfaces')

// MONGO ACTIONS (HELPER FUNCTIONS FOR ROUTES)

// find all cookbooks
const index = () => {
    return Author.find({}).populate('Cookbook')
  })
}

// find cookbook by title
const show = (firstName: string) => {
   return Author.find({firstName: firstName})
}

// create new author
const create = (newAuthor: typeof IAuthor) => {
    return Author.create({firstName: newAuthor.firstName, lastName: newAuthor.lastName})
}


// Write the route to list all authors and the id of their cookbooks

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

//Write a route to delete an author

// Write the route to get all cookbooks of an author


module.exports = router