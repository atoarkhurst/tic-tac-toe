
const gameBoard = (() => {
    let gameArr = ['', '', '', '', '', '', '', '', ''];

    const updateArray = (cell, mark) => {
        gameArr.splice(cell, 1, mark);
        displayController.render();
    }
    const resetArray = () => {
        for(let i= 0; i < gameArr.length; i++){
            gameArr[i] = '';
        }
        displayController.render();
    }
 return{
        gameArr, updateArray, resetArray
    };
})();


const createPlayer = (mark, name) => {

    return {mark, name};
};

const game = (() => {
    const player1 = createPlayer('X', 'Player 1');
    const player2 = createPlayer('O', 'Player 2'); 
    let turnCount = 1; 
    let array = gameBoard.gameArr;

    const playerWon = (player) => {
        turnCount = 11
        displayController.displayWinner(player);
    }


    const checkWinner = (player) => {
        
     if(array[0] === player.mark && array[1] === player.mark  && array[2] === player.mark){
        playerWon();
           } else if (array[0] === player.mark && array[3] === player.mark && array[6] === player.mark){
            playerWon(player);

           } else if (array[0] === player.mark && array[4] === player.mark  && array[8] === player.mark){
            playerWon(player);
           } else if (array[1] === player.mark && array[4] === player.mark  && array[7] === player.mark){
            playerWon(player);
           }else if (array[2] === player.mark && array[5] === player.mark  && array[8] === player.mark){
            playerWon(player);
           }else if (array[3] === player.mark && array[4] === player.mark  && array[5] === player.mark){
            playerWon(player);
           }else if (array[6] === player.mark && array[7] === player.mark  && array[8] === player.mark){
            playerWon(player);
           }else if (array[2] === player.mark && array[4] === player.mark && array[6] === player.mark){
            playerWon(player);
           }
        }
    

    const playerTurn = (cell) => {
        
        if (turnCount <= 10){
            if (turnCount % 2 == 0){
                displayController.displayTurn(player1);
            gameBoard.updateArray(cell, player2.mark);
                checkWinner(player2);
        } else{
            displayController.displayTurn(player2);
            gameBoard.updateArray(cell, player1.mark);
            
                checkWinner(player1); 
        }

    }

        turnCount++; 
        if (turnCount === 10){
            displayController.displayWinner();
        }
        

        }

        const resetGame = () => {
            gameBoard.resetArray();
            displayController.displayTurn(player1);
            turnCount = 1;
        }
    return{playerTurn, resetGame};
    
    
    })();



const displayController= (() => {

    
    //select all of the grid cells 
    const gridCells = document.querySelectorAll('.cell');
    const turnDisplay = document.querySelector('.display-text')
    const restartButton = document.querySelector('.restart-btn')

    restartButton.addEventListener('click', game.resetGame);
    

    //Set on click listeners for grid cells
   gridCells.forEach(cell => cell.addEventListener('click', cellClicked = function(){
       let cellID = cell.id; 
       //Only run mark spot if the cell is empty
       if (gameBoard.gameArr[cellID] == "" ){
        game.playerTurn(cellID);
       }
       
   }));

    

    const render = () => {
        for(let i = 0; i < gameBoard.gameArr.length; i++){
            gridCells[i].innerHTML = gameBoard.gameArr[i]; 
        }
    }

    const displayTurn = (player) =>{
        turnDisplay.innerHTML = `Player ${player.mark}'s turn`;

    }

    const displayWinner = (player) => {
        if(player){
            turnDisplay.innerHTML = `Player ${player.mark} wins!`;
        } else{
            turnDisplay.innerHTML = "It's a draw!";
        }
        

    }

  
    return{render, gridCells, displayTurn, displayWinner};

})();










