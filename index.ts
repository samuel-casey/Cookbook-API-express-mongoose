import express = require('express')
import dotenv = require('dotenv')
const morgan = require('morgan')

dotenv.config()


const PORT: string | number = process.env.PORT || 3000

// 1. Require body-parser and save it to the variable parser.
import bodyParser = require('body-parser')
const app = express()

const cookbookRouter: express.Router = require('./controllers/cookbookRoutes')
const authorRouter = require('./controllers/authorRoutes')

// 2. Add the coded needed to make body-parser work within your app.
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(morgan('dev'))
app.use('/api/cookbooks/', cookbookRouter)
app.use('/api/authors/', authorRouter)

app.get('/', (req: express.Request, res: express.Response) => {
    res.send('Hello world of TypeScript + Node!')
})

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
