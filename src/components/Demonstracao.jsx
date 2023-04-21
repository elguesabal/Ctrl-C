import React, { useState, useEffect } from 'react'
import api from './api.js'
import axios from 'axios'
import url from './url.js'

function Demonstracao() {
    
    // const [id, SetId] = useState('')
    // const id = 1    // AKI VAI PEGAR O VALOR DO ID Q DEVE ESTAR NO INPUT

    // const [descricao, SetDescricao] = useState('')
    // const [tecHtml, SetTecHtml] = useState('')
    // const [tecCss, SetTecCss] = useState('')
    // const [tecJavascript, SetTecJavascript] = useState('')
    
    // const [linkVerCompleto, setLinkVerCompleto] = useState('')
    // const [linkVerCodigo, setLinkVerCodigo] = useState('')
    // const [linkIframe, setLinkIframe] = useState('')

    // useEffect(() => {
    //     api.get(`${url}/codigo?id=${id}`)
    //     .then(res => {
    //         SetDescricao(res.data.descricao)
    //         SetTecHtml(res.data.techtml)
    //         SetTecCss(res.data.teccss)
    //         SetTecJavascript(res.data.tecjavascript)


    //         setLinkVerCompleto(`/template?id=${id}`)
    //         setLinkVerCodigo(`/codigo?id=${id}`)
    //         setLinkIframe(`${url}/template?id=${id}`)
    //     })
    //     .catch(erro => alert(erro))
    // }, [])


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
                        <div class="link">
                            <a href="/template?id=${codigo.id}" target="_blank">Ver completo</a>
                            <a href="/codigo?id=${codigo.id}">Ver código</a>
                        </div>
                    </div>
    
                    <iframe src="${url}/template?id=${codigo.id}"></iframe>
                </div>
                `
            })

        })
        .catch(erro => alert(erro))
    }, [])


    return (
        <main id="demonstracoes">

            {/* <hr/>

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
            </div> */}

        </main>
    )
}

export default Demonstracao