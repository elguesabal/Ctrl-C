import Cabecalho from "../components/cabecalho"
import Rodape from "../components/rodape"
import Demonstracao from "../components/Demonstracao"
import Introducao from "../components/introducao"
import Load from "../components/load"

function PaginaInicial() {

    return (
        <div>
            <Load />
            <Cabecalho />
            <Introducao />
            <Demonstracao />
            <Rodape />
        </div>
    )
}

export default PaginaInicial