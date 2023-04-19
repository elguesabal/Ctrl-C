import React, { useState, useEffect } from 'react'
import api from './api.js'
import axios from 'axios'
import url from './url.js'

function Codigo() {

    const [demonstracao, setDemonstracao] = useState('')
    const [linkVerCompleto, setLinkVerCompleto] = useState('')

    useEffect(() => {
        const buscaId = window.location.search;
        
        api.get(`http://localhost:5000/codigo${buscaId}`)
        .then(res => {
            document.getElementById('iframe').innerHTML += res.data.html
            document.getElementById('iframe').innerHTML += res.data.css
            document.getElementById('iframe').innerHTML += res.data.javascript

            document.getElementById('html').value = res.data.html
            document.getElementById('css').value = res.data.css
            document.getElementById('javascript').value = res.data.javascript

            // document.getElementById('linkTemplate').href = `/template?id=${res.data.id}`
            // const teste = `${url}/template?id=${res.data.id}`
            
            setDemonstracao(`${url}/template${buscaId}`)
            setLinkVerCompleto(`/template${buscaId}`)
        })
        .catch(erro => alert(erro))
    }, [])

    return (
        <main>
            <div class="demonstracao2">
                {/* <div id="telaCheia" onclick="telaCheia()">tela cheia</div> */}
                {/* <div id="iframe"></div> */}
                <iframe id="iframe" src={demonstracao}></iframe>
            </div>
            <div class="codigo">
                <div class="textareCodigo">
                    <span>HTML:</span>
                    <textarea id="html">
                        aaa
                    </textarea>
                </div>
                <div class="textareCodigo">
                    <span>CSS:</span>
                    <textarea id="css">
                        aaa
                    </textarea>
                </div>
                <div class="textareCodigo">
                    <span>JavaScript:</span>
                    <textarea id="javascript">
                        aaa
                    </textarea>
                </div>
            </div>
            <a href={linkVerCompleto} target="_blank">Ver completo</a>
        </main>
    )
}

export default Codigo