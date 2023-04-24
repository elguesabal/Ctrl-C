import React, { useState, useEffect } from 'react'
import api from './api.js'
import axios from 'axios'
import url from './url.js'

function Demonstracao() {

    useEffect(() => {
        api.get(`${url}/codigos`)
        .then(res => {

            res.data.forEach((codigo) => {
                document.getElementById('demonstracoes').innerHTML += 
                `
                <hr/>
                <div class="demonstracao">
                    <div class="informacoes">
                        <p>${codigo.descricao}</p>
                        <details>
                            <summary>Tecnologias usadas</summary>
                            <ol>
                                <li id="tecHtml">HTML5: ${codigo.techtml}</li>
                                <li id="tecCss">CSS3: ${codigo.teccss}</li>
                                <li id="tecJavascript">JavaScript: ${codigo.tecjavascript}</li>
                            </ol>
                        </details>
                        <div class="containerBotao">
                            <div class="botoes"><a href="/template?id=${codigo.id}" target="_blank">Ver</a></div>
                            <div class="botoes"><a href="/codigo?id=${codigo.id}">Código</a></div>
                        </div>
                    </div>
    
                    <iframe src="${url}/template?id=${codigo.id}"></iframe>
                </div>
                `

                document.getElementById('load').style.display = 'none'
            })

        })
        .catch(erro => alert(erro))
    }, [])


    return (
        <main id="demonstracoes">

        </main>
    )
}

export default Demonstracao