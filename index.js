

let boxes = document.querySelectorAll('.box')

boxes = Array.from(boxes)

let player1 = 'X'

/*
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
*/
boxes.forEach(function(box){
    box.addEventListener('click',function(){
        if(box.innerText.trim() != '') return //if box is NOT null, return and dont do anything
        box.innerText = player1
        player1 = player1 == 'X' ? 'O' : 'X' //if current player is already X, insert O, else place an X
    })
})


//function to check for winner


//refresh page

document.getElementById('restart').addEventListener('click', function(){
    location.reload();
    return false;
})

