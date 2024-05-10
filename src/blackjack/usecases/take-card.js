/**
 * Toma la ultima carta del deck
 * @param {Array<String>} deck Recibe el arreglo del deck
 * @returns {String} Retorna la ultima carta del deck
 */
export const takeCard = (deck) => {
    if(deck.length === 0){
        throw 'No cards'
    }
    btnStop.disabled = false;
    return deck.pop();
}
const btnStop= document.querySelector('.btnStop');
