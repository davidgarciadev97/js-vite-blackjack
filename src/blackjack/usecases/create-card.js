/**
 * Pinta la carta png en el html
 * @param {String} card Recibe la carta para pintar en el html
 * @returns {HTMLImageElement} retorna 'png' la carta a pintar
 */
export const createCard = (card) => {
    const imgCard = document.createElement('img');
    imgCard.src = `assets/cartas/${card}.png`;
    imgCard.classList.add('carta');
    return imgCard
}