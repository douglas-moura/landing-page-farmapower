export const validarEmail = (email: string): boolean => {
    if (!email || typeof email !== 'string') {
        return false
    } else if (email.length > 254) {
        return false
    } else if (email.length == 0) {
        return false  
    } else if (email.indexOf('@') === -1 || email.indexOf('.') === -1) {
        return false
    } else {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return regex.test(email)
    }
}