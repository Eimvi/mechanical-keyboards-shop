const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const mustacheExpress = require('mustache-express')

const { PORT } = require('./domain/properties')
const DB = require('./domain/db')
const routes = require('./routes/routes')

DB()

const { Router, json, urlencoded } = express
const app = express()
const router = Router()

app.use(json())
app.use(urlencoded({ extended: true }))
app.use(cors())
app.use(morgan('dev'))

const path = require('path');
const VIEWS_PATH = path.join(__dirname, '/views');

app.engine('mustache', mustacheExpress(VIEWS_PATH + '/partials', '.mustache'))
app.set('view engine', 'mustache')
app.set('views', VIEWS_PATH)

app.use(express.static(__dirname + '/public/'));

app.use( function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*') 
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method') 
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE') 
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE') 
    next() 
}) 
routes(router)


app.use(router)

app.listen(PORT, () => {
  console.log(`Server runing on port ${PORT}`)
})

