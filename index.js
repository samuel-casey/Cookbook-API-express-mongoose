const express = require('express')
// 1. Require body-parser and save it to the variable parser.
const parser = require('body-parser')
const app = express()

const cookbookRouter = require('./controllers/cookbookRoutes')
const authorRouter = require('./controllers/authorRoutes')

// 2. Add the coded needed to make body-parser work within your app.
app.use(parser.json())
app.use('/api/cookbooks/', cookbookRouter)
app.use('/api/authors/', authorRouter)

app.listen(4000, () => console.log('Server running on port 4000!'))
