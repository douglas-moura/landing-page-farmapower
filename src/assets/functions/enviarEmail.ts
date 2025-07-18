import emailjs from 'emailjs-com'
import { popup } from '../components/mensagemPopup'

export const enviarEmail = async (nome: string, email: string, tel: string, emp: string, cargo: string) => {    
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