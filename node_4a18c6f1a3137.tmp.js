// npm i express
// npm install cors 

const express = require('express')
// const fs = require('fs')
const cors = require('cors')
const app = express()
var path = require('path')

app.use(express.json())
app.use(cors())

const port = 3000
app.listen(port, () => {
    console.log(`rodando na porta ${port}`)
})