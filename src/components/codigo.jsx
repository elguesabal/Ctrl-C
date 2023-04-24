import React, { useState, useEffect } from 'react'
import api from './api.js'
import axios from 'axios'
import url from './url.js'

function Codigo() {

    const [demonstracao, setDemonstracao] = useState('')
    const [linkVerCompleto, setLinkVerCompleto] = useState('')

    useEffect(() => {
        const buscaId = window.location.search
        
        api.get(`${url}/codigo${buscaId}`)
        .then(res => {
            document.getElementById('iframe').innerHTML += res.data.html
            document.getElementById('iframe').innerHTML += res.data.css
            document.getElementById('iframe').innerHTML += res.data.javascript

            document.getElementById('html').value = res.data.html
            document.getElementById('css').value = res.data.css
            document.getElementById('javascript').value = res.data.javascript

            setDemonstracao(`${url}/template${buscaId}`)
            setLinkVerCompleto(`/template${buscaId}`)
            
            document.getElementById('load').style.display = 'none'
        })
        .catch(erro => alert(erro))
    }, [])


    function copiarTexto(idCodigo, idMensagem) {
        document.getElementById(idMensagem).style.display = 'block'
        navigator.clipboard.writeText(document.getElementById(idCodigo).value)
        setTimeout(() => document.getElementById(idMensagem).style.display = 'none', 3000)
    }

    return (
        <main>
            <div class="demonstracao2">
                <iframe id="iframe" src={demonstracao}></iframe>
            </div>

            <div class="telaCheia">
                <a href={linkVerCompleto} target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrows-fullscreen" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707zm4.344 0a.5.5 0 0 1 .707 0l4.096 4.096V11.5a.5.5 0 1 1 1 0v3.975a.5.5 0 0 1-.5.5H11.5a.5.5 0 0 1 0-1h2.768l-4.096-4.096a.5.5 0 0 1 0-.707zm0-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707zm-4.344 0a.5.5 0 0 1-.707 0L1.025 1.732V4.5a.5.5 0 0 1-1 0V.525a.5.5 0 0 1 .5-.5H4.5a.5.5 0 0 1 0 1H1.732l4.096 4.096a.5.5 0 0 1 0 .707z"/>
                    </svg>
                </a>
            </div>

            <div class="codigo">
                <div class="textareCodigo">
                    <div class="copy">
                        <span>HTML:</span>
                        <span class="status" id="copiadoHtml">Copiado</span>
                        <svg xmlns="http://www.w3.org/2000/svg" onClick={() => copiarTexto('html', 'copiadoHtml')} fill="currentColor" class="bi bi-file-earmark-text" viewBox="0 0 16 16">
                            <path d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z"/>
                            <path d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5L9.5 0zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z"/>
                        </svg>
                    </div>
                    <textarea id="html" readonly="true">

                    </textarea>
                </div>

                <div class="textareCodigo">
                    <div class="copy">
                        <span>CSS:</span>
                        <span class="status" id="copiadoCss">Copiado</span>
                        <svg xmlns="http://www.w3.org/2000/svg" onClick={() => copiarTexto('css', 'copiadoCss')} fill="currentColor" class="bi bi-file-earmark-text" viewBox="0 0 16 16">
                            <path d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z"/>
                            <path d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5L9.5 0zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z"/>
                        </svg>
                    </div>
                    <textarea id="css" readonly="true">

                    </textarea>
                </div>

                <div class="textareCodigo">
                    <div class="copy">
                        <span>JavaScript:</span>
                        <span class="status" id="copiadoJavascript">Copiado</span>
                        <svg xmlns="http://www.w3.org/2000/svg" onClick={() => copiarTexto('javascript', 'copiadoJavascript')} fill="currentColor" class="bi bi-file-earmark-text" viewBox="0 0 16 16">
                            <path d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z"/>
                            <path d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5L9.5 0zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z"/>
                        </svg>
                    </div>
                    <textarea id="javascript" readonly="true">

                    </textarea>
                </div>
            </div>
        </main>
    )
}

export default Codigo