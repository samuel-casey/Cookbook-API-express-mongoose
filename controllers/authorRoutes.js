const express = require('express')
const router = express.Router()


// Require the Author Controller.
const authorController = require('./authors');
// Write the route to list all authors
router.get('/', authorController.getAuthors)
// Write the route to get authors by firstname
router.get('/:name', authorController.getAuthorsByName)
// Write the route to create an author:
router.post('/', authorController.createAuthor)
// Write the route to update an author
router.put('/:name', authorController.updateAuthor)

//Write a route to delete an author
router.delete('/:id', authorController.deleteAuthor)
// Write the route to get all 
router.get('/:id/cookbooks', authorController.getAuthorsWithCookbooks)


module.exports = router