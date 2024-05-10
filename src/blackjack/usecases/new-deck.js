/**
 * Genera un nuvo deck
 * @param {Array<String>} type Ejemplo ['C', 'D', 'H', 'S',]
 * @param {Array<String>} typeEsp Ejemplo ['A', 'J', 'Q', 'K',]
 * @returns {Array<String>} retorna un nuevo deck
 */

export const newDeck = (type, typeEsp) => { //Exportorta la funcion individual
    if(!type || type.length === 0) throw new Error('tipo de cartas obligatorio');
    if(!typeEsp || typeEsp.length === 0) throw new Error('tipo de cartas esp obligatorio');


    let deck = [];
    for(let i = 2; i <= 10; i++){
        for (let types of type){
            deck.push(i + types)
        }
    }

    for(let typesEsp of typeEsp){
        for(let types of type){
            deck.push(typesEsp + types)
        }
    } 
    return deck;
}
