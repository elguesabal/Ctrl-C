function Rodape() {

    return (
        <footer>
            <div class="container border-top">
                <footer class="py-4">
                    <div class="row">

                        <div class="col-6 col-md-3 m-auto">
                            <div class="d-flex justify-content-center">
                                <img src="https://media.licdn.com/dms/image/D4D03AQE0ANrEe4uO7w/profile-displayphoto-shrink_400_400/0/1665860003192?e=1687392000&v=beta&t=nCotPlWqjK34LmY9X2Mg-XX2euA5WAIG_41V1klpzRs" class="bd-placeholder-img rounded-circle" width="140" height="140" alt="Foto do autor" />
                            </div>
                            <div class="mt-1">
                                <p class="text-center m-0">José Antonio</p>
                                <p class="text-center m-0">Desenvolvedor Web Full Stack.</p>
                            </div>
                        </div>

                        <div class="col-6 col-md-2 m-auto">
                            <h5>Sobre o autor</h5>
                            <ul class="nav flex-column">
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Portfolio</a></li>
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">LinkedIn</a></li>
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">GitHub</a></li>

                            </ul>
                        </div>

                        <div class="col-md-4 offset-md-1">
                            <form>
                                <h1 class="h3 mb-3 fw-normal">Deixe sua mensagem!</h1>

                                <div class="form-floating">
                                    <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                                    <label for="floatingInput">Email de contato</label>
                                </div>
                                <br />
                                <div>
                                    <label class="form-label">Mensagem:</label>
                                    <textarea class="form-control" rows="3"></textarea>
                                </div>
                                <br />
                                <button class="w-100 btn btn-lg btn-primary" type="submit">Enviar</button>
                            </form>
                        </div>
                        
                    </div>
                </footer>
            </div>
        </footer>
    )
}

export default Rodape