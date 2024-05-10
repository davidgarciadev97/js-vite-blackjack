import _ from 'underscore';
import {newDeck, takeCard, valueCard, machineTurn, createCard} from './usecases';
(() => {
    'use strict'

    let deck = [];
    const type = ['C', 'D', 'H', 'S',],
        typeEsp = ['A', 'J', 'Q', 'K',];
    let pointsPlayer = 0, pointsMachine = 0;

    // Ref to Events
    const btnTake = document.querySelector('.btnTake'),
        btnStop= document.querySelector('.btnStop'),
        btnNew= document.querySelector('.btnNew'),
        playersCount = document.querySelectorAll('small'),
        imgCardDivPalyer = document.querySelector('#player-cartas'),
        imgCardDivMachine = document.querySelector('#machine-cartas');

    btnStop.disabled = true;
    btnTake.disabled = true;
    
    // inicia el juego
    const startGame = () => {
        deck = newDeck(type, typeEsp);
        pointsPlayer = 0,
        pointsMachine = 0;
    };

    // Events
    btnTake.addEventListener('click', () => {
        const card = takeCard(deck);
        pointsPlayer = pointsPlayer + valueCard(card);
        playersCount[0].innerText = pointsPlayer;
        imgCardDivPalyer.append(createCard(card));

        if(pointsPlayer > 21){
            btnTake.disabled = true;
            btnStop.disabled = true;
            machineTurn(pointsPlayer, deck);
        } else if(pointsPlayer === 21){
            btnTake.disabled = true;
            btnStop.disabled = true;
            machineTurn(pointsPlayer, deck);
        }
    });

    btnStop.addEventListener('click', () => {
        btnTake.disabled = true;
        btnStop.disabled = true;
        machineTurn(pointsPlayer, deck);
    });

    btnNew.addEventListener('click', () => {
        startGame();
        deck = _.shuffle(deck)
        playersCount[0].innerText = pointsPlayer;
        playersCount[1].innerText = pointsMachine;
        btnTake.disabled = false;
        btnStop.disabled = false;
        btnNew.disabled = true;
        imgCardDivPalyer.innerHTML = '';
        imgCardDivMachine.innerHTML = '';
        console.log(deck)
    });
})();
