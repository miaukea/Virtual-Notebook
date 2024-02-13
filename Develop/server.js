// Initializing variables
const express = require('express')
const path = require('path')
const fs = require('fs')
const PORT = 3001
const app = express()

// Setting up middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/api', api)
app.use(express.static('public'))