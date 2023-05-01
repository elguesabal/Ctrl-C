import React, { useState, useEffect } from 'react'
import api from './api.js'
import axios from 'axios'
import url from './url.js'

function Demonstracao() {

    const [posicao, setPosicao] = useState(0)

    useEffect(() => {

        document.getElementById('container-load-demonstracao').style.display = 'flex'
        document.getElementById('containerBotao').style.display = 'none'

        api.get(`${url}/codigos?posicao=${posicao}`)
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
            })

            document.getElementById('load').style.display = 'none'
            document.getElementById('container-load-demonstracao').style.display = 'none'
            document.getElementById('containerBotao').style.display = 'flex'
        })
        .catch(erro => alert(erro))
        
    }, [posicao])


    return (
        <div>
            <main id="demonstracoes"></main>

            <div id="containerBotao" class="containerBotao">
                <div class="botao-carregar-mais" onClick={() => setPosicao(posicao + 3)}><a>Carregar mais</a></div>
            </div>


            <div id="container-load-demonstracao">
                <div class="load-demonstracao-wrapper">
                    <div class="load-demonstracao">
                        <div class="load-demonstracao load-demonstracao--inner"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Demonstracao