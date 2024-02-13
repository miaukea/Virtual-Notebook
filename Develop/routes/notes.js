// Linking Notes to main page
const notesRouter = require('express').Router()

notesRouter.get('/', (req, res) => {
    console.log(req.body)
})

module.exports = notesRouter;