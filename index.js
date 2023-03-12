// Got from https://www.w3schools.com/js/tryit.asp?filename=tryjs_function_counter3

var addPlayer1 = (function () {
    var counter = 0;
    return function () {return counter += 1;}
})();

function player1Function(){
    document.getElementById("demo").innerHTML = addPlayer1();
}

var addPlayer2 = (function () {
    var counter = 0;
    return function () {return counter += 1;}
})();

function player2Function(){
    document.getElementById("demo2").innerHTML = addPlayer2();
}