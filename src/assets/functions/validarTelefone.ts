export const validarTelefone = (phoneNumber: string): boolean => {
    if (!phoneNumber || typeof phoneNumber !== 'string') {
        return false
    } else if (phoneNumber.length === 0) {
        return false
    } else {
        const regex = /^(?:(?:\+|00)?(55)\s?)?(?:(?:\(?[1-9][1-9]\)?\s?)?\d{4,5}[-\.\s]?\d{4})$/
        return regex.test(phoneNumber)
    }
}