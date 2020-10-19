import express = require("express");
const router = express.Router();
const Cookbook = require('../models/Cookbook');

// MONGO ACTIONS (HELPER FUNCTIONS FOR ROUTES)

const index = () => {
    return Cookbook.find()
}

const show = (cookbookTitle: string) => {
    return Cookbook.find({title: cookbookTitle})
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
    }
})

// Write the route to get cookbook by title
router.get('/:cookbookTitle', async (req: express.Request, res: express.Response) => {
       try {
        const cookbook = await show(req.params.cookbookTitle.toLowerCase())
        res.json({
            status: 200,
            message: "ok",
            data: cookbook
        })
        console.log(cookbook)
    } catch (err) {
        console.log(err)
    }
})

// Write the route to get cookbook by year published

// Write the route to create a cookbook

// Write the route to update a cookbook

// Write the route to delete the cookbook by title


module.exports = router;
