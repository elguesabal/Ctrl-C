import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './index.css'
import './App.css'
import './style/demonstracao.css'
import './style/codigo.css'
import './style/pagina template.css'
import './style/introducao.css'


import PaginaInicial from './paginas/pagina inicial'
import PaginaDeCodigos from './paginas/pagina de codigo'
import PaginaTemplate from './paginas/pagina template'


function App() {

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
