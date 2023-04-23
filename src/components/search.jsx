import React, { useState, useEffect } from 'react'
import api from './api.js'
import axios from 'axios'
import url from "./url"

function Search() {

    useEffect(() => {
        api.get(`${url}/busca${window.location.search}`)
        .then(res => {

            res.data.forEach((codigo) => {
                document.getElementById('search').innerHTML += 
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

            document.getElementById('load').style.display = 'none'
        })
        .catch(erro => alert(erro))
    }, [])


    return (
        <main id="search">

        </main>
    )
}

export default Search