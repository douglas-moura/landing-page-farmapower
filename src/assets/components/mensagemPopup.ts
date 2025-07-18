export const popup = (message: string, tipo: string): void => {
    const popupContainer = document.createElement('div')
    popupContainer.className = 'popup-container'
    popupContainer.innerHTML = `
        <div class="popup-message z-30">
            <p class="text-white text-extrabold">${message}</p>
        </div>
    `

    if (tipo == 'erro') popupContainer.classList.add('popup-erro')
    if (tipo == 'sucesso') popupContainer.classList.add('popup-sucesso')

    document.body.appendChild(popupContainer)

    setTimeout(() => {
        if (document.body.contains(popupContainer)) {
            document.body.removeChild(popupContainer)
        }
    }, 3000) // Remove after 5 seconds
}