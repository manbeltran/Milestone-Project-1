// defining variables to append elements into HTML
const grid = document.getElementById('grid')
const result = document.getElementById('resultMessage')
const restart = document.getElementById('restart')
//turn 1 will be the starting player, in this case 'X'
let boxes;
let turn1 = true;
let currentCombo;
// all possible winning combinations in grid

let winningCombinations = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

//gameStart function will run upon loading, will generate the grid, passing empty string to signify game being loaded for the first time

gameStart ('');

// Adding Event listener to call on gamestart function every time the restart button is selected

restart.addEventListener('click', () => gameStart('restart'));

//for loop that iterates 9 times in order to create a 3x3 grid

function gameStart (type) {
    let box
    for(let i=0;i<9;i++){

        box = document.createElement('div');
        box.classList.add('box');
        grid.appendChild(box);

        box.addEventListener('click', click, {once : true}); // once a user clicks, one event will be triggered and box will not be clicked twice
    }


}

boxes = document.querySelectorAll('.box') // ties the 
// this function handles logic for what happens after a click, adds X and O and changes turn, also checks for win condition every time a user selects a square
function click(e) {
    let selectedBox = e.target;

    if (turn1) {
        selectedBox.innerText = 'X';
        turn1 = false;
    } else {
        selectedBox.innerText = 'O'
        turn1 = true;
    }

    let currentBox = selectedBox.innerText // stores current selection in this variable

    let win = checkForWinner(currentBox); // will check if win condition has been met

    if (win){
        over('win', currentBox);
    } else if (draw()){
        over('draw', currentBox)
    }
}

// function to iterate through away of winning combos, and for every array inside of it

function checkForWinner(currentBox){
    return winningCombinations.some((combo) => {
        correctCombo = combo;
        return combo.every((item) => boxes[item].innerText === currentBox)
    })
}

//game over by win function
function over (type, currentBox){

    if(type==='win') {{
        result.innerText = currentBox + " wins the game!"
    }

    } else {
        result.innerText = "Match is a draw!"
    }

}

//game draw function

document.getElementById('restart').addEventListener('click', function(){
    location.reload();
    return false;
})

//hehehehahaha