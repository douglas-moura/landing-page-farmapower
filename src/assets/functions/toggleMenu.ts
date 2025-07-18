export const toggleMenu = (): void => {
    const menuContainer = document.getElementById('menu') as HTMLElement
    menuContainer.classList.toggle('-translate-x-full')
    menuContainer.classList.toggle('-left-8')
}