// import React, { useState, useEffect } from 'react'
// import api from '../components/api.js'
// import axios from 'axios'
import url from "../components/url"

function PaginaTemplate() {

    // const [codigoJavascript, SetCodigoJavascript] = useState('')

    // useEffect(() => {
    //     const buscaId = window.location.search;

    //     api.get(`http://localhost:5000/codigo${buscaId}`)
    //     .then(res => {
    //         document.getElementById('template').innerHTML = res.data.html
    //         document.getElementById('template').innerHTML += res.data.css
    //         SetCodigoJavascript(res.data.javascript)
    //     })
    //     .catch(erro => alert(erro))
    // }, [])

    // // setTimeout(function() {               FALTOU FAZER O SCRIPT FUNCIONAR NESSA PAGINA
    //     console.log(codigoJavascript)
    // //   }, 2000)
    // codigoJavascript


    // const [template, SetTemplate] = useState('')

    // useEffect(() => {
    //     api.get(`http://localhost:5000/template`)
    //     .then(res => {
    //         // document.getElementById('template').innerHTML = `<iframe src="http://localhost:5000/template"></iframe>`
    //         SetTemplate('http://localhost:5000/template')
    //     })
    //     .catch(erro => alert(erro))
    // }, [])

    const template = `${url}/template${window.location.search}`

    return (
        <iframe id="template" src={template}></iframe>
    )
}

export default PaginaTemplate