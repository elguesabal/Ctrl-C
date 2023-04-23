import api from './api.js'
import axios from 'axios'

import url from "./url"

function Rodape() {

    function enviarMensagem() {
        const data = {
            email: document.getElementById('email').value,
            mensagem: document.getElementById('mensagem').value
        }

        api.post(url + '/mensagem', data)
        .then(res => {
            const resMensagem = document.getElementById('resMensagem')
            resMensagem.style.display = res.data.display
            resMensagem.textContent = res.data.mensagem
            resMensagem.style.color = res.data.color

            setTimeout(function() {
                resMensagem.style.display = 'none'
            }, 5000)
        })
        .catch(erro => alert(erro))
    }

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
                                <li class="nav-item mb-2"><a href="https://jose-antonio.vercel.app/" target="_blank" class="nav-link p-0 text-body-secondary">Portfolio</a></li>
                                <li class="nav-item mb-2"><a href="https://www.canva.com/design/DAFTzR3VmGY/qLmFQigCW6Y8hRZ8Ly7gew/view?utm_content=DAFTzR3VmGY&utm_campaign=share_your_design&utm_medium=link&utm_source=shareyourdesignpanel" target="_blank" class="nav-link p-0 text-body-secondary">Currículo</a></li>
                                <li class="nav-item mb-2"><a href="https://www.linkedin.com/in/jos%C3%A9-antonio-b14160240/" target="_blank" class="nav-link p-0 text-body-secondary">LinkedIn</a></li>
                                <li class="nav-item mb-2"><a href="https://github.com/elguesabal" target="_blank" class="nav-link p-0 text-body-secondary">GitHub</a></li>

                            </ul>
                        </div>

                        <div class="col-md-4 offset-md-1">
                            <h1 class="h3 mb-3 fw-normal">Deixe sua mensagem!</h1>

                            <div class="form-floating">
                                <input name="email" id="email" type="email" class="form-control" placeholder="name@example.com" />
                                <label for="floatingInput">Email de contato</label>
                            </div>
                            <br />
                            <div>
                                <label class="form-label">Mensagem:</label>
                                <textarea class="form-control" name="mensagem" id="mensagem" rows="3"></textarea>
                            </div>
                            <br />
                            <p id="resMensagem"></p>
                            <button class="w-100 btn btn-lg btn-primary" onClick={() => enviarMensagem()}>Enviar</button>
                        </div>
                        
                    </div>
                </footer>
            </div>
        </footer>
    )
}

export default Rodape