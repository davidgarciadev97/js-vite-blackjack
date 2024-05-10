/**
 * Asigna el valor numerico de la carta que recibe
 * @param {String} newCard carta retornada del deck
 * @returns {Number} valor numerico de la carta
 */
export const valueCard = (newCard) => {
    const value = newCard.substring(0, newCard.length - 1);
    return (isNaN(value)) ? ((value === 'A') ? 11 : 10) : value * 1;
}