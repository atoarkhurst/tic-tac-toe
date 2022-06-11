
const gameboard = (() => {
    const gameArr = ['X', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O'];
    
    
    
    return{
        gameArr
    };
})();










const createPlayer = (name, symbol) => {

    
}


const gameControl = (() => {

})(); 



const displayController = (() => {
    const renderGameBoard = (gameArr) => {
        for(let i = 0; i < gameArr.length; i++){
            const cell = document.querySelector('#cell-' + i); 
            cell.textContent = gameArr[i];
        }
    }

    return{
        renderGameBoard
    };

})();

