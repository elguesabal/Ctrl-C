// npm i express
// npm install --save-dev nodemon
// npm install cors
// npm i mysql                          ANTIGO BANCO DE DADOS LOCAL
// npm install dotenv mysql2
// npm install handlebars
// npm i express-handlebars


// npm i express
const express = require('express')
const app = express()
app.use('/public', express.static(__dirname + '../../' + '/public'))
app.use(express.json())
// app.use(
//     express.urlencoded({
//         extended: true
//     })
// )

// npm install cors
const cors = require('cors')
app.use(cors())

// npm install handlebars
// npm i express-handlebars
const exphbs = require('express-handlebars')
app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

// npm i mysql
// const mysql = require('mysql')                                              ANTIGO BANCO DE DADOS LOCAL
// const conn = mysql.createConnection({                                       ANTIGO BANCO DE DADOS LOCAL
//     host: '127.0.0.1',
//     port: '3306',
//     user: 'root',
//     password: '',
//     database: 'ctrlc'
// })
// conn.connect(function (err) {                                               ANTIGO BANCO DE DADOS LOCAL
//     if (err) {
//         console.log(err);
//     }
//     console.log('Conectado com sucesso');
// })

// npm install dotenv mysql2
require('dotenv').config()                                                  // NOVO BANCO DE DADOS ONLINE NO RAILWAY
const mysql = require('mysql2')                                             // NOVO BANCO DE DADOS ONLINE NO RAILWAY
const conn = mysql.createConnection(process.env.DATABASE_URL)               // NOVO BANCO DE DADOS ONLINE NO RAILWAY





app.get('/teste', (req, res) => {
    const sql = `SELECT * FROM codigo WHERE id = 1`

    conn.query(sql, function (err, data) {
        if (err) {
            console.log(err)
            return
        }

        const codigo = data[0].descricao

        res.send(codigo)
    })
})



app.get('/codigo', (req, res) => {

    const id = req.query.id
    const sql = `SELECT * FROM codigo WHERE id = '${id}'`

    conn.query(sql, function (err, data) {
        if (err) {
            console.log(err)
            return
        }

        const codigo = data[0]

        res.json(
            {
                "id": codigo.id,
                "secao": codigo.secao,
                "descricao": codigo.descricao,
                "html": codigo.html,
                "css": codigo.css,
                "javascript": codigo.javascript,
                "techtml": codigo.techtml,
                "teccss": codigo.teccss,
                "tecjavascript": codigo.tecjavascript
            }
        )
    })
})



app.get('/template', (req, res) => {

    const id = req.query.id
    const sql = `SELECT * FROM codigo WHERE id = ${id}`

    conn.query(sql, function (err, data) {
        if (err) {
            console.log(err)
            return
        }

        const codigo = data[0]

        res.render('template', { layout: false, codigo })
    })
})





app.listen(process.env.PORT || 5000, () => {
    console.log(`rodando na porta 5000`)
})