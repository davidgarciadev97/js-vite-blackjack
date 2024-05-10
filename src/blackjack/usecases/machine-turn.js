import {takeCard, valueCard, createCard} from './'

/**
 * Turno de la maquina
 * @param {Number} pointsPlayer Puntos del jugador que va necesitar superar
 * @param {Array<String>} deck Deck para tomar cartas


*/
export const machineTurn = (pointsPlayer, deck) => {
    let pointsMachine = 0;
    const  btnStop= document.querySelector('.btnStop'),
    btnNew= document.querySelector('.btnNew'),
    playersCount = document.querySelectorAll('small'),
    imgCardDivMachine = document.querySelector('#machine-cartas');
    do {
        const card = takeCard(deck);
        pointsMachine = pointsMachine + valueCard(card);
        playersCount[1].innerText = pointsMachine;
        imgCardDivMachine.append(createCard(card));
        if (pointsPlayer > 21) {
        break;
        }
    } while (pointsMachine < pointsPlayer && pointsPlayer <= 21);

    setTimeout(() => {
        if (pointsPlayer === pointsMachine) {
        alert("Draw!");
        } else if (
        pointsPlayer > 21 ||
        pointsMachine === 21 ||
        (pointsMachine > pointsPlayer && pointsMachine < 21)
        ) {
        alert("Machine Win!");
        } else if (
        pointsPlayer === 21 ||
        (pointsPlayer < pointsMachine && pointsMachine > 21)
        ) {
        alert("You Win!");
        }
        btnNew.disabled = false;
        btnStop.disabled = true;
    }, 100);
};
