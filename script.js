const Gameboard = (() => {
    let gameboard = ['', '', '', '', '', '', '', '', '']

    const render = () => {
        let boardHTML = '';
        gameboard.forEach((square, index) => {
            boardHTML += `<div class='square' id='square-${index}'>${square}</div>`
        })
        document.querySelector('#gameboard').innerHTML = boardHTML;

        const squares = document.querySelectorAll('.square');
        squares.forEach((square) => {
            square.addEventListener('click', Game.handleClick)
        })
    }

        return{
            render,
        }

})();
const createPlayer = (name, mark) => {
    return{
        name,
        mark
    }
}

const Game = (() => {
    let players =[];
    let currentPlayerIndex ;
    let gameOver;


})();


const startButton = document.querySelector('#start-btn');
startButton.addEventListener('click', () => {
    Game.start();
})