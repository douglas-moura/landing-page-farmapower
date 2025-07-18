export const validarTelefone = (phoneNumber: string): boolean => {
    const regex = /^(?:(?:\+|00)?(55)\s?)?(?:(?:\(?[1-9][1-9]\)?\s?)?\d{4,5}[-\.\s]?\d{4})$/
    return regex.test(phoneNumber)
}