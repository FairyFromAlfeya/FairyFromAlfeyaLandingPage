const http = require('http')
const express = require('express')
const path = require('path')

const app = express()

app.use(express.json())
app.use(express.static('views'))
app.use('/', (req, res) => res.sendFile(path.join(__dirname + 'views/index.html')))

const server = http.createServer(app)
const PORT = process.env.PORT || 3000
server.listen(PORT)