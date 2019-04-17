const express = require('express')
const hbs = require('express-handlebars')

const app = express()
const appRoute = require('./routes')

// // const viewData = {

// // }



// // Middleware
app.engine('hbs', hbs({
  defaultLayout: 'main',
  extname: 'hbs'
}))
app.set('view engine', 'hbs')
app.use(express.static('public'))
app.use(express.urlencoded({
  extended: true
}))

app.use(appRoute)


module.exports = app