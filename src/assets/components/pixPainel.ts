import qrcode from '../img/qrcode-pix_780.png'

export const pixPainel = (): void => {
    
    const painel = document.createElement('aside')
    painel.id = 'p-lateral'
    painel.className = 'painel-lateral translate-x-full'
    
    const pelicula = document.createElement('div')
    pelicula.id = 'pelicula'
    pelicula.className = 'pelicula hidden'
    
    painel.innerHTML = `
        <div>
            <div class="mb-4">
                <p class="text-xs font-extrabold">Ingresso Seminário</p>
                <p class="text-xl lg:text-3xl font-extrabold">Valor: R$ 780,00</p>
            </div>
            <div>
                <p>Escaneie o <strong>QR Code</strong> abaixo para pagar com Pix:</p>
                <img src="${qrcode}" class="p-4 my-4 border-2 w-1/2 border-black aspect-square" />
                <p>Ou se preferir, utilize a Chave Pix:<br><strong>CNPJ 42.532.164/0001-00</strong></p>
            </div>
            <ul class="mt-6 ml-6">
                <li class="pix-list"><strong>Abra o aplicativo do seu banco</strong> ou carteira digital.</li>
                <li class="pix-list">Escolha a opção <strong>Pix > Pagar com QR Code.</strong></li>
                <li class="pix-list"><strong>Aponte a câmera</strong> para o QR Code acima <strong>OU</strong> cole a chave Pix no campo indicado.</li>
                <li class="pix-list">Confira os <strong>dados de pagamento</strong> (nome do recebedor, valor e descrição).</li>
                <li class="pix-list">Finalize a transação normalmente.</li>
                <li class="pix-list"><strong>Envie o comprovante de pagamento</strong> para o WhatsApp: 11 99723-2585 informando seu nome completo.</li>
            </ul>
        </div>
    `

    document.body.appendChild(painel)
    document.body.appendChild(pelicula)

    setTimeout(() => {
        abrirPainelPix()
    }, 1000) // Abre o painel de pix após 1 segundo
}

const abrirPainelPix = (): void => {
    const painel = document.getElementById('p-lateral') as HTMLElement
    painel.classList.toggle('translate-x-full')
    const pelicula = document.getElementById('pelicula') as HTMLElement
    pelicula.classList.toggle('hidden')
}