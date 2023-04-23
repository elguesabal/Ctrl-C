import Cabecalho from "../components/cabecalho"
import Rodape from "../components/rodape"
import Search from "../components/search"
import Load from "../components/load"

function PaginaSearch() {

    return (
        <div>
            <Load />
            <Cabecalho />
            <Search />
            <Rodape />
        </div>
    )
}

export default PaginaSearch