const express = require('express')
const routes = require('../routes')
const cors = require('cors')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(
  cors({
    origin: 'http://localhost:5173',
    credentials: true
  })
)

routes(app)

app.listen(port, () => console.log('Servidor OK!'))

module.exports = app
