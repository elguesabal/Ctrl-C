// npm i express
// npm install --save-dev nodemon
// npm install cors
// npm i mysql                          ANTIGO BANCO DE DADOS LOCAL
// npm install dotenv mysql2
// npm install handlebars
// npm i express-handlebars
// npm install --save body-parser
// npm i nodemailer dotenv



// npm i express
const express = require('express')
const app = express()
app.use('/public', express.static(__dirname + '/public'))
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
const path = require('path')
app.engine('handlebars', exphbs.engine({
    defaultLayout: 'main',
    layoutsDir: path.join(__dirname, 'views')
}))
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


// npm install --save body-parser
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: false}))


// npm i nodemailer dotenv
const nodemailer = require('nodemailer')




app.get('/', (req, res) => {
    req.send('deu certo')
})

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



// app.post('/mensagem', (req, res) => {

//     const email = req.body.email
//     const mensagem = req.body.mensagem


//     const transport = nodemailer.createTransport({
//         host: 'smtp.office365.com',
//         port: 587,
//         secure: false,
//         auth: {
//             user: process.env.EMAIL,
//             pass: process.env.SENHA
//         }
//     })


//     const emailCliente = 
//     `
//     <style>
//         .mensagem {
//             background-color: aliceblue;
//             display: flex;
//             align-items: center;
//             justify-content: center;
//             width: 100%;
//             height: 100%;
//         }

//         .links {
//             display: flex;
//             align-items: center;
//             justify-content: space-evenly;
//         }

//         .btn {
//             background-color: aqua;
//             width: 100px;
//             height: 30px;
//             text-decoration: none;
//             display: flex;
//             justify-content: center;
//             align-items: center;
//             color: white;
//             transition: 1s;
//             margin: 20px 0 20px 0;
//         }

//         .btn:hover {
//             margin-top: 0;
//             box-shadow: 0 0 100px 10px aqua;
//         }
//     </style>

//     <div class="mensagem">
//         <div class="email">
//             <div class="container">
//                 <div class="content">
//                     <h2>Obrigado por mandar mensagem</h2>
//                     <p>Agradeço o contato e em breve estarei respondendo em breve! Também sinta-se à vontade para mandar mensagens em outras plataformas como LinkedIn, e-mail e WhatsApp.</p>
//                     <div class="links">
//                         <a href="https://jose-antonio.vercel.app/" class="btn" target="_blank">Portfolio</a>
//                         <a href="https://www.canva.com/design/DAFTzR3VmGY/qLmFQigCW6Y8hRZ8Ly7gew/view?utm_content=DAFTzR3VmGY&utm_campaign=share_your_design&utm_medium=link&utm_source=shareyourdesignpanel" class="btn btn-outline-light" target="_blank">Currículo</a>
//                         <a href="https://www.linkedin.com/in/jos%C3%A9-antonio-b14160240/" class="btn" target="_blank">LinkedIn</a>
//                         <a href="https://wa.me/qr/NO4ELMDAGM2BI1" class="btn" target="_blank">WhatsApp</a>    
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
//     `

//     const mensagens = [
//         {
//             from: `Enviado de <${process.env.EMAIL}>`,
//             to: 'joseelguesabal@gmail.com',
//             subject: 'Nova mensagem da caixa do Ctrl c',
//             html: `<h1>Email de contato: <br/> ${email}</h1> <p>${mensagem}</p>`,
//             text: `Email de contato: ${email} ${mensagem}`
//         },
//         {
//             from: process.env.EMAIL,
//             to: email,
//             subject: 'Obrigado por me enviar uma mensagem!',
//             html: emailCliente,
//             text: `Agradeço o contato e em breve estarei respondendo!`
//         }
//     ]

//     transport.sendMail(mensagens[0])
//     .then((resposta) => {
//         transport.sendMail(mensagens[1])
//         .then((resposta) => res.send('mensagem enviada'))
//         .catch((erro) => res.redirect(`https://jose-antonio.vercel.app/erro`))  
//     })
//     .catch((erro) => res.send(`ocorreu um erro: 1`))
// })





app.listen(process.env.PORT || 5000, () => {
    console.log(`rodando na porta 5000`)
})