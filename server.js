const express = require('express')
const app = express()
const PORT = 3000
const morgan = require('morgan')
const cors = require('cors')
require('./db/connection')
const garageRoutes = require('./routes/garageRoutes')
const userRoutes = require('./routes/userRoutes')
const methodOverride = require('method-override')

app.use(cors())
app.use(morgan('dev'))
app.use(express.json)
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

app.use('/garage', garageRoutes)
app.use('/user', userRoutes)

app.get('/', (req, res) => {
  res.json('My Whips')
})


app.listen(PORT, () => {
  console.log('Im on port', PORT)
})