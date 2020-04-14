const express = require('express')
const router = express.Router()

// Require the Cookbook controller.
const cookbookController = require('../controllers/cookbooks')

// Write the route to list all cookbooks
router.get('/', cookbookController.getAllCookbooks)
// Write the route to get cookbook by title
router.get('/title/:title', cookbookController.getCookbookByTitle)
// Write the route to get cookbook by year published
router.get('/year/:year', cookbookController.getCookbooksByYear)
// Write the route to create a cookbook
router.post('/', cookbookController.createCookbook)
// Write the route to update a cookbook
router.put('/:id', cookbookController.updateCookbook)
// Write the route to delete the cookbook by title
router.delete('/:id', cookbookController.deleteCookbook)

module.exports = router;