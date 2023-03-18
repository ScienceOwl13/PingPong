//FIX keycodes and stuff

document.addEventListener("keydown", function(event) {
    // WS Keys for P1
    if (event.key.toLowerCase() === "w") {
        player1AddFunction();
    } else if (event.key.toLowerCase() === "s") {
        player1SubFunction();
    }
    // Arrow Keys for P2
    if (event.key === "ArrowUp") {
        player2AddFunction();
    } else if (event.key === "ArrowDown") {
        player2SubFunction();
    }
});

var winner = false;
function p1Win() {
    if (p1counter >= 11 && p2counter <= p1counter - 2 && winner === false)  {
        setTimeout(() => {
            window.alert("Player 1 wins!");
        }, 1);

        winner = true;
    }
    else if (p1counter === 7 && p2counter === 0 && winner === false) {
        setTimeout(() => {
            window.alert("Player 1 wins!");
        }, 1);

        winner = true;
    }
}

function p2Win() {
    if (p2counter >= 11 && p1counter <= p2counter - 2 && winner === false)  {
        setTimeout(() => {
            window.alert("Player 2 wins!");
        }, 1);

        winner = true;
    }
    else if (p2counter === 7 && p1counter === 0 && winner === false) {
        setTimeout(() => {
            window.alert("Player 2 wins!");
        }, 1);

        winner = true;
    }
}

// Player 1
var p1counter = 0;

    function player1AddFunction(){
        p1counter += 1;
        document.getElementById("demo1").innerHTML = p1counter;
        
        p1Win()
        p2Win()

    }
    function player1SubFunction(){
        p1counter -= 1;
        document.getElementById("demo1").innerHTML = p1counter;

        p1Win()
        p2Win()

    }

//Player 2
var p2counter = 0;

    function player2AddFunction(){
        p2counter += 1;
        document.getElementById("demo2").innerHTML = p2counter;
        
        p1Win()
        p2Win()
}

    function player2SubFunction(){
        p2counter -= 1;
        document.getElementById("demo2").innerHTML = p2counter;

        p1Win()
        p2Win()
}

//SECRET DEV BUTTONS

document.querySelector('#dev1').addEventListener('click', () => {
    winner = false;
});

document.querySelector('#dev2').addEventListener('click', () => {
    p1counter = 0;
    p2counter = 0;
    winner = false;

    // Update the scores
    document.getElementById('demo1').innerHTML = p1counter;
    document.getElementById('demo2').innerHTML = p2counter;
})