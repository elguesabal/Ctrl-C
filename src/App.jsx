import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import React, { useState, useEffect } from 'react'

import './index.css'
import './App.css'
import './style/demonstracao.css'
import './style/codigo.css'
import './style/pagina template.css'


import PaginaInicial from './paginas/pagina inicial'
import PaginaDeCodigos from './paginas/pagina de codigo'
import PaginaTemplate from './paginas/pagina template'


// import api from './components/api.js'
// import axios from 'axios'

function App() {

  // useEffect(() => {
  //   api.get('http://localhost:5000/codigo')
  //   .then(res => {document.getElementById('teste').innerHTML = res.data.css, document.getElementById('teste').innerHTML += res.data.html})
  //   .catch(erro => alert('nao deu certo'))
  // }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PaginaInicial />} />
        <Route path="/codigo" element={<PaginaDeCodigos />} />
        <Route path="/template" element={<PaginaTemplate />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
