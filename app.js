const express = require('express')
const bodyParser = require('body-parser')
const ejs = require('ejs')
const _ = require('lodash')

const app = express()
app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get('/', function(req, res) {
    res.render('about.ejs')
})

app.get('/about', function(req, res) {
    res.render('about.ejs')
})

app.get('/work-and-education', function(req, res) {
    res.render('work-and-education.ejs')
})

app.get('/skills', function(req, res) {
    res.render('skills.ejs')
})

app.get('/contact', function(req, res) {
    res.render('contact.ejs')
})

// TODO: Make Email function work

app.listen(3000, function() {
    console.log("Hosting Server on Port 3000...")
})