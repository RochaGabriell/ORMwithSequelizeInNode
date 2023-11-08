const express = require('express')
const routes = require('../routes')

const app = express()
const port = 3000

app.use(express.json())
routes(app)
app.listen(port, () => console.log('Servidor OK!'))

module.exports = app
