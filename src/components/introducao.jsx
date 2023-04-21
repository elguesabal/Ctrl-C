function Introducao() {

    return(
        <div class="container-fluid pb-3">
        <div class="d-grid gap-3 cabecalho-ctrlC">
            <div class="bg-body-tertiary border rounded-3">

                <div class="container my-5">
                    <div class="p-5 text-center bg-body-tertiary rounded-3 ">
                        <h1 class="text-body-emphasis">
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-code-slash" viewBox="0 0 16 16">
                                <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z" />
                            </svg>
                            Ctrl C
                        </h1>
                        <p class="mx-auto fs-5 text-muted">
                            Site feito para programadores <strike>preguiçosos</strike> que buscam códigos rápidos e de qualidade.
                        </p>
                    </div>
                </div>

            </div>
            <div class="bg-body-tertiary border rounded-3">

                <div class="container my-5">
                    <div class="row pb-0 pe-lg-0 align-items-center">
                        <div class="col-lg-7 p-3 p-lg-5 pt-lg-3">
                            <h1 class="text-body-emphasis">Fácil e rápido</h1>
                            <p class="mx-auto fs-5 text-muted">Basta com alguns clicks selecionar o template desejado Apertar Ctrl + C e seu código já estará pronto para uso.</p>
                        </div>
                        <div class="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
                            <img class="rounded-lg-3" src="/site.png" alt="" width="720" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
    )
}

export default Introducao