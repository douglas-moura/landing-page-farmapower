import './assets/css/style.css'

const toggleMenu = (): void => {
    console.log('menu alterado')
    const menuContainer = document.getElementById('menu') as HTMLElement
    menuContainer.classList.toggle('-translate-x-full')
    menuContainer.classList.toggle('-left-8')
}

const abrirMenu = document.getElementById('icone-abrir-menu') as HTMLElement
abrirMenu.addEventListener('click', (): void => { toggleMenu() })

const fecharMenu = document.getElementById('icone-fechar-menu') as HTMLElement
fecharMenu.addEventListener('click', (): void => { toggleMenu() })