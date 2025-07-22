import './assets/css/style.css'
import { validarEmail } from './assets/functions/validarEmail'
import { validarTelefone } from './assets/functions/validarTelefone'
import { popup } from './assets/components/mensagemPopup'
import { pixPainel } from './assets/components/pixPainel'
import { enviarEmail } from './assets/functions/enviarEmail'
import { toggleMenu } from './assets/functions/toggleMenu'

const abrirMenu = document.getElementById('icone-abrir-menu') as HTMLElement
abrirMenu?.addEventListener('click', (): void => { toggleMenu() })

const fecharMenu = document.getElementById('icone-fechar-menu') as HTMLElement
fecharMenu?.addEventListener('click', (): void => { toggleMenu() })

const btnFormInscrever = document.getElementById('btn-form-inscrever') as HTMLButtonElement
btnFormInscrever.addEventListener('click', (event: MouseEvent): void => {
    event.preventDefault()
    const formNome: string = (document.getElementById('nome') as HTMLInputElement)?.value || ''
    const formEmail: string = (document.getElementById('email') as HTMLInputElement)?.value || ''
    const formTel: string = (document.getElementById('tel') as HTMLInputElement)?.value || ''
    const formEmp: string = (document.getElementById('emp') as HTMLInputElement)?.value || ''
    const formCargo: string = (document.getElementById('cargo') as HTMLInputElement)?.value || ''

    if (!formNome || !formEmail || !formTel || !formEmp || !formCargo) {
        popup('Por favor, preencha todos os campos do formulário.', 'erro')
        return
    } else {
        if (!validarEmail(formEmail) && !validarTelefone(formTel)) {
            popup('Por favor, preencha um e-mail ou telefone válido.', 'erro')
            return
        } else {
            enviarEmail(formNome, formEmail, formTel, formEmp, formCargo)
            setTimeout(() => {
                pixPainel()
            }, 2000) // Abre o painel de pix após 1 segundo
        }
    }
})