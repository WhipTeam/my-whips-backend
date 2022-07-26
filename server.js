const express = require('express')
const app = express()
const PORT = 8000
const methodOverride = require('method-override')


require('./database/connection')

//ROUTES


//MIDDLEWARE
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))




app.listen(8000, () => {
    console.log(`✅ PORT: ${PORT} 🌟`);
})