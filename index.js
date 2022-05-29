grid = [ "-", "-", "-"
        , "-", "-", "-"
        , "-", "-", "-"]
function computerGuess(){
    // if grid is full, end game
    if(grid.includes( "-")){ 
        do {
            random = Math.floor(Math.random() * 9);
        } while (grid[random] !=  "-");
        grid[random] = "O";
        console.log(grid);
    }
    checkWin();

}
function htmlEdit(){
    document.getElementById("button1").innerHTML = grid[0];
    document.getElementById("button2").innerHTML = grid[1];
    document.getElementById("button3").innerHTML = grid[2];
    document.getElementById("button4").innerHTML = grid[3];
    document.getElementById("button5").innerHTML = grid[4];
    document.getElementById("button6").innerHTML = grid[5];
    document.getElementById("button7").innerHTML = grid[6];
    document.getElementById("button8").innerHTML = grid[7];
    document.getElementById("button9").innerHTML = grid[8];
}
function inputIntoGrid(input){
    grid[input] = "X";
    console.log(grid);
    computerGuess();
    htmlEdit();
}
function checkWin(){
    if(grid[0] == grid[1] && grid[1] == grid[2] && grid[0] !=  "-"){
        alert("You Win!");
        resetButton();
    }
    else if(grid[3] == grid[4] && grid[4] == grid[5] && grid[3] !=  "-"){
        alert("You Win!");
        resetButton();
    }
    else if(grid[6] == grid[7] && grid[7] == grid[8] && grid[6] !=  "-"){
        alert("You Win!");
        resetButton();
    }
    else if(grid[0] == grid[3] && grid[3] == grid[6] && grid[0] !=  "-"){
        alert("You Win!");
        resetButton();
    }
    else if(grid[1] == grid[4] && grid[4] == grid[7] && grid[1] !=  "-"){
        alert("You Win!");
        resetButton();
    }
    else if(grid[2] == grid[5] && grid[5] == grid[8] && grid[2] !=  "-"){
        alert("You Win!");
        resetButton();
    }
    else if(grid[0] == grid[4] && grid[4] == grid[8] && grid[0] !=  "-"){
        alert("You Win!");
        resetButton();
    }
    else if(grid[2] == grid[4] && grid[4] == grid[6] && grid[2] !=  "-"){
        alert("You Win!");
        resetButton();
    }
    else if(grid.includes( "-")){
        return;
    }
    else{
        alert("You Lose!");
    }
}
// Buttons 
function button1(){
    inputIntoGrid(0)
}
function button2(){
    inputIntoGrid(1)
}
function button3(){
    inputIntoGrid(2)
}
function button4(){
    inputIntoGrid(3)
}
function button5(){
    inputIntoGrid(4)
}
function button6(){
    inputIntoGrid(5)
}
function button7(){
    inputIntoGrid(6)
}
function button8(){
    inputIntoGrid(7)
}
function button9(){
    inputIntoGrid(8)
}
function resetButton(){
    grid = [ "-", "-", "-"
            , "-", "-", "-"
            , "-", "-", "-"]
    document.getElementById("button1").innerHTML = "-"
    document.getElementById("button2").innerHTML = "-"
    document.getElementById("button3").innerHTML = "-";
    document.getElementById("button4").innerHTML = "-";
    document.getElementById("button5").innerHTML = "-";
    document.getElementById("button6").innerHTML = "-";
    document.getElementById("button7").innerHTML = "-";
    document.getElementById("button8").innerHTML = "-";
    document.getElementById("button9").innerHTML = "-";
}