import React, { useState, useEffect } from 'react'
import api from './api.js'
import axios from 'axios'
import url from './url.js'

function Demonstracao() {
    
    // const [id, SetId] = useState('')
    const id = 1    // AKI VAI PEGAR O VALOR DO ID Q DEVE ESTAR NO INPUT

    const [descricao, SetDescricao] = useState('')
    const [tecHtml, SetTecHtml] = useState('')
    const [tecCss, SetTecCss] = useState('')
    const [tecJavascript, SetTecJavascript] = useState('')
    
    const [linkVerCompleto, setLinkVerCompleto] = useState('')
    const [linkVerCodigo, setLinkVerCodigo] = useState('')
    const [linkIframe, setLinkIframe] = useState('')

    useEffect(() => {
        api.get(`${url}/codigo?id=${id}`)
        .then(res => {
            SetDescricao(res.data.descricao)
            SetTecHtml(res.data.techtml)
            SetTecCss(res.data.teccss)
            SetTecJavascript(res.data.tecjavascript)

            // document.getElementById('linkTemplate').href = `/template?id=${res.data.id}`
            // document.getElementById('linkCodigo').href = `/codigo?id=${res.data.id}`

            setLinkVerCompleto(`/template?id=${id}`)
            setLinkVerCodigo(`/codigo?id=${id}`)
            setLinkIframe(`${url}/template?id=${id}`)
        })
        .catch(erro => alert(erro))
    }, [])

    return (
        <main>
            <h1>Ctrl c</h1>

            <h2>Site feito para programadores <strike>preguiçosos</strike> que buscam códigos rápidos e de qualidade</h2>
            <br/>
            <hr/>

            <div class="demonstracao">
                <div class="informacoes">
                    <p>{descricao}</p>
                    <details>
                        <summary>Tecnologias usadas</summary>
                        <ol>
                            <li id="tecHtml">HTML5: {tecHtml}</li>
                            <li id="tecCss">CSS3: {tecCss}</li>
                            <li id="tecJavascript">JavaScript: {tecJavascript}</li>
                        </ol>
                    </details>
                    <div class="link">
                        <a href={linkVerCompleto} target="_blank">Ver completo</a>
                        <a href={linkVerCodigo}>Ver código</a>
                    </div>
                </div>

                <iframe src={linkIframe}></iframe>
            </div>
        </main>
    )
}

export default Demonstracao