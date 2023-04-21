import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './index.css'
import './App.css'
import './style/demonstracao.css'
import './style/codigo.css'
import './style/pagina template.css'
import './style/introducao.css'
import './style/cabecalho.css'


import PaginaInicial from './paginas/pagina inicial'
import PaginaDeCodigos from './paginas/pagina de codigo'
import PaginaTemplate from './paginas/pagina template'
import PaginaSearch from './paginas/pagina de search'


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PaginaInicial />} />
        <Route path="/codigo" element={<PaginaDeCodigos />} />
        <Route path="/template" element={<PaginaTemplate />} />
        <Route path="/search" element={<PaginaSearch />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
