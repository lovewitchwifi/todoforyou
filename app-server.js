const express = require('express')
const app = express()
const path = require('path')
const favicon = require('serve-favicon')
const logger = require('morgan')


app.use(express.json()) // req.body
app.use((req, res, next) => {
    res.locals.data = {}
    next()
})
app.use(logger('dev'))
app.use(favicon(path.join(__dirname, 'public', 'img', 'logo.png')))
app.use(express.static(path.join(__dirname, 'public')))
app.use('/api/todos', require('./routes/api/todos'))
//http://localhost:8000/api/todos/completed bc we say mount this code where its located; we do this so it doesn't crash with front end routes and static files bc we know nothing inside public folder is going to start with api
app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

module.exports = app