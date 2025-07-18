import './assets/css/style.css'
import emailjs from 'emailjs-com'
import { validarEmail } from './assets/functions/validarEmail'
import { validarTelefone } from './assets/functions/validarTelefone'
import { popup } from './assets/components/mensagemPopup'

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
                abrirPainelPix()
            }, 3000) // Abre o painel de pix após 1 segundo
        }
    }
})

const abrirPainelPix = (): void => {
    const painel = document.getElementById('p-lateral') as HTMLElement
    painel.classList.toggle('translate-x-full')
    const pelicula = document.getElementById('pelicula') as HTMLElement
    pelicula.classList.toggle('hidden')
}

const toggleMenu = (): void => {
    console.log('menu alterado')
    const menuContainer = document.getElementById('menu') as HTMLElement
    menuContainer.classList.toggle('-translate-x-full')
    menuContainer.classList.toggle('-left-8')
}

const enviarEmail = async (nome: string, email: string, tel: string, emp: string, cargo: string) => {    
    // Inicialize o EmailJS com seu User ID
    emailjs.init("1oStTlvolPOmGxroU"); // Substitua pelo seu User ID
    
    // Enviar o e-mail usando seu Service ID e Template ID
    try {
        const response = await emailjs.send("service_d1s9app", "template_gd58fqn", {
            template_nome: nome,
            template_email: email,
            template_tel: tel,
            template_emp: emp,
            template_cargo: cargo
        })
        popup('Inscrição realizada com sucesso!', 'sucesso')
    } catch (error) {
        popup('Erro ao enviar inscrição. Tente novamente mais tarde.', 'erro')
    }
}

console.log('Script carregado com sucesso!')