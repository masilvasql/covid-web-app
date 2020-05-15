const express = require('express')
const cors = require('cors')
const app = express()

const port = process.env.PORT || 4202

app.use(cors())

app.use(express.static('public'))

app.listen(port)