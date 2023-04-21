import Cabecalho from "../components/cabecalho"
import Rodape from "../components/rodape"
import Demonstracao from "../components/Demonstracao"
import Introducao from "../components/introducao"

function PaginaInicial() {

    return (
        <div>
            <Cabecalho />
            <Introducao />
            <Demonstracao />
            <Rodape />
        </div>
    )
}

export default PaginaInicial