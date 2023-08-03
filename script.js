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


})();
const createPlayer = (name, mark) => {
    return{
        name,
        mark
    }
}


const startButton = document.querySelector('#start-btn');
startButton.addEventListener('click', () => {
    Game.start();
})