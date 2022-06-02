grid = [ "-", "-", "-"
        , "-", "-", "-"
        , "-", "-", "-"]
win = 0
loss = 0
draw = 0

function inputIntoGrid(input){
    // check if there is already an x or o in the box
    if(grid[input] != "-"){
        alert("This box is already taken!");
    }
    else{
        grid[input] = "X";
        console.log(grid);
        computerGuess();
        htmlEdit();
        checkWin();
    }
}
function computerGuess(){
    // if grid is full, end game
    if(grid.includes( "-")){ 
        do {
            random = Math.floor(Math.random() * 9);
        } while (grid[random] !=  "-");
        grid[random] = "O";
        console.log(grid);
    }
}
function htmlEdit(){
    // cycles through grid and changes html to reflect grid
    for (i=0; i<9; i++){
        buttonValue = "button" + (i+1);
        document.getElementById(buttonValue).innerHTML = grid[i];
        // if x is in grid change box color to red
        if(grid[i] == "X"){
            document.getElementById(buttonValue).style.backgroundColor = "red";
        }
        if(grid[i] == "O"){
            document.getElementById(buttonValue).style.backgroundColor = "blue";
        }
    }
}
function winGame(){
    win++;
    document.getElementById("winLossScreen").innerHTML = "| Wins: " + win + "| Loss: " + loss + "| Draws: " + draw
    alert("You Win!");
    resetButton();
}
function lossGame(){
    loss++;
    document.getElementById("winLossScreen").innerHTML = "| Wins: " + win + "| Loss: " + loss + "| Draws: " + draw
    alert("You Lose!");
    resetButton();
}
function drawGame(){
    draw++
    document.getElementById("winLossScreen").innerHTML = "| Wins: " + win + "| Loss: " + loss + "| Draws: " + draw
    alert("Draw!");
    resetButton();
}
function checkWin(){
    // check if there is a win
    if(grid[0] == "X" && grid[1] == "X" && grid[2] == "X"){
        winGame();
    }
    if(grid[3] == "X" && grid[4] == "X" && grid[5] == "X"){
        winGame();
    }
    if(grid[6] == "X" && grid[7] == "X" && grid[8] == "X"){
        winGame();
    }
    if(grid[0] == "X" && grid[3] == "X" && grid[6] == "X"){
        winGame();
    }
    if(grid[1] == "X" && grid[4] == "X" && grid[7] == "X"){
        winGame();
    }
    if(grid[2] == "X" && grid[5] == "X" && grid[8] == "X"){
        winGame();
    }
    if(grid[0] == "X" && grid[4] == "X" && grid[8] == "X"){
        winGame();
    }
    if(grid[2] == "X" && grid[4] == "X" && grid[6] == "X"){
        winGame();
    }
    // check if there is a loss
    if(grid[0] == "O" && grid[1] == "O" && grid[2] == "O"){
        lossGame();
    }
    if(grid[3] == "O" && grid[4] == "O" && grid[5] == "O"){
        lossGame();
    }
    if(grid[6] == "O" && grid[7] == "O" && grid[8] == "O"){
        lossGame();
    }
    if(grid[0] == "O" && grid[3] == "O" && grid[6] == "O"){
        lossGame();
    }
    if(grid[1] == "O" && grid[4] == "O" && grid[7] == "O"){
        lossGame();
    }
    if(grid[2] == "O" && grid[5] == "O" && grid[8] == "O"){
        lossGame();
    }
    if(grid[0] == "O" && grid[4] == "O" && grid[8] == "O"){
        lossGame();
    }

    if(grid[2] == "O" && grid[4] == "O" && grid[6] == "O"){
        lossGame();
    } 
    // check if the board is full
    if(grid.includes( "-")){
        // do nothing
    }
    else{
        drawGame();
    }
    // change winLosseScreen to reflect win and loss
    document.getElementById("winLossScreen").innerHTML = "| Wins: " + win + "| Loss: " + loss + "| Draws: " + draw
}
function resetButton(){
    grid = [ "-", "-", "-"
            , "-", "-", "-"
            , "-", "-", "-"]
    for (i=0; i<9; i++){
        buttonValue = "button" + (i+1);
        document.getElementById(buttonValue).innerHTML = "-"
    }
    // change box colour back to green
    for (i=0; i<9; i++){
        buttonValue = "button" + (i+1);
        document.getElementById(buttonValue).style.backgroundColor = "#4CAF50";
    }
}
function counterReset(){
    console.log("reset");
    win = 0;
    loss = 0;
    document.getElementById("winLossScreen").innerHTML = "Wins: " + win + " Loss: " + loss + " Draws: " + draw
    resetButton();
}