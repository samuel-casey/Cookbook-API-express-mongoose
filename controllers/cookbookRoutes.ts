import express = require("express");
const router = express.Router();
const Cookbook = require('../models/Cookbook');

// MONGO ACTIONS (HELPER FUNCTIONS FOR ROUTES)

const index = () => {
    return Cookbook.find()
}

// Write the route to list all cookbooks
router.get('/', async (req: express.Request, res: express.Response) => {
    try {
        const allCookbooks = await index()
        res.json({
            status: 200,
            message: "ok",
            data: allCookbooks
        })
        console.log(allCookbooks)
    } catch (err) {
        console.log(err)
    } finally {
    }
})

// Write the route to get cookbook by title
router.get('/')

// Write the route to get cookbook by year published

// Write the route to create a cookbook

// Write the route to update a cookbook

// Write the route to delete the cookbook by title


module.exports = router;
